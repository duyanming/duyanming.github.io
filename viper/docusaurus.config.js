module.exports = {
  title: 'Viper & Anno',
  tagline: 'Viper 是.NET平台下的Anno微服务框架的一个示例项目',
  url: 'https://github.com/duyanming/Viper',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'viper', // Usually your GitHub org/user name.
  projectName: 'viper', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Viper',
      logo: {
        alt: 'Anno Logo',
        src: 'img/logo.jpg',
      },
      items: [
        {
          to: 'docs/',
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
          label: "仓库",
          position: "right",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/duyanming/Viper",
            },
            {
              label: "Gitee",
              href: "https://gitee.com/duyanming/Viper",
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
              to: 'docs/',
            },
            {
              label: '指南',
              to: 'docs/doc2/',
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
              href: 'https://github.com/duyanming/Viper/issues',
            }
          ],
        },
        {
          title: '更多',
          items: [           
            {
              label: 'GitHub',
              href: 'https://github.com/duyanming/Viper'
            },
            {
              label: '码云',
              href: 'https://gitee.com/duyanming/Viper'
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Viper.`,
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
            'https://github.com/duyanming/duyanming.github.com/tree/master/viper',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/duyanming/duyanming.github.com/tree/master/viper',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
