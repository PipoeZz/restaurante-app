function Buscador({ busqueda, cambiarBusqueda }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Buscar plato por nombre..."
        value={busqueda}
        onChange={(e) => cambiarBusqueda(e.target.value)} // cuando el usuario escribe, actualizamos el estado de busqueda
        className="w-full p-2 border rounded bg-white shadow-sm"
      />
    </div>
  );
}

export default Buscador;