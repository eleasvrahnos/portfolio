import { turionspace } from "../assets/experience/experienceIcons";
import technologies, {
  TechIcon,
} from "../assets/technologies/technologiesIcons";

export type Experience = {
  icon: string;
  company: string;
  title: string;
  period: string;
  links: {
    Website: string;
  };
  description1: string;
  description2: string;
  stack: TechIcon[];
};

const experienceDataEN = [
  {
    icon: turionspace,
    company: "Turion Space",
    title: "Ground Software Engineer",
    period: "since Oct. 2024",
    links: {
      Website: "https://turionspace.com/",
    },
    description1:
      "At Turion Space, I work across multiple projects and teams to align on requirements, quickly learn technical concepts, and lead feature development. I also play a key role in onboarding by writing and updating documentation for new hires and interview candidates. Some of the projects I've contributed to include developing critical testing software for Turion Space's DROID.002 satellite, assisting in the development of our mission control system, and feature development for STARFIRE OS, a web and API-based platform for customers to interact with and buy satellite imagery.",
    description2:
      "I work with a wide range of technologies, building efficient frontend and backend systems, along with automated scripts, using Go, Python, Ruby, and JavaScript. On the frontend, I design responsive, user-focused websites with React, Vue, and TypeScript. My work often intersects with space and satellite technology, giving me the opportunity to learn about different engineering disciplines such as AI/ML pipelines and flight software C code. We prioritize modern tools and best practices to deliver scalable, high-performance software that meets both our internal needs and those of our customers.",
    stack: [
      technologies.c,
      technologies.css3,
      technologies.docker,
      technologies.git,
      technologies.github,
      technologies.go,
      technologies.html5,
      technologies.javascript,
      technologies.linux,
      technologies.mysql,
      technologies.nodejs,
      technologies.postgresql,
      technologies.postman,
      technologies.python,
      technologies.react,
      technologies.ruby,
      technologies.tailwindcss,
      technologies.typescript,
    ],
  },
  // {
  //   demo: headstarter,
  //   links: {
  //     Website: "https://headstarter.co/",
  //   },
  //   title: "Headstarter AI | Software Engineering Fellow",
  //   period: "Jul. 2024 - Sep. 2024 | Remote",
  //   stack: [
  //     "HTML",
  //     "CSS",
  //     "JavaScript",
  //     "Next.js",
  //     "Material UI",
  //     "OpenAI",
  //     "StripeAI",
  //     "Google Analytics",
  //     "and more...",
  //   ],
  //   desc1:
  //     "To enhance my skills over the summer following college graduation, I participated in a software engineering fellowship that included learning new technologies, conducting mock interviews, and attending weekly Zoom sessions with successful colleagues and startup founders.",
  //   desc2:
  //     "During the fellowship, I have created various projects from design to deployment with other fellows using MVC design patterns. Topics covered include Agile, CI/CD, Git, and microservice patterns.",
  // },
  // {
  //   demo: freelancetutor,
  //   title: "Math and Programming Tutor | Freelance",
  //   period: "Aug. 2021 - Present",
  //   stack: [
  //     "Python",
  //     "Java",
  //     "Teaching",
  //     "Algebra",
  //     "Geometry",
  //     "Trigonometry",
  //     "Calculus 1/2/3",
  //   ],
  //   desc1:
  //     "In my free time, I am passionate about both learning new skills and sharing my expertise with others. I have tutored 30 students across a range of subjects, helping them enhance their problem-solving skills, achieve a deeper understanding of the material, and improve their academic performance.",
  //   desc2:
  //     "I tutor across a wide range of fields within Mathematics, Science, and Introduction to Programming. Specifically, for programming, I have taught several students how to code in Python and Java. Through strategic outreach, referrals, and personalized service, I have been able to establish a loyal customer base.",
  // },
  // {
  //   demo: codingminds,
  //   links: {
  //     Website: "https://codingmind.com/",
  //   },
  //   title: "Coding Minds, Inc. | Part-Time Instructor",
  //   period: "Sep. 2022 - Jan. 2023 | Irvine, CA",
  //   stack: [
  //     "Python",
  //     "Java",
  //     "C++",
  //     "Unity",
  //     "Collaboration",
  //     "Project Management",
  //     "Teaching",
  //   ],
  //   desc1:
  //     "At Coding Minds, Inc., I mentored students across a wide age and skill range through various lessons and projects, focusing on teaching programming fundamentals and good coding practices. The projects varied from creating a scrolling rocket game to developing a racecar game in Unity.",
  //   desc2:
  //     "I taught programming languages such as Python, Java, and C++. I also collaborated with other experienced instructors to learn engaging teaching techniques, including gamification and connecting lessons with students' interests.",
  // },
];

