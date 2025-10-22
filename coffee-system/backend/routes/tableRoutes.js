const express = require('express');
const router = express.Router();
const tableController = require('../controllers/tableController');

// GET /api/tables - Get all tables
router.get('/', tableController.getAllTables);

// GET /api/tables/:id - Get table by ID
router.get('/:id', tableController.getTableById);

// POST /api/tables - Create new table
router.post('/', tableController.createTable);

// PUT /api/tables/:id - Update table
router.put('/:id', tableController.updateTable);

// DELETE /api/tables/:id - Delete table
router.delete('/:id', tableController.deleteTable);

// POST /api/tables/:id/reserve - Reserve table
router.post('/:id/reserve', tableController.reserveTable);

module.exports = router;
