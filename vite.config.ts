import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite' // Ensure this is here

export default defineConfig({
  plugins: [
    tailwindcss(), // Ensure this is here
  ],
})