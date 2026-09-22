export const productos = [
  { id: 1, nombre: "Hamburguesa Clásica", precio: 5000, categoria: "Platos", detalle: "Hamburguesa de vacuno con queso, lechuga y tomate." },
  { id: 2, nombre: "Papas Fritas", precio: 2500, categoria: "Extras", detalle: "Porción de 200g de papas crujientes." },
  { id: 3, nombre: "Bebida", precio: 1500, categoria: "Bebidas", detalle: "Lata de 350ml." },
  { id: 4, nombre: "Churrasco", precio: 6000, categoria: "Platos", detalle: "Churrasco con palta, tomate y mayo." }
];

export function pedirDatos() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(productos);
    }, 1000);
  });
}