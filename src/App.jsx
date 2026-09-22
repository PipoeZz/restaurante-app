import { useState, useEffect } from 'react';

import { pedirDatos } from './data/menu';
import Filtro from './components/Filtro';
import Buscador from './components/Buscador';
import MenuCarta from './components/MenuCarta';
import Carrito from './components/Carrito';

function App() {
  const [menu, setMenu] = useState([]);
  const [cargando, setCargando] = useState(true);
  
  const [carrito, setCarrito] = useState([]);
  const [categoria, setCategoria] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    pedirDatos().then(function (datos) {
      setMenu(datos);
      setCargando(false);
    });
  }, []);

  function agregar(plato) {
    setCarrito([...carrito, plato]);
  }

  function vaciar() {
    setCarrito([]);
  }

 
  let filtrados = menu;
  
  if (categoria !== "Todos") {
    filtrados = filtrados.filter(plato => plato.categoria === categoria);
  }

  if (busqueda !== "") {
    filtrados = filtrados.filter(plato => 
      plato.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen font-sans">
      <h1 className="text-3xl font-bold mb-6 text-center">Menú del Restaurante</h1>

      {cargando === true ? (
        <p className="text-center font-bold text-xl">Cargando base de datos...</p>
      ) : (
        <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto">
          
          <div className="md:w-2/3">
            {/* Componente 1: Buscador de texto */}
            <Buscador busqueda={busqueda} cambiarBusqueda={setBusqueda} />

            {/* Componente 2: Filtro por categorías */}
            <Filtro cambiarFiltro={setCategoria} />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Componente 3: Tarjeta de cada plato */}
              {filtrados.map((plato, indice) => (
                <MenuCarta key={indice} plato={plato} agregar={agregar} />
              ))}
            </div>
          </div>

          <div className="md:w-1/3">
            {/* Componente 4: Carrito de compras */}
            <Carrito carrito={carrito} vaciar={vaciar} />
          </div>

        </div>
      )}
    </div>
  );
}

export default App;