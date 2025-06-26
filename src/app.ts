import express, { Application } from 'express';
import cors from 'cors';

import env from './config/env';
import clienteRoute from './routes/clienteRoute';
import proveedorRoute from './routes/proveedorRoute';
import productRoute from './routes/productRoute';
import inventarioRoute from './routes/inventarioRoute';
import ventaRoute from './routes/ventaRoute';

/*
    CONFIGURAR CONEXION A BD, RUTAS Y OTRAS COSAS DE LOS SERVICIOS
*/

const app: Application = express();

//Base de datos

// Middleware para parsear JSON
app.use(express.json());
app.use(cors());
//Rutas
app.use(`${env.API_PREFIX}/clientes`, clienteRoute);
app.use(`${env.API_PREFIX}/proveedores`, proveedorRoute);
app.use(`${env.API_PREFIX}/productos`, productRoute);
app.use(`${env.API_PREFIX}/inventarios`, inventarioRoute);
app.use(`${env.API_PREFIX}/ventas`, ventaRoute);


export default app;

