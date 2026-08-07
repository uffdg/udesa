import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // En Vercel los assets van desde la raíz "/". En GitHub Pages el repo
  // se sirve bajo /udesa/prototipo-wallet-coto/dist/ — Vercel inyecta
  // la variable VERCEL=1 en build time para distinguir los dos casos.
  base: process.env.VERCEL ? '/' : '/udesa/prototipo-wallet-coto/dist/',
  plugins: [react(), tailwindcss()],
})
