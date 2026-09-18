function PlatoCard({ plato }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-xl font-bold">{plato.nombre}</h3>
      <p className="text-gray-600 text-sm mt-1">{plato.descripcion}</p>
      <p className="text-green-600 font-bold mt-2">${plato.precio}</p>
      <button className="bg-blue-500 text-white px-4 py-2 mt-3 rounded w-full hover:bg-blue-600 transition">
        Agregar al Carrito
      </button>
    </div>
  );
}

export default PlatoCard;