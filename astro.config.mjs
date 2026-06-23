// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages (project-репо bokettodev/usmanovafit) → сайт по подпути /usmanovafit/
  site: 'https://bokettodev.github.io',
  base: '/usmanovafit',
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
});
