


Datos de conexion:

# Configuración de Base de Datos
MARIADB_HOST=localhost
MARIADB_PORT=3306
MARIADB_USER=root
MARIADB_PASSWORD=Inicio.01
MARIADB_DATABASE=olap2

Crear una tabla

En lugar de cuenta corriente poner Programa de Puntos y en lugar de movimientos de puntos, poner detalle.

Zona Seccion nodo Cuenta_sap cuenta_Gera Tipo_cuenta idprograma idmotivo puntos aniocampaña

093 09309A 9999 819013 28706 ZDRE 29 1 50 202518


CREATE TABLE public.programa_cuentas (

zona VARCHAR(3) NOT NULL,

seccion VARCHAR(10) NOT NULL,

nodo INTEGER NOT NULL,

cuenta_sap INTEGER NOT NULL,

cuenta_gera INTEGER NOT NULL,

tipo_cuenta VARCHAR(10) NOT NULL,

idprograma INTEGER NOT NULL,

idmotivo INTEGER NOT NULL,

puntos INTEGER NOT NULL,

aniocampania INTEGER NOT NULL

);


CREATE TABLE public.motivos (

idmotivo INTEGER PRIMARY KEY,

descripcion VARCHAR(100) NOT NULL

);



idmotivo Descripcion

1 Puntos por venta

2 Pago con QR

3 Venta Anticipada

4 Puntos por actividad.

5 Puntos extras x lider