import { Contenedor } from "../../contenedor/contenedorFs";

class CarritosDaoFs extends Contenedor {
  constructor() {
    super("src/db/carritos.txt");
  }
}

export default CarritosDaoFs;
