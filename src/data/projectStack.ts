import ciphercypher from "../assets/projectStack/ciphercypher.png";
import valdle from "../assets/projectStack/valdle.mp4";
import pksimulator from "../assets/projectStack/pksimulator.mp4";
import discordbots from "../assets/projectStack/discordbots.mp4";
import rubytutorial from "../assets/projectStack/rubytutorial.png";
import proglangreportpdf from "../assets/projectStack/proglangreport.pdf";
import proglangreportdemo from "../assets/projectStack/proglangdemo.png";
import learninggaming from "../assets/projectStack/learninggaming.png";
import wheresjason from "../assets/projectStack/wheresjason.mp4";
import gtargmt from "../assets/projectStack/gtargmt.png";

const projectStackDataCurr = [
  {
    demo: ciphercypher,
    title: "Cipher Cypher | Full-Stack Developer",
    period: "est. late August",
    links: {
      Discord: "https://discord.gg/yPJR55J",
    },
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Material UI",
      "node.js",
      "Redux",
      "Vercel",
      "User Auth",
      "GitHub",
      "RESTful",
      "APIs",
      "Cryptography"
    ],
    desc1:
      "Cipher Cypher is a challenging series of 50 of my own visual puzzles that test your mental acuity using math, cryptography, trivia, and wit. With three difficulty levels, two of which remain unbeaten, this passion project merges my love for puzzles and software development.",
    desc2:
      "This project is a deep dive into the MERN tech stack, utilizing user authentication/MongoDB for user progress tracking, React/Redux/Material UI for the frontend, and Node/Express for the RESTful backend. This Vercel-deployed website is a migration from a Discord server and bot, which also host these puzzles and their discussions. Everything can be viewed and solved from there currently.",
    isVideo: false,
  },
  {
    demo: valdle,
    links: {
      Website: "https://valdle.gg/",
      GitHub: "https://github.com/GabeGibb/valdle",
    },
    title: "Valdle | Full-Stack Developer",
    period: "Aug. 2023 - Present",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Python",
      "Flask",
      "Git",
      "GitHub",
      "Agile",
      "APIs",
      "Google Analytics",
      "SEO",
      "Collaboration",
      "Project Management",
    ],
    desc1:
      "Valdle is an exciting trivia mash-up that combines the popular online games Valorant and Wordle. Challenge your knowledge by exploring various game modes and engaging in unique challenges.",
    desc2:
      "In collaboration with 5 other developers, Valdle has achieved over 4 million clicks! We utilized agile development methodologies, emphasized communication, kept track of deadlines, and incorporated user feedback. My contributions included full-stack web development and SEO, interacting with the Valorant API through Python scripts, using web scraping and data mining techniques, and maintaining readability and documentation.",
  },
  {
    demo: discordbots,
    title: "Discord Bots | Back-End Developer",
    period: "Apr. 2020 - Present",
    stack: [
      "Python",
      "APIs",
      "discord.py",
      "Heroku",
      "Collaboration",
      "Product Design",
      "Project Management",
    ],
    desc1:
      "I have developed multiple bot projects, each designed to perform specific tasks for their designated servers. These include a bot that tracks puzzle hunt progress through roles and error checking, and another that enables interaction with an emulated Internet personality through pictures and audio.",
    desc2:
      "These bot projects were created to meet clients' needs and solve specific problems. Using Python for back-end interaction and the discord.py library, I interacted with the Discord API to perform various server tasks. These include setting server permissions, changing roles and nicknames, and sending messages through server chats and private messages.",
  },
];

