import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import reactNativeWeb from "vite-plugin-react-native-web";
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  const port = process.env.PORT ? parseInt(process.env.PORT) : 5173;

  return {
    server: {
      port: port,
      host: '0.0.0.0',
    },
    preview: {
      port: port,
      host: '0.0.0.0',
      allowedHosts: true,
    },
    plugins: [
      tailwindcss(),
      reactNativeWeb(),
      react()
    ],
    resolve: {
      alias: {
        '@': import.meta.dirname,
      }
    }
  };
});