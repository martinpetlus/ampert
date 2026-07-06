// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // Default GitHub Pages project URL. Switch to your custom domain (and base: "/") later.
  site: "https://martinpetlus.github.io",

  base: "/amp-machines",

  i18n: {
    defaultLocale: "sk",
    locales: ["sk", "en"],
    routing: {
      // Slovak (default) lives at the root; English is served under /en.
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "sk",
        locales: {
          sk: "sk",
          en: "en",
        },
      },
    }),
  ],
});
