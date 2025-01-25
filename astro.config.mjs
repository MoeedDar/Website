// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://moeeddar.github.io',
  base: 'website',
  vite: {
    plugins: [tailwindcss()],
  },
});