import { useState, useEffect } from 'react';
import { obtenerMenu } from './data/menu';
import PlatoCard from './components/PlatoCard';

function App() {
  const [platos, setPlatos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    obtenerMenu().then((datos) => {
      setPlatos(datos);
      setCargando(false);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Menú del Restaurante</h1>

      {cargando ? (
        <p className="text-center text-xl font-semibold text-gray-500">Cargando la carta...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {platos.map((plato) => (
            <PlatoCard key={plato.id} plato={plato} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;