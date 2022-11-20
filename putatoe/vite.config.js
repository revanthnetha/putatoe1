import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  deploy:'/putatoe1/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1600,
  },
})
