const Order = require('../models/Order');
const Product = require('../models/Product');

// Get sales statistics
exports.getSalesStats = async (req, res) => {
    try {
        const sales = await Order.aggregate([
            { $group: { _id: null, totalSales: { $sum: '$total' }, count: { $sum: 1 } } }
        ]);
        res.json(sales[0] || { totalSales: 0, count: 0 });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get order statistics
exports.getOrderStats = async (req, res) => {
    try {
        const stats = await Order.aggregate([
            { $group: { _id: '$status', count: { $sum: 1 } } }
        ]);
        res.json(stats);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get popular items
exports.getPopularItems = async (req, res) => {
    try {
        const popularItems = await Order.aggregate([
            { $unwind: '$items' },
            { $group: { _id: '$items.product', totalQuantity: { $sum: '$items.quantity' } } },
            { $sort: { totalQuantity: -1 } },
            { $limit: 10 },
            { $lookup: { from: 'products', localField: '_id', foreignField: '_id', as: 'product' } },
            { $unwind: '$product' }
        ]);
        res.json(popularItems);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get revenue statistics
exports.getRevenueStats = async (req, res) => {
    try {
        const revenue = await Order.aggregate([
            { $match: { status: 'completed' } },
            { $group: { _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } }, dailyRevenue: { $sum: '$total' } } },
            { $sort: { '_id': 1 } }
        ]);
        res.json(revenue);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
