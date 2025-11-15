import technologies from "../assets/technologies/technologiesIcons";

const techCategoriesDataEN = [
  "Languages",
  "Frontend",
  "Backend",
  "DevOps & Observability",
  "Tooling",
  "Other",
];

const techCategoriesDataGR = [
  "Γλώσσες",
  "Μπροστινό",
  "Πίσω",
  "DevOps & Παρατηρησιμότητα",
  "Εργαλεία",
  "Άλλα",
];

const techDataBOTH = [
  [
    // Languages
    technologies.go,
    technologies.typescript,
    technologies.python,
    technologies.javascript,
    technologies.ruby,
    technologies.java,
    technologies.cplusplus,
    technologies.c,
    technologies.haskell,
  ],
  [
    // Frontend
    technologies.html5,
    technologies.css3,
    technologies.react,
    technologies.tailwind,
    technologies.vue,
    technologies.shadcn,
    technologies.zustand,
    technologies.reactquery,
    technologies.nextjs,
    technologies.bootstrap,
    technologies.playwright,
    technologies.materialui,
    technologies.jquery,
    technologies.redux,
  ],
  [
    // Backend
    technologies.sql,
    technologies.postgresql,
    technologies.redis,
    technologies.grpc,
    technologies.fx,
    technologies.flask,
    technologies.nats,
    technologies.clickhouse,
    technologies.nodejs,
    technologies.express,
    technologies.mongodb,
    technologies.rails,
    technologies.mysql,
    technologies.sqlite,
    technologies.gorm,
    technologies.echo,
    technologies.sqlalchemy,
  ],
  [
    // DevOps & Observability
    technologies.docker,
    technologies.linux,
    technologies.honeycomb,
    technologies.grafana,
    technologies.opentelemetry,
    technologies.kubernetes,
    technologies.xmatters,
    technologies.prometheus,
    technologies.vercel,
    technologies.heroku,
    technologies.jenkins,
  ],
  [
    // Tooling
    technologies.figma,
    technologies.git,
    technologies.gitlab,
    technologies.github,
    technologies.postman,
    technologies.vsc,
    technologies.office,
    technologies.jira,
    technologies.confluence,
    technologies.slack,
    technologies.jupyter,
    technologies.keras,
    technologies.tensorflow,
    technologies.analytics,
  ],
  [
    // Other
    technologies.replit,
    technologies.fusion360,
    technologies.latex,
    technologies.markdown,
    technologies.openai,
    technologies.opengl,
    technologies.overleaf,
    technologies.stripe,
    technologies.unity,
  ],
];

export { techCategoriesDataEN, techCategoriesDataGR, techDataBOTH };
