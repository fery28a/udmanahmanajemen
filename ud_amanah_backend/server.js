// ud_amanah_backend/server.js

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Muat variabel lingkungan
dotenv.config();

// Hubungkan ke Database
connectDB();

// Inisialisasi Aplikasi
const app = express();
// PORT akan mengambil nilai dari .env (yang sudah diubah menjadi 8086) atau default ke 5000
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Memungkinkan akses dari frontend
app.use(express.json()); // Parsing body request JSON

// --- Import Routes ---
// Import hanya satu file rute terpusat yang menggabungkan semua modul
const apiRoutes = require('./routes/apiRoutes'); 

// --- Gunakan Routes ---
// Semua endpoint (masterdata, pendapatan, kaskeluar, dll.) kini diakses 
// melalui satu jalur utama: http://localhost:PORT/api
app.use('/api', apiRoutes); 

// Jalankan Server
app.listen(PORT, () => console.log(`Server berjalan di port http://localhost:${PORT}`));