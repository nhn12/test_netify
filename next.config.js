module.exports = {
  trailingSlash: true,
  exportTrailingSlash: true,
  // distDir: 'MarketingPage.Emlo',
  exportPathMap: async function () {
    return {
      "/": {
        page: "/",
      },
      "/en/": {
        page: "/[lang]",
        query: { lang: "en"}
      },
      "/vi/": {
        page: "/[lang]",
        query: { lang: "vi"}
      },
    };
  },
}