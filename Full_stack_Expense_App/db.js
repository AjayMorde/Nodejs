const Sequelize = require('sequelize');

const sequelize = new Sequelize('ExpenseApp', 'root', 'Ajay@1998', {
  host: 'localhost',
  dialect: 'mysql', // or 'mysql', 'sqlite', etc., depending on your database
});

module.exports = sequelize;
