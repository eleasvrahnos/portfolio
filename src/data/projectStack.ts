import valdle from "../assets/projectStack/valdle.mp4";
import pksimulator from "../assets/projectStack/pksimulator.mp4";
import discordbots from "../assets/projectStack/discordbots.mp4";

export const projectStackData = [
  {
    demo: valdle,
    links: {
      Website: "https://valdle.gg/",
      GitHub: "https://github.com/GabeGibb/valdle",
    },
    title: "Valdle",
    period: "Aug. 2023 - Present",
    stack: ["HTML", "CSS", "JavaScript", "jQuery", "Python", "Flask", "Agile", "APIs"],
    desc1: "Valdle is a fun trivia mash-up of the popular online games Valorant and Wordle! Test your knowledge by playing through multiple game modes and challenges.",
    desc2: "Collaboration with 5 other developers, currently garnering over 3 million clicks. Utilized agile developement methodologies with focuses on communication, deadlines, and user-driven feedback. My contributions included full-stack web development, interacting with the Valorant API through Python scripts, employing web scraping and data mining techniques, and maintaining readability and documentation." 
  },
  {
    demo: discordbots,
    title: "Discord Bots",
    period: "Apr. 2020 - Present",
    stack: ["Python", "APIs"],
    desc1: "TBD.",
    desc2: "TBD.",
  },
  {
    demo: pksimulator,
    links: {
      GitHub: "https://github.com/eleasvrahnos/pokemon-simulator/tree/main"
    },
    title: "Pokémon Simulator",
    period: "Apr. 2024 - May 2024",
    stack: ["HTML", "CSS", "JavaScript", "MySQL", "Python", "Flask", "Figma"],
    desc1: "A final project created for the Database Management course at Chapman University. It demonstrates general knowledge of MySQL through a barebones automatic simulator for the games in the Pokémon series.",
    desc2: "A solo project that employs many features of MySQL and database creation, including create, delete, update, transactions, and ER schemas/diagrams. Figma was used as the tool to create ER diagrams/schemas, as well as overall UI/UX design of the simulation.",
  }
];
