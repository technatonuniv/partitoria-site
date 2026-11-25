import type { TopicContent, TopicSlug } from './discovery-topics';

export default {
  "android-sheet-music-reader": {
    "title": "Noten auf dem Android-Tablet lesen",
    "description": "Mit Partitoria können Sie Ihre PDF-Noten auf einem Android-Tablet oder Smartphone sammeln, nach einem Stück suchen und auch ohne Internet umblättern. Import, Lesen und manuelle Datensicherung sind kostenlos.",
    "sections": [
      {
        "heading": "Welche Datei passt zu Ihren Noten?",
        "paragraphs": [
          "Wenn das Druckbild und die Wendestellen einer Ausgabe erhalten bleiben sollen, nehmen Sie deren PDF. Auch ein Scan oder Foto lässt sich als Notenseite lesen. Aus unterstützten MusicXML-, MXL- und MuseScore-Dateien setzt Partitoria die Seiten zum Lesen. ABC-Melodien und ChordPro-Lieder finden in derselben Bibliothek Platz."
        ]
      },
      {
        "heading": "Ein kurzer Test vor der Probe",
        "paragraphs": [
          "Importieren Sie ein Stück mit mindestens zwei Seiten. Schalten Sie WLAN und mobile Daten aus. Suchen Sie das Stück anhand des Titels oder Dateinamens und blättern Sie zur zweiten Seite. In einer Sammlung können Sie alle Stücke für die Probe zusammenstellen."
        ]
      },
      {
        "heading": "Wann lohnt sich Pro?",
        "paragraphs": [
          "Zum gewöhnlichen Umblättern per Fingertipp oder Pedal im Tastaturmodus genügt die kostenlose Version. Mit Pro können Sie Eintragungen in den Noten machen oder eine Setliste im Aufführungsmodus durchspielen."
        ]
      }
    ],
    "faq": [
      {
        "question": "Wie lese ich PDF-Noten ohne WLAN?",
        "answer": "Laden Sie die Datei herunter, solange Sie Internet haben, und importieren Sie sie. Öffnen Sie das gespeicherte Stück anschließend aus Ihrer Bibliothek. Die Anleitung zum ersten Import zeigt die einzelnen Schritte."
      }
    ],
    "guideSlugs": [
      "first-scores",
      "find-in-library",
      "reader"
    ],
    "screenshot": {
      "article": "reader",
      "alt": "Geöffnete Partitur in der Vollbildansicht von Partitoria"
    }
  },
  "bluetooth-page-turner": {
    "title": "Noten mit einem Bluetooth-Pedal auf Android umblättern",
    "description": "Ein Bluetooth-Pedal im Tastaturmodus kann in Partitoria kostenlos umblättern. Koppeln Sie es in den Android-Einstellungen, wählen Sie am Pedal den Modus für Pfeiltasten oder Bild auf/Bild ab und öffnen Sie ein Stück.",
    "sections": [
      {
        "heading": "Welche Taste blättert in welche Richtung?",
        "paragraphs": [
          "Pfeil rechts, Pfeil runter, Bild ab und die Leertaste führen zur nächsten Seite. Mit Pfeil links, Pfeil hoch oder Bild auf geht es zurück. Für beide Richtungen eignet sich ein Tastenpaar wie Links/Rechts. Ein einzelner Schalter, der die Leertaste sendet, blättert nur vorwärts."
        ]
      },
      {
        "heading": "Beide Richtungen ausprobieren",
        "paragraphs": [
          "Öffnen Sie ein dreiseitiges Stück auf Seite zwei. Blättern Sie einmal vor und wieder zurück. Ist das Pedal verbunden, aber die Seite bewegt sich nicht, suchen Sie in der Anleitung des Pedals nach dem Tastaturmodus. Mit einer angeschlossenen Tastatur können Sie dieselbe Pfeiltaste zum Vergleich ausprobieren."
        ]
      },
      {
        "heading": "Was wurde geprüft?",
        "paragraphs": [
          "Partitoria Studio hat das Umblättern mit einem handelsüblichen Bluetooth-Pedal ohne Markenangabe geprüft. Bei anderen Modellen gibt die gesendete Taste den Ausschlag. Für eigene Tastenbelegungen und MIDI-Befehle gibt es Pro."
        ]
      }
    ],
    "faq": [
      {
        "question": "Brauche ich für das Umblättern per Pedal ein Abo?",
        "answer": "Die Standardtasten zum Blättern sind kostenlos. Sobald das Pedal eine dieser Tasten sendet, ist keine eigene Belegung erforderlich."
      }
    ],
    "guideSlugs": [
      "reader",
      "input-controls"
    ],
    "screenshot": {
      "article": "reader",
      "alt": "Geöffnete Notenseite, die sich mit dem Pedal umblättern lässt"
    }
  },
  "musicxml-musescore-android": {
    "title": "MusicXML- und MuseScore-Dateien auf Android öffnen",
    "description": "Partitoria importiert MusicXML (.musicxml und .xml), komprimierte MXL-Dateien und MuseScore-Partituren (.mscx und .mscz). Sie können das Notenbild vor dem Speichern prüfen und die Partitur anschließend kostenlos lesen.",
    "sections": [
      {
        "heading": "Ein Beispiel für Flöte und Klavier",
        "paragraphs": [
          "In Partitoria 1.11.1 haben wir Flute-and-Piano-Study.musicxml über die Android-Dateiauswahl geöffnet. Die Vorschau zeigte eine Seite mit zwei Notensystemen für Klavier und einem für Flöte. Nach dem Bestätigen ließ sich die Studie aus der Bibliothek erneut öffnen. Das gelang auch mit dem separaten MuseScore-Beispiel Morning-Scale.mscx."
        ]
      },
      {
        "heading": "Worauf kommt es bei Ihrer Ausgabe an?",
        "paragraphs": [
          "Wählen Sie beim Hinzufügen die gewünschte Datei aus. Vergleichen Sie die Stimmen, Texte und Wendestellen in der Vorschau mit Ihrer Vorlage. Partitoria setzt die Noten zum Lesen neu. Die Seitenumbrüche können deshalb von der Desktop-Ausgabe abweichen. Die Originaldatei bleibt für den Export erhalten."
        ]
      },
      {
        "heading": "Wenn die Vorschau nicht passt",
        "paragraphs": [
          "Bewahren Sie Ihre Quelldatei auf. Bei einer nicht unterstützten Datei können Sie im ursprünglichen Notensatzprogramm einen neuen MusicXML-Export erstellen. Wenn es auf genaue Abstände und bestimmte Seitenumbrüche ankommt, exportieren Sie dort eine PDF-Ausgabe."
        ]
      }
    ],
    "faq": [
      {
        "question": "Wie öffne ich komprimiertes MusicXML?",
        "answer": "Wählen Sie die .mxl-Datei direkt aus. Beim Test mit Flute-and-Piano-in-D.mxl erschien eine eigene Seitenvorschau."
      }
    ],
    "guideSlugs": [
      "first-scores",
      "import-review",
      "originals-recovery"
    ],
    "screenshot": {
      "article": "import-review",
      "alt": "Englische Importvorschau von Flute-and-Piano-Study.musicxml mit allen drei Notensystemen auf einer Seite",
      "src": "/discovery/musicxml-preview.jpg"
    }
  }
} satisfies Partial<Record<TopicSlug, TopicContent>>;
