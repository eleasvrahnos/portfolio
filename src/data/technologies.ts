import technologies from "../assets/technologies/technologiesIcons";

const techCategoriesDataEN = [
  "Frontend",
  "Backend",
  "Database",
  "Tooling",
  "Other",
];

const techCategoriesDataGR = [
  "Μπροστινό",
  "Πίσω",
  "Βάση Δεδομένων",
  "Εργαλεία",
  "Άλλα",
];

const techDataBOTH = [
  [
    // Frontend
    technologies.bootstrap,
    technologies.css3,
    technologies.html5,
    technologies.jquery,
    technologies.javascript,
    technologies.materialui,
    technologies.nextjs,
    technologies.react,
    technologies.redux,
    technologies.tailwind,
    technologies.typescript,
    technologies.vue,
  ],
  [
    // Backend
    technologies.flask,
    technologies.go,
    technologies.java,
    technologies.nodejs,
    technologies.python,
    technologies.rails,
    technologies.ruby,
  ],
  [
    // Database
    technologies.mongodb,
    technologies.mysql,
    technologies.postgresql,
    technologies.sqlite,
  ],
  [
    // Tooling
    technologies.docker,
    technologies.figma,
    technologies.git,
    technologies.github,
    technologies.heroku,
    technologies.jenkins,
    technologies.linux,
    technologies.postman,
    technologies.vercel,
    technologies.vsc,
  ],
  [
    // Other
    technologies.c,
    technologies.cplusplus,
    technologies.fusion360,
    technologies.haskell,
    technologies.jupyter,
    technologies.keras,
    technologies.opengl,
    technologies.tensorflow,
    technologies.unity,
  ],
];

export { techCategoriesDataEN, techCategoriesDataGR, techDataBOTH };
