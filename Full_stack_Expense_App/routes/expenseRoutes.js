const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

// Create a new expense
router.post('/expenses', expenseController.createExpense);

// Get all expenses
router.get('/expenses', expenseController.getAllExpenses);

// Delete an expense
router.delete('/expenses/:id', expenseController.deleteExpense);

module.exports = router;
