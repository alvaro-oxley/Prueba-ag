const mysql = require('mysql2/promise');
require('dotenv').config();

async function testConnection() {
    console.log('Testing connection to database...');
    console.log('Host:', process.env.MARIADB_HOST || 'localhost');
    console.log('User:', process.env.MARIADB_USER || 'root');
    console.log('Database:', process.env.MARIADB_DATABASE || 'olap2');

    try {
        // First connect without a database to create it if needed
        const connectionPre = await mysql.createConnection({
            host: process.env.MARIADB_HOST || 'localhost',
            port: process.env.MARIADB_PORT || 3306,
            user: process.env.MARIADB_USER || 'root',
            password: process.env.MARIADB_PASSWORD || ''
        });
        console.log('Connected to server. Ensuring database "olap2" exists...');
        await connectionPre.execute('CREATE DATABASE IF NOT EXISTS olap2');
        await connectionPre.end();

        const connection = await mysql.createConnection({
            host: process.env.MARIADB_HOST || 'localhost',
            port: process.env.MARIADB_PORT || 3306,
            user: process.env.MARIADB_USER || 'root',
            password: process.env.MARIADB_PASSWORD || '',
            database: process.env.MARIADB_DATABASE || 'olap2'
        });
        console.log('SUCCESS: Connection established!');

        console.log('Testing query...');
        const [rows] = await connection.execute('SELECT 1 as val');
        console.log('Query result:', rows);

        console.log('Checking tables...');
        const [tables] = await connection.execute('SHOW TABLES');
        console.log('Tables:', tables);

        await connection.end();
    } catch (error) {
        console.error('FAILURE: Database connection failed.');
        console.error('Error code:', error.code);
        console.error('Error message:', error.message);
        if (error.code === 'ECONNREFUSED') {
            console.error('Hint: Is MariaDB running? Is the port 3306 correct?');
        } else if (error.code === 'ER_ACCESS_DENIED_ERROR') {
            console.error('Hint: Check your username and password.');
        } else if (error.code === 'ER_BAD_DB_ERROR') {
            console.error('Hint: The database "olap2" does not exist. Please create it.');
        }
    }
}

testConnection();
