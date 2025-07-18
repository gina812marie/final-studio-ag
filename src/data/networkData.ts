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
        profileImage: 'images/eike-logo.png',
        
      },
      {
        id: 'katharina-reiche',
        name: 'Katharina Reiche',
        role: 'Bundesministerin für Wirtschaft und Energie',
        description: 'Ehemalige Chefin von Westenergie und Vorsitzende des Wirtschaftsrats der CDU',
        type: 'person',
        profileImage: 'images/Katherina Reiche.jpeg',
        position: 'center' // Katharina Reiche als zentrale Figur
      },
      {
        id: 'westenergie',
        name: 'Westenergie',
        role: 'Deutsche Unternehmen ',
        description: 'Großer deutscher Energiedienstleister und Infrastrukturbetreiber',
        type: 'company',
        profileImage: 'images/Logo-wall-westenergie-1.jpg',
        x: 900,
        y: 150
      },
      {
        id: 'helmut-alt',
        name: 'Helmut Alt',
        role: 'Doktor der Ingenieurswissenschaft',
        description: 'Mitglied im Fachbeirat des Wirtschaftsrats der CDU',
        type: 'person',
        profileImage: 'images/helmut-alt.jpg',
        x: 300,
        y: 450
      },
      {
        id: 'wirtschaftsrat-cdu',
        name: 'Wirtschaftsrat der CDU',
        role: 'Lobbyverband',
        description: 'Durch zielgerichtetes Framing bremst der Wirtschaftsrat Klimaschutz aus',
        type: 'organization',
        profileImage: 'images/Wirtschaftsrat_Logo-600x196.jpg',
        x: 750,
        y: 450
      }
    ],
    connections: [
      { from: 'katharina-reiche', to: 'westenergie', label: 'ehemalige Chefin', type: 'vorstand' },
      { from: 'katharina-reiche', to: 'wirtschaftsrat-cdu', label: 'Vorsitzende', type: 'vorstand' },
      { from: 'helmut-alt', to: 'wirtschaftsrat-cdu', label: 'Mitglied', type: 'mitglied' },
      { from: 'helmut-alt', to: 'eike', label: 'Mitglied im Fachbeirat', type: 'mitglied' },
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
        profileImage: 'images/william-happer-66d9ce64-3b97-4c64-96f7-e2402f052d9-resize-750.jpg',
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
        profileImage: 'images/heartland.jpeg',
        x: 900,
        y: 200
      },
      {
        id: 'peabody-energy',
        name: 'Peabody Energy',
        role: 'US-amerikanisches Unternehmen',
        description: 'Weltgrößtes privates Kohlebergbauunternehmen',
        type: 'company',
        profileImage: 'images/Peabody.jpeg',
        x: 900,
        y: 200
      },
      {
        id: 'gebrueder-koch',
        name: 'Gebrüder Koch',
        role: 'US-amerikanische Industrielle',
        description: 'Charles und David Koch stehen Koch Industries vor und stecken viel Geld in die US-Politik, ind Kandidaten, Verbände und Think Tanks',
        type: 'person',
        profileImage: 'images/kochbrueder-mit-bu.jpg',
        x: 900,
        y: 200
      },
      {
        id: 'koch-industries',
        name: 'Koch Industries',
        role: 'US-amerikanische Unternehmen',
        description: 'Koch Industries ist ein US-amerikanisches Unternehmen im Bereich der fossilen Rohstoffgewinnung',
        type: 'company',
        profileImage: 'images/koch-industries_416x416.jpg',
        x: 900,
        y: 200
      },
      {
        id: 'friedrich-neumann-stiftung',
        name: 'Friedrich Neumann Stiftung',
        role: 'FDP nahe Stiftung',
        description: 'Liberale politische Stiftung mit Nähe zur FDP',
        type: 'organization',
        profileImage: 'images/Friedrich-Naumann-Foundation.jpg',
        x: 900,
        y: 200
      },
      {
        id: 'thomas-straubhaar',
        name: 'Thomas Straubhaar',
        role: 'Schweizer Ökonom und Migrationsforscher',
        description: 'Wirtschaftswissenschaftler und ehemaliger Direktor des Hamburgischen Weltwirtschaftsinstituts',
        type: 'person',
        profileImage: 'images/csm_StraubhaarThomas_c_Claudia_Hoehne_web_ee0ef03490.jpg',
        x: 900,
        y: 200
      },
      {
        id: 'eike',
        name: 'EIKE',
        role: 'Europäisches Institut für Klima und Energie',
        description: 'Die Speerspitze der Lobby, die den menschengemachtenKlimawandel leugnet. EIKE ist kein Forschungsinstitut und kein offizielles Institut der EU.',
        type: 'organization',
        profileImage: 'images/eike-logo.png',
        x: 900,
        y: 200
      },
      {
        id: 'michael-limburg',
        name: 'Michael Limburg',
        role: 'Ingenieur, Sachbuchautor, Klimawandelleugner und Politiker (AfD)',
        description: 'Mitglied des Bundesfachausschusses Energiepolitik der AfD',
        type: 'person',
        profileImage: 'images/michael-limburg-2017-orig_orig.jpg',
        x: 900,
        y: 200
      },
      {
        id: 'afd',
        name: 'AfD',
        role: 'Alternative für Deutschland',
        description: 'Rechtspopulistische und rechtsextreme Partei im deutschen Bundestag',
        type: 'party',
        profileImage: 'images/afd.jpg',
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
      { from: 'peabody-energy', to: 'william-happer', label: 'Finanziert', type: 'finanziert' },
      { from: 'gebrueder-koch', to: 'co2-coalition', label: 'Finanziert', type: 'finanziert' },
      { from: 'gebrueder-koch', to: 'heartland-institute', label: 'Finanziert', type: 'finanziert' },
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
        profileImage: 'images/eike-logo.png',
        x: 200,
        y: 200
      },
      {
        id: 'michael-limburg',
        name: 'Michael Limburg',
        role: 'Ingenieur, Sachbuchautor, Klimawandelleugner und Politiker (AfD)',
        description: 'Mitglied des Bundesfachausschusses Energiepolitik der AfD',
        type: 'person',
        profileImage: 'images/michael-limburg-2017-orig_orig.jpg',
        x: 350,
        y: 500
      },
      {
        id: 'afd',
        name: 'AfD',
        role: 'Alternative für Deutschland',
        description: 'Rechtspopulistische und rechtsextreme Partei im deutschen Bundestag',
        type: 'party',
        profileImage: 'images/afd.jpg',
        x: 600,
        y: 550
      },
      {
        id: 'tino-chrupalla',
        name: 'Tino Chrupalla',
        role: 'Parteivorsitzender der AfD',
        description: 'Zusammen mit Weidel Vorsitzende der AfD',
        type: 'person',
        profileImage: 'images/tino-chrupalla-afd-100-1920x1080.jpg',
        x: 600,
        y: 550
      },
      {
        id: 'alice-weidel',
        name: 'Alice Weidel',
        role: 'Parteivorsitzende AfD',
        description: 'Zusammen mit Chrupalla Vorsitzende der AfD',
        type: 'person',
        profileImage: 'images/alice-weidel-musk-100-1920x1080.jpg',
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
        profileImage: 'images/die-pws-pharma-whole-sale-international-ag-hat-ihren-sitz-in-zurich-fluntern.jpg',
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
        profileImage: 'images/Friedrich-Naumann-Foundation.jpg',
        x: 200,
        y: 180
      },
      {
        id: 'thomas-straubhaar',
        name: 'Thomas Straubhaar',
        role: 'Schweizer Ökonom und Migrationsforscher',
        description: 'Wirtschaftswissenschaftler und ehemaliger Direktor des Hamburgischen Weltwirtschaftsinstituts',
        type: 'person',
        profileImage: 'images/csm_StraubhaarThomas_c_Claudia_Hoehne_web_ee0ef03490.jpg',
        x: 800,
        y: 180
      },
      {
        id: 'eike',
        name: 'EIKE',
        role: 'Europäisches Institut für Klima und Energie',
        description: 'Die Speerspitze der Lobby, die den menschengemachtenKlimawandel leugnet. EIKE ist kein Forschungsinstitut und kein offizielles Institut der EU.',
        type: 'institute',
        profileImage: 'images/eike-logo.png',
        x: 1100,
        y: 280
      },
      {
        id: 'gebrueder-koch',
        name: 'Gebrüder Koch',
        role: 'Industrielle',
        description: 'Charles und David Koch stehen Koch Industries vor und stecken viel Geld in die US-Politik, ind Kandidaten, Verbände und Think Tanks',
        type: 'person',
        profileImage: 'images/kochbrueder-mit-bu.jpg',
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
        profileImage: 'images/michael-limburg-2017-orig_orig.jpg',
        x: 350,
        y: 500
      },
      {
        id: 'gebrueder-koch',
        name: 'Gebrüder Koch',
        role: 'US-amerikanische Industrielle',
        description: 'Charles und David Koch stehen Koch Industries vor und stecken viel Geld in die US-Politik, ind Kandidaten, Verbände und Think Tanks',
        type: 'person',
        profileImage: 'images/kochbrueder-mit-bu.jpg',
        x: 900,
        y: 200
      },
      {
        id: 'exxon-mobil',
        name: 'Exxon Mobil',
        role: 'US-amerikanische Unternehmen',
        description: 'Exxon Mobil ist ein US-amerikanisches Unternehmen im Bereich der Mineralöle ',
        type: 'organization',
        profileImage: 'images/Exxon-Mobil-Corporation-Logo.png',
        x: 480,
        y: 620
      },
      {
        id: 'heartland-institute',
        name: 'The Heartland Institute',
        role: 'Amerikanischer konservativer Think Tank',
        description: 'Die weltweit bekannteste Organisation die den menschengemachten Klimawandel leugnet',
        type: 'organization',
        profileImage: 'images/heartland.jpeg',
        x: 900,
        y: 200
      },
      {
        id: 'afd',
        name: 'AfD',
        role: 'Alternative für Deutschland',
        description: 'Rechtspopulistische und rechtsextreme Partei im deutschen Bundestag',
        type: 'party',
        profileImage: 'images/afd.jpg',
        x: 900,
        y: 200
      }
    ],
    connections: [
      { from: 'gebrueder-koch', to: 'koch-industries', label: 'Eigentümer', type: 'eigentümer' },
      { from: 'gebrueder-koch', to: 'heartland-institute', label: 'Finanziert', type: 'finanziert' },
      { from: 'thomas-straubhaar', to: 'eike', label: 'Mitglied des Beirats von EIKE', type: 'mitglied' },
      { from: 'thomas-straubhaar', to: 'friedreich-neumann-stiftung', label: 'Kuratoriumsmitglied', type: 'mitglied' },
      { from: 'michael-limburg', to: 'eike', label: 'Vizepräsident', type: 'vorstand' },
      { from: 'heartland-institute', to: 'eike', label: 'Finanziert', type: 'finanziert' },
      { from: 'heartland-institute', to: 'eike', label: 'entsendet Referenten', type: '' },
      { from: 'eike', to: 'heartland-institute', label: 'entsendet Referenten', type: '' },
      { from: 'michael-limburg', to: 'afd', label: 'Mitglied', type: 'mitglied' },
      { from: 'gebrüder-koch', to: 'heartland-institute', label: 'Finanziert', type: 'finanziert' },
      { from: 'exxon-mobil', to: 'heartland-institute', label: 'Finanziert', type: 'finanziert' }
    ]
  },
  {
    id: 5,
    title: "",
    nodes: [
      {
        id: 'afd',
        name: 'AfD',
        role: 'Alternative für Deutschland',
        description: 'Rechtspopulistische und rechtsextreme Partei im deutschen Bundestag',
        type: 'party',
        profileImage: 'images/afd.jpg',
        x: 300,
        y: 200,
        position: 'center'
      },
      {
        id: 'tino-chrupalla',
        name: 'Tino Chrupalla',
        role: 'Parteivorsitzender der AfD',
        description: 'Zusammen mit Weidel Vorsitzende der AfD',
        type: 'person',
        profileImage: 'images/tino-chrupalla-afd-100-1920x1080.jpg',
        x: 600,
        y: 200
      },
      {
        id: 'eike',
        name: 'EIKE',
        role: 'Europäisches Institut für Klima und Energie',
        description: 'Die Speerspitze der Lobby, die den menschengemachtenKlimawandel leugnet. EIKE ist kein Forschungsinstitut und kein offizielles Institut der EU.',
        type: 'company',
        profileImage: 'images/eike-logo.png',
        x: 900,
        y: 200
      },
      {
        id: 'michael-limburg',
        name: 'Michael Limburg',
        role: 'Ingenieur, Sachbuchautor, Klimawandelleugner und Politiker (AfD)',
        description: 'Mitglied des Bundesfachausschusses Energiepolitik der AfD',
        type: 'person',
        profileImage: 'images/michael-limburg-2017-orig_orig.jpg',
        x: 900,
        y: 200
      },
      {
        id: 'vernunftkraft',
        name: 'Vernunftkraft',
        role: 'Dachverband von Anti-Windkraft-Initiativen',
        description: 'Setzt sich für den Ausbaustopp von Windkraft und Photovoltaik ein.',
        type: 'organization',
        profileImage: 'images/Bundesinitiative_Vernunftkraft.png',
        x: 900,
        y: 200
      },
      {
        id: 'bmwi',
        name: 'BMWI',
        role: 'Bundesministerium für Wirtschaft und Energie',
        description: 'Bundesministerium für Wirtschaft und Energie',
        type: 'ministerium',
        profileImage: 'images/logo_BMWi-e1620979077170.png',
        x: 900,
        y: 200
      }
    ],
    connections: [
      { from: 'afd', to: 'vernunftkraft', label: 'Unterstützt', type: 'unterstützt' },
      { from: 'vernunftkraft', to: 'bmwi', label: 'Pflegt Kontakte', type: 'kontakt' },
      { from: 'vernunftkraft', to: 'eike', label: 'Arbeitet zusammen mit', type: 'zusammenarbeit' },
      { from: 'eike', to: 'afd', label: 'Unterstützt mit Argumenten und Personen', type: 'unterstützt' },
      { from: 'michael-limburg', to: 'eike', label: 'Vizepräsident', type: 'vorstand' },
      { from: 'michael-limburg', to: 'afd', label: 'Mitglied', type: 'mitglied' },
      { from: 'tino-chrupalla', to: 'afd', label: 'Mitglied', type: 'mitglied' },
  
    
    ]
  },
  {
    id: 6,
    title: "",
    nodes: [
      {
        id: 'anja-arndt',
        name: 'Anja Arndt',
        role: 'Politikerin',
        description: 'Mitglied des Europäischen Parlaments für die AfD',
        type: 'person',
        profileImage: 'images/Anja Andt.jpg',
        x: 300,
        y: 201,
        position: 'center'
      },
      {
        id: 'afd',
        name: 'AfD',
        role: 'Alternative für Deutschland',
        description: 'Rechtspopulistische und rechtsextreme Partei im deutschen Bundestag',
        type: 'party',
        profileImage: 'images/afd.jpg',
        x: 600,
        y: 200
      },
      {
        id: 'eike',
        name: 'EIKE',
        role: 'Europäisches Institut für Klima und Energie',
        description: 'Die Speerspitze der Lobby, die den menschengemachtenKlimawandel leugnet. EIKE ist kein Forschungsinstitut und kein offizielles Institut der EU.',
        type: 'company',
        profileImage: 'images/eike-logo.png',
        x: 900,
        y: 200
      },
      {
        id: 'michael-limburg',
        name: 'Michael Limburg',
        role: 'Ingenieur, Sachbuchautor, Klimawandelleugner und Politiker (AfD)',
        description: 'Mitglied des Bundesfachausschusses Energiepolitik der AfD',
        type: 'person',
        profileImage: 'images/michael-limburg-2017-orig_orig.jpg',
        x: 900,
        y: 200
      },
      {
        id: 'werteunion',
        name: 'Werteunion',
        role: 'Verein',
        description: 'Verein besonders rechter CDU-Politiker. welche den Zusammenhang zwischen Klimawandel und dem CO2-Ausstoß leugnen',
        type: 'organization',
        profileImage: 'images/WerteUnion-Logo-Vector.svg.png',
        x: 900,
        y: 200
      },
      {
        id: 'heartland-institute',
        name: 'The Heartland Institute',
        role: 'Amerikanischer konservativer Think Tank',
        description: 'Die weltweit bekannteste Organisation die den menschengemachten Klimawandel leugnet',
        type: 'organization',
        profileImage: 'images/heartland.jpeg',
        x: 900,
        y: 200
      },
      {
        id: 'cdu',
        name: 'CDU',
        role: 'Christlich Demokratische Union',
        description: 'Christdemokratische, konservative ind wirtschaftsliberale Partei im deutschen Bundestag',
        type: 'party',
        profileImage: 'images/	OIP (1).jpg',
        x: 900,
        y: 200
      },
      {
        id: 'friedrich-merz',
        name: 'Friedrich Merz',
        role: 'Bundeskanzler',
        description: 'Mitglied der CDU',
        type: 'person',
        profileImage: 'images/fritze merz.jpg',
        x: 900,
        y: 200
      },
      {
        id: 'blackrock',
        name: 'Blackrock',
        role: 'US-amerikanische Investmentgesellschaft',
        description: 'Der größte Vermögensverwalter und gleichzeitig das einflussreichste Finanzunternehmen der Welt',
        type: 'company',
        profileImage: 'images/black rock.jpg',
        x: 900,
        y: 200
      },  {
        id: 'exxon-mobil',
        name: 'Exxon Mobil',
        role: 'US-amerikanische Unternehmen',
        description: 'Exxon Mobil ist ein US-amerikanisches Unternehmen im Bereich der Mineralöle ',
        type: 'company',
        profileImage: 'images/Exxon-Mobil-Corporation-Logo.png',
        x: 900,
        y: 200
      },  {
        id: 'saudi-aramco',
        name: 'Saudi Aramco',
        role: 'Saudi-arabische Ölgesellschaft',
        description: 'Die weltgrößte Erdölfördergesellschaft',
        type: 'company',
        profileImage: 'images/aramco.jpg',
        x: 900,
        y: 200
      },
    ],
    connections: [
      { from: 'anja-arndt', to: 'afd', label: 'Mitglied', type: 'mitglied' },
      { from: 'michael-limburg', to: 'eike', label: 'Vizepräsident', type: 'vorstand' },
      { from: 'michael-limburg', to: 'afd', label: 'Mitglied', type: 'mitglied' },
      { from: 'eike', to: 'afd', label: 'Steht nahe', type: 'steht nahe' },
      { from: 'cdu', to: 'werteunion', label: 'Mitglieder gehören an', type: 'verbunden' },
      { from: 'werteunion', to: 'cdu', label: 'Mitglieder gehören an', type: 'verbunden' },
      { from: 'friedrich-merz', to: 'cdu', label: 'Mitglied', type: 'mitglied' },
      { from: 'friedrich-merz', to: 'blackrock', label: 'vertrat Unternehmensinteressen', type: 'vertrat' },
      { from: 'blackrock', to: 'saudi-aramco', label: 'investiert', type: 'investiert' },
      { from: 'blackrock', to: 'exxon-mobil', label: 'investiert', type: 'investiert' },
      { from: 'exxon-mobil', to: 'heartland-institute', label: 'finanziert', type: 'finanziert' },
      { from: 'heartland-institute', to: 'eike', label: 'finanziert', type: 'finanziert' },
    
    ]
  },
  {
    id: 7, 
    title: "",
    nodes: [
      {
        id: 'peabody-energy',
        name: 'Peabody Energy',
        role: 'US-amerikanische Kohlegesellschaft',
        description: 'Die größte Kohlegesellschaft der Welt',
        type: 'organization',
        profileImage: 'images/Peabody.jpeg',
        x: 300, // Links
        y: 350,
       
      },
      {
        id: 'william-happer',
        name: 'William Happer',
        role: 'Professor für Physik an der Princeton University',
        description: 'Professor für Physik an der Princeton University',
        type: 'person',
        profileImage: 'images/william-happer-66d9ce64-3b97-4c64-96f7-e2402f052d9-resize-750.jpg',
        x: 900, // Rechts
        y: 350,
        position: 'center'
      },
      {
        id: 'eike',
        name: 'EIKE',
        role: 'Europäisches Institut für Klima und Energie',
        description: 'Die Speerspitze der Lobby, die den menschengemachtenKlimawandel leugnet. EIKE ist kein Forschungsinstitut und kein offizielles Institut der EU.',
        type: 'person',
        profileImage: 'images/eike-logo.png',
        x: 900, // Rechts
        y: 350,
       
      },
      {
        id: 'heartland-institute',
        name: 'The Heartland Institute',
        role: 'Amerikanischer konservativer Think Tank',
        description: 'Die weltweit bekannteste Organisation die den menschengemachten Klimawandel leugnet',
        type: 'person',
        profileImage: 'images/heartland.jpeg',
        x: 900, // Rechts
        y: 350,
       
      },{
        id: 'gebrüder-koch',
        name: 'Gebäudeer-Koch',
        role: 'Industrieller',
        description: 'Eigentümer von Peabody Energy',
        type: 'person',
        profileImage: 'images/kochbrueder-mit-bu.jpg',
        x: 900, // Rechts
        y: 350,
   
      },{
        id: 'koch-industries',
        name: 'Koch Industries',
        role: 'US-amerikanische Industrieunternehmen',
        description: 'Das Mischunternehmen ist in 50 Ländern unter anderem in den Produktionsbereichen Erdöl, Erdgas, Chemie, Energie, Asphalt, Kunstdünger, Nahrungsmittel und Kunststoff tätig',
        type: 'person',
        profileImage: 'images/koch-industries_416x416.jpg',
        x: 900, // Rechts
        y: 350,
        
      },{
        id: 'co2-coalition',
        name: 'CO2 Coalition',
        role: 'Konservativer Think Tank und Klimaleugnerorganisation',
        description: 'Wurde gegründet, um den wissenschaftlichen konsens zu menschengemachten globalen Erwärmung zu bestreiten',
        type: 'person',
        profileImage: 'images/CO2-Coalition-Chat-landscape-resize.webp',
        x: 900, // Rechts
        y: 350,
        
      },{
        id: 'afd',
        name: 'AfD',
        role: 'Alternative für Deutschland',
        description: 'Rechtspopulistische und rechtsextreme Partei im deutschen Bundestag',
        type: 'person',
        profileImage: 'images/afd.jpg',
        x: 900, // Rechts
        y: 350,
        
      },{
        id: 'michael-limburg',
        name: 'Michael Limburg',
        role: 'Ingenieur, Sachbuchautor, Klimawandelleugner und Politiker (AfD)',
        description: 'Mitglied des Bundesfachausschusses Energiepolitik der AfD',
        type: 'person',
        profileImage: 'images/michael-limburg-2017-orig_orig.jpg',
        x: 900, // Rechts
        y: 350,
        
      },{
        id: 'thomas-straubhaar',
        name: 'Thomas Straubhaar',
        role: 'Schweizer Ökonom und Migrationsforscher',
        description: 'Wirtschaftswissenschaftler und ehemaliger Direktor des Hamburgischen Weltwirtschaftsinstituts',
        type: 'person',
        profileImage: 'images/csm_StraubhaarThomas_c_Claudia_Hoehne_web_ee0ef03490.jpg',
        x: 900, // Rechts
        y: 350,
        
      },{
        id: 'friedreich-neumann-stiftung',
        name: 'Friedreich Neumann Stiftung',
        role: 'FDP nahe Stiftung',
        description: 'Liberale politische Stiftung mit Nähe zur FDP',
        type: 'organization',
        profileImage: 'images/Friedrich-Naumann-Foundation.jpg',
        x: 200,
        y: 180
      },

    ],
    connections: [
      { from: 'peabody-energy', to: 'william-happer', label: 'Finanziert', type: 'finanziert' },
      { from: 'william-happer', to: 'heartland-institute', label: 'Veröffentlicht Artikel und wird eingeladen', type: 'veröffentlicht' },
      { from: 'william-happer', to: 'co2-coalition', label: 'Mitgründer', type: 'mitglied' },
      { from: 'eike', to: 'heartland-institute', label: 'Entsendet Referenten', type: 'unterstützt' },
      { from: 'heartland-institute', to: 'eike', label: 'Entsendet Referenten', type: 'unterstützt' },
      { from: 'heartland-institute', to: 'eike', label: 'Finanziert', type: 'finanziert' },
      { from: 'gebrüder-koch', to: 'koch-industries', label: 'Eigentümer', type: 'eigentümer' },
      { from: 'koch-industries', to: 'co2-coalition', label: 'Finanziert', type: 'finanziert' },
      { from: 'michael-limburg', to: 'eike', label: 'Vizepräsident', type: 'vorstand' },
      { from: 'michael-limburg', to: 'afd', label: 'Mitglied', type: 'mitglied' },
      { from: 'thomas-straubhaar', to: 'friedreich-neumann-stiftung', label: 'Mitglied', type: 'mitglied' },
      { from: 'thomas-straubhaar', to: 'eike', label: 'Mitglied des Beirats', type: 'mitglied' },
     
    ]
  },
  {
    id: 8,
    title: "",
    nodes: [
      {
        id: 'marcus-woeller',
        name: 'Marcus Woeller',
        role: 'Redakteur bei WELT',
        description: 'Redakteur bei WELT',
        type: 'person',
        profileImage: 'images/Marcus Woeller.png',
        x: 300,
        y: 200,
        position: 'center'
      },
      {
        id: 'die-welt',
        name: 'Die Welt',
        role: 'Deutsche Zeitung',
        description: 'Eine überregionale deutsche Tageszeitung',
        type: 'person',
        profileImage: 'images/Design-ohne-Titel-66-585x585.png',
        x: 600,
        y: 200,
      },
      {
        id: 'axel-springer',
        name: 'Axel Springer SE',
        role: 'Deutscher Medienkonzern',
        description: 'Ein Medienkonzern mit mehreren multimedialen Marken, wie BILD, Welt, Business Insider, Politico, Nius, etc.',
        type: 'company',
        profileImage: 'images/Bildschirmfoto-2017-03-14-um-17.15.05.png',
        x: 900,
        y: 200,
        
      },
      {
        id: 'kkr',
        name: 'KKR & Co.',
        role: 'Kohlberg Kavis Roberts & Co. Investmentgesellschaft',
        description: 'Investiert umfangreich in fossile Energieträger und betreibt Lobbyarbeit zum Thema Energie',
        type: 'company',
        profileImage: 'images/kkr_logo.jpg',
        x: 900,
        y: 200,
        
      },
      {
        id: 'bild',
        name: 'Die BILD',
        role: 'Deutsche Zeitung',
        description: 'Eine überregionale deutsche Tageszeitung',
        type: 'company',
        profileImage: 'images/BILD.png',
        x: 900,
        y: 200,
        
      }
    ],
    connections: [
      { from: 'marcus-woeller', to: 'die-welt', label: 'Arbeitet bei', type: 'arbeitet bei' },
      { from: 'die-welt', to: 'axel-springer', label: 'Gehört zu', type: 'gehört zu' },
      { from: 'axel-springer', to: 'die-welt', label: 'Beeinflusst', type: 'beeinflußt' },
      { from: 'axel-springer', to: 'bild', label: 'Beeinflusst', type: 'beeinflußt' },
      { from: 'bild', to: 'axel-springer', label: 'Gehört zu', type: 'gehört zu' }, 
      { from: 'kkr', to: 'axel-springer', label: 'Übernahm größteil der Aktien', type: 'eigentümer' }, 
   
    ]
  },
  {
    id: 9,
    title: "",
    nodes: [
      {
        id: 'heartland-institute',
        name: 'The Heartland Institute',
        role: 'US Thinktank',
        description: 'Die weltweit bekannteste Organisation die den menschengemachten Klimawandel leugnet',
        type: 'organization',
        profileImage: 'images/heartland.jpeg',
        x: 200,
        y: 500
      },
      {
        id: 'eike',
        name: 'EIKE',
        role: 'Europäisches Institut für Klima und Energie',
        description: 'Speerspitze der Lobby, die den menschengemachten Klimawandel leugnet. EIKE ist kein Forschungsinstitut und kein offizielles Institut der EU.',
        type: 'institute',
        profileImage: 'images/eike-logo.png',
        x: 200,
        y: 150
      },
      {
        id: 'javier-milei',
        name: 'Javier Milei',
        role: 'Argentinischer Präsident',
        description: 'Javier Milei ist Argentiniens rechtslibertärer Präsident und radikaler Marktfundamentalist, der den Klimawandel leugnet.',
        type: 'person',
        profileImage: 'images/Milei_telam_01_port.jpg',
        x: 600,
        y: 60
      },
      {
        id: 'hayek',
        name: 'Hayek-Gesellschaft',
        role: 'Wirtschaftswissenschaftlicher Thinktank',
        description: 'Lehnen Klimaschutzgesetze ab und sind eng verbunden mit EIKE',
        type: 'organization',
        profileImage: 'images/Logo_Hayek_Gesellschaft.svg.png',
        x: 900,
        y: 100
      },
      {
        id: 'beatrix-von-storch',
        name: 'Beatrix von Storch',
        role: 'Politikerin (AfD)',
        description: 'Mitglied des Bundestags für die AfD',
        type: 'person',
        profileImage: 'images/147592438-h-720.jpg',
        x: 600,
        y: 250,
        position: 'center'
      },
      {
        id: 'michael-limburg',
        name: 'Michael Limburg',
        role: 'Ingenieur, Sachbuchautor, Klimawandelleugner und Politiker (AfD)',
        description: 'Mitglied des Bundesfachausschusses Energiepolitik der AfD',
        type: 'person',
        profileImage: 'images/michael-limburg-2017-orig_orig.jpg',
        x: 600,
        y: 400
      },
      {
        id: 'afd',
        name: 'AfD',
        role: 'Alternative für Deutschland',
        description: 'Rechtspopulistische und rechtsextreme Partei im deutschen Bundestag',
        type: 'person',
        profileImage: 'images/afd.jpg',
        x: 900, // Rechts
        y: 350,
      },
      {
        id: 'werteunion',
        name: 'Werteunion',
        role: 'Verein rechter CDU-Politiker',
        description: 'Verein besonders rechter CDU-Politiker, welche den Zusammenhang zwischen Klimawandel und dem CO2-Ausstoß leugnen',
        type: 'organization',
        profileImage: 'images/WerteUnion-Logo-Vector.svg-.png',
        x: 1050,
        y: 300
      }
    ],
    connections: [
      { from: 'heartland-institute', to: 'eike', label: 'finanziert', type: 'finanziert' },
      { from: 'heartland-institute', to: 'eike', label: 'Entsendet Referenten', type: 'unterstützt' },
      { from: 'eike', to: 'heartland-institute', label: 'Entsendet Referenten', type: 'unterstützt' },
      { from: 'michael-limburg', to: 'eike', label: 'Vizepräsident', type: 'vorstand' },
      { from: 'michael-limburg', to: 'afd', label: 'Mitglied', type: 'mitglied' },
      { from: 'beatrix-von-storch', to: 'afd', label: 'Mitglied', type: 'mitglied' }, 
      { from: 'werteunion', to: 'afd', label: 'Steht der AfD nahe', type: 'steht nahe' },
      { from: 'hayek', to: 'javier-milei', label: 'Überreicht Medaille', type: 'auszeichnung' },
      { from: 'hayek', to: 'eike', label: 'Personelle und ideelle Verflechtungen', type: 'zusammenarbeit' },
      { from: 'eike', to: 'hayek', label: 'Personelle und ideelle Verflechtungen', type: 'zusammenarbeit' },
    ]
  },
  {
    id: 10,
    title: "",
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
        profileImage: 'images/placeholder.jpg',
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
        profileImage: 'images/placeholder.jpg',
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
    title: "",
    nodes: [
      {
        id: 'heartland-institute',
        name: 'The Heartland Institute',
        role: 'US Thinktank',
        description: 'Die weltweit bekannteste Organisation die den menschengemachten Klimawandel leugnet',
        type: 'organization',
        profileImage: 'images/heartland.jpeg',
        x: 200,
        y: 500
      },
      {
        id: 'eike',
        name: 'EIKE',
        role: 'Europäisches Institut für Klima und Energie',
        description: 'Speerspitze der Lobby, die den menschengemachten Klimawandel leugnet. EIKE ist kein Forschungsinstitut und kein offizielles Institut der EU.',
        type: 'institute',
        profileImage: 'images/eike-logo.png',
        x: 200,
        y: 150
      },
      {
        id: 'javier-milei',
        name: 'Javier Milei',
        role: 'Argentinischer Präsident',
        description: 'Javier Milei ist Argentiniens rechtslibertärer Präsident und radikaler Marktfundamentalist, der den Klimawandel leugnet.',
        type: 'person',
        profileImage: 'images/Milei_telam_01_port.jpg',
        x: 600,
        y: 60
      },
      {
        id: 'hayek',
        name: 'Hayek-Gesellschaft',
        role: 'Wirtschaftswissenschaftlicher Thinktank',
        description: 'Lehnen Klimaschutzgesetze ab und sind eng verbunden mit EIKE',
        type: 'organization',
        profileImage: 'images/Logo_Hayek_Gesellschaft.svg.png',
        x: 900,
        y: 100
      },
      {
        id: 'beatrix-von-storch',
        name: 'Beatrix von Storch',
        role: 'Politikerin (AfD)',
        description: 'Mitglied des Bundestags für die AfD',
        type: 'person',
        profileImage: 'images/147592438-h-720.jpg',
        x: 600,
        y: 250,
        position: 'center'
      },
      {
        id: 'michael-limburg',
        name: 'Michael Limburg',
        role: 'Ingenieur, Sachbuchautor, Klimawandelleugner und Politiker (AfD)',
        description: 'Mitglied des Bundesfachausschusses Energiepolitik der AfD',
        type: 'person',
        profileImage: 'images/michael-limburg-2017-orig_orig.jpg',
        x: 600,
        y: 400
      },
      {
        id: 'afd',
        name: 'AfD',
        role: 'Alternative für Deutschland',
        description: 'Rechtspopulistische und rechtsextreme Partei im deutschen Bundestag',
        type: 'person',
        profileImage: 'images/afd.jpg',
        x: 900, // Rechts
        y: 350,
      },
      {
        id: 'werteunion',
        name: 'Werteunion',
        role: 'Verein rechter CDU-Politiker',
        description: 'Verein besonders rechter CDU-Politiker, welche den Zusammenhang zwischen Klimawandel und dem CO2-Ausstoß leugnen',
        type: 'organization',
        profileImage: 'images/WerteUnion-Logo-Vector.svg-.png',
        x: 1050,
        y: 300
      }
    ],
    connections: [
      { from: 'heartland-institute', to: 'eike', label: 'finanziert', type: 'finanziert' },
      { from: 'heartland-institute', to: 'eike', label: 'Entsendet Referenten', type: 'unterstützt' },
      { from: 'eike', to: 'heartland-institute', label: 'Entsendet Referenten', type: 'unterstützt' },
      { from: 'michael-limburg', to: 'eike', label: 'Vizepräsident', type: 'vorstand' },
      { from: 'michael-limburg', to: 'afd', label: 'Mitglied', type: 'mitglied' },
      { from: 'beatrix-von-storch', to: 'afd', label: 'Mitglied', type: 'mitglied' }, 
      { from: 'werteunion', to: 'afd', label: 'Steht der AfD nahe', type: 'steht nahe' },
      { from: 'hayek', to: 'javier-milei', label: 'Überreicht Medaille', type: 'auszeichnung' },
      { from: 'hayek', to: 'eike', label: 'Personelle und ideelle Verflechtungen', type: 'zusammenarbeit' },
      { from: 'eike', to: 'hayek', label: 'Personelle und ideelle Verflechtungen', type: 'zusammenarbeit' },
    ]
  },
  {
    id: 13,
    title: "",
    nodes: [
      {
        id: 'heartland-institute',
        name: 'The Heartland Institute',
        role: 'US Thinktank',
        description: 'Die weltweit bekannteste Organisation die den menschengemachten Klimawandel leugnet',
        type: 'organization',
        profileImage: 'images/heartland.jpeg',
        x: 350,
        y: 100
      },
      {
        id: 'eike',
        name: 'EIKE',
        role: 'Europäisches Institut für Klima und Energie',
        description: 'Speerspitze der Lobby, die den menschengemachten Klimawandel leugnet. EIKE ist kein Forschungsinstitut und kein offizielles Institut der EU.',
        type: 'institute',
        profileImage: 'images/eike-logo.png',
        x: 600,
        y: 100
      },
      {
        id: 'martina-böswald',
        name: 'Martina Böswald',
        role: 'Politikerin (AfD)',
        description: 'Kommunikationsleiterin der AfD',
        type: 'person',
        profileImage: 'images/Martina Böswald.jpg',
        x: 475,
        y: 250,
        position: 'center'
      },
      {
        id: 'afd',
        name: 'AfD',
        role: 'Alternative für Deutschland',
        description: 'Rechtspopulistische und rechtsextreme Partei im deutschen Bundestag',
        type: 'party',
        profileImage: 'images/afd.jpg',
        x: 475,
        y: 400
      },
      {
        id: 'werteunion',
        name: 'Werteunion',
        role: 'Verein rechter CDU-Politiker',
        description: 'Verein besonders rechter CDU-Politiker, welche den Zusammenhang zwischen Klimawandel und dem CO2-Ausstoß leugnen',
        type: 'organization',
        profileImage: 'images/WerteUnion-Logo-Vector.svg-.png',
        x: 200,
        y: 400
      },
      {
        id: 'michael-limburg',
        name: 'Michael Limburg',
        role: 'Ingenieur, Sachbuchautor, Klimawandelleugner und Politiker (AfD)',
        description: 'Mitglied des Bundesfachausschusses Energiepolitik der AfD',
        type: 'person',
        profileImage: 'images/michael-limburg-2017-orig_orig.jpg',
        x: 700,
        y: 400
      }
    ],
    connections: [
      { from: 'heartland-institute', to: 'eike', label: 'Entsendet Referenten', type: 'unterstützt' },
      { from: 'eike', to: 'heartland-institute', label: 'Entsendet Referenten', type: 'unterstützt' },
      { from: 'heartland-institute', to: 'eike', label: 'Finanziert', type: 'finanziert' },
      { from: 'martina-böswald', to: 'afd', label: 'Mitglied', type: 'mitglied' },
      { from: 'werteunion', to: 'afd', label: 'Steht der AfD nahe', type: 'steht nahe' },
      { from: 'michael-limburg', to: 'eike', label: 'Vizepräsident', type: 'vorstand' },
      { from: 'michael-limburg', to: 'afd', label: 'Mitglied', type: 'mitglied' }
    ]
  },
  {
    id: 14,
    title: "",
    nodes: [
      {
        id: 'gebrueder-koch',
        name: 'Gebrüder Koch',
        role: 'Charles und David Koch',
        description: 'Charles und David Koch stehen Koch Industries vor und stecken viel Geld in die US-Politik, in Kandidaten, Verbände und Denkfabriken',
        type: 'person',
        profileImage: 'images/kochbrueder-mit-bu.jpg',
        x: 420,
        y: 60
      },
      {
        id: 'koch-industries',
        name: 'Koch Industries',
        role: 'US-amerikanische Industrieunternehmen',
        description: 'Das Mischunternehmen ist in 50 Ländern unter anderem in den Produktionsbereichen Erdöl, Erdgas, Chemie, Energie, Asphalt, Kunstdünger, Nahrungsmittel und Kunststoff tätig',
        type: 'person',
        profileImage: 'images/koch-industries_416x416.jpg',
        x: 900, // Rechts
        y: 350,
      },
      {
        id: 'exxonmobil',
        name: 'ExxonMobil',
        role: 'US-amerikanisches Unternehmen',
        description: 'Im Bereich Mineralöle tätig',
        type: 'company',
        profileImage: 'images/Exxon-Mobil-Corporation-Logo.png',
        x: 420,
        y: 320
      },
      {
        id: 'heartland-institute',
        name: 'The Heartland Institute',
        role: 'Die weltweit bekannteste Organisation die den menschengemachten Klimawandel leugnet',
        description: 'US Think Tank',
        type: 'organization',
        profileImage: 'images/heartland.jpeg',
        x: 700,
        y: 200,
        position: 'center'
      },
      {
        id: 'eike',
        name: 'EIKE',
        role: 'Europäisches Institut für Klima und Energie',
        description: 'Kein Forschungsinstitut und kein offizielles Institut der EU, leugnen ebenfalls den menschengemachten Klimawandel',
        type: 'institute',
        profileImage: 'images/eike-logo.png',
        x: 1000,
        y: 60
      },
      {
        id: 'acnr',
        name: 'American Consolidated Natural Resources',
        role: 'Ehemaliges US-amerikanisches Unternehmen',
        description: 'War im Bereich Kohlebergbau tätig',
        type: 'company',
        profileImage: 'images/OIP.jpg',
        x: 700,
        y: 320
      },
      {
        id: 'michael-limburg',
        name: 'Michael Limburg',
        role: 'Klimawandelleugner',
        description: 'Klimawandelleugner und AfD-Politiker',
        type: 'person',
        profileImage: 'images/michael-limburg-2017-orig_orig.jpg',
        x: 1200,
        y: 200
      },
      {
        id: 'afd',
        name: 'AfD',
        role: 'Alternative für Deutschland',
        description: 'Rechtspopulistische und rechtsextreme Partei im deutschen Bundestag',
        type: 'party',
        profileImage: 'images/afd.jpg',
        x: 1200,
        y: 400
      }
    ],
    connections: [
      { from: 'gebrueder-koch', to: 'koch-industries', label: 'Eigentümer', type: 'eigentümer' },
      { from: 'gebrueder-koch', to: 'heartland-institute', label: 'finanziert', type: 'finanziert' },
      { from: 'exxonmobil', to: 'heartland-institute', label: 'finanziert', type: 'finanziert' },
      { from: 'acnr', to: 'heartland-institute', label: 'finanziert', type: 'finanziert' },
      { from: 'heartland-institute', to: 'eike', label: 'finanziert', type: 'finanziert' },
      { from: 'heartland-institute', to: 'eike', label: 'entsendet Referenten', type: 'zusammenarbeit' },
      { from: 'eike', to: 'michael-limburg', label: 'Vizepräsident', type: 'vorstand' },
      { from: 'michael-limburg', to: 'afd', label: 'Mitglied', type: 'mitglied' }
    ]
  },
  {
    id: 15,
    title: "Netzwerk 15",
    nodes: [
      {
        id: 'twitter',
        name: 'X (Twitter)',
        role: 'Soziales Netzwerk, aufgekauft von Elon Musk',
        description: 'Soziales Netzwerk, das Nutzern ermöglicht, kurze Textnachrichten sowie Fotos und Videos zu veröffentlichen',
        type: 'company',
        profileImage: 'images/twitter.jpg',
        x: 350,
        y: 60
      },
      {
        id: 'elon-musk',
        name: 'Elon Musk',
        role: 'Unternehmer',
        description: 'Elon Musk ist Unternehmer und Chef von Tesla',
        type: 'person',
        profileImage: 'images/gettyimages-2217121829.jpg',
        x: 600,
        y: 120
      },
      {
        id: 'alice-weidel',
        name: 'Alice Weidel',
        role: 'Vorsitzende der AfD',
        description: 'Mitglied des Bundestags der AfD',
        type: 'person',
        profileImage: 'images/alice-weidel-musk-100-1920x1080.jpg',
        x: 475,
        y: 250,
        position: 'center'
      },
      {
        id: 'afd',
        name: 'AfD',
        role: 'Alternative für Deutschland',
        description: 'Rechtspopulistische und rechtsextreme Partei im deutschen Bundestag',
        type: 'party',
        profileImage: 'images/afd.jpg',
        x: 200,
        y: 250
      },
      {
        id: 'eike',
        name: 'EIKE',
        role: 'Europäisches Institut für Klima und Energie',
        description: 'Kein Forschungsinstitut und kein offizielles Institut der EU, leugnen ebenfalls den menschengemachten Klimawandel',
        type: 'institute',
        profileImage: 'images/eike-logo.png',
        x: 200,
        y: 500
      },
      {
        id: 'pws',
        name: 'PWS',
        role: 'Pharmawholesale International AG',
        description: 'Aktiengesellschaft gegründet in Zürich, handelt mit chemischen und kosmetischen Produkten',
        type: 'company',
        profileImage: 'images/die-pws-pharma-whole-sale-international-ag-hat-ihren-sitz-in-zurich-fluntern.jpg',
        x: 700,
        y: 250
      },
      {
        id: 'hayek',
        name: 'Hayek-Gesellschaft',
        role: 'Wirtschaftswissenschaftlicher Thinktank',
        description: 'Lehnen Klimaschutzgesetze ab und sind eng verbunden mit EIKE',
        type: 'organization',
        profileImage: 'images/Logo_Hayek_Gesellschaft.svg.png',
        x: 900,
        y: 100
      }
    ],
    connections: [
      { from: 'twitter', to: 'elon-musk', label: 'gehört Elon Musk', type: 'eigentümer' },
      { from: 'elon-musk', to: 'alice-weidel', label: 'Im Gespräch mit', type: 'kontakt' },
      { from: 'elon-musk', to: 'afd', label: 'Im Gespräch mit', type: 'kontakt' },
      { from: 'alice-weidel', to: 'elon-musk', label: 'Im Gespräch mit', type: 'unterstützt' },
      { from: 'alice-weidel', to: 'afd', label: 'Mitglied', type: 'mitglied' },
      { from: 'eike', to: 'afd', label: 'Arbeitet zusammen', type: 'zusammenarbeit' },
      { from: 'pws', to: 'alice-weidel', label: 'Spendenskandal', type: 'finanziert' }, 
      { from: 'alice-weidel', to: 'hayek', label: 'Mitglied', type: 'mitglied' },
      { from: 'hayek', to: 'eike', label: 'Personelle und ideelle Verflechtungen', type: 'zusammenarbeit' }
    ]
  },
  {
    id: 16,
    title: "",
    nodes: [
      {
        id: 'koch-industries',
        name: 'Koch Industries',
        role: 'US-amerikanische Industrieunternehmen',
        description: 'Das Mischunternehmen ist in 50 Ländern unter anderem in den Produktionsbereichen Erdöl, Erdgas, Chemie, Energie, Asphalt, Kunstdünger, Nahrungsmittel und Kunststoff tätig',
        type: 'person',
        profileImage: 'images/koch-industries_416x416.jpg',
        x: 900, // Rechts
        y: 350,
      },
      {
        id: 'gebrueder-koch',
        name: 'Gebrüder Koch',
        role: 'Charles und David Koch',
        description: 'Charles und David Koch stehen Koch Industries vor und stecken viel Geld in die US-Politik, in Kandidaten, Verbände und Denkfabriken',
        type: 'person',
        profileImage: 'images/kochbrueder-mit-bu.jpg',
        x: 350,
        y: 150
      },
      {
        id: 'heartland-institute',
        name: 'The Heartland Institute',
        role: 'Die weltweit bekannteste Organisation die den menschengemachten Klimawandel leugnet',
        description: 'US Think Tank',
        type: 'organization',
        profileImage: 'images/heartland.jpeg',
        x: 350,
        y: 300
      },
      {
        id: 'eike',
        name: 'EIKE',
        role: 'Europäisches Institut für Klima und Energie',
        description: 'Kein Forschungsinstitut und kein offizielles Institut der EU, leugnen ebenfalls den menschengemachten Klimawandel',
        type: 'institute',
        profileImage: 'images/eike-logo.png',
        x: 600,
        y: 300
      },
      {
        id: 'afd',
        name: 'AfD',
        role: 'Alternative für Deutschland',
        description: 'Rechtspopulistische und rechtsextreme Partei im deutschen Bundestag',
        type: 'party',
        profileImage: 'images/afd.jpg',
        x: 600,
        y: 100
      },
      {
        id: 'hayek',
        name: 'Hayek-Gesellschaft',
        role: 'Wirtschaftswissenschaftlicher Thinktank',
        description: 'Lehnen Klimaschutzgesetze ab und sind eng verbunden mit EIKE',
        type: 'organization',
        profileImage: 'images/Logo_Hayek_Gesellschaft.svg.png',
        x: 900,
        y: 100
      },
      {
        id: 'vernunftkraft',
        name: 'Vernunftkraft',
        role: 'Dachverband von Anti-Windkraft-Initiativen',
        description: 'Setzt sich für den Ausbaustopp von Windkraft und Photovoltaik ein.',
        type: 'organization',
        profileImage: 'images/Bundesinitiative_Vernunftkraft.png',
        x: 900,
        y: 500
      }
    ],
    connections: [
      { from: 'gebrueder-koch', to: 'koch-industries', label: 'Eigentümer', type: 'eigentümer' },
      { from: 'gebrueder-koch', to: 'heartland-institute', label: 'finanziert', type: 'finanziert' },
      { from: 'heartland-institute', to: 'eike', label: 'Entsendet Referenten', type: 'unterstützt' },
      { from: 'heartland-institute', to: 'eike', label: 'Finanziert', type: 'finanziert' },
      { from: 'eike', to: 'heartland-institute', label: 'Entsendet Referenten', type: 'unterstützt' },
      { from: 'afd', to: 'hayek', label: 'Mitglieder gehören an', type: 'mitglied' },
      { from: 'hayek', to: 'eike', label: 'Personelle und ideelle Verflechtungen', type: 'zusammenarbeit' },
      { from: 'afd', to: 'vernunftkraft', label: 'Unterstützt', type: 'unterstützt' },
      { from: 'vernunftkraft', to: 'eike', label: 'Unterstützt', type: 'unterstützt' },
      { from: 'afd', to: 'eike', label: 'Arbeitet zusammen', type: 'zusammenarbeit' },
      { from: 'eike', to: 'afd', label: 'Arbeitet zusammen', type: 'zusammenarbeit' },
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
  profileImage: imagePath ? `images/${imagePath}` : undefined,
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