import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // GitHub Pages sirve todo el repo desde la raíz de main — el build de
  // este prototipo vive en /prototipo-wallet-coto/dist/, así que los
  // assets tienen que resolver relativo a esa ruta, no a "/".
  base: '/udesa/prototipo-wallet-coto/dist/',
  plugins: [react(), tailwindcss()],
})
