function Footer(){
    return (<footer className="mt-12 py-6 border-t border-gray-300 text-center text-gray-600 text-sm max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4 px-4">
        <div>
          <p className="font-semibold text-gray-800">🍽 La Picada de la doble F</p>
          <p className="text-xs">Atención: Lun a Sáb de 09:00 a 22:00 hrs</p>
          <p className="text-xs">Dirección: Av. Alemania 1090, Temuco, Chile</p>
        </div>

        <div>
          <p className="font-semibold text-gray-800">🛵 Envíos y Retiros</p>
          <p className="text-xs">Pedidos solo con retiro en local y entrega rápida</p>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4">
        <p className="text-xs text-gray-500">
           Desarrollado por Felipe y Francisco - 2026
        </p>
      </div>
    </footer>
  );
}
export default Footer;