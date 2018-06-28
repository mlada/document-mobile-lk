module.exports = {
  title: 'Документация front SMSFIN',
  description: "Documentation using VuePress",
  themeConfig:{
    nav: [
      { text: 'Адаптив ЛК', link: '/SMSFINANCE-LK/' },
    ],
    sidebar: [
      {
        title: 'Counter',
        collapsable: true,
        children: [
          '/counter/counter-app'
        ]
      },
      {
        title: 'API Guide',
        collapsable: true,
        children: [
          '/guide/guide',
          '/guide/api'
        ]
      },
      {
        title: 'Адаптив ЛК',
        collapsable: true,
        children: [
          '/SMSFINANCE-LK/guide',
          '/SMSFINANCE-LK/api'
        ]
      }
    ]
  }
}