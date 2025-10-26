const express = require('express');
const router = express.Router();

// --- 1. Import SEMUA Routes Modul yang Ada ---
const masterDataRoutes = require('./masterDataRoutes');
const pendapatanRoutes = require('./pendapatanRoutes');
const kasKeluarRoutes = require('./kasKeluarRoutes');
const tabunganRoutes = require('./tabunganRoutes');
const hutangRoutes = require('./hutangRoutes');
const piutangRoutes = require('./piutangRoutes');
const laporanRoutes = require('./laporanRoutes');
const dashboardRoutes = require('./dashboardRoutes');

// --- 2. Pasang Semua Modul ke Router Utama ini ---
// Gunakan router.use() dengan awalan (prefix) yang diinginkan.
// Contoh: /masterdata, /pendapatan, dst.

router.use('/masterdata', masterDataRoutes);
router.use('/pendapatan', pendapatanRoutes);
router.use('/kaskeluar', kasKeluarRoutes);
router.use('/tabungan', tabunganRoutes);
router.use('/hutang', hutangRoutes);
router.use('/piutang', piutangRoutes);
router.use('/laporan', laporanRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;