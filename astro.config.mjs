import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
const isProduction = process.env.NODE_ENV == "production";

// https://astro.build/config
export default defineConfig({
  site: "https://movido-cloud.github.io/",
  base: isProduction ? "aadvanto-docs/" : "/", // Conditionally set the base path
  integrations: [
    starlight({
      title: "Billing System Docs",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      // Set English as the default language for this site.
      defaultLocale: 'en',
      locales: {
        // English docs in `src/content/docs/en/`
        'en': {
          label: "English",
          lang: "en",
        },
        // German docs in `src/content/docs/de/`
        'de': {
          label: "Deutsch",
          lang: "de",
        },
      },
      sidebar: [
        {
          label: "Introduction",
          autogenerate: { directory: "introduction" },
        },
        {
          label: "Dashboard Overview",
          autogenerate: { directory: "dashboard-overview" },
        },

        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
