import { Contenedor } from "../../contenedor/contenedorFs";

class ProductosDaoFs extends Contenedor {
  constructor() {
    super("src/db/productos.txt");
  }
}

export default ProductosDaoFs;
