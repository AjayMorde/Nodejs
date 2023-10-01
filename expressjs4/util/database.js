const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database:'node-complete',
    password:'Ajay@1998'
});

module.exports = pool.promise();
 