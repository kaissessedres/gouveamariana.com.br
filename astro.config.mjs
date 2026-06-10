import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mariana.psi.br',
  integrations: [sitemap()],
});
