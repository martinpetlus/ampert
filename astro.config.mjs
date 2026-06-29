// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Update `site` to your custom domain once it is configured.
  site: "https://example.com",
  // Custom domain serves from the root, so no base path is needed.
  base: "/",
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