const projectStackDataPast = [
  {
    demo: pksimulator,
    links: {
      GitHub: "https://github.com/eleasvrahnos/pokemon-simulator/tree/main",
    },
    title: "Pokémon Simulator | Full-Stack Developer",
    period: "Apr. 2024 - May 2024",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
      "SQLAlchemy",
      "Databases",
      "Python",
      "Flask",
      "pandas",
      "Figma",
    ],
    desc1:
      "This project, created as a final project for the Database Management course at Chapman University, demonstrates comprehensive knowledge of MySQL through a basic automatic simulator for Pokémon games.",
    desc2:
      "As a solo project, I utilized numerous MySQL and SQLAlchemy features, including creating, deleting, updating records, managing transactions, and designing ER schemas/diagrams. I used Figma for creating ER diagrams and schemas, as well as for the overall UI/UX design of the simulation. HTML, CSS, JavaScript, and Flask were all used to create the website itself.",
  },
  {
    demo: rubytutorial,
    links: {
      Tutorial: "https://hackmd.io/@evrahnos/rJyCCKdri",
    },
    title: "The Ruby Tutorial | Author, Researcher",
    period: "Nov. 2022 - Dec. 2022",
    stack: ["Ruby", "Ruby on Rails", "HackMD", "Markdown", "Documentation"],
    desc1:
      "This tutorial, created as a final project for the Programming Languages course at Chapman University, provides an in-depth look at the Ruby language. It includes the history of Ruby, its strengths and weaknesses, a comprehensive tutorial with exercises and solutions, and a concept for a Ruby on Rails website.",
    desc2:
      "In addition to demonstrating my knowledge of Ruby, this tutorial highlights the importance and process of creating a programming language from scratch. I also gained foundational skills in documentation and effectively using Markdown through this project.",
    isVideo: false,
  },
  {
    demo: proglangreportdemo,
    links: {
      Report: proglangreportpdf,
      GitHub: "https://github.com/evrahnos/CPSC354",
    },
    title: "Programming Languages Report | Author, Researcher",
    period: "Aug. 2022 - Dec. 2022",
    stack: [
      "Ruby",
      "Ruby on Rails",
      "Git",
      "GitHub",
      "HackMD",
      "Markdown",
      "Documentation",
      "Haskell",
      "BNFC",
      "Overleaf",
      "LaTeX",
    ],
    desc1:
      "This report, developed as an ongoing homework project for the Programming Languages course at Chapman University, explores the building blocks of a programming language and how they form a complete product. It covers various concepts such as syntax trees, abstract reduction systems, recursion applications, and includes a language tutorial as a meta final project.",
    desc2:
      "To manage deadlines, I used Git and GitHub for commit timestamps. Programming language concepts were demonstrated through Haskell and BNFC exercises. The final report was compiled using Overleaf, integrating LaTeX and Markdown code.",
    isVideo: false,
  },
  {
    demo: learninggaming,
    links: {
      Poster:
        "https://blogs.chapman.edu/gci/2022/05/12/learning-gaming-building-computers-in-vr/",
    },
    title:
      "Learning + Gaming: Building Computers in VR | Co-Developer, Co-Author",
    period: "Aug. 2020 - May 2022",
    stack: [
      "Unity",
      "Autodesk Fusion 360",
      "Virtual Reality",
      "Collaboration",
      "Product Design",
      "Project Management",
    ],
    desc1:
      "As part of the Grand Challenges Initiative at Chapman University, I collaborated with three other engineers to create a product aimed at promoting tech literacy in local schools. We developed a research-backed, gamified virtual reality tool that teaches students about the parts of a modern computer and their functions.",
    desc2:
      "My contributions focused on modeling computer parts for the Unity environment. Using Autodesk Fusion 360, I manually and mechanically modeled base components like RAM and computer fans, which were then imported into our immersive Unity virtual environment for player interaction.",
    isVideo: false,
  },
  {
    demo: wheresjason,
    links: {
      GitHub: "https://github.com/eleasvrahnos/wheres-jason",
    },
    title: "Where’s Jason? | Full-Stack Developer",
    period: "Jun. 2020 - Dec. 2020",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap CSS",
      "SQLAlchemy",
      "Databases",
      "Python",
      "Flask",
      "Git",
      "GitHub",
    ],
    desc1:
      "Where's Jason?, also stylized as Where's Jaosn?, is a website game inspired by the Where's Waldo? series. This solo project introduced me to the fundamental web development languages and sparked my interest in web design, dynamic content creation, and engaging user experiences. Initially created as a birthday present for a long-time friend, it became a gateway to my passion for web development.",
    desc2:
      "Over six months, I became fully accustomed to the technologies used in this self-learning endeavor, including HTML, CSS, JavaScript, the Flask back-end framework, and SQL fundamentals.",
  },
  {
    demo: gtargmt,
    links: {
      Website: "https://gtarg.gitbook.io/master-tracker",
    },
    title:
      "Game Theory Alternate Reality Game - Master Tracker | Competitor, Co-Author",
    period: "Nov. 2019 - Mar. 2020",
    stack: [
      "Cryptography",
      "Cybersecurity",
      "Web Exploitation",
      "Alternate Reality Game",
      "Documentation",
      "Collaboration",
    ],
    desc1:
      "The popular YouTube channel 'The Game Theorists' hosted an alternate reality game contest with prizes and merchandise. Participants solved clues using cryptography, cybersecurity, and web exploitation techniques. I joined a top cybersecurity team, placing 17th out of over 30,000 players, and earned prizes and shoutouts from the channel.",
    desc2:
      "The Master Tracker is a documented write-up of all the ARG's trials and puzzles. Along with two collaborators, I co-produced this comprehensive guide, complete with puzzle walkthroughs and code explanations.",
    isVideo: false,
  },
];

export { projectStackDataCurr, projectStackDataPast };
