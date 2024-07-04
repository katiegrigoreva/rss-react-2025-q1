import { defineConfig } from 'vite';

export default defineConfig({
  assetsInclude: ['**/*.svg', '**/*.jpg'],
  base: './',
  build: {
    outDir: './dist/',
    assetsDir: './assets/',
  },
});