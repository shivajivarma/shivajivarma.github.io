import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://shivajivarma.com',
  trailingSlash: 'always',
  integrations: [
    mdx(),
    sitemap({
      filter: (page: string) => !page.includes('/assets/includes/'),
    }),
  ],
  redirects: {},
});
