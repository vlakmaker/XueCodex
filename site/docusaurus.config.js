// docusaurus.config.js
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'XueCodex',
  tagline: 'Hands-on AI Knowledge Codex',
  favicon: 'img/favicon.ico',

  url: 'https://vlakmaker.github.io',
  baseUrl: '/XueCodex/',

  organizationName: 'vlakmaker',
  projectName: 'XueCodex',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/vlakmaker/XueCodex/tree/main/',
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-katex')],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-mll67QQo1R+Vg3FoYAZ9uTzB8S3DFAP1nQFZ/foqg8IjrCSw56mQBiOkR1C+Xni1',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig: {
    image: 'img/xuecodex-social.png',
    navbar: {
      title: 'XueCodex',
      style: 'dark',
      logo: {
        alt: 'XueCodex Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/vlakmaker/XueCodex',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'AI Fundamentals',
              to: '/docs/topics/ai-fundamentals/what-is-ai',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/vlakmaker/XueCodex',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} XueCodex. Built with 💙 & Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
