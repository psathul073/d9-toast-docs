import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "D9 Toast",
  tagline: "A lightweight, fully typed toast notification library for React",
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://psathul073.github.io",
  baseUrl: "/d9-toast-docs/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'psathul073', // Usually your GitHub org/user name.
  projectName: "d9-toast-docs", // Usually your repo name.


  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/psathul073/d9-toast-docs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo.png',
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
    ],


    // footer: {
    //   style: 'light',
    //   copyright: `Copyright © ${new Date().getFullYear()} D9 Toast 🔔`,
    // },
    presets: [
      [
        'classic',
        {
          docs: {
            sidebarPath: './sidebars.ts',
            editUrl:
              'https://github.com/psathul073/d9-toast-docs/tree/main/',
          },
          theme: {
            customCss: './src/css/custom.css',
          },
        },
      ],
    ],

    themeConfig: {
      image: 'img/logo.png',
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
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    },

  } satisfies Preset.ThemeConfig,
};

export default config;
