# Project Bolt - Claims Visualization

Ein interaktives React-Projekt zur Visualisierung von Behauptungen und Netzwerken mit modernem, responsivem Design.

## Features

- **Responsive Claims Carousel**: Interaktive Flip-Cards mit Behauptungen
- **Network Visualization**: D3.js-basierte Netzwerkvisualisierung
- **Modern UI**: Tailwind CSS für ein zeitgemäßes Design
- **Mobile-First**: Vollständig responsive für alle Geräte

## Technologien

- React 18s
- TypeScript
- Tailwind CSS
- D3.js
- Vite

## Lokale Entwicklung

```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev

# Build für Produktion
npm run build

# Build Preview
npm run preview
```

## Deployment

Das Projekt wird automatisch auf GitHub Pages deployed, wenn Code in den `main` Branch gepusht wird.

### GitHub Pages Setup

1. Gehe zu deinem GitHub Repository
2. Navigiere zu **Settings** → **Pages**
3. Unter **Source** wähle **Deploy from a branch**
4. Wähle **gh-pages** Branch und **/(root)** Ordner
5. Klicke **Save**

### Automatisches Deployment

Das GitHub Actions Workflow (`.github/workflows/deploy.yml`) wird automatisch ausgeführt bei:
- Push zu `main` Branch
- Pull Requests zu `main` Branch

## Projektstruktur

```
src/
├── components/          # React Komponenten
│   ├── ClaimsSection.tsx
│   ├── FlipCard.tsx
│   ├── NetworkSection.tsx
│   └── ...
├── data/               # Statische Daten
│   ├── claimsData.ts
│   └── networkData.ts
├── types/              # TypeScript Typen
└── utils/              # Hilfsfunktionen
```

## Lizenz

MIT
