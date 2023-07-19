import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { Title } from "./assets/branding/logo";

const config: DocsThemeConfig = {
  logo: (
    <span>
      <Title />
    </span>
  ),
  project: {
    link: "https://github.com/confly-dev",
  },
  chat: {
    link: "https://confly.dev/discord",
  },
  docsRepositoryBase: "https://github.com/confly-dev/docs2/tree/main",
  footer: {
    text: "Confly © 2023",
  },
};

export default config;