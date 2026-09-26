function Filtro({ cambiarFiltro, categoriaActual }) {
  return (
    <div className="flex overflow-x-auto gap-2 mb-4 pb-2">
      <button onClick={() => cambiarFiltro("Todos")} className={categoriaActual === "Todos" ? "bg-black text-white p-2 rounded" : "bg-gray-300 p-2 rounded"}>Todos</button>
      <button onClick={() => cambiarFiltro("Platos")} className={categoriaActual === "Platos" ? "bg-black text-white p-2 rounded" : "bg-gray-300 p-2 rounded"}>Platos</button>
      <button onClick={() => cambiarFiltro("Extras")} className={categoriaActual === "Extras" ? "bg-black text-white p-2 rounded" : "bg-gray-300 p-2 rounded"}>Extras</button>
      <button onClick={() => cambiarFiltro("Bebidas")} className={categoriaActual === "Bebidas" ? "bg-black text-white p-2 rounded" : "bg-gray-300 p-2 rounded"}>Bebidas</button>
      <button onClick={() => cambiarFiltro("Promociones")} className={categoriaActual === "Promociones" ? "bg-black text-white p-2 rounded" : "bg-gray-300 p-2 rounded"}>Promos</button>
    </div>
  );
}

export default Filtro;