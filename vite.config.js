import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // For custom domain, use '/' as base
  // For GitHub Pages with repo name, use '/repo-name/'
  base: process.env.CUSTOM_DOMAIN ? '/' : (process.env.NODE_ENV === 'production' ? '/pathfindars-website/' : '/'),
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
