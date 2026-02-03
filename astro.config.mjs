// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	output: "server",

	adapter: vercel({}),

	integrations: [react()],

	vite: {
		plugins: [tailwindcss()],
	},

	server: {
    host: '0.0.0.0',
    port: 4321
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en", "id"],
    routing: {
      prefixDefaultLocale: false
    }
  },

	base: `${import.meta.env.BASE_URL ?? '/'}`,
});
