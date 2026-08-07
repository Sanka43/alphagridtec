import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://alphagridtec.com',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
  redirects: {
    '/services': '/tools',
    '/work': '/tools',
    '/kim': '/tools/kim',
  },
});
