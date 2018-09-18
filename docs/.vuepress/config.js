module.exports = {
  title: "The Docs",
  base: "/docs/",
  dest: "dist/docs",
  themeConfig: {
    // sidebar: "auto",
    // displayAllHeaders: true,   // Everything shows up but it is ugly
    sidebar: [
      {
        title: 'Intro',
        collapsable: false,
        children: [
          '/'
        ]
      },
      {
        title: 'Guide',
        collapsable: false,
        children: [
          '/guide/',
          '/guide/frontend',
          '/guide/backend'
        ]
      },
      {
        title: 'More Header',
        collapsable: false,
        children: [
          '/more-header/'
        ]
      }

    ]
  }
};