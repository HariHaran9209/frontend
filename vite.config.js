import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  preview: {
    port: 5173, // or leave it out; Render sets it via $PORT
    host: true,
    allowedHosts: ['shop-mash.onrender.com'],
  },
})
