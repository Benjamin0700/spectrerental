import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

<<<<<<< HEAD
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
=======
export default defineConfig({
  base: "/", // Agar custom domen ishlatayotgan bo'lsangiz, to'g'ri ekanini tekshiring
  plugins: [react()],
});
>>>>>>> 8118b4d (done)
