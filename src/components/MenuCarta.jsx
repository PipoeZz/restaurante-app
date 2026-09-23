function MenuCarta({ plato, agregar }) {
  return (
    <div className="bg-gray-200 text-black p-4 rounded shadow-sm flex justify-between items-center">

      <div className="flex-1 pr-4">
        <h3 className="font-bold text-lg">{plato.nombre}</h3>
        <p className="font-bold mb-2">${plato.precio}</p>
        <p className="text-sm text-gray-700 mb-3">{plato.detalle}</p>
        
       <button 
        onClick={() => agregar(plato)} 
        className="bg-black text-white px-4 py-1.5 rounded hover:bg-gray-800 text-sm font-bold"
      >
        Agregar al Carrito
      </button>
    </div>
    <img
      src={plato.imagen}
      alt={plato.nombre}
      className="w-24 h-24 object-cover rounded-md"
    />
  </div>  
  );
}

export default MenuCarta;