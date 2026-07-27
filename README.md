# CANTEC Suite · Todo en un solo lugar

HUB maestro de Grupo Cantec: menú de 6 paneles (generador de presentaciones, kits,
hub de dashboards, recursos digitales, academy, recursos comerciales). Cada panel
se expande con animación 3D y muestra sus enlaces/descargas.

## Estructura
- `index.html` — el HUB completo (hero neón + panel de control blanco), sin dependencias externas.

## Pendiente
Varios enlaces dentro de `index.html` (buscar `href="#"`) son placeholders — falta
sustituirlos por las URLs y archivos reales (zips del generador de presentaciones,
kit de marca, recursos digitales, brochures, cotizador).

## Despliegue
Sitio estático de una sola página. Listo para publicarse igual que `hub-cantec`
(Netlify/GitHub Pages sirviendo `index.html` en la raíz).
