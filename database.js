const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: "localhost",
    database: "expenses_db",
    user: "root",
    password: "Vishal@123"
});

module.exports = connection;
