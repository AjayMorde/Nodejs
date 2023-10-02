const sequelize = require('./db'); // Import your Sequelize instance from db.js
const Expense = require('./models'); // Import your Expense model

// Synchronize the models with the database (create the tables)
sequelize.sync();

// ... Your Express app configuration ...

// Example route to create an expense
app.post('/create-expense', async (req, res) => {
  try {
    const { description, amount, date } = req.body;

    // Insert the expense data into the database
    const newExpense = await Expense.create({
      description,
      amount,
      date,
    });

    res.status(201).json(newExpense);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// ... Other routes and middleware ...

// Start your Express app
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
