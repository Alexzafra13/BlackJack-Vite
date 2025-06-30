import { defineConfig } from 'vite'

export default defineConfig({
  base: '/BlackJack-Vite/',
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  },
  publicDir: 'public'
})