import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/", // <--- Bu GitHub Pages yoki boshqa hostinglar uchun muhim
  build: {
    outDir: "dist",
  },
  server: {
    historyApiFallback: true, // <--- Yo‘nalishlarni qayta yo‘naltirish
  },
});
