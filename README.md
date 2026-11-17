# FansGrid · Landing de presentación

> **"Cada móvil del público es un píxel."**

Web de presentación del proyecto FansGrid: una propuesta tecnológica que convierte los móviles del público en una gran pantalla sincronizada en las gradas. No es una web de venta: explica la idea, muestra el prototipo y comparte su potencial.

---

## Qué cuenta la web

1. **Hero** — Render nocturno, eslogan y propuesta de valor con las tres ideas clave (QR, sin hardware y sincronización).
2. **IDEA** — Cuatro pasos con capturas reales del prototipo: entrar al show, elegir la zona (Preferencia, Fondo, Gol Norte o Gol Sur), preparar el brillo y esperar la señal sincronizada.
3. **FUNCIONAMIENTO** — Dos miradas: la cuenta atrás de colores en el móvil del espectador y el cuadro de mandos que dirige toda la grada, cada una con sus puntos explicativos, sin emoticonos ni detalles técnicos.
4. **VENTAJAS** — Comparativa cualitativa frente a mosaicos de cartulina y pulseras LED desechables, sin cifras ni marcas.
5. **CONTROL y MONITORIZACIÓN** — Imagen animada en WebP (alternativa ligera al GIF) con la proporción original del vídeo y reproducción al entrar en pantalla.
6. **MODELADO** — Vídeo recortado del render de Blender y mapa del recinto, sin pies de foto ni cuadros de cifras.
7. **EQUIPO** — Tarjetas generadas desde `js/team-config.js`.
8. **CONTACTO** — Email, ciudad y un mensaje sencillo. Sin formularios B2B.

---

## Material visual

Los recursos están en `assets/` y proceden del proyecto técnico (`../demoWeb_view/`):

- `hero.webp`, `clip-blender.mp4`: render nocturno y recorte animado del estadio.
- `cartuja-map.webp`: vista cenital del recinto usado en el prototipo.
- `icon.svg`, `fansgrid-mark.png`, `fansgrid-wordmark.png`: icono y logotipos.
- `paso-1-bienvenida.webp` a `paso-4-espera.webp`: capturas reales del recorrido del espectador, optimizadas desde `../pasos_idea/`.
- `clip-cuenta-atras.mp4`, `poster-cuenta-atras.webp`: cuenta atrás de colores, recortada y optimizada desde `../cuenta_atras_colores_movil.mp4`.
- `consola.webp`, `poster-consola-anim.webp`: animación ligera del cuadro de mandos y su fotograma inicial.

---

## Editar el equipo

No hay que tocar el HTML. Abre `js/team-config.js` y modifica cada objeto:

```javascript
window.FANSGRID_TEAM = [
  {
    id: "alvaro",
    name: "Álvaro",
    role: "Dirección del proyecto",
    bio: "Breve descripción.",
    linkedin: "https://www.linkedin.com/in/tu-perfil",
    avatar: "" // Opcional: "assets/alvaro.jpg". Vacío = iniciales.
  }
];
```

---

## Despliegue en GitHub Pages

El repositorio incluye `CNAME` con el dominio `fans-grid.es`.

1. Sube los cambios a la rama `main`.
2. En GitHub: **Settings → Pages → Deploy from a branch** → `main` / `/ (root)`.
3. En **Custom domain**, confirma `fans-grid.es` y activa **Enforce HTTPS**.

---

## Contacto

- **Email:** admin@fans-grid.es
- **Ciudad:** Sevilla, España
- **Web:** https://fans-grid.es/
