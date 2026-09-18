const menuData = [
    {id: 1, nombre: "Hamburguesa Clásica", precio: 3800, categoria: "Platos", descripcion: "Hamburguesa con queso, lechuga y tómate."},
    {id: 2, nombre: "Papas Fritas", precio: 2000, categoria: "Acompañamientos", descripcion: "Porcion de papas fritas crujientes."},
    {id: 3, nombre: "Coca-Cola", precio: 1500, categoria: "Bebidas", descripcion: "Lata de 350ml"},
    {id: 4, nombre: "Churrasco Italiano", precio: 5500, categoria: "Platos", descripcion: "Churrasco con palta, tomate y mayonesa."}
  ];

  export const obtenerMenu = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(menuData);
        }, 1000); // 1 segundo de espera
    });
  };