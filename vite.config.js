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
  base: '/',

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
