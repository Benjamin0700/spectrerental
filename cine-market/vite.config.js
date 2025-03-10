import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/", // Agar custom domen ishlatayotgan bo'lsangiz, to'g'ri ekanini tekshiring
  plugins: [react()],
});
