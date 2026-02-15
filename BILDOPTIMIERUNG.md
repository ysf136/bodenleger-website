# Bildoptimierung für Bodenleger Ferizaj Website

## Aktuelle Bilder, die komprimiert werden sollten:

### Hero-Bereich
- `images/istockphoto-1567565796-640_adpp_is.mp4` (Video)
- `images/1.jpg` (Fallback-Bild für Hero)

### Projekte
- `images/1.jpg`
- `images/4.jpg`
- `images/5.jpg`
- `images/6.jpg`

### Team
- `images/team1.jpg`

## Empfohlene Optimierungen:

### 1. Bildkomprimierung
Verwenden Sie eines dieser kostenlosen Tools:
- **TinyPNG** (https://tinypng.com/) - Einfach, bis zu 20 Bilder gleichzeitig
- **Squoosh** (https://squoosh.app/) - Google-Tool, viele Einstellungen
- **ImageOptim** (Mac) oder **FileOptimizer** (Windows) - Desktop-Apps

**Ziel:** 
- Projekt-Bilder: < 200 KB pro Bild
- Team-Foto: < 300 KB
- Video: < 5 MB (eventuell auf YouTube hosten und embedden)

### 2. Moderne Bildformate
Erstellen Sie WebP-Versionen für bessere Kompression:
```html
<picture>
  <source srcset="images/1.webp" type="image/webp">
  <img src="images/1.jpg" alt="Projekt 1" loading="lazy">
</picture>
```

### 3. Responsive Bilder
Erstellen Sie mehrere Größen:
- `1.jpg` (Original, ~1200px)
- `1-medium.jpg` (~800px)
- `1-small.jpg` (~400px)

Dann verwenden:
```html
<img 
  src="images/1.jpg" 
  srcset="images/1-small.jpg 400w, images/1-medium.jpg 800w, images/1.jpg 1200w"
  sizes="(max-width: 600px) 400px, (max-width: 1000px) 800px, 1200px"
  alt="Projekt 1" 
  loading="lazy">
```

### 4. Video-Optimierung
Das Hero-Video kann stark optimiert werden:
- Auf YouTube/Vimeo hosten (spart Hosting-Kosten)
- Oder mit FFmpeg komprimieren:
  ```bash
  ffmpeg -i original.mp4 -vcodec h264 -crf 28 -preset slow output.mp4
  ```

### 5. Bereits implementiert ✓
- ✓ `loading="lazy"` für alle Bilder
- ✓ `width` und `height` Attribute (verhindert Layout-Shift)
- ✓ Optimierte CSS (object-fit für gleichmäßige Darstellung)

## Performance-Ziele:
- **Google PageSpeed Score:** > 90
- **Ladezeit (LCP):** < 2.5s
- **Gesamtgröße:** < 2 MB (erste Ladung)

## Nächste Schritte:
1. Bilder durch TinyPNG jagen
2. WebP-Versionen erstellen
3. Video auf 2-3 MB reduzieren oder extern hosten
4. Lighthouse-Test in Chrome DevTools ausführen
