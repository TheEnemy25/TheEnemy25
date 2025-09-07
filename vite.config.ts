import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/TheEnemy25/",
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});
