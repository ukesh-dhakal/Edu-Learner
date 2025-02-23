import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      moment: resolve(__dirname, 'node_modules/moment')
    }
  },
  build: {
    rollupOptions: {
      external: ['moment', 'styled-components'] // Externalize both moment and styled-components
    }
  }
});
