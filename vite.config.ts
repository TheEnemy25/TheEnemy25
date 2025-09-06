import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const basePath = process.env.NODE_ENV === 'production' ? '/TheEnemy25/' : '/'

// https://vite.dev/config/
export default defineConfig({
  base: basePath,
  plugins: [react()],
  build: {
    outDir: "dist",
  },
})