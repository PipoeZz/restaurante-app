function Filtro({ cambiarFiltro }) {
  return (
    <div className="flex overflow-x-auto gap-2 mb-4 pb-2">
      <button onClick={() => cambiarFiltro("Todos")} className="bg-gray-300 p-2 rounded">Todos</button>
      <button onClick={() => cambiarFiltro("Platos")} className="bg-gray-300 p-2 rounded">Platos</button>
      <button onClick={() => cambiarFiltro("Extras")} className="bg-gray-300 p-2 rounded">Extras</button>
      <button onClick={() => cambiarFiltro("Bebidas")} className="bg-gray-300 p-2 rounded">Bebidas</button>
      <button onClick={() => cambiarFiltro("Promociones")} className="bg-gray-300 p-2 rounded">Promos</button>
    </div>
  );
}

export default Filtro;