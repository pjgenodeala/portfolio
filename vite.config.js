import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/portfolio/', // If you are using GitHub Pages
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // Ensure this is correct
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)), // Add alias for @assets
    }
  }
});
