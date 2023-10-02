const Sequelize = require('sequelize');

const sequelize = new Sequelize('ExpenseApp', 'root', 'Ajay@1998', {
  host: 'localhost',
  dialect: 'mysql',
});

const Expense = sequelize.define('Expense', {
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  amount: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  date: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
});

module.exports = Expense;
