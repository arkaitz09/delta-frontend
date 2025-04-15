import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    allowedHosts: [
      '40bd-2a0c-5a86-8403-ab00-8960-e5b5-b3a0-1ef7.ngrok-free.app' // 👈 tu URL de ngrok
    ]
  },
})
