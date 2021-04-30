module.exports = {
  title: 'Anno',
  tagline: 'Anno 是一个可监控、可追踪、简单易用、高性能的微服务引擎框架',
  url: 'https://github.com/duyanming/Anno.Core',
  baseUrl: '/anno/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'duyanming', // Usually your GitHub org/user name.
  projectName: 'Anno.Core', // Usually your repo name.
  themeConfig: {
    prism: {
      additionalLanguages: ["powershell", "csharp", "sql"],
    },
    navbar: {
      title: 'Anno',
      logo: {
        alt: 'Anno Logo',
        src: 'img/logo.jpg',
      },
      items: [
        {
          to: 'docs',
          activeBasePath: 'docs',
          label: '文档',
          position: 'left'
        },
        {
          to: 'blog',
          label: '博客',
          position: 'left'
        },
        {
          href: 'http://140.143.207.244/',
          label: '在线体验',
          position: 'right'
        },
        {
          href: 'https://github.com/duyanming/Viper',
          label: 'Viper面板',
          position: 'right'
        },
        {
          label: "仓库",
          position: "right",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/duyanming/Anno.Core",
            },
            {
              label: "Gitee",
              href: "https://gitee.com/dotnetchina/anno.core",
            },
          ],
        },
        {
          href: 'http://duyanming.github.io/',
          label: 'GitHub',
          position: 'right'
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '入门',
              to: 'docs',
            },
            {
              label: '体验',
              to: 'http://140.143.207.244/',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: '博客',
              to: 'https://www.cnblogs.com/duyanming/'
            },
            {
              label: '问题',
              href: 'https://github.com/duyanming/Anno.Core/issues',
            }
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/duyanming/Anno.Core'
            },
            {
              label: '码云',
              href: 'https://gitee.com/dotnetchina/anno.core'
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Anno.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/duyanming/duyanming.github.com/tree/main/viper',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/duyanming/duyanming.github.com/tree/main/viper',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
