import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    outDir: '../dist', // Moves dist outside /client
    emptyOutDir: true,
  },
  plugins: [react()],
});
