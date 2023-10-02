const db = require('../db');

// Create a new expense
exports.createExpense = (req, res) => {
  const { description, amount } = req.body;
  const query = 'INSERT INTO expenses (description, amount) VALUES (?, ?)';
  db.run(query, [description, amount], (err) => {
    if (err) {
      console.error('Error creating expense:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(201).json({ message: 'Expense created successfully' });
    }
  });
};

// Get all expenses
exports.getAllExpenses = (req, res) => {
  const query = 'SELECT * FROM expenses';
  db.all(query, (err, rows) => {
    if (err) {
      console.error('Error fetching expenses:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(200).json(rows);
    }
  });
};

// Delete an expense
exports.deleteExpense = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM expenses WHERE id = ?';
  db.run(query, id, (err) => {
    if (err) {
      console.error('Error deleting expense:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(200).json({ message: 'Expense deleted successfully' });
    }
  });
};
