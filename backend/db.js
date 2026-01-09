const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.MARIADB_HOST || 'localhost',
  port: process.env.MARIADB_PORT || 3306,
  user: process.env.MARIADB_USER || 'root',
  password: process.env.MARIADB_PASSWORD || 'Inicio.01',
  database: process.env.MARIADB_DATABASE || 'olap2',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
