FROM node:18 AS build

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && \
    pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

FROM node:18-alpine

WORKDIR /app

COPY --from=build /app/.next/standalone ./

# Copy public and .next/static into /public and /.next/static

COPY --from=build /app/public ./public
COPY --from=build /app/.next/static ./.next/static

CMD ["node", "server.js"]