/* -------Servidor------- */
import express from "express";

/* Importar rutas */
import { rutaProducto } from "./src/routes/productos.js";
import { rutaCarrito } from "./src/routes/carrito.js";
const app = express();

const PUERTO = process.env.PORT || 8080;

/* --------------------- */

//Lineas para usar json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* --------------------- */

//Implementar ruta
app.use("/api/producto", rutaProducto);
app.use("/api/carrito", rutaCarrito);

//Midleware de rutas no implementadas
app.use((peticion, respuesta, next) => {
  if (!peticion.route) {
    respuesta.status(404).send({
      error: -2,
      descripcion: `Ruta ${peticion.url} no encontrada `,
    });
  } else {
    next();
  }
});

/*-------Servidor------- */
const servidor = app.listen(PUERTO, () => {
  console.log(`Servidor escuchando: ${servidor.address().port}`);
});

servidor.on("error", (error) => console.log(`Error: ${error}`));
/*--------------------- */
