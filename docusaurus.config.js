module.exports = {
  title: "Dayup-ican",
  tagline: "The tagline of my site",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "ican", // Usually your GitHub org/user name.
  projectName: "Dayup", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Dayup",
      logo: {
        alt: "Dayup",
        src: "img/logo.svg"
      },
      links: [
        // {
        //   to: "docs/doc1",
        //   activeBasePath: "docs",
        //   label: "Docs",
        //   position: "left"
        // },
        { to: "/", label: "Blog", position: "left" }
        // {
        //   href: "https://github.com/facebook/docusaurus",
        //   label: "GitHub",
        //   position: "right"
        // }
      ]
    },
    footer: {
      style: "dark",
      links: [
        // {
        //   title: "Docs",
        //   items: [
        //     {
        //       label: "Style Guide",
        //       to: "docs/doc1"
        //     },
        //     {
        //       label: "Second Doc",
        //       to: "docs/doc2"
        //     }
        //   ]
        // },
        // {
        //   title: "Community",
        //   items: [
        //     {
        //       label: "Stack Overflow",
        //       href: "https://stackoverflow.com/questions/tagged/docusaurus"
        //     },
        //     {
        //       label: "Discord",
        //       href: "https://discordapp.com/invite/docusaurus"
        //     }
        //   ]
        // },
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              to: "/"
            }
            // {
            //   label: "GitHub",
            //   href: "https://github.com/facebook/docusaurus"
            // },
            // {
            //   label: "Twitter",
            //   href: "https://twitter.com/docusaurus"
            // }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Dayup, Inc. Built with Docusaurus.`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        // docs: {
        //   sidebarPath: require.resolve("./sidebars.js"),
        //   editUrl: "https://github.com/facebook/docusaurus/edit/master/website/"
        // },
        blog: {
          path: "./blog",
          routeBasePath: "/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
