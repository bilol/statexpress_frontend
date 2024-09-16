import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',  // Set this to the name of your GitHub repository
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'),
    },
  },

  server: {
    proxy: {
      '/api': {
        target: 'http://stat-express-backend.vercel.app',  // Backend server
        changeOrigin: true,
      },
    },
  },
  
});
