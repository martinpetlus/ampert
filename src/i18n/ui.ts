export const languages = {
  sk: "Slovensky",
  en: "English",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "sk";

export const ui = {
  sk: {
    "nav.home": "Domov",
    "site.title": "AMP Systems",
    "hero.title": "Vitajte v AMP Systems",
    "hero.subtitle":
      "Statická webová stránka postavená na Astro s podporou viacerých jazykov.",
    "lang.switch": "Jazyk",
  },
  en: {
    "nav.home": "Home",
    "site.title": "AMP Systems",
    "hero.title": "Welcome to AMP Systems",
    "hero.subtitle":
      "A static website built with Astro and multi-language support.",
    "lang.switch": "Language",
  },
} as const;

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}
