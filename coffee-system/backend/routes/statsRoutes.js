const express = require('express');
const router = express.Router();
const statsController = require('../controllers/statsController');

// GET /api/stats/sales - Get sales statistics
router.get('/sales', statsController.getSalesStats);

// GET /api/stats/orders - Get order statistics
router.get('/orders', statsController.getOrderStats);

// GET /api/stats/popular-items - Get popular items
router.get('/popular-items', statsController.getPopularItems);

// GET /api/stats/revenue - Get revenue statistics
router.get('/revenue', statsController.getRevenueStats);

module.exports = router;
