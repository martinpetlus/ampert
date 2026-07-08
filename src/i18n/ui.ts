export const languages = {
  sk: "Slovensky",
  en: "English",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "sk";

export const ui = {
  sk: {
    "nav.home": "Domov",
    "site.title": "AMPERT",
    "site.description":
      "Priemyselná automatizácia, opravy výrobných liniek, spracovanie dát a AI riešenia pre výrobné firmy.",
    "hero.title": "Vitajte v AMPERT",
    "hero.subtitle":
      "Udržiavame vaše výrobné linky v chode a meníme ich dáta na prehľadné informácie a AI riešenia.",
    "lang.switch": "Jazyk",
    "nav.contact": "Kontakt",
    "nav.services": "Služby",
    "nav.about": "O nás",
    "nav.menu": "Menu",
    "contact.title": "Kontakt",
    "contact.intro":
      "Radi vám pomôžeme. Ozvite sa nám e-mailom alebo telefonicky.",
    "contact.emailLabel": "E-mail",
    "contact.email": "kontakt@ampert.sk",
    "contact.phoneLabel": "Telefón",
    "contact.phone": "+421 915 425 052",
    "contact.copy": "Kopírovať",
    "contact.copied": "Skopírované",
    "contact.mailSubject": "Dopyt z webu AMPERT",
    "contact.mailBody": "Dobrý deň,\n\n",
    "contact.companyNameLabel": "Obchodné meno",
    "contact.companyName": "AMPERT s. r. o.",
    "contact.icoLabel": "IČO",
    "contact.ico": "00 000 000",
    "contact.dicLabel": "DIČ",
    "contact.dic": "0000000000",
    "services.home.cta": "Zobraziť všetky služby",
    "notFound.title": "Stránka sa nenašla",
    "notFound.message":
      "Ľutujeme, požadovaná stránka neexistuje alebo bola presunutá.",
    "notFound.home": "Späť na domovskú stránku",
    "footer.rights": "všetky práva vyhradené.",
  },
  en: {
    "nav.home": "Home",
    "site.title": "AMPERT",
    "site.description":
      "Industrial automation, production line repairs, data processing and AI solutions for manufacturing companies.",
    "hero.title": "Welcome to AMPERT",
    "hero.subtitle":
      "We keep your production lines running and turn their data into clear insights and AI solutions.",
    "lang.switch": "Language",
    "nav.contact": "Contact",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.menu": "Menu",
    "contact.title": "Contact",
    "contact.intro": "We'd love to hear from you — reach us by email or phone.",
    "contact.emailLabel": "Email",
    "contact.email": "contact@ampert.sk",
    "contact.phoneLabel": "Phone",
    "contact.phone": "+421 915 425 052",
    "contact.copy": "Copy",
    "contact.copied": "Copied",
    "contact.mailSubject": "Inquiry from the AMPERT website",
    "contact.mailBody": "Hello,\n\n",
    "contact.companyNameLabel": "Company name",
    "contact.companyName": "AMPERT s. r. o.",
    "contact.icoLabel": "Company ID (IČO)",
    "contact.ico": "00 000 000",
    "contact.dicLabel": "Tax ID (DIČ)",
    "contact.dic": "0000000000",
    "services.home.cta": "View all services",
    "notFound.title": "Page not found",
    "notFound.message":
      "Sorry, the page you are looking for does not exist or has been moved.",
    "notFound.home": "Back to home",
    "footer.rights": "all rights reserved.",
  },
} as const;

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}
