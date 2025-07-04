# 📁 Content Management Guide

## 🖼️ Bilder hinzufügen

### 1. Ordnerstruktur
```
public/
  images/
    profiles/          # Profilbilder von Personen
    claims/           # Bilder für Behauptungen
    logos/            # Firmen-/Organisations-Logos
    placeholder-person.jpg
    placeholder-org.jpg
    placeholder-claim.jpg
```

### 2. Bilder einpflegen
1. **Bilder in den entsprechenden Ordner kopieren**
2. **Dateinamen in den Daten-Dateien anpassen**

## 📊 Netzwerk-Daten bearbeiten

### Datei: `src/data/networkData.ts`

```typescript
// Neues Netzwerk hinzufügen
{
  id: 4, // Eindeutige ID
  title: "Ihr Netzwerk Titel",
  nodes: [
    {
      id: 'unique-node-id',
      name: 'Person/Organisation Name',
      role: 'Rolle/Position',
      description: 'Detaillierte Beschreibung',
      type: 'person', // oder 'organization', 'company', 'institute', 'party'
      profileImage: '/images/profiles/person.jpg', // für Personen
      logo: 'LOGO', // für Organisationen (Text)
      logoColor: '#FF0000' // Hintergrundfarbe für Logo
    }
  ],
  connections: [
    {
      from: 'node-id-1',
      to: 'node-id-2',
      label: 'Verbindungstext',
      type: 'finanziert' // oder 'mitglied', 'unterstützt', 'verbreitet', etc.
    }
  ]
}
```

## 📋 Behauptungen bearbeiten

### Datei: `src/data/claimsData.ts`

```typescript
// Neue Behauptung hinzufügen
{
  id: 19, // Eindeutige ID
  frontContent: {
    title: 'Ihre Behauptung',
    subtitle: '"Zitat der Behauptung"',
    description: 'Kontext und Hintergrund der Behauptung',
    image: '/images/claims/ihr-bild.jpg' // optional
  },
  backContent: {
    title: 'Faktencheck: Ihre Behauptung',
    content: 'Wissenschaftlich fundierte Widerlegung mit Fakten',
    source: 'Quellen und Referenzen'
  }
}
```

## 🎨 Styling anpassen

### Farben ändern
- **Hauptfarben:** `src/index.css` - CSS Custom Properties
- **Netzwerk-Farben:** Direkt in `networkData.ts` bei `logoColor`
- **Hintergrund:** Tailwind-Klassen in den Komponenten

### Layout anpassen
- **Karten-Größe:** `FlipCard.tsx` - Höhe und Breite
- **Netzwerk-Layout:** `InteractiveNetworkGraph.tsx` - D3 Force-Parameter

## 🔧 Entwickler-Tools

### Data Manager (Entwicklungsmodus)
- **Aktivieren:** `Ctrl + Shift + D`
- **Funktionen:** Knoten/Verbindungen hinzufügen, JSON Export/Import

### Schnelle Bearbeitung
1. **Daten ändern** in `networkData.ts` oder `claimsData.ts`
2. **Speichern** - Hot Reload lädt automatisch neu
3. **Bilder hinzufügen** in `public/images/`

## 📝 Checkliste für neue Inhalte

### ✅ Neues Netzwerk
- [ ] Eindeutige ID vergeben
- [ ] Aussagekräftigen Titel wählen
- [ ] Alle Knoten mit korrekten Typen definieren
- [ ] Profilbilder in `/images/profiles/` ablegen
- [ ] Verbindungen mit passenden Labels erstellen
- [ ] Beschreibungen ausformulieren

### ✅ Neue Behauptung
- [ ] Eindeutige ID vergeben
- [ ] Prägnanten Titel formulieren
- [ ] Originalzitat als Subtitle
- [ ] Kontext beschreiben
- [ ] Bild in `/images/claims/` ablegen
- [ ] Faktencheck mit Quellen erstellen

### ✅ Qualitätskontrolle
- [ ] Alle Bilder laden korrekt
- [ ] Texte sind fehlerfrei
- [ ] Verbindungen sind logisch
- [ ] Mobile Ansicht funktioniert
- [ ] Performance ist gut