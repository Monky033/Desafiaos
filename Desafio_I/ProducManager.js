class ProducManager {
  #precioBaseGanancia = 0.15;

  constructor() {
    this.productos = [];
  }

  getProducts = () => {
    return this.productos;
  };

  agregarProductos = (title, description, price, thumbnail, code, stock) => {
    const evento = {
      title,
      description,
      lugar,
      price: price + price * this.#precioBaseGanancia,
      thumbnail,
      code,
      stock,
    };

    if (this.productos.length === 0) {
      evento.id = 1;
    } else {
      evento.id = this.productos[this.productos.length - 1].id + 1;
    }

    this.productos.push(evento);
  };
}
