import type { TopicContent, TopicSlug } from './discovery-topics';

export default {
  "android-sheet-music-reader": {
    "title": "A sheet music reader for your Android music stand",
    "description": "Partitoria lets you keep PDF scores on an Android tablet or phone, find a piece by name and turn its pages offline. Importing, reading and backing up your library are free.",
    "sections": [
      {
        "heading": "Choose the file you want to read",
        "paragraphs": [
          "For a published edition with carefully placed page turns, use its PDF. A scan or photo can also be read as a page. If your score comes from a notation program, Partitoria can prepare reading pages from supported MusicXML, MXL and MuseScore files. ABC tunes and ChordPro songs can go in the same library."
        ]
      },
      {
        "heading": "Take the tablet to rehearsal",
        "paragraphs": [
          "Import a piece with at least two pages. Turn off Wi-Fi and mobile data, find it by its title or filename, then open it and turn to the second page. A collection can keep the pieces for that rehearsal together."
        ]
      },
      {
        "heading": "When would I use Pro?",
        "paragraphs": [
          "Use the free reader for ordinary page turns by touch or keyboard-style pedal. Pro adds tools for marking the score or running a performance in setlist order."
        ]
      }
    ],
    "faq": [
      {
        "question": "How do I read a PDF without Wi-Fi?",
        "answer": "Download the file while you have a connection, import it and reopen the saved score from your library. The first-import guide below shows each step."
      }
    ],
    "guideSlugs": [
      "first-scores",
      "find-in-library",
      "reader"
    ],
    "screenshot": {
      "article": "reader",
      "alt": "An open score in Partitoria’s full-screen reader"
    }
  },
  "bluetooth-page-turner": {
    "title": "Turn sheet music pages with a Bluetooth pedal on Android",
    "description": "A Bluetooth pedal that sends keyboard commands can turn pages in Partitoria’s free reader. Pair it in Android, select arrow-key or Page Up/Page Down mode on the pedal, then open a score.",
    "sections": [
      {
        "heading": "Choose the keys your feet will send",
        "paragraphs": [
          "Right Arrow, Down Arrow, Page Down and Space advance one page. Left Arrow, Up Arrow and Page Up go back. For two-way turning, pick a pair such as Left/Right. A single switch set to Space only moves forward."
        ]
      },
      {
        "heading": "Try it away from the stand first",
        "paragraphs": [
          "Open a three-page score. From page two, press once to advance, then once to go back. If Android shows a connection but the page stays still, check the pedal’s manual for its keyboard mode. Try the same arrow on a connected keyboard if one is available."
        ]
      },
      {
        "heading": "What has been tested",
        "paragraphs": [
          "Partitoria Studio confirmed ordinary page turns with an unbranded Bluetooth pedal. The keys above identify the mode to look for when checking another model. Custom command assignments and MIDI controls are Pro features."
        ]
      }
    ],
    "faq": [
      {
        "question": "Can I turn pages with a pedal without a subscription?",
        "answer": "Yes. When the pedal sends one of the default page-turn keys, it works in the free reader without a custom mapping."
      }
    ],
    "guideSlugs": [
      "reader",
      "input-controls"
    ],
    "screenshot": {
      "article": "reader",
      "alt": "Partitoria’s score reader, where the pedal changes pages"
    }
  },
  "musicxml-musescore-android": {
    "title": "Open MusicXML and MuseScore files on an Android tablet",
    "description": "Partitoria can import MusicXML (.musicxml or .xml), compressed MusicXML (.mxl), and MuseScore scores (.mscx or .mscz). You can review the pages and read the saved score for free.",
    "sections": [
      {
        "heading": "A score you can see in the preview",
        "paragraphs": [
          "In Partitoria 1.11.1, we selected Flute-and-Piano-Study.musicxml in Android’s file picker. The preview showed one page with two piano staves and a flute staff. We accepted the page and opened the study again from the library. We also reopened Morning-Scale.mscx, a separate MuseScore example."
        ]
      },
      {
        "heading": "Check your edition before playing",
        "paragraphs": [
          "Choose Files when adding a score. In the preview, check the parts you need, the text and the page turns against your original. Partitoria lays out the notation for reading, so the page breaks can differ from your desktop edition. The stored source remains available for export."
        ]
      },
      {
        "heading": "If the preview is unsuitable",
        "paragraphs": [
          "Keep your original. For a particular unsupported file, try a fresh MusicXML export from the program that created it. If the exact spacing or original page breaks matter, export a PDF there and read that edition instead."
        ]
      }
    ],
    "faq": [
      {
        "question": "Can I open a compressed MusicXML score on Android?",
        "answer": "Yes. Select the .mxl file itself. In our test Flute-and-Piano-in-D.mxl produced its own page preview."
      }
    ],
    "guideSlugs": [
      "first-scores",
      "import-review",
      "originals-recovery"
    ],
    "screenshot": {
      "article": "import-review",
      "alt": "English import preview of Flute-and-Piano-Study.musicxml, with all three staves on one page",
      "src": "/discovery/musicxml-preview.jpg"
    }
  },
  "transfer-sheet-music-library": {
    "title": "Move your Partitoria library to a new Android tablet",
    "description": "Create a complete manual backup in Partitoria on your old tablet. Copy the verified archive to the new device, then open Restore in Partitoria. Both backup and restore are free.",
    "sections": [
      {
        "heading": "On the old tablet",
        "paragraphs": [
          "Check Library health and recover any missing documents first. In the data settings, create a complete backup and wait for verification to finish. Save the archive somewhere you can reach from the new tablet. The archive is unencrypted, so choose a private destination."
        ]
      },
      {
        "heading": "On the new tablet",
        "paragraphs": [
          "Select the archive in Restore and review the preview before confirming. If you already imported some pieces, check the proposed action for each match. Once restored, compare your collections and open a familiar score offline. Keep the old library until you have checked the new one."
        ]
      },
      {
        "heading": "What travels with the scores?",
        "paragraphs": [
          "The archive carries available originals, library details, collections and saved work such as annotations and setlists. Pro purchase information stays with Google Play. To restore a purchase on the new tablet, use the same Google account."
        ]
      }
    ],
    "faq": [
      {
        "question": "Can I move my library without a cloud account?",
        "answer": "Yes. A private copy of the verified backup file, for example on a USB drive accessible to both devices, is enough."
      }
    ],
    "guideSlugs": [
      "library-health",
      "backup-restore",
      "pro-and-owned-data"
    ],
    "screenshot": {
      "article": "backup-restore",
      "alt": "Partitoria’s data settings for creating a backup and previewing a restore"
    }
  },
  "forscore-for-android": {
    "title": "Is forScore available for Android?",
    "description": "forScore runs on Apple devices. For an Android music stand, MobileSheets and Partitoria both offer ways to try reading your own scores. Their terms for building a library differ.",
    "sections": [
      {
        "heading": "If you use forScore",
        "paragraphs": [
          "The developer lists iPad, iPhone, Mac and Vision Pro. If your music is in forScore and you plan to try another reader, start with one of your original PDFs and check how it looks on your Android screen."
        ]
      },
      {
        "heading": "If you want to try MobileSheets",
        "paragraphs": [
          "Zubersoft offers a paid Android app and a trial. The Android trial holds up to eight songs. It also limits bookmarks, link points and the use of connected tablets, and excludes library sync. The developer’s purchase page lists the current conditions."
        ]
      },
      {
        "heading": "If you want to try Partitoria",
        "paragraphs": [
          "Partitoria’s free Android library includes importing your PDFs, organizing collections, reading offline and complete manual backup. Pro adds annotations, setlists for performance and custom input controls. Try a familiar multi-page score to judge legibility and page turns on your own stand.",
          "Partitoria Studio develops Partitoria and checked the platform and trial details against the developers’ pages on 25 November 2026."
        ]
      }
    ],
    "faq": [
      {
        "question": "Can I turn pages with a Bluetooth pedal in Partitoria?",
        "answer": "Yes, if the pedal sends supported keyboard commands. Try its arrow-key or Page Up/Page Down mode in the free reader."
      }
    ],
    "guideSlugs": [
      "first-scores",
      "input-controls",
      "pro-and-owned-data"
    ],
    "screenshot": {
      "article": "reader",
      "alt": "A PDF in Partitoria’s reading view on Android"
    },
    "sources": [
      {
        "label": "forScore — supported devices",
        "href": "https://forscore.co/kb/category/03-before-you-buy/"
      },
      {
        "label": "Zubersoft — MobileSheets versions and trial limits",
        "href": "https://zubersoft.com/mobilesheets/buy/"
      }
    ]
  },
  "sheet-music-for-teachers": {
    "title": "Organize sheet music for a lesson on Android",
    "description": "Create a collection for a student or a lesson in Partitoria and add scores from your library. The same piece can belong to several collections, so you can reuse a warm-up across students.",
    "sections": [
      {
        "heading": "Prepare one lesson",
        "paragraphs": [
          "Start with a warm-up and the piece you plan to teach. Import the editions you may use, give the collection a recognizable name and add both items. Open each one offline before class. Creating a collection and reading from it are free."
        ]
      },
      {
        "heading": "What to give the student",
        "paragraphs": [
          "Share an original exercise you wrote, an edition you have permission to distribute, or a link to the publisher where the student can get their own copy. Ask the student to import the file on their tablet and turn one page. A whole-library backup can contain other students’ repertoire and your personal marks."
        ]
      },
      {
        "heading": "The first-lesson handout",
        "paragraphs": [
          "The one-page English handout covers the first PDF import, opening the score and adding it to a collection. The first-import video below demonstrates the reading exercise on an Android tablet."
        ]
      }
    ],
    "faq": [
      {
        "question": "How do I organize one piece for several lessons?",
        "answer": "Add the existing library item to each relevant collection. Each collection points to the same score, so there is no need to import the file again."
      }
    ],
    "guideSlugs": [
      "collections-and-batch",
      "first-scores",
      "originals-recovery"
    ],
    "screenshot": {
      "article": "collections-and-batch",
      "alt": "The collections screen used to group lesson repertoire"
    },
    "sources": [
      {
        "label": "Watch the first PDF lesson",
        "href": "https://youtu.be/aNDKXv9eqGw"
      }
    ]
  }
} satisfies Record<TopicSlug, TopicContent>;
