import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()], // Tailwind bu yerda emas, faqat React bo‘lishi kerak
  base: "/", // GitHub Pages yoki boshqa hostinglar uchun muhim
  build: {
    outDir: "dist",
  },
  server: {
    historyApiFallback: true, // Yo‘nalishlarni qayta yo‘naltirish
  },
});
