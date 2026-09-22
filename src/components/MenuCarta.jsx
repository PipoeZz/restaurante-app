function MenuCarta({ plato, agregar }) {
  return (
    <div className="border p-4 bg-white rounded shadow-sm flex flex-col justify-between">
      <div>
        <h3 className="font-bold text-lg">{plato.nombre}</h3>
        <p className="text-green-600 font-bold mb-2">${plato.precio}</p>
        
        <p className="text-sm text-gray-600 mb-4">{plato.detalle}</p>
      </div>

      <button 
        onClick={() => agregar(plato)} 
        className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600 font-bold mt-auto"
      >
        Agregar al Carrito
      </button>
    </div>
  );
}

export default MenuCarta;