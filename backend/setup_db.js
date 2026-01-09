const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

async function setupDatabase() {
    console.log('Starting database setup...');

    const connection = await mysql.createConnection({
        host: process.env.MARIADB_HOST || 'localhost',
        port: process.env.MARIADB_PORT || 3306,
        user: process.env.MARIADB_USER || 'root',
        password: process.env.MARIADB_PASSWORD || '',
        database: process.env.MARIADB_DATABASE || 'olap2',
        multipleStatements: true
    });

    try {
        const schemaPath = path.join(__dirname, 'schema.sql');
        const schemaSql = fs.readFileSync(schemaPath, 'utf8');

        console.log('Executing schema.sql...');
        await connection.query(schemaSql);
        console.log('SUCCESS: Database schema and data initialized!');

    } catch (error) {
        console.error('FAILURE: Database setup failed.');
        console.error(error);
    } finally {
        await connection.end();
    }
}

setupDatabase();
