# FANS GRID

Web de presentación del proyecto FANS GRID: los móviles del público sincronizados como una gran pantalla en la grada. Sin apps, sin hardware y sin residuos.

**Sitio:** [fans-grid.es](https://fans-grid.es/)

## Estructura

- `index.html` — contenido y secciones de la landing.
- `css/style.css` — identidad visual y diseño responsive.
- `js/app.js` — menú, vídeos y copia del correo.
- `js/team-config.js` — nombre, rol, bio y LinkedIn del equipo.
- `assets/` — imágenes, vídeos y logotipos utilizados.

## Documentación interna

- Web estática sin frameworks: HTML, CSS y JavaScript puro. Se puede abrir `index.html` directamente desde el disco.
- El equipo se edita solo en `js/team-config.js`; las tarjetas se generan automáticamente.
- Los vídeos y el WebP animado están optimizados y se reproducen al entrar en pantalla.
- `CNAME` fija el dominio, `robots.txt` permite la indexación y `.nojekyll` evita transformaciones en GitHub Pages.
- Tras cambios visuales, conviene revisar que `assets/` no contenga archivos sin usar.

## Despliegue

La rama `main` se publica con GitHub Pages (**Settings → Pages → Deploy from a branch → main / root**). Cada push a `main` actualiza el sitio.

## Contacto

admin@fans-grid.es · Sevilla, España
