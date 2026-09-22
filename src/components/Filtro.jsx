function Filtro({ cambiarFiltro }) {
  return (
    <div className="mb-4 space-x-2">
      <button onClick={() => cambiarFiltro("Todos")} className="bg-gray-300 p-2 rounded">Todos</button>
      <button onClick={() => cambiarFiltro("Platos")} className="bg-gray-300 p-2 rounded">Platos</button>
      <button onClick={() => cambiarFiltro("Extras")} className="bg-gray-300 p-2 rounded">Extras</button>
      <button onClick={() => cambiarFiltro("Bebidas")} className="bg-gray-300 p-2 rounded">Bebidas</button>
      <button onClick={() => cambiarFiltro("Promociones")} className="bg-gray-300 p-2 rounded">Promociones</button>
    </div>
  );
}

export default Filtro;