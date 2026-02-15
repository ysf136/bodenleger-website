# Bodenleger Landingpage

Landingpage-Template für einen Bodenlegerbetrieb mit klaren Call-to-Actions, allen wichtigen Sections (Hero, Leistungen, Ablauf, Referenzen, Über uns, Kundenstimmen, Kontakt) und einfachem Formular-Feedback per JavaScript.

## Struktur
- index.html – Inhalte und Sektionen
- style.css – Layout, Farben, Responsive Design
- script.js – Frontend-Feedback für das Kontaktformular
- images/ – Platzhalter für Projekt- und Portraitfotos (bitte eigene Bilder ersetzen)

## Nutzung
1. Öffne index.html im Browser oder mit einem lokalen Server (z. B. VS Code Live Server).
2. Ersetze Texte, Firmendaten und Platzhalterbilder in index.html und im Footer.
3. Lege eigene Bilder in images/ ab und passe die Pfade in den Projektkarten an.
4. Für das Formular-Backend: action-URL hinzufügen und serverseitige Validierung ergänzen.

## Anpassen
- Farben/Branding: In style.css die CSS-Variablen im :root anpassen.
- Schrift: Google Font "Manrope" eingebunden; bei Bedarf austauschen.
- CTAs: Links auf #kontakt bzw. andere Ziele ändern.

## Hinweise
- Das Formular blockiert den Seiten-Reload und zeigt eine Erfolgsmeldung, speichert aber nichts ab.
- Alle Pflichtfelder (Name, E-Mail, PLZ/Ort) werden frontend-seitig geprüft.
