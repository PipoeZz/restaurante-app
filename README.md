# Evaluación 1 - Sistema de Restaurante

Proyecto web desarrollado para la evaluación de desarrollo web. Consiste en la interfaz para un restaurante donde se puede ver la carta de productos, filtrar por categorías, buscar por nombre y gestionar un pedido mediante un carrito de compras interactivo.

## Integrantes
- Felipe Morales
- Francisco Inzunza

## Tecnologías usadas
- React
- Vite
- Tailwind CSS

## Funcionalidades del proyecto
1. **Carga de datos:** Usamos una promesa con `setTimeout` en el archivo `menu.js` para simular que los datos vienen desde una API externa con tiempo de espera.
2. **Catálogo dinámico:** La lista de platos se muestra automáticamente usando `.map()` a partir de los datos cargados.
3. **Filtros y buscador:**
   - Botones para filtrar según la categoría (Platos, Extras, Bebidas, etc).
   - Un buscador por texto que filtra los platos por nombre en tiempo real.
4. **Detalle de productos:** Cada tarjeta muestra directamente la descripción e ingredientes de cada plato.
5. **Carrito y pedidos:**
   - Permite agregar platos a una lista de compras.
   - Suma los precios y muestra el total en vivo.
   - Incluye botones para vaciar el carrito o confirmar el pedido (muestra una alerta simulando el envío).
6. **Diseño responsivo:** La vista se adapta tanto a pantallas de celular como de computador usando Tailwind.

## Componentes del sistema
- `App.jsx`: Componente principal que almacena los estados (menú, carrito, filtros) y maneja las funciones generales.
- `Buscador.jsx`: Input de texto para buscar productos por nombre.
- `Filtro.jsx`: Botones para cambiar la categoría seleccionada.
- `MenuCarta.jsx`: Tarjeta individual de cada plato con su información y botón de añadir.
- `Carrito.jsx`: Muestra los productos añadidos, el total acumulado y los botones de acción.

## Cómo ejecutar el proyecto
1. Clonar el repositorio o descargar los archivos.
2. Abrir la terminal en la carpeta del proyecto y ejecutar:

   npm install
   npm run dev