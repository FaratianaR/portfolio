import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: process.env.SITE_URL || 'https://digital.faratianarahary.workers.dev/',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
