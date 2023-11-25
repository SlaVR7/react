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
      exclude: [
        '.next/',
        'next-env.d.ts',
        'src/interfaces.ts',
        '.eslintrc.cjs',
        'src/vite-env.d.ts',
        'src/components/addition/ErrorBoundary.tsx',
        'src/services',
        'src/redux/store.ts',
        'pages/index.tsx',
        'pages/_app.tsx',
      ],
    },
  },
});
