import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      // 1) Si URL = /api/auth/login alors redirige vers php/auth/login
      '/api/auth/login': {
        target: 'http://php/auth/login',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/auth\/login/, ''),
      },
      // 2) Si URL = /media/ alors redirige vers php/media
      '/media': {
        target: 'http://php/media',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/media/, ''),
      },
      // 3) Si URL = /api/ alors redirige vers php/api
      '/api': {
        target: 'http://php/api',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});