import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        galery: resolve(__dirname, 'galery.html'),
        mention: resolve(__dirname, 'mention.html'),
        videos: resolve(__dirname, 'videos.html'),
      },
    },
  },
})