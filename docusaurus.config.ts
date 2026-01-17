import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "D9 Toast",
  tagline: "A lightweight, fully typed toast notification library for React",
  favicon: "img/favicon.ico",

  url: "https://psathul073.github.io",
  baseUrl: "/d9-toast-docs/",
  trailingSlash: false,

  organizationName: "psathul073",
  projectName: "d9-toast-docs",

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/psathul073/d9-toast-docs/tree/main/",

          lastVersion: "2.0",
          versions: {
            current: {
              label: "1.x",
              path: "1.x",
              banner: "unmaintained",
            },
            "2.0": {
              label: "2.0 (Latest)",
              banner: "none",
            },
          },
        },

        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },

        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],


  themeConfig: {
    image: "img/logo.webp",

    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: "D9 Toast",
      items: [
        {
          type: "doc",
          docId: "intro",
          label: "Docs",
          position: "left",
        },
        {
          type: "docsVersionDropdown",
          position: "left",
        },
        {
          href: "https://www.npmjs.com/package/d9-toast",
          label: "npm",
          position: "right",
        },
        {
          href: "https://github.com/psathul073/d9-toast",
          label: "GitHub",
          position: "right",
        },

      ],
    },

    metadata: [
      {
        name: "keywords",
        content:
          "react toast, notification library, react notifications, d9-toast, toast ui",
      },
      {
        name: "author",
        content: "Athul PS",
      },
      {
        name: "google-site-verification",
        content: "ykN_saJE8GhLOa8dhUwnhmyPKGSGnaeLp0XLtl9MDGc",
      },
      {
        name: "robots",
        content: "index, follow",
      },
    ],

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
