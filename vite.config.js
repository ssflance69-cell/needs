import { defineConfig } from 'vite';

export default defineConfig({
  preview: {
    allowedHosts: ['needs-2ri2.onrender.com', '.onrender.com', 'localhost'],
    host: '0.0.0.0',
  },
  server: {
    allowedHosts: ['needs-2ri2.onrender.com', '.onrender.com', 'localhost'],
    host: '0.0.0.0',
  },
});

