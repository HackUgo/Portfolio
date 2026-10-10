import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Two HTML entries: the main site and the NFC business-card page (/card)
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        card: fileURLToPath(new URL('./card/index.html', import.meta.url)),
      },
    },
  },
})
