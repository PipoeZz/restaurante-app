function Carrito({ carrito, vaciar, eliminar }) {
  let total = 0;
  let totalItems =0 ;

  for (let i = 0; i < carrito.length; i++) {
    total = total + (carrito[i].precio*carrito[i].cantidad);
    totalItems = totalItems + carrito[i].cantidad;
  }

  function confirmarPedido() {
    if (carrito.length === 0) {
      alert("El carrito está vacío. Agrega productos primero.");
    } else {
      alert("¡Pedido realizado con éxito! En breve estará listo.");
      vaciar();
    }
  }

  return (
    <div className="border p-4 bg-white rounded shadow-sm sticky top-6">
      <h2 className="font-bold text-xl mb-4">Carrito ({totalItems})</h2>
      
      <ul className="mb-4">
        {carrito.map((item, index) => (
          <li key={index} className="border-b py-2 flex justify-between items-center">
            <span>{item.nombre} ({item.cantidad})</span>
            <div className="flex items-center gap-2">
              <span>${(item.precio * item.cantidad).toLocaleString('es-CL')}</span>
              <button 
                onClick={() => eliminar(item.nombre)}
                className="text-red-500 hover:text-red-700 text-xs font-bold px-1" 
                title="Eliminar producto"
              >
                x
              </button>
            </div>
          </li>
        ))}
      </ul>
      
      <h3 className="font-bold text-lg mb-4">Total: ${total.toLocaleString('es-CL')}</h3>
      
      <div className="space-y-2">
        <button 
          onClick={confirmarPedido} 
          className="bg-green-600 text-white p-2 w-full rounded hover:bg-green-700 font-bold transition"
        >
          Confirmar Pedido
        </button>

        <button 
          onClick={vaciar} 
          disabled={carrito.length === 0}
          className={`p-2 w-full rounded transition ${
            carrito.length === 0 
              ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
              : "bg-red-500 text-white hover:bg-red-600"
          }`}
        >
          Vaciar carrito
        </button>
      </div>
    </div>
  );
}

export default Carrito;