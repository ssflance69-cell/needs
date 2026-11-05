import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://needs.group',
  output: 'static',
  build: {
    format: 'directory'
  },
  trailingSlash: 'always',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  vite: {
    preview: {
      allowedHosts: ['needs-2ri2.onrender.com', '.onrender.com', 'localhost'],
    },
    server: {
      allowedHosts: ['needs-2ri2.onrender.com', '.onrender.com', 'localhost'],
    },
  },
});
