import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/final-studio-ag/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
