# La Picada de la doble F

Proyecto de evaluación desarrollado por Felipe Morales y Francisco Inzunza.

## Estructura y Tecnologías
- React + Vite:Configuración estructurada a partir de `vite.config.js` y `package.json`.
- Tailwind CSS:Configurado y procesado a través de `tailwind.config.js` y `postcss.config.js`.

## Componentes
El código fuente de la interfaz se divide en componentes modulares ubicados dentro de la carpeta `src/components/`:
- Buscador: Implementado en el archivo `Buscador.jsx` para la búsqueda de platos.
- Carrito: Gestionado en `Carrito.jsx` para agrupar pedidos y calcular el total.
- Filtro: Definido en `Filtro.jsx` para la navegación por categorías.
- Footer: Pie de página estructurado en `Footer.jsx`.
- MenuCarta: Diseño de las tarjetas de productos en `MenuCarta.jsx`.

## Datos y Multimedia
- La base de datos local de los platos y promociones se carga desde `src/data/menu.js`.
- Las imágenes de la aplicación se alojan en el directorio `public/img/`. Esto incluye las fotografías de los productos (`agua.jpg`, `churrasco.jfif`, `completo.webp`, `empanadas-queso.jpg`, `hamburguesa-clasica.jfif`, `latas-bebida.webp`, `papas-fritas.webp`, `promo-completo.webp`, `promo-hamburguesa.jpg`) y el banner principal (`portada.avif`).
- Los íconos y logotipos base se ubican en `public/favicon.svg` y `public/icons.svg`.

## Instrucciones de Ejecución
1. Instala las dependencias del proyecto:
   `npm install`
2. Inicia el servidor de desarrollo local:
   `npm run dev`