-- Create tables if they don't exist
-- Removing 'public.' prefix to ensure compatibility with standard MariaDB 'olap2' database

CREATE TABLE IF NOT EXISTS motivos (
    idmotivo INTEGER PRIMARY KEY,
    descripcion VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS programa_cuentas (
    zona VARCHAR(3) NOT NULL,
    seccion VARCHAR(10) NOT NULL,
    nodo INTEGER NOT NULL,
    cuenta_sap INTEGER NOT NULL,
    cuenta_gera INTEGER NOT NULL,
    tipo_cuenta VARCHAR(10) NOT NULL,
    idprograma INTEGER NOT NULL,
    idmotivo INTEGER NOT NULL,
    puntos INTEGER NOT NULL,
    aniocampania INTEGER NOT NULL,
    FOREIGN KEY (idmotivo) REFERENCES motivos(idmotivo)
);

-- Turn off safe updates to allow delete without where key if needed for cleanup
-- SET SQL_SAFE_UPDATES = 0;
-- DELETE FROM programa_cuentas;
-- DELETE FROM motivos;

-- Insert Data for Motivos
INSERT IGNORE INTO motivos (idmotivo, descripcion) VALUES 
(1, 'Puntos por venta'),
(2, 'Pago con QR'),
(3, 'Venta Anticipada'),
(4, 'Puntos por actividad'),
(5, 'Puntos extras x lider'),
(7, 'Devolución de mercadería'),
(9, 'Ajuste administrativo');

-- Insert Data for Programa Cuentas (Sample Data)
-- Ensuring NO negative numbers as requested

INSERT INTO programa_cuentas (zona, seccion, nodo, cuenta_sap, cuenta_gera, tipo_cuenta, idprograma, idmotivo, puntos, aniocampania) VALUES
('093', '09309A', 9999, 819013, 28706, 'ZDRE', 29, 1, 20, 202518),
('093', '09309A', 9999, 819013, 28706, 'ZDRE', 29, 2, 15, 202518),
('093', '09309A', 9999, 819013, 28706, 'ZDRE', 29, 5, 10, 202518),
('093', '09309A', 9999, 819013, 28706, 'ZDRE', 29, 7, 8, 202518), -- Changed from -8 to 8
('093', '09309A', 9999, 819013, 28706, 'ZDRE', 29, 9, 5, 202518); -- Changed from -5 to 5
