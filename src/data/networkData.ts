import { NetworkData } from '../types/network';

export const networkDatasets: NetworkData[] = [
  {
    id: 1,
    title: "",
    nodes: [
      {
        id: 'eike',
        name: 'EIKE',
        role: 'Europäisches Institut für Klima und Energie',
        description: 'Kein Forschungsinstitut und kein offizielles Institut der EU, leugnen ebenfalls den menschengemachten Klimawandel',
        type: 'institute',
        logo: 'EIKE',
        logoColor: '#FFD700',
        
      },
      {
        id: 'katharina-reiche',
        name: 'Katharina Reiche',
        role: 'Bundesministerin für Wirtschaft und Energie',
        description: 'Ehemalige Chefin von Westenergie und Vorsitzende des Wirtschaftsrats der CDU',
        type: 'person',
        profileImage: `${import.meta.env.BASE_URL}images/katharina-reiche.jpg`,
        position: 'center' // Katharina Reiche als zentrale Figur
      },
      {
        id: 'westenergie',
        name: 'Westenergie',
        role: 'deutscher Energiedienstleister und Infrastrukturbetreiber',
        description: 'Großer deutscher Energieversorger',
        type: 'company',
        logo: 'westenergie',
        logoColor: '#00A651',
        x: 900,
        y: 150
      },
      {
        id: 'helmut-alt',
        name: 'Helmut Alt',
        role: 'Doktor der Ingenieurswissenschaft',
        description: 'Mitglied im Fachbeirat des Wirtschaftsrats der CDU',
        type: 'person',
        profileImage: `${import.meta.env.BASE_URL}images/helmut-alt.jpg`,
        x: 300,
        y: 450
      },
      {
        id: 'wirtschaftsrat-cdu',
        name: 'Wirtschaftsrat der CDU',
        role: 'Lobbyverband',
        description: 'Durch zielgerichtetes Framing bremst der Wirtschaftsrat Klimaschutz aus',
        type: 'organization',
        logo: 'CDU',
        logoColor: '#000000',
        x: 750,
        y: 450
      }
    ],
    connections: [
      { from: 'katharina-reiche', to: 'westenergie', label: 'ehemalige Chefin', type: 'vorstand' },
      { from: 'katharina-reiche', to: 'wirtschaftsrat-cdu', label: 'Vorsitzende', type: 'vorstand' },
      { from: 'helmut-alt', to: 'wirtschaftsrat-cdu', label: 'Mitglied', type: 'mitglied' },
      { from: 'westenergie', to: 'wirtschaftsrat-cdu', label: 'Mitglied', type: 'mitglied' }
    ]
  },
  {
    id: 2,
    title: "",
    nodes: [
      {
        id: 'william-happer',
        name: 'William Happer',
        role: 'Professor für Physik an der Princeton University',
        description: 'Klimawissenschaftsskeptiker und ehemaliger Berater von Donald Trump',
        type: 'person',
        profileImage: `${import.meta.env.BASE_URL}images/147592438-h-720.jpg`,
        x: 300,
        y: 200,
        position: 'center'
      },
      {
        id: 'co2-coalition',
        name: 'CO2 Coalition',
        role: 'Konservativer Think Tank und Klimaleugnerorganisation',
        description: 'Wurde gegründet, um den wissenschaftlichen Konsens zur menschengemachten globalen Erwärmung zu bestreiten',
        type: 'organization',
        profileImage: `${import.meta.env.BASE_URL}images/CO2-Coalition-Chat-landscape-resize.webp`,
        x: 600,
        y: 200
      },
      {
        id: 'heartland-institute',
        name: 'The Heartland Institute',
        role: 'Amerikanischer konservativer Think Tank',
        description: 'Die weltweit bekannteste Organisation die den menschengemachten Klimawandel leugnet',
        type: 'organization',
        profileImage: `${import.meta.env.BASE_URL}public\images\heartland.jpeg`,
        x: 900,
        y: 200
      },
      {
        id: 'peabody-energy',
        name: 'Peabody Energy',
        role: 'US-amerikanisches Unternehmen',
        description: 'Weltgrößtes privates Kohlebergbauunternehmen',
        type: 'company',
        profileImage: `${import.meta.env.BASE_URL}public\images\Peabody.jpeg`,
        x: 900,
        y: 200
      },
      {
        id: 'gebrueder-koch',
        name: 'Gebrüder Koch',
        role: 'US-amerikanische Industrielle',
        description: 'Charles und David Koch stehen Koch Industries vor und stecken viel Geld in die US-Politik, ind Kandidaten, Verbände und Think Tanks',
        type: 'person',
        profileImage: `${import.meta.env.BASE_URL}public\images\kochbrueder-mit-bu.jpg`,
        x: 900,
        y: 200
      },
      {
        id: 'koch-industries',
        name: 'Koch Industries',
        role: 'US-amerikanische Unternehmen',
        description: 'Koch Industries ist ein US-amerikanisches Unternehmen im Bereich der fossilen Rohstoffgewinnung',
        type: 'company',
        profileImage: `${import.meta.env.BASE_URL}public/images/koch-industries.jpg`,
        x: 900,
        y: 200
      },
      {
        id: 'friedrich-neumann-stiftung',
        name: 'Friedrich Neumann Stiftung',
        role: 'FDP nahe Stiftung',
        description: 'Liberale politische Stiftung mit Nähe zur FDP',
        type: 'organization',
        profileImage: `${import.meta.env.BASE_URL}images/Friedrich-Naumann-Foundation.jpg`,
        x: 900,
        y: 200
      },
      {
        id: 'thomas-straubhaar',
        name: 'Thomas Straubhaar',
        role: 'Schweizer Ökonom und Migrationsforscher',
        description: 'Wirtschaftswissenschaftler und ehemaliger Direktor des Hamburgischen Weltwirtschaftsinstituts',
        type: 'person',
        profileImage: `${import.meta.env.BASE_URL}images/csm_StraubhaarThomas_c_Claudia_Hoehne_web_ee0ef03490.jpg`,
        x: 900,
        y: 200
      },
      {
        id: 'eike',
        name: 'EIKE',
        role: 'Europäisches Institut für Klima und Energie',
        description: 'Die Speerspitze der Lobby, die den menschengemachtenKlimawandel leugnet. EIKE ist kein Forschungsinstitut und kein offizielles Institut der EU.',
        type: 'organization',
        profileImage: `${import.meta.env.BASE_URL}images/eike-logo.png`,
        x: 900,
        y: 200
      },
      {
        id: 'michael-limburg',
        name: 'Michael Limburg',
        role: 'Ingenieur, Sachbuchautor, Klimawandelleugner und Politiker (AfD)',
        description: 'Mitglied des Bundesfachausschusses Energiepolitik der AfD',
        type: 'person',
        profileImage: `${import.meta.env.BASE_URL}images/michael-limburg-2017-orig_orig.jpg`,
        x: 900,
        y: 200
      },
      {
        id: 'afd',
        name: 'AfD',
        role: 'Alternative für Deutschland',
        description: 'Rechtspopulistische und rechtsextreme Partei im deutschen Bundestag',
        type: 'party',
        profileImage: `${import.meta.env.BASE_URL}images/016423063.jpg`,
        x: 900,
        y: 200
      }
    ],
    connections: [
      { from: 'william-happer', to: 'co2-coalition', label: 'Mitgründer', type: 'mitglied' },
      { from: 'william-happer', to: 'heartland-institute', label: 'Veröffentlicht Artikel und wird eingeladen', type: '' },
      { from: 'heartland-institute', to: 'eike', label: 'finanziert', type: 'finanziert' },
      { from: 'heartland-institute', to: 'eike', label: 'entsendet Referenten', type: '' },
      { from: 'eike', to: 'heartland-institute', label: 'entsendet Referenten', type: '' },
      { from: 'gebrueder-koch', to: 'koch-industries', label: 'Eigentümer', type: 'finanziert' },
      { from: 'michael-limburg', to: 'eike', label: 'Vizepräsident', type: 'vorstand' },
      { from: 'michael-limburg', to: 'afd', label: 'Mitglied', type: 'mitglied' },
      { from: 'thomas-straubhaar', to: 'friedrich-neumann-stiftung', label: 'Kuratoriumsmitglied', type: 'mitglied' },
      { from: 'thomas-straubhaar', to: 'eike', label: 'Mitglied des Beirats von EIKE', type: 'mitglied' },
    ]
  },
  {
    id: 3,
    title: "",
    nodes: [
      {
        id: 'eike',
        name: 'EIKE',
        role: 'Europäisches Institut für Klima und Energie',
        description: 'Die Speerspitze der Lobby, die den menschengemachtenKlimawandel leugnet. EIKE ist kein Forschungsinstitut und kein offizielles Institut der EU.',
        type: 'institute',
        profileImage: `${import.meta.env.BASE_URL}images/eike-logo.png`,
        x: 200,
        y: 200
      },
      {
        id: 'michael-limburg',
        name: 'Michael Limburg',
        role: 'Ingenieur, Sachbuchautor, Klimawandelleugner und Politiker (AfD)',
        description: 'Mitglied des Bundesfachausschusses Energiepolitik der AfD',
        type: 'person',
        profileImage: `${import.meta.env.BASE_URL}images/michael-limburg-2017-orig_orig.jpg`,
        x: 350,
        y: 500
      },
      {
        id: 'afd',
        name: 'AfD',
        role: 'Alternative für Deutschland',
        description: 'Rechtspopulistische und rechtsextreme Partei im deutschen Bundestag',
        type: 'party',
        profileImage: `${import.meta.env.BASE_URL}images/afd_logo.jpg`,
        x: 600,
        y: 550
      },
      {
        id: 'tino-chrupalla',
        name: 'Tino Chrupalla',
        role: 'Parteivorsitzender der AfD',
        description: 'Zusammen mit Weidel Vorsitzende der AfD',
        type: 'person',
        profileImage: `${import.meta.env.BASE_URL}images/tino-chrupalla-afd-100-1920x1080.jpg`,
        x: 600,
        y: 550
      },
      {
        id: 'alice-weidel',
        name: 'Alice Weidel',
        role: 'Parteivorsitzende AfD',
        description: 'Zusammen mit Chrupalla Vorsitzende der AfD',
        type: 'person',
        profileImage: `${import.meta.env.BASE_URL}images/alice-weidel-musk-100-1920x1080.jpg`,
        x: 850,
        y: 350,
        position: 'center'
      },
      {
        id: 'pws',
        name: 'PWS',
        role: 'Pharmagroßhandel International AG',
        description: 'Aktiengesellschaft gegründet in Zürich, handelt mit chemischen und kosmetischen Produkten',
        type: 'company',
        profileImage: `${import.meta.env.BASE_URL}images/die-pws-pharma-whole-sale-international-ag-hat-ihren-sitz-in-zurich-fluntern.jpg`,
        x: 1100,
        y: 200
      }
    ],
    connections: [
      { from: 'michael-limburg', to: 'eike', label: 'Vizepräsident', type: 'vorstand' },
      { from: 'michael-limburg', to: 'afd', label: 'Mitglied', type: 'mitglied' },
      { from: 'tino-chrupalla', to: 'afd', label: 'Mitglied', type: 'mitglied' },
      { from: 'alice-weidel', to: 'afd', label: 'Mitglied', type: 'mitglied' },
      { from: 'pws', to: 'alice-weidel', label: 'Spendenskandal', type: 'finanziert' }
    ]
  },
  {
    id: 4,
    title: "",
    nodes: [
      {
        id: 'friedreich-neumann-stiftung',
        name: 'Friedreich Neumann Stiftung',
        role: 'FDP nahe Stiftung',
        description: 'Liberale politische Stiftung mit Nähe zur FDP',
        type: 'organization',
        profileImage: `${import.meta.env.BASE_URL}images/Friedrich-Naumann-Foundation.jpg`,
        x: 200,
        y: 180
      },
      {
        id: 'thomas-straubhaar',
        name: 'Thomas Straubhaar',
        role: 'Schweizer Ökonom und Migrationsforscher',
        description: 'Wirtschaftswissenschaftler und ehemaliger Direktor des Hamburgischen Weltwirtschaftsinstituts',
        type: 'person',
        profileImage: `${import.meta.env.BASE_URL}images/csm_StraubhaarThomas_c_Claudia_Hoehne_web_ee0ef03490.jpg`,
        x: 800,
        y: 180
      },
      {
        id: 'eike',
        name: 'EIKE',
        role: 'Europäisches Institut für Klima und Energie',
        description: 'Die Speerspitze der Lobby, die den menschengemachtenKlimawandel leugnet. EIKE ist kein Forschungsinstitut und kein offizielles Institut der EU.',
        type: 'institute',
        profileImage: `${import.meta.env.BASE_URL}images/eike-logo.png`,
        x: 1100,
        y: 280
      },
      {
        id: 'gebrueder-koch',
        name: 'Gebrüder Koch',
        role: 'Industrielle',
        description: 'Charles und David Koch stehen Koch Industries vor und stecken viel Geld in die US-Politik, ind Kandidaten, Verbände und Think Tanks',
        type: 'person',
        profileImage: `${import.meta.env.BASE_URL}images/kochbrueder-mit-bu.jpg`,
        x: 380,
        y: 280
      },
     
      {
        id: 'sebastian-leuning',
        name: 'Sebastian Leuning',
        role: '',
        description: '',
        type: 'person',
        x: 680,
        y: 420,
        position: 'center'
      },
      {
        id: 'michael-limburg',
        name: 'Michael Limburg',
        role: 'Ingenieur, Sachbuchautor, Klimawandelleugner und Politiker (AfD)',
        description: 'Mitglied des Bundesfachausschusses Energiepolitik der AfD',
        type: 'person',
        profileImage: `${import.meta.env.BASE_URL}images/michael-limburg-2017-orig_orig.jpg`,
        x: 350,
        y: 500
      },
      {
        id: 'gebrueder-koch',
        name: 'Gebrüder Koch',
        role: 'US-amerikanische Industrielle',
        description: 'Charles und David Koch stehen Koch Industries vor und stecken viel Geld in die US-Politik, ind Kandidaten, Verbände und Think Tanks',
        type: 'person',
        profileImage: `${import.meta.env.BASE_URL}images/kochbrueder-mit-bu.jpg`,
        x: 900,
        y: 200
      },
      {
        id: 'exxon-mobil',
        name: 'Exxon Mobil',
        role: 'US-amerikanische Unternehmen',
        description: 'Exxon Mobil ist ein US-amerikanisches Unternehmen im Bereich der Mineralöle ',
        type: 'organization',
        profileImage: `${import.meta.env.BASE_URL}images/Exxon-Mobil-Corporation-Logo.png`,
        x: 480,
        y: 620
      },
      {
        id: 'heartland-institute',
        name: 'The Heartland Institute',
        role: 'Amerikanischer konservativer Think Tank',
        description: 'Die weltweit bekannteste Organisation die den menschengemachten Klimawandel leugnet',
        type: 'organization',
        profileImage: `${import.meta.env.BASE_URL}images/heartland.jpeg`,
        x: 900,
        y: 200
      },
      {
        id: 'afd',
        name: 'AfD',
        role: 'Alternative für Deutschland',
        description: 'Rechtspopulistische und rechtsextreme Partei im deutschen Bundestag',
        type: 'party',
        profileImage: `${import.meta.env.BASE_URL}images/016423063.jpg`,
        x: 900,
        y: 200
      }
    ],
    connections: [
      { from: 'thomas-straubhaar', to: 'friedreich-neumann-stiftung', label: 'Kuratoriumsmitglied', type: 'mitglied' },
      { from: 'gebrueder-koch', to: 'koch-industries', label: 'Eigentümer', type: 'eigentümer' },
      { from: 'gebrüder-koch', to: 'heartland-institute', label: 'finanziert', type: 'finanziert' },
      { from: 'thomas-straubhaar', to: 'eike', label: 'Mitglied des Beirats von EIKE', type: 'mitglied' },
      { from: 'thomas-straubhaar', to: 'friedreich-neumann-stiftung', label: 'Kuratoriumsmitglied', type: 'mitglied' },
      { from: 'michael-limburg', to: 'eike', label: 'Vizepräsident', type: 'vorstand' },
      { from: 'heartland-institute', to: 'eike', label: 'finanziert', type: 'finanziert' },
      { from: 'heartland-institute', to: 'eike', label: 'entsendet Referenten', type: '' },
      { from: 'eike', to: 'heartland-institute', label: 'entsendet Referenten', type: '' },
      { from: 'michael-limburg', to: 'afd', label: 'Mitglied', type: 'mitglied' },
      { from: 'william-happer', to: 'co2-coalition', label: 'Gründungsmitglied', type: 'vorstand' },
      { from: 'peabody-energy', to: 'william-happer', label: 'finanziert', type: 'finanziert' }
    ]
  },
  {
    id: 5,
    title: "Netzwerk 5",
    nodes: [
      {
        id: 'org-5-1',
        name: 'Organisation 5-1',
        role: 'Beispiel Rolle',
        description: 'Beschreibung der Organisation',
        type: 'organization',
        logo: 'ORG',
        logoColor: '#6366f1',
        x: 300,
        y: 200
      },
      {
        id: 'person-5-1',
        name: 'Person 5-1',
        role: 'Beispiel Rolle',
        description: 'Beschreibung der Person',
        type: 'person',
        profileImage: `${import.meta.env.BASE_URL}images/placeholder.jpg`,
        x: 600,
        y: 200
      },
      {
        id: 'company-5-1',
        name: 'Firma 5-1',
        role: 'Beispiel Rolle',
        description: 'Beschreibung der Firma',
        type: 'company',
        logo: 'COMP',
        logoColor: '#2563eb',
        x: 900,
        y: 200
      }
    ],
    connections: [
      { from: 'org-5-1', to: 'person-5-1', label: 'Beispiel Verbindung', type: 'mitglied' },
      { from: 'person-5-1', to: 'company-5-1', label: 'Beispiel Verbindung', type: 'vorstand' }
    ]
  },
  {
    id: 6,
    title: "Netzwerk 6",
    nodes: [
      {
        id: 'org-6-1',
        name: 'Organisation 6-1',
        role: 'Beispiel Rolle',
        description: 'Beschreibung der Organisation',
        type: 'organization',
        logo: 'ORG',
        logoColor: '#6366f1',
        x: 300,
        y: 200
      },
      {
        id: 'person-6-1',
        name: 'Person 6-1',
        role: 'Beispiel Rolle',
        description: 'Beschreibung der Person',
        type: 'person',
        profileImage: `${import.meta.env.BASE_URL}images/placeholder.jpg`,
        x: 600,
        y: 200
      },
      {
        id: 'company-6-1',
        name: 'Firma 6-1',
        role: 'Beispiel Rolle',
        description: 'Beschreibung der Firma',
        type: 'company',
        logo: 'COMP',
        logoColor: '#2563eb',
        x: 900,
        y: 200
      }
    ],
    connections: [
      { from: 'org-6-1', to: 'person-6-1', label: 'Beispiel Verbindung', type: 'mitglied' },
      { from: 'person-6-1', to: 'company-6-1', label: 'Beispiel Verbindung', type: 'vorstand' }
    ]
  },
  {
    id: 7, 
    title: "Netzwerk 7 - Beispiel Verbindung",
    nodes: [
      {
        id: 'organisation-7',
        name: 'Organisation 7',
        role: 'Beispiel Organisation',
        description: 'Hier können Sie Ihre eigenen Daten einfügen. Bearbeiten Sie einfach die networkData.ts Datei.',
        type: 'organization',
        logo: 'ORG',
        logoColor: '#6366f1',
        x: 300, // Links
        y: 350
      },
      {
        id: 'professor-happer',
        name: 'Professor William Happer',
        role: 'Professor für Physik an der Princeton University',
        description: 'Ersetzen Sie diese Platzhalter-Daten mit echten Informationen.',
        type: 'person',
        profileImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        x: 900, // Rechts
        y: 350
      }
    ],
    connections: [
      { from: 'organisation-7', to: 'professor-happer', label: 'Beispiel Verbindung', type: 'mitglied' }
    ]
  },
  {
    id: 8,
    title: "Netzwerk 8",
    nodes: [
      {
        id: 'org-8-1',
        name: 'Organisation 8-1',
        role: 'Beispiel Rolle',
        description: 'Beschreibung der Organisation',
        type: 'organization',
        logo: 'ORG',
        logoColor: '#6366f1',
        x: 300,
        y: 200
      },
      {
        id: 'person-8-1',
        name: 'Person 8-1',
        role: 'Beispiel Rolle',
        description: 'Beschreibung der Person',
        type: 'person',
        profileImage: `${import.meta.env.BASE_URL}images/placeholder.jpg`,
        x: 600,
        y: 200
      },
      {
        id: 'company-8-1',
        name: 'Firma 8-1',
        role: 'Beispiel Rolle',
        description: 'Beschreibung der Firma',
        type: 'company',
        logo: 'COMP',
        logoColor: '#2563eb',
        x: 900,
        y: 200
      }
    ],
    connections: [
      { from: 'org-8-1', to: 'person-8-1', label: 'Beispiel Verbindung', type: 'mitglied' },
      { from: 'person-8-1', to: 'company-8-1', label: 'Beispiel Verbindung', type: 'vorstand' }
    ]
  },
  {
    id: 9,
    title: "Netzwerk 9",
    nodes: [
      {
        id: 'org-9-1',
        name: 'Organisation 9-1',
        role: 'Beispiel Rolle',
        description: 'Beschreibung der Organisation',
        type: 'organization',
        logo: 'ORG',
        logoColor: '#6366f1',
        x: 300,
        y: 200
      },
      {
        id: 'person-9-1',
        name: 'Person 9-1',
        role: 'Beispiel Rolle',
        description: 'Beschreibung der Person',
        type: 'person',
        profileImage: `${import.meta.env.BASE_URL}images/placeholder.jpg`,
        x: 600,
        y: 200
      },
      {
        id: 'company-9-1',
        name: 'Firma 9-1',
        role: 'Beispiel Rolle',
        description: 'Beschreibung der Firma',
        type: 'company',
        logo: 'COMP',
        logoColor: '#2563eb',
        x: 900,
        y: 200
      }
    ],
    connections: [
      { from: 'org-9-1', to: 'person-9-1', label: 'Beispiel Verbindung', type: 'mitglied' },
      { from: 'person-9-1', to: 'company-9-1', label: 'Beispiel Verbindung', type: 'vorstand' }
    ]
  },
  {
    id: 10,
    title: "Netzwerk 10",
    nodes: [
      {
        id: 'org-10-1',
        name: 'Organisation 10-1',
        role: 'Beispiel Rolle',
        description: 'Beschreibung der Organisation',
        type: 'organization',
        logo: 'ORG',
        logoColor: '#6366f1',
        x: 300,
        y: 200
      },
      {
        id: 'person-10-1',
        name: 'Person 10-1',
        role: 'Beispiel Rolle',
        description: 'Beschreibung der Person',
        type: 'person',
        profileImage: `${import.meta.env.BASE_URL}images/placeholder.jpg`,
        x: 600,
        y: 200
      },
      {
        id: 'company-10-1',
        name: 'Firma 10-1',
        role: 'Beispiel Rolle',
        description: 'Beschreibung der Firma',
        type: 'company',
        logo: 'COMP',
        logoColor: '#2563eb',
        x: 900,
        y: 200
      }
    ],
    connections: [
      { from: 'org-10-1', to: 'person-10-1', label: 'Beispiel Verbindung', type: 'mitglied' },
      { from: 'person-10-1', to: 'company-10-1', label: 'Beispiel Verbindung', type: 'vorstand' }
    ]
  },
  {
    id: 11,
    title: "Netzwerk 11",
    nodes: [
      {
        id: 'org-11-1',
        name: 'Organisation 11-1',
        role: 'Beispiel Rolle',
        description: 'Beschreibung der Organisation',
        type: 'organization',
        logo: 'ORG',
        logoColor: '#6366f1',
        x: 300,
        y: 200
      },
      {
        id: 'person-11-1',
        name: 'Person 11-1',
        role: 'Beispiel Rolle',
        description: 'Beschreibung der Person',
        type: 'person',
        profileImage: `${import.meta.env.BASE_URL}images/placeholder.jpg`,
        x: 600,
        y: 200
      },
      {
        id: 'company-11-1',
        name: 'Firma 11-1',
        role: 'Beispiel Rolle',
        description: 'Beschreibung der Firma',
        type: 'company',
        logo: 'COMP',
        logoColor: '#2563eb',
        x: 900,
        y: 200
      }
    ],
    connections: [
      { from: 'org-11-1', to: 'person-11-1', label: 'Beispiel Verbindung', type: 'mitglied' },
      { from: 'person-11-1', to: 'company-11-1', label: 'Beispiel Verbindung', type: 'vorstand' }
    ]
  },
  {
    id: 12,
    title: "Netzwerk 12",
    nodes: [
      {
        id: 'org-12-1',
        name: 'Organisation 12-1',
        role: 'Beispiel Rolle',
        description: 'Beschreibung der Organisation',
        type: 'organization',
        logo: 'ORG',
        logoColor: '#6366f1',
        x: 300,
        y: 200
      },
      {
        id: 'person-12-1',
        name: 'Person 12-1',
        role: 'Beispiel Rolle',
        description: 'Beschreibung der Person',
        type: 'person',
        profileImage: `${import.meta.env.BASE_URL}images/placeholder.jpg`,
        x: 600,
        y: 200
      },
      {
        id: 'company-12-1',
        name: 'Firma 12-1',
        role: 'Beispiel Rolle',
        description: 'Beschreibung der Firma',
        type: 'company',
        logo: 'COMP',
        logoColor: '#2563eb',
        x: 900,
        y: 200
      }
    ],
    connections: [
      { from: 'org-12-1', to: 'person-12-1', label: 'Beispiel Verbindung', type: 'mitglied' },
      { from: 'person-12-1', to: 'company-12-1', label: 'Beispiel Verbindung', type: 'vorstand' }
    ]
  },
  {
    id: 13,
    title: "Netzwerk 13",
    nodes: [
      {
        id: 'org-13-1',
        name: 'Organisation 13-1',
        role: 'Beispiel Rolle',
        description: 'Beschreibung der Organisation',
        type: 'organization',
        logo: 'ORG',
        logoColor: '#6366f1',
        x: 300,
        y: 200
      },
      {
        id: 'person-13-1',
        name: 'Person 13-1',
        role: 'Beispiel Rolle',
        description: 'Beschreibung der Person',
        type: 'person',
        profileImage: `${import.meta.env.BASE_URL}images/placeholder.jpg`,
        x: 600,
        y: 200
      },
      {
        id: 'company-13-1',
        name: 'Firma 13-1',
        role: 'Beispiel Rolle',
        description: 'Beschreibung der Firma',
        type: 'company',
        logo: 'COMP',
        logoColor: '#2563eb',
        x: 900,
        y: 200
      }
    ],
    connections: [
      { from: 'org-13-1', to: 'person-13-1', label: 'Beispiel Verbindung', type: 'mitglied' },
      { from: 'person-13-1', to: 'company-13-1', label: 'Beispiel Verbindung', type: 'vorstand' }
    ]
  },
  {
    id: 14,
    title: "Netzwerk 14",
    nodes: [
      {
        id: 'org-14-1',
        name: 'Organisation 14-1',
        role: 'Beispiel Rolle',
        description: 'Beschreibung der Organisation',
        type: 'organization',
        logo: 'ORG',
        logoColor: '#6366f1',
        x: 300,
        y: 200
      },
      {
        id: 'person-14-1',
        name: 'Person 14-1',
        role: 'Beispiel Rolle',
        description: 'Beschreibung der Person',
        type: 'person',
        profileImage: '/images/placeholder.jpg',
        x: 600,
        y: 200
      },
      {
        id: 'company-14-1',
        name: 'Firma 14-1',
        role: 'Beispiel Rolle',
        description: 'Beschreibung der Firma',
        type: 'company',
        logo: 'COMP',
        logoColor: '#2563eb',
        x: 900,
        y: 200
      }
    ],
    connections: [
      { from: 'org-14-1', to: 'person-14-1', label: 'Beispiel Verbindung', type: 'mitglied' },
      { from: 'person-14-1', to: 'company-14-1', label: 'Beispiel Verbindung', type: 'vorstand' }
    ]
  },
  {
    id: 15,
    title: "Netzwerk 15",
    nodes: [
      {
        id: 'org-15-1',
        name: 'Organisation 15-1',
        role: 'Beispiel Rolle',
        description: 'Beschreibung der Organisation',
        type: 'organization',
        logo: 'ORG',
        logoColor: '#6366f1',
        x: 300,
        y: 200
      },
      {
        id: 'person-15-1',
        name: 'Person 15-1',
        role: 'Beispiel Rolle',
        description: 'Beschreibung der Person',
        type: 'person',
        profileImage: '/images/placeholder.jpg',
        x: 600,
        y: 200
      },
      {
        id: 'company-15-1',
        name: 'Firma 15-1',
        role: 'Beispiel Rolle',
        description: 'Beschreibung der Firma',
        type: 'company',
        logo: 'COMP',
        logoColor: '#2563eb',
        x: 900,
        y: 200
      }
    ],
    connections: [
      { from: 'org-15-1', to: 'person-15-1', label: 'Beispiel Verbindung', type: 'mitglied' },
      { from: 'person-15-1', to: 'company-15-1', label: 'Beispiel Verbindung', type: 'vorstand' }
    ]
  },
  {
    id: 16,
    title: "Netzwerk 16",
    nodes: [
      {
        id: 'org-16-1',
        name: 'Organisation 16-1',
        role: 'Beispiel Rolle',
        description: 'Beschreibung der Organisation',
        type: 'organization',
        logo: 'ORG',
        logoColor: '#6366f1',
        x: 300,
        y: 200
      },
      {
        id: 'person-16-1',
        name: 'Person 16-1',
        role: 'Beispiel Rolle',
        description: 'Beschreibung der Person',
        type: 'person',
        profileImage: '/images/placeholder.jpg',
        x: 600,
        y: 200
      },
      {
        id: 'company-16-1',
        name: 'Firma 16-1',
        role: 'Beispiel Rolle',
        description: 'Beschreibung der Firma',
        type: 'company',
        logo: 'COMP',
        logoColor: '#2563eb',
        x: 900,
        y: 200
      }
    ],
    connections: [
      { from: 'org-16-1', to: 'person-16-1', label: 'Beispiel Verbindung', type: 'mitglied' },
      { from: 'person-16-1', to: 'company-16-1', label: 'Beispiel Verbindung', type: 'vorstand' }
    ]
  },
];

// Hilfsfunktion zum einfachen Hinzufügen neuer Netzwerke
export const createNetworkTemplate = (id: number, title: string): NetworkData => ({
  id,
  title,
  nodes: [],
  connections: []
});

// Beispiel für einfaches Hinzufügen eines neuen Knotens
export const createPersonNode = (
  id: string, 
  name: string, 
  role: string, 
  description: string, 
  imagePath?: string,
  x?: number,
  y?: number
) => ({
  id,
  name,
  role,
  description,
  type: 'person' as const,
  profileImage: imagePath ? `/images/${imagePath}` : undefined,
  x,
  y
});

export const createOrganizationNode = (
  id: string, 
  name: string, 
  role: string, 
  description: string, 
  logo?: string,
  logoColor?: string,
  x?: number,
  y?: number
) => ({
  id,
  name,
  role,
  description,
  type: 'organization' as const,
  logo,
  logoColor,
  x,
  y
});