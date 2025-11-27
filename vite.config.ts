import { defineConfig, type ConfigEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig((env: ConfigEnv) => ({
  plugins: [react()],
  // Use root in dev; GitHub Pages subpath in production builds
  base: env.command === 'build' ? '/My-Portfolio/' : '/',
}));
