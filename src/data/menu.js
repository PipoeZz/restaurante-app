export const productos = [
  { id: 1, nombre: "Hamburguesa Clásica", precio: 5000, categoria: "Platos", detalle: "Hamburguesa de vacuno con queso, lechuga y tomate." },
  { id: 2, nombre: "Papas Fritas", precio: 2500, categoria: "Extras", detalle: "Porción de 200g de papas crujientes." },
  { id: 3, nombre: "Bebida", precio: 1500, categoria: "Bebidas", detalle: "Lata de 350ml." },
  { id: 4, nombre: "Churrasco", precio: 6000, categoria: "Platos", detalle: "Churrasco con palta, tomate y mayo." },
  { id: 5, nombre: "Completo Italiano", precio: 3500, categoria: "Platos", detalle: "Completo italiano con palta, tomate y mayo." },
  { id: 6, nombre: "Promo Completo", precio: 5000, categoria: "Promociones", detalle: "Promoción especial con completo italiano, bebida y papas fritas." },
  { id: 7, nombre: "Promo Hamburguesa", precio: 7000, categoria: "Promociones", detalle: "Promoción especial con hamburguesa clásica, bebida y papas fritas." },
  { id: 8, nombre: "Empanadas", precio: 3000, categoria: "Extras", detalle: "Dos empanadas de carne o queso." },
  {id: 9, nombre: "Agua Mineral", precio: 1000, categoria: "Bebidas", detalle: "Botella de 500ml." },
];

export function pedirDatos() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(productos);
    }, 1000);
  });
}