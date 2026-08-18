import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    server: {
      port: 5173,
      host: '0.0.0.0',
    },
    plugins: [
      tailwindcss(),
      react()
    ],
    resolve: {
      alias: {
        '@': import.meta.dirname,
      }
    }
  };
});