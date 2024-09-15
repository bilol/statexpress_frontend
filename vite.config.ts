import path from "path";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./public"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      // Proxy all API requests directly to the backend without needing a prefix
      '/api': {
        target: 'http://localhost:3000/',  // Your backend server running on port 3001
        changeOrigin: true,
        base: '/statexpress_frontend/',
      },
    },
  },
  
});
