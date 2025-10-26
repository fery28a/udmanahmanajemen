import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Catatan: Konfigurasi 'server.proxy' UNTUK LOKAL telah dihapus di sini.
  // Di server Ubuntu, Nginx akan berfungsi sebagai reverse proxy untuk jalur /api.
  
  // Jika Anda ingin menggunakan path base selain root (misalnya, jika aplikasi React
  // diletakkan di subfolder), Anda bisa menambahkan:
  // base: '/nama_subfolder/',
})