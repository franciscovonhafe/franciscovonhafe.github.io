// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE ADDRESS: if a custom domain is added later, change `site` here
// and the Sitemap line in public/robots.txt.
export default defineConfig({
  site: 'https://franciscovonhafe.github.io',
  outDir: './docs',            // GitHub Pages publishes the /docs folder
  build: { assets: 'assets' }, // avoid underscore folders on GitHub Pages
  trailingSlash: 'ignore',
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
});
