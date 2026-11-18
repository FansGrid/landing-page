# FANS GRID

Web de presentación del proyecto FANS GRID: los móviles del público sincronizados como una gran pantalla en la grada. Sin apps, sin hardware y sin residuos.

**Sitio:** [fans-grid.es](https://fans-grid.es/)

## Estructura

- `index.html` — contenido y secciones de la landing.
- `css/style.css` — identidad visual y diseño responsive.
- `js/app.js` — menú, vídeos, carrusel de la PoC y copia del correo.
- `js/team-config.js` — nombre, rol, bio y LinkedIn del equipo.
- `assets/` — imágenes, vídeos y logotipos utilizados.

## Documentación interna

- Web estática sin frameworks: HTML, CSS y JavaScript puro. Se puede abrir `index.html` directamente desde el disco.
- El equipo se edita solo en `js/team-config.js`; las tarjetas se generan automáticamente.
- Los vídeos y el WebP animado están optimizados y se reproducen al entrar en pantalla.
- La sección PoC muestra las fotos y el vídeo del primer evento en un carrusel automático y silenciado. Los cinco archivos de `assets/` son copias exactas de los originales de `PoC/` (junto a `landing-page/`), sin recortes ni recompresión; el vídeo se reproduce siempre con `muted` y volumen 0.
- `CNAME` fija el dominio, `robots.txt` permite la indexación y `.nojekyll` evita transformaciones en GitHub Pages.
- Tras cambios visuales, conviene revisar que `assets/` no contenga archivos sin usar.

## Despliegue

La rama `main` se publica con GitHub Pages (**Settings → Pages → Deploy from a branch → main / root**). Cada push a `main` actualiza el sitio.

## Contacto

admin@fans-grid.es · Sevilla, España
