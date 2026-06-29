// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Default GitHub Pages project URL. Switch to your custom domain (and base: "/") later.
  site: "https://martinpetlus.github.io",
  base: "/amp-systems",
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
});
