import envConfig from "../env.config";

const menus = {
  en: [{
    link: '/',
    title: 'Home'
  }, {
    link: '/#about-us',
    title: 'About Us'
  }, {
    link: '/#home-products-services',
    title: 'Products & Services',
    sub: [{
      link: '/#home-products-services',
      title: 'Products & Services',
    },{
      link: envConfig.ComplianceScreening,
      title: 'Compliance Screening',
      root: true,
      target: "_blank",
      sub: [{
        link: envConfig.MalaysiasFramework,
        title: 'Malaysia’s new AML/CFT Framework',
        root: true,
        target: "_blank"
      }]
    },{
      link: envConfig.LiveRates,
      title: 'Live Rates',
      root: true,
      target: "_blank"
    }]
  }, {
    link: '/#contact-us',
    title: 'Contact Us'
  }],
  vi: [{
    link: '/',
    title: 'Home'
  }, {
    link: '/#about-us',
    title: 'About Us'
  }, {
    link: '/#home-products-services',
    title: 'Products & Services',
  }, {
    link: '/#contact-us',
    title: 'Contact Us'
  }],
  zh: [{
    link: '/',
    title: 'Home'
  }, {
    link: '/#about-us',
    title: 'About Us'
  }, {
    link: '/#home-products-services',
    title: 'Products & Services',
  }, {
    link: '/#contact-us',
    title: 'Contact Us'
  }]
}

export { menus }