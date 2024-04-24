// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        chosen_item: resolve(__dirname, 'src/pages/chosen_item/index.html'),
        korzinka: resolve(__dirname, 'src/pages/korzinka/index.html'),
        loved: resolve(__dirname, 'src/pages/loved/index.html')
      },
    },
  },
})