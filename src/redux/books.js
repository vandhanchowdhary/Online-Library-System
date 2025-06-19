const books = [
  {
    "id": 1,
    "title": "The Lost Archive",
    "author": "Olivia Crane",
    "description": "A no-holds-barred look at geopolitical manipulation through economic warfare.",
    "rating": 4.2,
    "category": "sci-fi",
    "cover": "https://covers.openlibrary.org/b/id/10338971-M.jpg"
  },
  {
    "id": 2,
    "title": "Winds of Tomorrow",
    "author": "Olivia Crane",
    "description": "A critical dive into society's dependency on artificial intelligence and its consequences.",
    "rating": 3.7,
    "category": "non-fiction",
    "cover": "https://covers.openlibrary.org/b/id/10741332-M.jpg"
  },
  {
    "id": 3,
    "title": "Beneath Cold Stars",
    "author": "Daneil Okafor",
    "description": "An intimate memoir uncovering hidden truths of a forgotten expedition.",
    "rating": 4.4,
    "category": "fiction",
    "cover": "https://covers.openlibrary.org/b/id/10080878-M.jpg"
  },
  {
    "id": 4,
    "title": "Machine of Dreams",
    "author": "Alina Varga",
    "description": "A compelling tale of love, loss, and digital rebirth in a time of cybernetic expansion.",
    "rating": 4.9,
    "category": "fiction",
    "cover": "https://covers.openlibrary.org/b/id/10495663-M.jpg"
  },
  {
    "id": 5,
    "title": "Fragments of Time",
    "author": "Alina Varga",
    "description": "A compelling tale of love, loss, and digital rebirth in a time of cybernetic expansion.",
    "rating": 4.8,
    "category": "non-fiction",
    "cover": "https://covers.openlibrary.org/b/id/10397731-M.jpg"
  },
  {
    "id": 6,
    "title": "Pulse of Earth",
    "author": "Rhea Anwar",
    "description": "A dystopian narrative examining rebellion against oppressive governance.",
    "rating": 4.9,
    "category": "sci-fi",
    "cover": "https://covers.openlibrary.org/b/id/10936708-M.jpg"
  },
  {
    "id": 7,
    "title": "Echoes of the Void",
    "author": "Olivia Crane",
    "description": "A haunting journey through interdimensional dreams and their effect on waking life.",
    "rating": 3.9,
    "category": "sci-fi",
    "cover": "https://covers.openlibrary.org/b/id/10935062-M.jpg"
  },
  {
    "id": 8,
    "title": "The Silent Accord",
    "author": "K.J. Harrow",
    "description": "An inspiring account of human courage during interstellar migration.",
    "rating": 3.9,
    "category": "fiction",
    "cover": "https://covers.openlibrary.org/b/id/10836388-M.jpg"
  },
  {
    "id": 9,
    "title": "Chronicles of Dust",
    "author": "Michael Yue",
    "description": "A no-holds-barred look at geopolitical manipulation through economic warfare.",
    "rating": 4.9,
    "category": "sci-fi",
    "cover": "https://covers.openlibrary.org/b/id/10226870-M.jpg"
  },
  {
    "id": 10,
    "title": "Legacy of Fire",
    "author": "Rhea Anwar",
    "description": "An intimate memoir uncovering hidden truths of a forgotten expedition.",
    "rating": 4.6,
    "category": "sci-fi",
    "cover": "https://covers.openlibrary.org/b/id/10802552-M.jpg"
  },
  {
    "id": 11,
    "title": "Truths Untold",
    "author": "Lena Thomsen",
    "description": "A philosophical discussion on identity in a post-biological society.",
    "rating": 4.7,
    "category": "fiction",
    "cover": "https://covers.openlibrary.org/b/id/10827487-M.jpg"
  },
  {
    "id": 12,
    "title": "Voyage Beyond",
    "author": "Rhea Anwar",
    "description": "A compelling tale of love, loss, and digital rebirth in a time of cybernetic expansion.",
    "rating": 4.6,
    "category": "non-fiction",
    "cover": "https://covers.openlibrary.org/b/id/10368553-M.jpg"
  },
  {
    "id": 13,
    "title": "Empires Rise",
    "author": "Alina Varga",
    "description": "A no-holds-barred look at geopolitical manipulation through economic warfare.",
    "rating": 4.7,
    "category": "non-fiction",
    "cover": "https://covers.openlibrary.org/b/id/10347630-M.jpg"
  },
  {
    "id": 14,
    "title": "A Study in Silence",
    "author": "Tom\u00e1s Calvino",
    "description": "A compelling tale of love, loss, and digital rebirth in a time of cybernetic expansion.",
    "rating": 3.9,
    "category": "sci-fi",
    "cover": "https://covers.openlibrary.org/b/id/10343170-M.jpg"
  },
  {
    "id": 15,
    "title": "Fall of the Nexus",
    "author": "Lena Thomsen",
    "description": "A suspenseful thriller navigating the future of augmented humans.",
    "rating": 4.4,
    "category": "fiction",
    "cover": "https://covers.openlibrary.org/b/id/10235072-M.jpg"
  },
  {
    "id": 16,
    "title": "Hearts of Iron",
    "author": "Dex Monroe",
    "description": "An inspiring account of human courage during interstellar migration.",
    "rating": 4.1,
    "category": "non-fiction",
    "cover": "https://covers.openlibrary.org/b/id/10371533-M.jpg"
  },
  {
    "id": 17,
    "title": "Orbital Secrets",
    "author": "Dex Monroe",
    "description": "A compelling tale of love, loss, and digital rebirth in a time of cybernetic expansion.",
    "rating": 3.9,
    "category": "non-fiction",
    "cover": "https://covers.openlibrary.org/b/id/10622070-M.jpg"
  },
  {
    "id": 18,
    "title": "The Quantum Divide",
    "author": "Tom\u00e1s Calvino",
    "description": "A haunting journey through interdimensional dreams and their effect on waking life.",
    "rating": 4.9,
    "category": "sci-fi",
    "cover": "https://covers.openlibrary.org/b/id/10350339-M.jpg"
  },
  {
    "id": 19,
    "title": "Labyrinth of Minds",
    "author": "Daneil Okafor",
    "description": "A suspenseful thriller navigating the future of augmented humans.",
    "rating": 3.9,
    "category": "fiction",
    "cover": "https://covers.openlibrary.org/b/id/10086125-M.jpg"
  },
  {
    "id": 20,
    "title": "River of Names",
    "author": "Olivia Crane",
    "description": "A compelling tale of love, loss, and digital rebirth in a time of cybernetic expansion.",
    "rating": 3.5,
    "category": "non-fiction",
    "cover": "https://covers.openlibrary.org/b/id/10468895-M.jpg"
  },
  {
    "id": 21,
    "title": "Code of Honor",
    "author": "Lena Thomsen",
    "description": "A no-holds-barred look at geopolitical manipulation through economic warfare.",
    "rating": 4.7,
    "category": "fiction",
    "cover": "https://covers.openlibrary.org/b/id/10311890-M.jpg"
  },
  {
    "id": 22,
    "title": "Synthetic Dawn",
    "author": "Lena Thomsen",
    "description": "A suspenseful thriller navigating the future of augmented humans.",
    "rating": 4.3,
    "category": "non-fiction",
    "cover": "https://covers.openlibrary.org/b/id/10605151-M.jpg"
  },
  {
    "id": 23,
    "title": "The Forgotten Pact",
    "author": "Lena Thomsen",
    "description": "A dystopian narrative examining rebellion against oppressive governance.",
    "rating": 4.0,
    "category": "sci-fi",
    "cover": "https://covers.openlibrary.org/b/id/10041689-M.jpg"
  },
  {
    "id": 24,
    "title": "Shadows of Serenity",
    "author": "K.J. Harrow",
    "description": "An intimate memoir uncovering hidden truths of a forgotten expedition.",
    "rating": 4.1,
    "category": "fiction",
    "cover": "https://covers.openlibrary.org/b/id/10396457-M.jpg"
  },
  {
    "id": 25,
    "title": "Gravity\u2019s Kiss",
    "author": "Daneil Okafor",
    "description": "A chilling sci-fi narrative where consciousness can be traded like currency.",
    "rating": 3.8,
    "category": "fiction",
    "cover": "https://covers.openlibrary.org/b/id/10065475-M.jpg"
  },
  {
    "id": 26,
    "title": "New Eden",
    "author": "Daneil Okafor",
    "description": "An inspiring account of human courage during interstellar migration.",
    "rating": 4.2,
    "category": "sci-fi",
    "cover": "https://covers.openlibrary.org/b/id/10780008-M.jpg"
  },
  {
    "id": 27,
    "title": "Voices in the Sky",
    "author": "Tom\u00e1s Calvino",
    "description": "A suspenseful thriller navigating the future of augmented humans.",
    "rating": 4.9,
    "category": "sci-fi",
    "cover": "https://covers.openlibrary.org/b/id/10588659-M.jpg"
  },
  {
    "id": 28,
    "title": "Map of Meaning",
    "author": "Haruto Nishi",
    "description": "A haunting journey through interdimensional dreams and their effect on waking life.",
    "rating": 4.8,
    "category": "fiction",
    "cover": "https://covers.openlibrary.org/b/id/10322381-M.jpg"
  },
  {
    "id": 29,
    "title": "Threshold Protocol",
    "author": "Daneil Okafor",
    "description": "A critical dive into society's dependency on artificial intelligence and its consequences.",
    "rating": 4.7,
    "category": "non-fiction",
    "cover": "https://covers.openlibrary.org/b/id/10945171-M.jpg"
  },
  {
    "id": 30,
    "title": "Return to Andromeda",
    "author": "K.J. Harrow",
    "description": "A suspenseful thriller navigating the future of augmented humans.",
    "rating": 4.0,
    "category": "sci-fi",
    "cover": "https://covers.openlibrary.org/b/id/10023781-M.jpg"
  },
  {
    "id": 31,
    "title": "Infinite Harvest",
    "author": "Michael Yue",
    "description": "A critical dive into society's dependency on artificial intelligence and its consequences.",
    "rating": 3.5,
    "category": "fiction",
    "cover": "https://covers.openlibrary.org/b/id/10678381-M.jpg"
  },
  {
    "id": 32,
    "title": "Sculpting Realities",
    "author": "Tom\u00e1s Calvino",
    "description": "An intimate memoir uncovering hidden truths of a forgotten expedition.",
    "rating": 4.3,
    "category": "sci-fi",
    "cover": "https://covers.openlibrary.org/b/id/10473987-M.jpg"
  },
  {
    "id": 33,
    "title": "Unspoken Laws",
    "author": "Dex Monroe",
    "description": "A philosophical discussion on identity in a post-biological society.",
    "rating": 4.9,
    "category": "fiction",
    "cover": "https://covers.openlibrary.org/b/id/10278205-M.jpg"
  },
  {
    "id": 34,
    "title": "Datafall",
    "author": "Tom\u00e1s Calvino",
    "description": "A suspenseful thriller navigating the future of augmented humans.",
    "rating": 4.7,
    "category": "sci-fi",
    "cover": "https://covers.openlibrary.org/b/id/10398408-M.jpg"
  },
  {
    "id": 35,
    "title": "The Other Algorithm",
    "author": "Rhea Anwar",
    "description": "An intimate memoir uncovering hidden truths of a forgotten expedition.",
    "rating": 3.8,
    "category": "sci-fi",
    "cover": "https://covers.openlibrary.org/b/id/10773959-M.jpg"
  },
  {
    "id": 36,
    "title": "Inkbound",
    "author": "K.J. Harrow",
    "description": "A suspenseful thriller navigating the future of augmented humans.",
    "rating": 4.4,
    "category": "fiction",
    "cover": "https://covers.openlibrary.org/b/id/10694361-M.jpg"
  },
  {
    "id": 37,
    "title": "Strangers We Knew",
    "author": "Olivia Crane",
    "description": "A chilling sci-fi narrative where consciousness can be traded like currency.",
    "rating": 4.3,
    "category": "sci-fi",
    "cover": "https://covers.openlibrary.org/b/id/10977217-M.jpg"
  },
  {
    "id": 38,
    "title": "A Mirror of Worlds",
    "author": "Daneil Okafor",
    "description": "A no-holds-barred look at geopolitical manipulation through economic warfare.",
    "rating": 4.1,
    "category": "fiction",
    "cover": "https://covers.openlibrary.org/b/id/10371664-M.jpg"
  },
  {
    "id": 39,
    "title": "The Oracle\u2019s Lie",
    "author": "K.J. Harrow",
    "description": "A suspenseful thriller navigating the future of augmented humans.",
    "rating": 4.1,
    "category": "fiction",
    "cover": "https://covers.openlibrary.org/b/id/10872027-M.jpg"
  },
  {
    "id": 40,
    "title": "Remains of the Future",
    "author": "Olivia Crane",
    "description": "A philosophical discussion on identity in a post-biological society.",
    "rating": 3.5,
    "category": "non-fiction",
    "cover": "https://covers.openlibrary.org/b/id/10152724-M.jpg"
  },
  {
    "id": 41,
    "title": "Memoirs of the Machine",
    "author": "Alina Varga",
    "description": "A haunting journey through interdimensional dreams and their effect on waking life.",
    "rating": 4.8,
    "category": "non-fiction",
    "cover": "https://covers.openlibrary.org/b/id/10464316-M.jpg"
  },
  {
    "id": 42,
    "title": "Covenant of Dust",
    "author": "Michael Yue",
    "description": "A chilling sci-fi narrative where consciousness can be traded like currency.",
    "rating": 4.9,
    "category": "fiction",
    "cover": "https://covers.openlibrary.org/b/id/10003622-M.jpg"
  },
  {
    "id": 43,
    "title": "Cold Logic",
    "author": "Tom\u00e1s Calvino",
    "description": "A compelling tale of love, loss, and digital rebirth in a time of cybernetic expansion.",
    "rating": 3.5,
    "category": "fiction",
    "cover": "https://covers.openlibrary.org/b/id/10268982-M.jpg"
  },
  {
    "id": 44,
    "title": "Between Two Suns",
    "author": "Daneil Okafor",
    "description": "A philosophical discussion on identity in a post-biological society.",
    "rating": 3.6,
    "category": "fiction",
    "cover": "https://covers.openlibrary.org/b/id/10713785-M.jpg"
  },
  {
    "id": 45,
    "title": "Serpent\u2019s Loop",
    "author": "Lena Thomsen",
    "description": "A chilling sci-fi narrative where consciousness can be traded like currency.",
    "rating": 4.6,
    "category": "sci-fi",
    "cover": "https://covers.openlibrary.org/b/id/10069087-M.jpg"
  },
  {
    "id": 46,
    "title": "Binary Trust",
    "author": "Michael Yue",
    "description": "A philosophical discussion on identity in a post-biological society.",
    "rating": 3.6,
    "category": "fiction",
    "cover": "https://covers.openlibrary.org/b/id/10968170-M.jpg"
  },
  {
    "id": 47,
    "title": "Dawn in Exile",
    "author": "Dex Monroe",
    "description": "A critical dive into society's dependency on artificial intelligence and its consequences.",
    "rating": 5.0,
    "category": "non-fiction",
    "cover": "https://covers.openlibrary.org/b/id/10860611-M.jpg"
  },
  {
    "id": 48,
    "title": "Journals of Control",
    "author": "Rhea Anwar",
    "description": "An inspiring account of human courage during interstellar migration.",
    "rating": 4.6,
    "category": "sci-fi",
    "cover": "https://covers.openlibrary.org/b/id/10430675-M.jpg"
  },
  {
    "id": 49,
    "title": "Beyond All Sound",
    "author": "Daneil Okafor",
    "description": "An inspiring account of human courage during interstellar migration.",
    "rating": 4.6,
    "category": "fiction",
    "cover": "https://covers.openlibrary.org/b/id/10843868-M.jpg"
  },
  {
    "id": 50,
    "title": "The Radiant Hollow",
    "author": "Tom\u00e1s Calvino",
    "description": "A dystopian narrative examining rebellion against oppressive governance.",
    "rating": 4.2,
    "category": "fiction",
    "cover": "https://covers.openlibrary.org/b/id/10930350-M.jpg"
  }
];

export default books;