const experienceDataGR = [
  {
    icon: turionspace,
    company: "Turion Space",
    title: "Ground Software Engineer",
    period: "Oct. 2024 - Present",
    links: {
      Website: "https://turionspace.com/",
    },
    description1:
      "At Turion Space, I work across multiple projects and teams to align on requirements, quickly learn technical concepts, and lead feature development. I also play a key role in onboarding by writing and updating documentation for new hires and interview candidates. Some of the projects I've contributed to include developing critical testing software for Turion Space's DROID.002 satellite, assisting in the development of our mission control system, and feature development for STARFIRE OS, a web and API-based platform for customers to interact with and buy satellite imagery.",
    description2:
      "I work with a wide range of technologies, building efficient frontend and backend systems, along with automated scripts, using Go, Python, Ruby, and JavaScript. On the frontend, I design responsive, user-focused websites with React, Vue, and TypeScript. My work often intersects with space and satellite technology, giving me the opportunity to learn about different engineering disciplines such as AI/ML pipelines and flight software C code. We prioritize modern tools and best practices to deliver scalable, high-performance software that meets both our internal needs and those of our customers.",
    stack: [
      technologies.c,
      technologies.css3,
      technologies.docker,
      technologies.git,
      technologies.github,
      technologies.go,
      technologies.html5,
      technologies.javascript,
      technologies.linux,
      technologies.mysql,
      technologies.nodejs,
      technologies.postgresql,
      technologies.postman,
      technologies.python,
      technologies.react,
      technologies.ruby,
      technologies.tailwindcss,
      technologies.typescript,
    ],
  },
  {
    icon: turionspace,
    company: "Turion Space",
    title: "Ground Software Engineer",
    period: "Oct. 2024 - Present",
    links: {
      Website: "https://turionspace.com/",
    },
    description1:
      "At Turion Space, I work across multiple projects and teams to align on requirements, quickly learn technical concepts, and lead feature development. I also play a key role in onboarding by writing and updating documentation for new hires and interview candidates. Some of the projects I've contributed to include developing critical testing software for Turion Space's DROID.002 satellite, assisting in the development of our mission control system, and creating STARFIRE OS, a web and API-based platform for customers to interact with and buy satellite imagery.",
    description2:
      "I work with a wide range of technologies, building efficient frontend and backend systems, along with automated scripts, using Go, Python, Ruby, and JavaScript. On the frontend, I design responsive, user-focused websites with React, Vue, and TypeScript. My work often intersects with space and satellite technology, giving me the opportunity to learn about different engineering disciplines such as AI/ML pipelines and flight software C code. We prioritize modern tools and best practices to deliver scalable, high-performance software that meets both our internal needs and those of our customers.",
    stack: [
      technologies.c,
      technologies.css3,
      technologies.docker,
      technologies.git,
      technologies.github,
      technologies.go,
      technologies.html5,
      technologies.javascript,
      technologies.linux,
      technologies.mysql,
      technologies.nodejs,
      technologies.postgresql,
      technologies.postman,
      technologies.python,
      technologies.react,
      technologies.ruby,
      technologies.tailwindcss,
      technologies.typescript,
    ],
  },
];

export { experienceDataEN, experienceDataGR };
