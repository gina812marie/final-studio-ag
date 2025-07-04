// Zentrale Datei für alle Behauptungen und deren Inhalte
export interface ClaimData {
  id: number;
  frontContent: {
    title: string;
    subtitle?: string;
    description: string;
    image?: string;
    source?: string; // Quelle auch für Vorderseite
  };
  backContent: {
    title: string;
    content: string;
    source?: string;
  };
}

export const claimsData: ClaimData[] = [
  {
    id: 1,
    frontContent: {
      title: 'Es gibt einen Zwang zu Wärmepumpen!',
      subtitle: '"Es muss Schluss sein mit dem Zwang zur Wärmepumpe."',
      description: 'Katherina Reiche fordert in einem Interview mit dem Handelsblatt, dass der „Zwang zur Wärmepumpe" ein Ende haben müsse, da Klimaschutz nicht das alleinige Ziel sein könne und Technologieoffenheit gebraucht werde.',
      image: '/images/Wärmepumpe_1 1.png',
      source: 'Handelsblatt, Grüne kritisieren Reiches Aussagen zur Wärmepumpe'
    },
    backContent: {
      title: 'Von einem „Wärmepumpenzwang" war nie die Rede',
      content: 'Das Gebäudeenergiegesetz schreibt keinen Zwang zur Wärmepumpe vor, sondern fordert, dass Heizungen ab 2024 mindestens 65 % erneuerbare Energien nutzen müssen. Diese Vorgabe kann mit verschiedenen Technologien erfüllt werden, darunter Wärmepumpen, Biomasseheizungen, Fernwärme oder hybride Systeme. Die Regelung ist technologieoffen und erlaubt den Eigentümern Wahlfreiheit bei der Heizungsart, solange die Klimaziele eingehalten werden. Dadurch sollen sowohl Klimaschutz als auch praktikable Lösungen für unterschiedliche Gebäudetypen und regionale Gegebenheiten ermöglicht werden.',
      source: 'Gebäudeenergiegesetz, GEG'
    }
  },
  {
    id: 2,
    frontContent: {
      title: 'CO₂-Wert am Rekordtief',
      subtitle: 'Der heutige CO₂-Wert liegt nahe einem Rekordtief, nicht aber ein gefährliches Rekordhoch.',
      description: 'Professor William Happer, Physikprofessor an der Princeton University, veröffentlichte ein Paper zu seiner Klimathese. Darin führt er aus, dass die heutige CO₂-Konzentration im Vergleich zu den Werten vor 600 Millionen Jahren deutlich niedriger sei - nahezu auf einem Rekordtief. Daraus schlussfolgert er, dass höhere CO₂-Konzentrationen in der Vergangenheit dem Leben auf der Erde nicht geschadet hätten und daher auch heute unbedenklich seien.',
      image: '/images/DinosaurierLiegestuhl_2G 1.png',
      source: 'Critical Comment on Professor HAPPERS Climate Theses; Kanal: Grenzen des Wissens'
    },
    backContent: {
      title: 'Happers Vergleich hinkt',
      content: 'Grundsätzlich ist Professor Happers Aussage über frühere CO₂-Konzentrationen korrekt. Die Schlussfolgerung jedoch, dass der heutige Klimawandel deshalb unbedenklich sei, ist irreführend.\n\nLaut dem emeritierten Physikprofessor Ganteför (ehemals Universität Konstanz) verwendet Happer einen methodischen Trick: Während Klimaforscher üblicherweise Zeiträume von etwa einer Million Jahren betrachten, innerhalb derer die heutige CO₂-Konzentration ein Rekordhoch darstellt, dehnt Happer den Vergleichszeitraum auf 600 Millionen Jahre aus. Dadurch kann er zeigen, dass es in der fernen Erdvergangenheit höhere CO₂-Werte gab.\n\nDas Problem dabei: Der Mensch und seine Zivilisation haben sich an das vergleichsweise stabile Klima der letzten Million Jahre angepasst. Ändert sich dieses Klima rapide, bedeutet das zwar kein sofortiges Aussterben – aber eine drastische Verschlechterung der Lebensbedingungen.',
      source: 'Critical Comment on Professor HAPPERS Climate Theses; Kanal: Grenzen des Wissens'
    }
  },
  {
    id: 3,
    frontContent: {
      title: 'Reißt die Windkrafträder ab!',
      subtitle: '"Und ich kann Ihnen sagen, wenn wir am Ruder sind, wir reißen alle Windkraftwerke nieder. Nieder mit diesen Windmühlen der Schande."',
      description: 'Alice Weidel kündigt an, im Falle einer Regierungsbeteiligung sämtliche Windkraftanlagen abzureißen und bezeichnete sie als „Windmühlen der Schande", die das Landschaftsbild und die Energiepolitik negativ prägen würden.',
      image: '/images/BaggerWindrad_3 2.png',
      source: 'tagesschau, Was ist dran an den Behauptungen über Windkraft?'
    },
    backContent: {
      title: 'Windkraft ist wichtig für den Standort Deutschland',
      content: 'Windkraft ist ein zentraler Bestandteil der deutschen Stromversorgung und liefert inzwischen über 25 % des Stroms. Stand 2023 gibt es rund 30.000 Windkraftanlagen an Land, die durch technologische Weiterentwicklungen heute deutlich effizienter arbeiten als noch vor 10 Jahren.\n\nNeue Anlagen erzielen Leistungen von über 5 Megawatt und arbeiten selbst bei niedrigem Wind stabil. Ein vollständiger Rückbau wäre nicht nur energiepolitisch katastrophal, sondern auch ökonomisch unsinnig: Windkraft schafft Arbeitsplätze, senkt CO₂-Emissionen und trägt maßgeblich zur Versorgungssicherheit bei.\n\nDie Ablehnung der Technologie ignoriert wissenschaftliche Erkenntnisse und volkswirtschaftliche Realitäten.',
      source: 'tagesschau, Was ist dran an den Behauptungen über Windkraft?'
    }
  },
  {
    id: 4,
    frontContent: {
      title: 'Extremwetter werden nicht mehr!',
      subtitle: '"Keiner der gängigen Extremwetter-Typen in Deutschland hat bisher die natürliche Schwankungsbreite des Klimasystems verlassen."',
      description: 'Diese Aussage tätigte Sebastian Luening in einem Vortrag auf der 14. Internationale EIKE Klima- und Energiekonferenz der IKEK-14.',
      image: '/images/Behauptung 5 1.png',
      source: 'Eike'
    },
    backContent: {
      title: 'Faktenlage wird nicht berücksichtigt',
      content: 'EIKE bestimmt das Vorliegen eines menschengemachten Anstiegs von Extremwetterereignissen nur dann, wenn nach 1850 ein deutlicher Anstieg solcher Ereignisse feststellbar ist – andernfalls sieht EIKE keine Verantwortung des Menschen. An sich ist diese Vorgehensweiße auch korrekt.\n\nIn der Forschung stützt man sich dabei auf Wahrscheinlichkeiten, wenn es um die Einschätzung von Extremwetterereignissen geht.\n\nSchon im IPCC-Bericht von 2013 heißt es, dass Starkregen mit hoher Wahrscheinlichkeit häufiger geworden sind. Mittlerweile verdichten sich auch die Hinweise darauf, dass sowohl Dürren als auch Überflutungen zunehmen.\n\nAllerdings bleibt es schwierig, einzelne Ereignisse direkt dem Klimawandel zuzuschreiben.\n\nStatistisch lässt sich das nicht eindeutig visualisieren, da es an ausreichend langen und detaillierten Aufzeichnungen fehlt. Zwar sind die Trends klar erkennbar, doch historische Analysen bleiben herausfordernd – nicht zuletzt aufgrund technischer Limitierungen früherer Messmethoden.',
      source: 'Podcast So DREIST trickst die Klima-Leugnungs-Lobby (Quarks Science Cops)'
    }
  },
  {
    id: 5,
    frontContent: {
      title: 'Windkrafträder erzeugen weniger Energie als Kraftwerke',
      subtitle: '"Windenergie benötigt viel Material, erzeugt aber wenig Energie im Vergleich zu Kraftwerken. Nach wenigen Jahrzehnten hat ein Windrad seine Lebensdauer erreicht und muss aufwendig rückgebaut werden."',
      description: 'Chrupalla kritisiert die Effizienz und Nachhaltigkeit von Windenergieanlagen. Nach seiner Darstellung sind Windräder nicht wirtschaftlich, da sie nur kurze Lebenszyklen haben und später aufwendig rückgebaut werden müssten.',
      image: '/images/WindkraftvsAtomkraft_2 1.png',
      source: 'MDR, Windkraftbranche widerspricht AfD-Aussagen zu erneuerbaren Energien'
    },
    backContent: {
      title: 'Windkrafträder sind tatsächlich sehr effizient',
      content: 'Fakt ist: Moderne Windkraftanlagen haben eine Lebensdauer von rund 25 bis 30 Jahren und einen sehr hohen Energieertrag im Verhältnis zum eingesetzten Material. Der sogenannte „Erntefaktor" (Energy Returned on Energy Invested) liegt bei Windenergie bei etwa 30 bis 70 – das bedeutet, dass ein Windrad während seiner Lebensdauer 30- bis 70-mal mehr Energie erzeugt, als für Bau, Betrieb und Rückbau nötig ist.\n\nZudem ist die Rückbaubarkeit von Windrädern technisch lösbar: Fundamente, Turm und Maschinenhaus sind überwiegend recycelbar. Auch die Leistung hat sich stark verbessert: Neue Anlagen erreichen heute 5,3 MW und arbeiten effizienter bei niedrigeren Windgeschwindigkeiten als frühere Modelle.\n\nTino Chrupallas Behauptung ist irreführend.',
      source: 'MDR, Windkraftbranche widerspricht AfD-Aussagen zu erneuerbaren Energien'
    }
  },
  {
    id: 6,
    frontContent: {
      title: 'Ein wärmeres Klima ist vorteilhaft',
      subtitle: '"Ein wärmeres Klima war schon immer ein Segen für den Menschen."',
      description: 'Ein wärmeres Klima war schon immer ein Segen für den Menschen.',
      image: '/images/SunnyBeach_4 1.png',
      source: 'Schlumpfargumente, Rede von Anja Arndt im europäischen Parlament'
    },
    backContent: {
      title: 'Und was ist mit den Umweltkatastrophen?',
      content: 'Der Weltklimarat (IPCC) stellt klar: Der aktuelle Klimawandel ist menschengemacht und bereits heute mit gravierenden Folgen verbunden – darunter Extremwetter, Dürren, Überschwemmungen, Artensterben und Ernteausfälle. Die Geschwindigkeit des Temperaturanstiegs ist rasant und überfordert die Anpassungsfähigkeit vieler Ökosysteme und Gesellschaften.\n\nFrühere Warmzeiten verliefen deutlich langsamer und hatten nicht den heutigen globalen CO₂-Ausstoß zur Ursache. Besonders gefährdet sind Regionen mit schwacher Infrastruktur, wie viele Länder des globalen Südens.\n\nEin pauschales „wärmer ist besser" verkennt die Realität: Der heutige Klimawandel ist eine Bedrohung für die gesamte Erde.',
      source: 'Intergovernmental Panel on Climate Change'
    }
  },
  {
    id: 7,
    frontContent: {
      title: 'Mehr CO₂ = mehr Essen',
      subtitle: 'Mehr Kohlendioxid bedeutet mehr Nahrung. Entgegen der weit verbreiteten Berichterstattung ist Kohlendioxid lebensnotwendig für das Leben auf der Erde. Da die Atmosphäre inzwischen mit Kohlendioxid gesättigt ist, führt ein weiterer Anstieg dazu, dass weltweit mehr Nahrungsmittel produziert werden können.',
      description: 'Diese Aussage stammt von Lindzen, W. Happer und W. van Wijngaarden, drei Professoren aus Massachusetts Institute of Technology, der Princeton University und der York University in einem Bericht.',
      image: '/images/Behauptung 406 1.png',
      source: 'Net Zero Avoided Temperature Increase'
    },
    backContent: {
      title: 'Mehr CO₂ – weniger Nährstoffe, kein Nutzen für die Ernährung',
      content: 'Die Behauptung, dass mehr CO₂ automatisch zu mehr Nahrung führt, ist irreführend. Zwar begünstigt CO₂ die Fotosynthese, doch das bedeutet nicht automatisch mehr oder bessere Ernten. Der weltweite Anstieg der Nahrungsmittelproduktion ist vor allem auf landwirtschaftlichen Fortschritt zurückzuführen.\n\nZudem kann ein höherer CO₂-Gehalt die Qualität der Pflanzen negativ beeinflussen, da sie dann oft weniger Nährstoffe enthalten. Das hat ernste Folgen für die globale Gesundheit, vor allem in Regionen, die ohnehin unter Nährstoffmangel leiden.',
      source: 'https://www.mimikama.org/mehr-co2-erde-gruener/'
    }
  },
  {
    id: 8,
    frontContent: {
      title: 'Das Feuer um die Wärmepumpe',
      subtitle: '"Die Wärmepumpe ist die letzte Entfremdung des Menschen vom Feuer."',
      description: 'Marcus Woeller beschreibt in einem kulturkritischen Artikel die Wärmepumpe als kaltes, unästhetisches Technikobjekt, das den Menschen emotional vom „Feuer" entfremdet – also von traditionellen Heizformen wie Kachelöfen oder Gasheizungen.',
      image: '/images/FeuerUmWärmepumpe_5 1.png'
    },
    backContent: {
      title: 'Aber Wärmepumpen sind doch am effizientesten, oder?',
      content: 'Wärmepumpen gelten heute als eines der effizientesten Heizsysteme – laut Energy Systems Catapult sind sie dreimal effizienter als Gasheizungen, auch in Bestandsgebäuden. Sie nutzen Umgebungswärme aus Luft, Erde oder Wasser und erzeugen mit geringem Stromverbrauch eine hohe Heizleistung. Dabei verursachen sie deutlich weniger CO₂ – insbesondere bei Ökostrom.\n\nEine Studie des Fraunhofer-Instituts zeigt, dass Wärmepumpen auch in Altbauten problemlos eingesetzt werden können, sofern Heizflächen oder Vorlauftemperaturen angepasst werden. Ihre Bedeutung geht weit über Ästhetik hinaus: Laut IEA und Nature Energy sind sie ein zentraler Baustein zur Erreichung der Klimaziele.\n\nWarum sind sie dann so verpönt?',
      source: 'catapult energy systems, Heat pumps shown to be three times more efficient than gas boilers'
    }
  },
  {
    id: 9,
    frontContent: {
      title: 'Deutscher CO₂-Ausstoß global bedeutungslos',
      subtitle: '"Auf den weltweiten CO2 Ausstoß hätte eine Senkung der deutschen Werte gar keinen Einfluss"',
      description: 'In einem YouTube-Video des offiziellen Kanals der AfD erklärt Beatrix von Storch, dass selbst wenn der Klimawandel menschengemacht sei, Deutschland nur wenig zu seiner Eindämmung beitragen könne.',
      image: '/images/CO2Deutschland_G 1.png',
      source: 'Offizieller YouTube Kanal der AfD'
    },
    backContent: {
      title: 'Falsches Verhältnis',
      content: 'Beatrix von Storch behauptet, eine Senkung der deutschen CO₂-Emissionen hätte „gar keinen Einfluss" auf das Weltklima. Das ist irreführend.\n\nZwar verursacht Deutschland nur rund 2 % der weltweiten Emissionen, stellt aber nur etwa 1 % der Weltbevölkerung. Der Pro-Kopf-Ausstoß in Deutschland ist überdurchschnittlich hoch – mehr als doppelt so hoch wie im globalen Durchschnitt. Das bedeutet: Deutschland gehört zu den Ländern mit besonders großem Beitrag zur Erderwärmung – gemessen an seiner Größe.\n\nZudem gilt:\nJede Tonne eingespartes CO₂ zählt weltweit.\nDeutschland hat durch Technologieexport, internationale Partnerschaften und politische Vorbildwirkung echten Einfluss.\nMechanismen wie der EU-Emissionshandel und der geplante CO₂-Grenzausgleich (CBAM) verhindern weitgehend, dass Emissionen einfach in andere Länder „verlagert" werden.\n\nFazit: Deutschlands CO₂-Reduktionen sind relevant und notwendig – aus Verantwortung für den eigenen überdurchschnittlichen Fußabdruck und als Teil einer globalen Lösung.',
      source: 'Statista, CO₂-Emissionen pro Kopf weltweit nach ausgewählten Ländern im Jahr 2023'
    }
  },
  {
    id: 10,
    frontContent: {
      title: 'Deutschland in der Dunkelflaute',
      subtitle: '"Deutschland befindet sich inmitten einer Dunkelflaute. Zwischen 7 und 8 Uhr konsumierte Deutschland knapp 64 Gigawattstunden Strom. Aber was liefert uns das Land selbst? Nur rund 49 Gigawattstunden – ein klares Minus von fast 25 Prozent!"',
      description: 'Nena Brockhaus behauptet in ihrer Kolumne, Deutschland könne bei Dunkelflauten nicht genügend Strom selbst erzeugen. Das Land sei in diesen Momenten stark auf Importe angewiesen.',
      image: '/images/Dunkelflauten_6 1.png',
      source: 'Focus Online, Deutschland in der Dunkelflaute: Wir sind der Geisterfahrer Europas, Nena Brockhaus'
    },
    backContent: {
      title: 'Kurzfristige Dunkelflauten sind normal',
      content: 'Kurzfristige Stromimporte sind normal und kein Beleg für ein Scheitern. Deutschland ist Teil eines europäischen Stromverbunds – auch Nachbarländer importieren und exportieren regelmäßig. Im Jahresdurchschnitt exportiert Deutschland sogar häufig mehr Strom, als es importiert.\n\nDunkelflauten sind bekannte Phasen mit wenig Sonnen- und Windstrom, auf die das Netz flexibel reagiert. Speicher, Reservekraftwerke und intelligente Steuerung helfen dabei. Solche Schwankungen zeigen nicht das Scheitern, sondern die notwendige Flexibilität im System.\n\nZudem ist Windenergie laut Fraunhofer 2024 inzwischen eine der günstigsten Stromquellen in Deutschland – Ein wichtiger Fortschritt.',
      source: 'Volksverpetzer, Was dir BILD & Co über die Energiewende verschweigen'
    }
  },
  {
    id: 11,
    frontContent: {
      title: 'Fünf Meter Schnee bei Klimaerwärmung?',
      subtitle: '"Dass es in Japan bis zu fünf Meter Schnee gab, widerspreche dem menschengemachten Klimawandel."',
      description: 'Beiträge auf Telegram, Facebook und X behaupten, dass die bis zu fünf Meter Schnee in Japan ein Beweis gegen den menschengemachten Klimawandel seien. Im Februar 2025 fiel in Teilen Japans ungewöhnlich viel Schnee.',
      image: '/images/JapanInSchnee_7 1.png',
      source: 'Correctiv, Rekordschnee in Japan ist kein Argument gegen den menschengemachten Klimawandel'
    },
    backContent: {
      title: 'Das Wetter wird extremer',
      content: 'Der Weltklimarat (IPCC) erklärt, dass extreme Schneefälle wie in Japan kein Widerspruch zum menschengemachten Klimawandel sind. Die Erderwärmung beeinflusst Luftströmungen und führt zu mehr extremen Wetterlagen, darunter auch heftige Kälte- und Schneefälle. In Japan sorgt die Kombination aus kalter Sibirienluft und feuchter Luft vom Japanischen Meer für starke Schneemengen, ein regional erklärbares Phänomen. Klima beschreibt langfristige globale Trends, während Wetter kurzfristig lokal variieren kann.\n\nDer IPCC betont, dass der Klimawandel die Häufigkeit und Intensität von Extremwetterereignissen aller Art erhöht, einschließlich starker Wintereinbrüche. Einzelne Wetterereignisse sind eine Folge des Klimawandels.',
      source: 'Correctiv, Rekordschnee in Japan ist kein Argument gegen den menschengemachten Klimawandel'
    }
  },
  {
    id: 12,
    frontContent: {
      title: 'Die Sonne ist Schuld',
      subtitle: '"Dann sollten wir der Sonne erklären, dass Sie nicht so viel scheinen soll. (...) Wir sollten die Sonne verklagen."',
      description: 'Diese Aussage tätigte AfD-Politikerin Beatrix von Storch in einem Interview mit dem YouTube Kanal Jung und Naiv. Hier erklärt sie wie die Sonne der Haupttreiber des Klimawandels sein soll.',
      image: '/images/AngrySun_8G 1.png',
      source: 'Klimaexpertin Beatrix von Storch (AfD) will die Sonne verklagen, YouTube'
    },
    backContent: {
      title: 'Sonne nicht der Haupttreiber',
      content: 'Nicht nur Beatrix von Storch findet, dass die Sonne einen stärkeren Einfluss auf das Klima hat sondern auch EIKE. Die Behauptung, die Sonne sei schuld am aktuellen Klimawandel, greift zu kurz.\n\nZwar hat die Sonnenaktivität grundsätzlich Einfluss auf das Klima der Erde – das zeigen historische Daten, in denen Temperaturverläufe und Sonnenzyklen oft gut übereinstimmen. Doch seit etwa 1960 gehen diese Kurven deutlich auseinander: Während die Sonnenaktivität leicht abnimmt, steigen die globalen Temperaturen stark an. Dieser Trend widerspricht der Annahme, dass die Sonne für die gegenwärtige Erderwärmung verantwortlich ist.\n\nFazit: Ja, die Sonne beeinflusst das Klima – aber die derzeitige Erwärmung lässt sich damit nicht erklären.',
      source: 'So DREIST trickst die Klima-Leugnungs-Lobby (Podcast von Quarks Science Cops)'
    }
  },
  {
    id: 13,
    frontContent: {
      title: 'Solarparks verbrennen Vögel',
      subtitle: '"Über Solarparks entsteht so große Hitze, dass Vögel und Insekten sterben und der Boden kilometerweit austrocknet."',
      description: 'Ein viraler Facebook-Post behauptet, über Solarparks entstehe ein „Hitzeschornstein" mit bis zu 80 °C, der Vögel und Insekten töte und den Boden kilometerweit austrockne. Ein Spaziergänger äußerte sich in seinem Post über die Solarparks in Brandenburg. Der Post wurde daraufhin auf Desinformationsseiten weiterverbreitet.',
      image: '/images/SolarparksDyingBirbs_8 1.png',
      source: 'Correctiv, Nein, über Solarparks entsteht keine so große Hitze, dass Vögel und Insekten sterben'
    },
    backContent: {
      title: '80°C über Solarparks, ist das nicht etwas übertrieben?',
      content: 'Wissenschaftliche Untersuchungen der Universität Leipzig und des Helmholtz-Zentrums zeigen: Es entstehen über Solarparks keine extremen Temperaturen. Die Lufttemperatur über den Modulen steigt nicht ungewöhnlich an – Werte von 80 °C sind physikalisch unplausibel. Erwärmungen an der Moduloberfläche ähneln denen von Asphalt oder dunklen Steinen im Sommer, stellen aber keine Gefahr für fliegende Tiere dar.\n\nZudem zeigen Studien, dass Solarparks keine negativen Effekte auf Vögel oder Insekten haben – im Gegenteil: Durch extensive Begrünung, Blühflächen und geringe Störung bieten sie wertvolle Rückzugsräume für Artenvielfalt. Die Bodenfeuchtigkeit leidet nicht, sondern wird durch Schatten sogar geschützt.',
      source: 'Correctiv, Nein, über Solarparks entsteht keine so große Hitze, dass Vögel und Insekten sterben'
    }
  },
  {
    id: 14,
    frontContent: {
      title: 'Die Erde wird grüner!',
      subtitle: 'Dank des Klimawandels wird die Erde Grüner. Mehr CO2 in der Atmosphere unterstützt das Pflanzenwachstum.',
      description: 'Diese Aussage findet man in einem Artikel des "The Heartland Institute" welches sich auf eine Studie "Earth\'s record-high greenness and its attributions in 2020" und einem NASA Artikel beziehen soll. Laut dieser Studie sei die Erde durch mehr Kohlenstoffdioxid in der Atmosphäre grüner geworden. Dies sei eine positive Folge des Klimawandels und gut für die Bevölkerung.',
      image: '/images/Behauptung 1_02 1.png',
      source: 'Eike; The Heartland Institute'
    },
    backContent: {
      title: 'Global Greening? Zu kurz gedacht.',
      content: 'Trotz CO₂-bedingtem Pflanzenwachstum warnt die NASA, dass steigende Emissionen Hauptursache des Klimawandels sind – mit Folgen wie Erwärmung, Meeresspiegelanstieg und Extremwetter.\n\nDie Studie des Umweltwissenschaftlers Dr. Elliott Campbell aus 2017 belegt, dass seit Beginn der industriellen Revolution rund 31 Prozent mehr Kohlendioxid in pflanzliche Biomasse umgewandelt wird. Klimawandelleugner nutzen dies fälschlich als Argument gegen Klimaschutzmaßnahmen.\n\nDoch in der Studie steht auch:\nMehr Fotosynthese bedeutet nicht mehr Nahrung.\nDas Plus an CO2 kann Pflanzen weniger nahrhaft machen.\nMehr Pflanzen verhindern nicht den Klimawandel.\nDas "Global Greening" hält nicht ewig an.\n\nDas Heartland Institute betont den CO₂-Wachstumseffekt, ignoriert aber die schädlichen Folgen des Klimawandels für Natur und Landwirtschaft.',
      source: 'Mimikama'
    }
  },
  {
    id: 15,
    frontContent: {
      title: 'Atomkraft ist CO₂-neutral',
      subtitle: '"Nuclear energy is carbon free – Atomkraft ist CO₂-neutral"',
      description: 'AfD-Spitzenkandidatin Alice Weidel sagt im Gespräch mit Elon Musk am 9. Januar 2025, dass Atomenergie CO₂-neutral ist, und stellt sie damit als klimafreundliche Alternative dar.',
      image: '/images/GreenAtomkraft_9 1.png',
      source: 'tagesschau, Was bleibt vom Gespräch Weidel-Musk?'
    },
    backContent: {
      title: 'Schon mal an den Bau einer Atomkraftanlage gedacht?',
      content: 'Zwar stößt ein Atomkraftwerk im Betrieb kaum CO₂ aus, doch das greift zu kurz. Der gesamte Lebenszyklus der Kernenergie – von Uranabbau, Anreicherung und Brennstoffherstellung bis hin zu Bau, Betrieb, Rückbau und Endlagerung – verursacht Emissionen.\n\nDer Wissenschaftliche Dienst des Bundestags (2019) stellt klar: Atomkraft ist nicht emissionsfrei. Klimafreundlich? Ja, im Vergleich zu Kohle. Aber CO₂-neutral? Nein.\n\nStudien zeigen, dass Erneuerbare wie Wind und Solar eine deutlich bessere Klimabilanz haben. Atomkraft verursacht zwar weniger Emissionen als fossile Energien, ist aber keinesfalls „carbon free".\n\nWer den gesamten CO₂-Fußabdruck betrachtet, erkennt: Die Aussage von Weidel ist irreführend.',
      source: 'Correctiv, Nein, Atomkraft ist nicht CO2-neutral'
    }
  },
  {
    id: 16,
    frontContent: {
      title: 'Die Mittelalterliche Warmzeit',
      subtitle: '"Im Mittelalter war es wärmer als heute."',
      description: 'In einem YouTube Video von auf dem offiziellen Kanal von EIKE wird von einer mittelalterlichen Warmzeit gesprochen und wie die Menschen auch dort überlebt hatten.',
      image: '/images/SweatingKnight_9G 1.png',
      source: 'Fragen zum Klimawandel (YouTube Kanal von EIKE)'
    },
    backContent: {
      title: 'Nur ein regionales Phänomen',
      content: 'Ja im Mittelalter gab es eine Warmzeit, dadurch konnten beispielsweise die Wikinger Grönland besiedeln. Diese Erwärmung war jedoch nur regional begrenzt und kein weltweites Phänomen.\n\nIm Gegensatz dazu zeigt der Temperaturtrend der letzten 30 Jahre seit 1990 eine deutliche und weltweite Erwärmung in fast allen Regionen, die deutlich über das Niveau der mittelalterlichen Warmzeit hinausgeht.',
      source: 'Klimafakten.de'
    }
  },
  {
    id: 17,
    frontContent: {
      title: 'Der Klimaschwindel der Medien!',
      subtitle: '"Medienberichte dazu, dass sich mehrere Länder und Kontinente schneller als der Rest der Welt erwärmten, belegten einen „Klimaschwindel""',
      description: 'In einem Instagram-Video vom 21.06.2024 behauptet ToniTano, dass Deutschland gar nicht vom Klimawandel betroffen sei. Die steigenden Temperaturen seien Erfindungen der Medien, um Angst zu schüren.',
      image: '/images/Klimaschwindel_10 1.png',
      source: 'Correctiv, Klimawandel: Warum sich mehrere Regionen schneller als der Rest der Welt erwärmen'
    },
    backContent: {
      title: 'Landflächen erwärmen sich schneller als Ozeane',
      content: 'Falsch. Wissenschaftliche Daten zeigen eindeutig, dass Deutschland sich überdurchschnittlich stark erwärmt. Laut Correctiv, dem DWD und der NASA steigen die Temperaturen hierzulande schneller als im globalen Durchschnitt.\n\nDer Grund: Landflächen erwärmen sich schneller als Ozeane, und Europa liegt fast vollständig auf Landmasse.\n\nDie Aussage verkennt grundlegende physikalische Zusammenhänge und ignoriert jahrzehntelange Klimaforschung. Auch Extremwetter, Gletscherschmelze und Hitzerekorde in Deutschland belegen die Realität des Temperaturanstiegs.\n\nDer Vorwurf eines Medien-Hypes ist daher unbegründet – der Klimawandel ist heute schon längst angekommen.',
      source: 'Correctiv, Klimawandel: Warum sich mehrere Regionen schneller als der Rest der Welt erwärmen'
    }
  },
  // Weitere 1 Platzhalter-Claim
  {
    id: 18,
    frontContent: {
      title: 'Behauptung 18',
      subtitle: '"Irreführende Aussage 18 der Fossilfuellobby"',
      description: 'Hier können Sie die Beschreibung für Behauptung 18 einfügen. Bearbeiten Sie einfach die claimsData.ts Datei und fügen Sie echte Inhalte hinzu.',
      image: '/images/claim-18.jpg' // Platzhalter - ersetzen Sie mit echten Bildern
    },
    backContent: {
      title: 'Faktencheck 18',
      content: 'Hier steht der wissenschaftlich fundierte Faktencheck für Behauptung 18. Ersetzen Sie diesen Text mit echten Fakten und Quellen.',
      source: 'Quelle 18: Wissenschaftliche Studien und Faktenchecks'
    }
  }
];

// Hilfsfunktion zum einfachen Erstellen neuer Claims
export const createClaim = (
  id: number,
  title: string,
  subtitle: string,
  description: string,
  factcheck: string,
  source: string,
  frontSource?: string,
  imagePath?: string
): ClaimData => ({
  id,
  frontContent: {
    title,
    subtitle,
    description,
    image: imagePath ? `/images/${imagePath}` : undefined,
    source: frontSource
  },
  backContent: {
    title: `Faktencheck: ${title}`,
    content: factcheck,
    source
  }
});