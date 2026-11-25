import type { TopicContent, TopicSlug } from './discovery-topics';

export default {
  "android-sheet-music-reader": {
    "title": "Lire ses partitions sur une tablette Android",
    "description": "Avec Partitoria, vous pouvez conserver vos partitions PDF sur une tablette ou un téléphone Android, retrouver un morceau par son titre et tourner les pages hors connexion. L’importation, la lecture et la sauvegarde manuelle sont gratuites.",
    "sections": [
      {
        "heading": "Quel fichier choisir pour le pupitre ?",
        "paragraphs": [
          "Pour conserver la mise en page et les tournes d’une édition, prenez son PDF. Un scan ou une photo peut aussi se lire comme une page de partition. À partir de fichiers MusicXML, MXL et MuseScore compatibles, Partitoria prépare des pages de musique. Les airs au format ABC et les chansons ChordPro peuvent rejoindre la même bibliothèque."
        ]
      },
      {
        "heading": "Un essai avant la répétition",
        "paragraphs": [
          "Importez un morceau d’au moins deux pages. Désactivez le Wi-Fi et les données mobiles, retrouvez-le par son titre ou son nom de fichier, puis passez à la deuxième page. Vous pouvez regrouper les morceaux de la répétition dans une collection."
        ]
      },
      {
        "heading": "Quand utiliser Pro ?",
        "paragraphs": [
          "Vous pouvez tourner les pages gratuitement au doigt ou avec une pédale en mode clavier. Pro permet notamment d’annoter les partitions et d’enchaîner les morceaux d’un programme dans l’ordre du concert."
        ]
      }
    ],
    "faq": [
      {
        "question": "Comment lire un PDF sans Wi-Fi ?",
        "answer": "Téléchargez-le pendant que vous avez accès à Internet et importez-le dans Partitoria. Vous pourrez ensuite ouvrir la partition depuis votre bibliothèque. Le guide du premier import détaille les étapes."
      }
    ],
    "guideSlugs": [
      "first-scores",
      "find-in-library",
      "reader"
    ],
    "screenshot": {
      "article": "reader",
      "alt": "Une partition ouverte en plein écran dans Partitoria"
    }
  },
  "bluetooth-page-turner": {
    "title": "Tourner les pages d’une partition avec une pédale Bluetooth sur Android",
    "description": "Une pédale Bluetooth en mode clavier peut tourner les pages dans le lecteur gratuit de Partitoria. Associez-la à la tablette dans les réglages Android, choisissez le mode flèches ou Page précédente/Page suivante et ouvrez une partition.",
    "sections": [
      {
        "heading": "Quelle touche pour quelle direction ?",
        "paragraphs": [
          "Flèche droite, flèche bas, Page suivante et la barre d’espace font avancer d’une page. Flèche gauche, flèche haut et Page précédente permettent de revenir en arrière. Pour aller dans les deux sens, choisissez par exemple gauche/droite. Un seul contact réglé sur Espace permet uniquement d’avancer."
        ]
      },
      {
        "heading": "Essayez les deux sens",
        "paragraphs": [
          "Ouvrez une partition de trois pages et placez-vous sur la deuxième. Avancez d’une page, puis revenez à la précédente. Si la pédale est connectée mais que rien ne bouge, cherchez le mode clavier dans sa notice. Si vous avez un clavier externe, essayez la même flèche sur la partition ouverte."
        ]
      },
      {
        "heading": "Quel matériel a été essayé ?",
        "paragraphs": [
          "Partitoria Studio a vérifié la tourne de pages avec une pédale Bluetooth sans marque. Pour un autre modèle, vérifiez les touches que la pédale peut envoyer. Pro permet de personnaliser les commandes du clavier et d’utiliser des commandes MIDI."
        ]
      }
    ],
    "faq": [
      {
        "question": "Faut-il un abonnement pour tourner les pages au pied ?",
        "answer": "Les touches de défilement standard sont disponibles gratuitement. Une pédale qui envoie ces touches fonctionne dans le lecteur sans configuration personnalisée."
      }
    ],
    "guideSlugs": [
      "reader",
      "input-controls"
    ],
    "screenshot": {
      "article": "reader",
      "alt": "Partition ouverte dans le lecteur où la pédale commande les changements de page"
    }
  },
  "musicxml-musescore-android": {
    "title": "Ouvrir des partitions MusicXML et MuseScore sur Android",
    "description": "Partitoria importe les fichiers MusicXML (.musicxml et .xml), les fichiers MXL compressés et les partitions MuseScore (.mscx et .mscz). Vous pouvez vérifier les pages avant de les enregistrer, puis lire la partition gratuitement.",
    "sections": [
      {
        "heading": "Un exemple pour flûte et piano",
        "paragraphs": [
          "Dans Partitoria 1.11.1, nous avons sélectionné Flute-and-Piano-Study.musicxml dans le sélecteur de fichiers Android. L’aperçu affichait une page avec deux portées de piano et une portée de flûte. Nous avons validé la page, puis rouvert l’étude depuis la bibliothèque. Nous avons également rouvert Morning-Scale.mscx, un exemple distinct au format MuseScore."
        ]
      },
      {
        "heading": "Que vérifier avant de jouer ?",
        "paragraphs": [
          "Lors de l’ajout d’une partition, sélectionnez le fichier et examinez l’aperçu. Comparez les parties, les indications écrites et les tournes avec votre édition. Partitoria met la musique en page pour la lecture. Les sauts de page peuvent donc différer de ceux de votre logiciel de notation. Le fichier source reste disponible à l’exportation."
        ]
      },
      {
        "heading": "Si le résultat ne vous convient pas",
        "paragraphs": [
          "Conservez votre original. Si un fichier ne s’ouvre pas, essayez de l’exporter à nouveau en MusicXML depuis le logiciel qui l’a créé. Pour retrouver exactement les espacements et les sauts de page de votre édition, exportez-la en PDF depuis ce logiciel."
        ]
      }
    ],
    "faq": [
      {
        "question": "Comment ouvrir un fichier MusicXML compressé ?",
        "answer": "Sélectionnez directement le fichier .mxl. Lors de notre essai, Flute-and-Piano-in-D.mxl a donné un aperçu de ses pages."
      }
    ],
    "guideSlugs": [
      "first-scores",
      "import-review",
      "originals-recovery"
    ],
    "screenshot": {
      "article": "import-review",
      "alt": "Aperçu de Flute-and-Piano-Study.musicxml avec trois portées sur une page",
      "example": "musicxml-preview"
    }
  }
} satisfies Partial<Record<TopicSlug, TopicContent>>;
