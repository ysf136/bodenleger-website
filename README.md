# Bodenleger Landingpage - Professional Edition

Professionelle Landingpage für einen Bodenlegerbetrieb mit modernen Features, Interaktionen und Performance-Optimierungen.

## 🚀 Features

### Core Features
- ✅ Responsive Design (Mobile, Tablet, Desktop)
- ✅ Hero-Section mit Video-Hintergrund
- ✅ Alle wichtigen Sektionen (Leistungen, Preise, Referenzen, Über uns, Kontakt)
- ✅ WhatsApp-Widget für schnellen Kontakt
- ✅ FAQ-Seite
- ✅ Blog-Sektion für SEO

### Professional Upgrades ⚡

#### 1. Interaktiver Kostenrechner
- Live-Berechnung der Bodenverlegungskosten
- Auswahl verschiedener Bodenarten
- Zusatzleistungen (Altbelag, Spachteln, Sockelleisten)
- Animierte Preisanzeige

#### 2. Vorher/Nachher-Bildvergleich
- Interaktiver Slider zum Wischen
- Touch-Support für Mobile
- Zeigt Transformation der Arbeit

#### 3. Animierte Statistiken
- Zahlen zählen beim Scroll hoch
- 20+ Jahre Erfahrung
- 150+ zufriedene Kunden
- 500+ verlegte Projekte
- 4.9/5 Google-Bewertung

#### 4. Formular-Backend Integration
- Formspree-Integration vorbereitet
- E-Mail-Benachrichtigungen bei Anfragen
- Frontend-Validierung
- Async-Submit mit Feedback

#### 5. SEO-Optimierung
- robots.txt für Crawler-Management
- sitemap.xml für Google
- Strukturierte Daten (JSON-LD)
- Meta-Tags für Social Media

#### 6. Performance-Optimierungen
- Preload für kritische Ressourcen
- Deferred JavaScript
- PWA Manifest
- Lazy Loading für Bilder
- CSS-Animationen optimiert

#### 7. UX-Verbesserungen
- Smooth Scrolling zu Ankern
- Micro-Animationen bei Hover
- Fade-In beim Scroll
- Responsive Touch-Gestures

## 📁 Struktur

```
├── index.html              # Hauptseite
├── faq.html               # FAQ-Seite
├── impressum.html         # Impressum
├── datenschutz.html       # Datenschutzerklärung
├── style.css              # Alle Styles + Animationen
├── script.js              # Interaktionen + Features
├── robots.txt             # SEO: Crawler-Steuerung
├── sitemap.xml            # SEO: Sitemap für Google
├── manifest.json          # PWA-Manifest
├── README.md              # Diese Datei
├── UPGRADE-ANLEITUNG.md   # Detaillierte Feature-Anleitung
├── blog/                  # Blog-Artikel für SEO
│   ├── parkett-verlegen-braunschweig.html
│   ├── vinyl-vs-laminat.html
│   └── haeufigste-fehler-bodenauswahl.html
└── images/                # Projekt- und Portraitfotos
    ├── ferizaj-logo.svg
    ├── team1.jpg
    └── [weitere Bilder]
```

## 🚀 Schnellstart

### 1. Lokal testen
```bash
python -m http.server 8000
```
Öffne: http://localhost:8000

### 2. In VS Code mit Live Server
- Rechtsklick auf `index.html`
- "Open with Live Server"

### 3. Deployment auf GitHub Pages
```bash
git add .
git commit -m "Update website"
git push
```
- Gehe zu GitHub Repository → Settings → Pages
- Source: "Deploy from branch" → master
- Deine URL: `https://ysf136.github.io/bodenleger-website/`

## ⚙️ Konfiguration

### Formspree einrichten (Wichtig!)
1. Gehe zu [formspree.io](https://formspree.io/)
2. Erstelle Account + neues Formular
3. Kopiere Form-ID
4. In `index.html` Zeile ~512 ersetzen:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```

### Eigene Domain verbinden
1. DNS-Einträge bei Domain-Anbieter:
   - A-Record: `185.199.108.153`
   - A-Record: `185.199.109.153`
   - A-Record: `185.199.110.153`
   - A-Record: `185.199.111.153`
2. GitHub Settings → Pages → Custom domain: `bodenleger-ferizaj.de`

### Google Search Console
1. [search.google.com/search-console](https://search.google.com/search-console)
2. Website hinzufügen
3. Sitemap einreichen: `https://bodenleger-ferizaj.de/sitemap.xml`

## 🎨 Anpassen

### Farben ändern
In `style.css` im `:root` Block:
```css
:root {
  --terracotta: #c85a2e;  /* Hauptfarbe */
  --success: #10b981;      /* Erfolgsfarbe */
  --text: #2d2416;         /* Textfarbe */
}
```

### Statistiken anpassen
In `index.html` die `data-count` Werte ändern:
```html
<span class="stat-counter" data-count="20" data-suffix="+">0+</span>
```

### Bilder austauschen
- Ersetze Bilder im `images/` Ordner
- Behalte Dateinamen oder aktualisiere Pfade in HTML
- Empfohlen: Komprimiere mit [TinyPNG](https://tinypng.com/)

## 📊 Performance-Tipps

1. **Bilder komprimieren:**
   - Nutze TinyPNG oder Squoosh
   - Ziel: <200KB pro Bild

2. **WebP-Format verwenden:**
   ```bash
   # Mit ImageMagick
   magick convert image.jpg -quality 80 image.webp
   ```

3. **Browser-Cache nutzen:**
   - CSS/JS versionieren: `style.css?v=20260215`

## 🔧 Technische Details

- **Framework:** Vanilla HTML/CSS/JavaScript (kein Build-Tool nötig)
- **Font:** Manrope (Google Fonts)
- **Browser-Support:** Alle modernen Browser (Chrome, Firefox, Safari, Edge)
- **Mobile-First:** Responsive bis 320px Breite

## 📝 Wartung

### Änderungen zu GitHub pushen:
```bash
git add .
git commit -m "Beschreibung"
git push
```

### Neue Blog-Artikel erstellen:
1. Kopiere eine existierende Blog-HTML
2. Passe Inhalt an
3. Füge zur `sitemap.xml` hinzu
4. Verlinke in `index.html` Blog-Sektion

## 📚 Weitere Dokumentation

- **Detaillierte Anleitung:** Siehe `UPGRADE-ANLEITUNG.md`
- **Formspree Docs:** [help.formspree.io](https://help.formspree.io/)
- **GitHub Pages:** [docs.github.com/pages](https://docs.github.com/pages)

## 🎯 Nächste Schritte

- [ ] Formspree konfigurieren
- [ ] Eigene Bilder hochladen
- [ ] Google Search Console einrichten
- [ ] Domain verbinden (optional)
- [ ] Google Analytics einrichten (optional)

## 📄 Lizenz

Dieses Projekt wurde für Bodenleger Ferizaj erstellt.

---

**Entwickelt mit:** VS Code + GitHub Copilot
**Letzte Aktualisierung:** 15. Februar 2026
