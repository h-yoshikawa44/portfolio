// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "h-yoshikawa44's Portfolio",
  tagline: 'よしのポートフォリオ',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://h-yoshikawa44.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  projectName: 'portfolio', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/h-yoshikawa44/portfolio/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
        gtag: {
          trackingID: 'G-Z18TXK5BKC',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/ogp.png',
      navbar: {
        title: "h-yoshikawa44's Portfolio",
        logo: {
          alt: '獅子のロゴアイコン',
          src: 'img/lion-logo.svg',
          srcDark: 'img/lion-logo_dark.svg',
        },
        items: [
          { to: '/skillandcareer', label: 'Skill & Career', position: 'left' },
          { to: '/myproducts', label: 'MyProducts', position: 'left' },
          // { to: 'tilTop', label: 'TIL', position: 'left' },
          {
            href: 'https://changeofpace.site',
            label: 'Blog',
            position: 'left',
          },
          {
            href: 'https://github.com/h-yoshikawa44/portfolio',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Site',
            items: [
              {
                label: 'Material Source',
                to: 'source',
              },
              {
                label: 'Privacy Policy',
                to: 'policy',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Blog',
                href: 'https://changeofpace.site',
              },
              {
                label: 'Wantedly',
                href: 'https://www.wantedly.com/id/h_yoshikawa44',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/h-yoshikawa44',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/yoshi44_lion',
              },
              {
                label: 'Bluesky',
                href: 'https://bsky.app/profile/h-yoshikawa44.bsky.social',
              },
              {
                label: 'Qiita',
                href: 'https://qiita.com/h-yoshikawa44',
              },
              {
                label: 'Zenn',
                href: 'https://zenn.dev/h_yoshikawa0724',
              },
              {
                label: 'Crieit',
                href: 'https://crieit.net/users/h-yoshikawa0724',
              },
              {
                label: 'note',
                href: 'https://note.com/h_yoshikawa44',
              },
              {
                html: `
                  <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                    <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" />
                  </a>
                `,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Hitomi Yoshikawa Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  customFields: {
    url: {
      blog: 'https://changeofpace.site',
      wantedly: 'https://www.wantedly.com/id/h_yoshikawa44',
      github: 'https://github.com/h-yoshikawa44',
      twitter: 'https://twitter.com/yoshi44_lion',
      bluesky: 'https://bsky.app/profile/h-yoshikawa44.bsky.social',
      qiita: 'https://qiita.com/h-yoshikawa44',
      zenn: 'https://zenn.dev/h_yoshikawa0724',
      crieit: 'https://crieit.net/users/h-yoshikawa0724',
      credly: 'https://www.credly.com/users/h-yoshikawa44',
      note: 'https://note.com/h_yoshikawa44',
    },
  },
};
