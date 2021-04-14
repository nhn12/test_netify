import { globalSetting } from "./site";

const fixLocaleRouter = (locale) => {

  const _locales = [];
  globalSetting.languages.map(l => {
    _locales.push(l.slug);
  });

  return _locales.indexOf(locale) === -1 ? 'en' : locale;

}

export { fixLocaleRouter };