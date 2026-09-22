function Carrito({ carrito, vaciar }) {
  let total = 0;
  for (let i = 0; i < carrito.length; i++) {
    total = total + carrito[i].precio;
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
      <h2 className="font-bold text-xl mb-4">Carrito ({carrito.length})</h2>
      
      <ul className="mb-4">
        {carrito.map((item, index) => (
          <li key={index} className="border-b py-2 flex justify-between">
            <span>{item.nombre}</span>
            <span>${item.precio}</span>
          </li>
        ))}
      </ul>
      
      <h3 className="font-bold text-lg mb-4">Total: ${total}</h3>
      
      <div className="space-y-2">
        <button 
          onClick={confirmarPedido} 
          className="bg-green-600 text-white p-2 w-full rounded hover:bg-green-700 font-bold transition"
        >
          Confirmar Pedido
        </button>

        <button 
          onClick={vaciar} 
          className="bg-red-500 text-white p-2 w-full rounded hover:bg-red-600 transition"
        >
          Vaciar carrito
        </button>
      </div>
    </div>
  );
}

export default Carrito;