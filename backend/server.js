const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Endpoint to get points details
app.get('/api/puntos', async (req, res) => {
    try {
        // Joining programa_cuentas with motivos to get the description
        const [rows] = await pool.query(`
            SELECT 
                pc.idmotivo, 
                m.descripcion, 
                pc.puntos 
            FROM programa_cuentas pc
            JOIN motivos m ON pc.idmotivo = m.idmotivo
        `);

        // Calculate total
        const total = rows.reduce((acc, curr) => acc + curr.puntos, 0);

        res.json({
            detalles: rows,
            total: total
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
