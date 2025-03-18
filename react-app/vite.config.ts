/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.jpg', '**/*.gif'],
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/test/setup.ts',
    coverage: {
      include: ['**/*.tsx'],
      exclude: ['**/node_modules/**', '**/*.test.tsx', '**/*.spec.tsx', 'src/__tests__/setup.ts'],
    },
  },
});
