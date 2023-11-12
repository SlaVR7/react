import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      enabled: true,
      provider: 'v8',
      all: true,
    },
  },
});
