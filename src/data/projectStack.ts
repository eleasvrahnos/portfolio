import valdle from "../assets/projectStack/valdle.mp4";
import pksimulator from "../assets/projectStack/pksimulator.mp4";
import discordbots from "../assets/projectStack/discordbots.mp4";

const projectStackDataCurr = [
  {
    demo: valdle,
    links: {
      Website: "https://valdle.gg/",
      GitHub: "https://github.com/GabeGibb/valdle",
    },
    title: "Valdle",
    period: "Aug. 2023 - Present",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Python",
      "Flask",
      "Agile",
      "APIs",
    ],
    desc1:
      "Valdle is an exciting trivia mash-up that combines the popular online games Valorant and Wordle. Challenge your knowledge by exploring various game modes and engaging in unique challenges.",
    desc2:
      "In collaboration with five other developers, Valdle has achieved over 3 million clicks. We utilized agile development methodologies, emphasizing communication, meeting deadlines, and incorporating user feedback. My contributions included full-stack web development, interacting with the Valorant API through Python scripts, using web scraping and data mining techniques, and maintaining readability and documentation.",
  },
  {
    demo: discordbots,
    title: "Discord Bots",
    period: "Apr. 2020 - Present",
    stack: ["Python", "APIs", "discord.py"],
    desc1:
      "I have developed multiple bot projects, each designed to perform specific tasks for their designated servers. These include a bot that tracks puzzle hunt progress through roles and error checking, and another that enables interaction with an emulated Internet personality through pictures and audio.",
    desc2:
      "These bot projects were created to meet clients' needs and solve specific problems. Using Python and the discord.py library, I interacted with the Discord API to perform various server tasks. These include setting server permissions, changing roles and nicknames, and sending messages through server chats and private messages.",
  },
];

const projectStackDataPast = [
  {
    demo: pksimulator,
    links: {
      GitHub: "https://github.com/eleasvrahnos/pokemon-simulator/tree/main",
    },
    title: "Pokémon Simulator",
    period: "Apr. 2024 - May 2024",
    stack: ["HTML", "CSS", "JavaScript", "MySQL", "Python", "Flask", "Figma"],
    desc1:
      "This project, created as a final assignment for the Database Management course at Chapman University, demonstrates comprehensive knowledge of MySQL through a basic automatic simulator for Pokémon games.",
    desc2:
      "As a solo project, I utilized numerous MySQL features, including creating, deleting, updating records, managing transactions, and designing ER schemas/diagrams. I used Figma for creating ER diagrams and schemas, as well as for the overall UI/UX design of the simulation.",
  },
];

export { projectStackDataCurr, projectStackDataPast };
