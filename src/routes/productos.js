/* -------Ruta de productos------- */
import express from "express";
// import { Contenedor } from "../contenedor/contenedorFs.js";
import Contenedor from "../daos/productos/productosDaoFs";
const rutaProducto = express.Router();

/* --------------------- */

const productos = new Contenedor();

const privilegio = (peticion, respuesta, next) => {
  const administrador = peticion.headers.administrador;
  if (administrador === "true") {
    next();
  } else {
    respuesta.status(401).send({
      error: -1,
      descripcion: `Ruta ${peticion.url} no autorizada `,
    });
  }
};

/*------- EndPoints ------- */
rutaProducto.get("/", async (peticion, respuesta) => {
  const listaProductos = await productos.getAll();
  respuesta.json(listaProductos);
});

rutaProducto.get("/:id", async (peticion, respuesta) => {
  const idProducto = parseInt(peticion.params.id);
  const listaId = await productos.getById(idProducto);
  respuesta.json(listaId);
});

rutaProducto.post("/", privilegio, (peticion, respuesta) => {});

rutaProducto.put("/:id", privilegio, async (peticion, respuesta) => {
  const idProducto = parseInt(peticion.params.id);
  const producto = peticion.body;
  await productos.update(idProducto, producto);
  respuesta.json(producto);
});

rutaProducto.delete("/:id", privilegio, async (peticion, respuesta) => {
  const idProducto = parseInt(peticion.params.id);
  const deleteListId = await productos.deleteById(idProducto);
  respuesta.json(deleteListId);
});

export { rutaProducto };
