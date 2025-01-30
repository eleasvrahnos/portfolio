import technologies from "../assets/technologies/technologiesIcons";

const techCategoriesDataEN = [
  "Frontend",
  "Backend",
  "Database",
  "Dev Tools",
  "Testing",
  "Other",
];

const techCategoriesDataGR = [
  "Μπροστινό",
  "Πίσω",
  "Βάση Δεδομένων",
  "Εργαλεία Ανάπτυξης",
  "Δοκιμές",
  "Άλλα",
];

const techDataBOTH = [
  [
    // Frontend
    technologies.react,
  ],
  [
    // Backend
    technologies.go,
  ],
  [
    // Database
    technologies.mysql,
  ],
  [
    // Dev Tools
    technologies.figma,
  ],
  [
    // Testing
    technologies.postman,
  ],
  [
    // Other
    technologies.haskell,
  ],
];

export { techCategoriesDataEN, techCategoriesDataGR, techDataBOTH };
