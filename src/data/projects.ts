import {
  Github,
  Globe,
  LucideProps,
  NotebookText,
  StickyNote,
} from "lucide-react";
import {
  ciphercypher,
  discordbots,
  gtargmt,
  learninggaming,
  mnistdigitclassification,
  pksimulator,
  proglangreportdemo,
  proglangreportpdf,
  rubytutorial,
  satellitetelemetrysystem,
  valdle,
  wheresjason,
} from "../assets/projects/projectsDemos";
import { Discord } from "../assets/projects/projectsIcons";
import technologies, {
  TechIcon,
} from "../assets/technologies/technologiesIcons";

export type Project = {
  demo: string;
  title: string;
  period: string;
  links?: {
    label: string;
    icon:
      | React.ForwardRefExoticComponent<
          Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
        >
      | string;
    url: string;
  }[];
  description1: string;
  description2: string;
  stack: TechIcon[];
  isVideo: boolean;
};

const projectCategoriesDataEN = ["Learning", "Games", "School"];

const projectCategoriesDataGR = ["Μάθηση", "Παιχνίδια", "Σχολείο"];

const projectDataEN = [
  [
    // Learning
    {
      demo: mnistdigitclassification,
      title: "MNIST Digit Classification",
      period: "Jan. 2025",
      links: [
        {
          label: "GitHub",
          icon: Github,
          url: "https://github.com/eleasvrahnos/mnist-digit-classification",
        },
      ],
      description1:
        "This project explores digit classification using the MNIST dataset, a benchmark in machine learning, to classify handwritten digits from 0 to 9. Inspired by the large potential of machine learning, this 'Hello World' project serves as an introduction to training and deploying models. It combines curiosity about the workings of intelligent systems with a hands-on approach to learning, including a self-created application at the end.",
      description2:
        "The project employs Convolutional Neural Networks (CNNs), a deep learning architecture designed to process image data efficiently by leveraging spatial hierarchies of features like edges and patterns. TensorFlow and Keras within Python are used for everything. Key steps in the model are data preprocessing for normalization, convolutional layers for feature extraction, and pooling layers for dimensionality reduction.",
      stack: [
        technologies.jupyter,
        technologies.keras,
        technologies.python,
        technologies.tensorflow,
      ],
      isVideo: true,
    },
    {
      demo: satellitetelemetrysystem,
      title: "Satellite Telemetry System",
      period: "Oct. 2024",
      links: [
        {
          label: "GitHub",
          icon: Github,
          url: "https://github.com/eleasvrahnos/satellite-telemetry-system",
        },
      ],
      description1:
        "The application is a simulation of a real-time telemetry monitoring system that displays live and historical data from multiple satellite connections. Users can view important telemetry data and the system updates continuously, providing an efficient and scalable way to monitor satellite operations and detect any issues promptly. This app was created as part of a Take Home Project and challenged me to learn Go and PostgreSQL.",
      description2:
        "The frontend is built using React, Tailwind CSS, and TypeScript. The backend API is powered by Go, utilizing the Gin web framework for handling HTTP requests and GORM for database interactions with PostgreSQL. Python is used to simluate generating and receiving telemetry data. I researched Docker and using Docker Compose to containerize the entire application, making it easy to deploy and run locally.",
      stack: [
        technologies.docker,
        technologies.git,
        technologies.github,
        technologies.go,
        technologies.html5,
        technologies.javascript,
        technologies.postgresql,
        technologies.python,
        technologies.react,
        technologies.tailwind,
        technologies.typescript,
      ],
      isVideo: true,
    },
    {
      demo: discordbots,
      title: "Discord Bots",
      period: "Apr. 2020",
      description1:
        "I have developed multiple bot projects, each designed to perform specific tasks for their designated servers. These include a bot that tracks puzzle hunt progress through roles and error checking, and another that enables interaction with an emulated Internet personality through pictures and audio.",
      description2:
        "These bot projects were created to meet clients' needs and solve specific problems. Using Python for backend interaction and the discord.py library, I interacted with the Discord API to perform various server tasks. These include setting server permissions, changing roles and nicknames, and sending messages through server chats and private messages.",
      stack: [technologies.heroku, technologies.python],
      isVideo: true,
    },
  ],
  [
    // Games
    {
      demo: ciphercypher,
      title: "Cipher Cypher",
      period: "Jul. 2024 - Sep. 2024",
      links: [
        {
          label: "Website",
          icon: Globe,
          url: "https://ciphercypher.vercel.app/",
        },
        {
          label: "Discord",
          icon: Discord,
          url: "https://discord.gg/yPJR55J",
        },
      ],
      description1:
        "Cipher Cypher is a challenging series of over 50 of my own visual puzzles that test your mental acuity using math, cryptography, trivia, and wit. With three difficulty levels, two of which remain unbeaten, this passion project merges my love for puzzles and software development. Try it out if your mind needs a challenge!",
      description2:
        "This project is a deep dive into the MERN tech stack, utilizing JWTs/BCrypt/MongoDB for user progress tracking, React/Tailwind/Next.js for the frontend, and Node/Express for the RESTful backend. This Vercel-deployed website is a migration from a Discord server and bot, which also host these puzzles and their discussions.",
      stack: [
        technologies.express,
        technologies.git,
        technologies.github,
        technologies.html5,
        technologies.javascript,
        technologies.mongodb,
        technologies.nextjs,
        technologies.nodejs,
        technologies.postman,
        technologies.react,
        technologies.tailwind,
        technologies.typescript,
        technologies.vercel,
      ],
      isVideo: false,
    },
    {
      demo: valdle,
      title: "Valdle",
      period: "Aug. 2023",
      links: [
        {
          label: "Website",
          icon: Globe,
          url: "https://valdle.gg/",
        },
        {
          label: "GitHub",
          icon: Github,
          url: "https://github.com/GabeGibb/valdle",
        },
      ],
      description1:
        "Valdle is an exciting trivia mash-up that combines the popular online games Valorant and Wordle. Challenge your knowledge by exploring various game modes and engaging in unique challenges.",
      description2:
        "In collaboration with 5 other developers, Valdle has achieved over 7.5 million clicks! We utilized agile development methodologies, emphasized communication, kept track of deadlines, and incorporated user feedback. My contributions included full-stack web development and SEO, interacting with the Valorant API through Python scripts, using web scraping and data mining techniques, and maintaining readability and documentation.",
      stack: [
        technologies.css3,
        technologies.flask,
        technologies.git,
        technologies.github,
        technologies.html5,
        technologies.javascript,
        technologies.jquery,
        technologies.python,
      ],
      isVideo: true,
    },
    {
      demo: wheresjason,
      title: "Where’s Jason?",
      period: "Jun. 2020 - Dec. 2020",
      links: [
        {
          label: "GitHub",
          icon: Github,
          url: "https://github.com/eleasvrahnos/wheres-jason",
        },
      ],
      stack: [
        technologies.bootstrap,
        technologies.css3,
        technologies.flask,
        technologies.git,
        technologies.github,
        technologies.html5,
        technologies.javascript,
        technologies.python,
        technologies.sql,
      ],
      description1:
        "Where's Jason?, also stylized as Where's Jaosn?, is a website game inspired by the Where's Waldo? series. This solo project introduced me to the fundamental web development languages and sparked my interest in web design, dynamic content creation, and engaging user experiences. Initially created as a birthday present for a long-time friend, it became a gateway to my passion for web development.",
      description2:
        "Over six months, I became fully accustomed to the technologies used in this self-learning endeavor, including HTML, CSS, JavaScript, the Flask backend framework, and SQL fundamentals.",
      isVideo: true,
    },
    {
      demo: gtargmt,
      title: "Game Theory Alternate Reality Game - Master Tracker",
      period: "Nov. 2019 - Mar. 2020",
      links: [
        {
          label: "Website",
          icon: Globe,
          url: "https://gtarg.gitbook.io/master-tracker",
        },
      ],
      description1:
        "The popular YouTube channel 'The Game Theorists' hosted an alternate reality game contest with prizes and merchandise. Participants solved clues using cryptography, cybersecurity, and web exploitation techniques. I joined a top cybersecurity team, placing 17th out of over 30,000 players, and earned prizes and shoutouts from the channel.",
      description2:
        "The Master Tracker is a documented write-up of all the ARG's trials and puzzles. Along with two collaborators, I co-produced this comprehensive guide, complete with puzzle walkthroughs and code explanations.",
      stack: [technologies.python],
      isVideo: false,
    },
  ],
  [
    // School
    {
      demo: pksimulator,
      title: "Pokémon Simulator",
      period: "Apr. 2024 - May 2024",
      links: [
        {
          label: "GitHub",
          icon: Github,
          url: "https://github.com/eleasvrahnos/pokemon-simulator/tree/main",
        },
      ],
      stack: [
        technologies.css3,
        technologies.figma,
        technologies.flask,
        technologies.html5,
        technologies.javascript,
        technologies.mysql,
        technologies.python,
      ],
      description1:
        "This project, created as a final project for the Database Management course at Chapman University, demonstrates comprehensive knowledge of MySQL through a basic automatic simulator for Pokémon games.",
      description2:
        "As a solo project, I utilized numerous MySQL and SQLAlchemy features, including creating, deleting, updating records, managing transactions, and designing ER schemas/diagrams. I used Figma for creating ER diagrams and schemas, as well as for the overall UI/UX design of the simulation. HTML, CSS, JavaScript, and Flask were all used to create the website itself.",
      isVideo: true,
    },
    {
      demo: rubytutorial,
      title: "The Ruby Tutorial",
      period: "Nov. 2022 - Dec. 2022",
      links: [
        {
          label: "HackMD",
          icon: NotebookText,
          url: "https://hackmd.io/@evrahnos/rJyCCKdri",
        },
      ],
      stack: [technologies.markdown, technologies.rails, technologies.ruby],
      description1:
        "This tutorial, created as a final project for the Programming Languages course at Chapman University, provides an in-depth look at the Ruby language. It includes the history of Ruby, its strengths and weaknesses, a comprehensive tutorial with exercises and solutions, and a concept for a Ruby on Rails website.",
      description2:
        "In addition to demonstrating my knowledge of Ruby, this tutorial highlights the importance and process of creating a programming language from scratch. I also gained foundational skills in documentation and effectively using Markdown through this project.",
      isVideo: false,
    },
    {
      demo: proglangreportdemo,
      title: "Programming Languages Report",
      period: "Aug. 2022 - Dec. 2022",
      links: [
        {
          label: "Report",
          icon: NotebookText,
          url: proglangreportpdf,
        },
        {
          label: "GitHub",
          icon: Github,
          url: "https://github.com/evrahnos/CPSC354",
        },
      ],
      stack: [
        technologies.git,
        technologies.github,
        technologies.haskell,
        technologies.latex,
        technologies.markdown,
        technologies.overleaf,
        technologies.rails,
        technologies.ruby,
      ],
      description1:
        "This report, developed as an ongoing homework project for the Programming Languages course at Chapman University, explores the building blocks of a programming language and how they form a complete product. It covers various concepts such as syntax trees, abstract reduction systems, recursion applications, and includes a language tutorial as a meta final project.",
      description2:
        "To manage deadlines, I used Git and GitHub for commit timestamps. Programming language concepts were demonstrated through Haskell and BNFC exercises. The final report was compiled using Overleaf, integrating LaTeX and Markdown code.",
      isVideo: false,
    },
    {
      demo: learninggaming,
      title: "Learning + Gaming: Building Computers in VR",
      period: "Aug. 2020 - May 2022",
      links: [
        {
          label: "Poster",
          icon: StickyNote,
          url: "https://blogs.chapman.edu/gci/2022/05/12/learning-gaming-building-computers-in-vr/",
        },
      ],
      description1:
        "As part of the Grand Challenges Initiative at Chapman University, I collaborated with three other engineers to create a product aimed at promoting tech literacy in local schools. We developed a research-backed, gamified virtual reality tool that teaches students about the parts of a modern computer and their functions.",
      description2:
        "My contributions focused on modeling computer parts for the Unity environment. Using Autodesk Fusion 360, I manually and mechanically modeled base components like RAM and computer fans, which were then imported into our immersive Unity virtual environment for player interaction.",
      stack: [technologies.fusion360, technologies.unity],
      isVideo: false,
    },
  ],
];

const projectDataGR = [
  [
    {
      demo: mnistdigitclassification,
      title: "Ταξινόμηση Ψηφίων MNIST",
      period: "Ιαν. 2025",
      links: [
        {
          label: "GitHub",
          icon: Github,
          url: "https://github.com/eleasvrahnos/mnist-digit-classification",
        },
      ],
      description1:
        "Αυτό το πρότζεκτ διερευνά την ταξινόμηση ψηφίων χρησιμοποιώντας το σύνολο δεδομένων MNIST, ένα σημείο αναφοράς στη μηχανική μάθηση, για την ταξινόμηση χειρόγραφων ψηφίων από το 0 έως το 9. Εμπνευσμένο από τις μεγάλες δυνατότητες της μηχανικής μάθησης, αυτό το πρότζεκτ «Hello World» χρησιμεύει ως εισαγωγή στην εκπαίδευση και την ανάπτυξη μοντέλων. Συνδυάζει την περιέργεια για τη λειτουργία των ευφυών συστημάτων με μια πρακτική προσέγγιση στη μάθηση, συμπεριλαμβανομένης μιας εφαρμογής που δημιουργείται μόνος του στο τέλος.",
      description2:
        "Το έργο χρησιμοποιεί Convolutional Neural Networks (CNN), μια αρχιτεκτονική βαθιάς μάθησης που έχει σχεδιαστεί για την αποτελεσματική επεξεργασία δεδομένων εικόνας αξιοποιώντας χωρικές ιεραρχίες χαρακτηριστικών όπως ακμές και μοτίβα. Το TensorFlow και το Keras εντός Python χρησιμοποιούνται για τα πάντα. Βασικά βήματα στο μοντέλο είναι η προεπεξεργασία δεδομένων για κανονικοποίηση, τα συνελικτικά στρώματα για την εξαγωγή χαρακτηριστικών και τα επίπεδα συγκέντρωσης για τη μείωση διαστάσεων.",
      stack: [
        technologies.jupyter,
        technologies.keras,
        technologies.python,
        technologies.tensorflow,
      ],
      isVideo: true,
    },
    {
      demo: satellitetelemetrysystem,
      title: "Σύστημα Τηλεμετρίας Δορυφόρου",
      period: "Οκτ. 2024",
      links: [
        {
          label: "GitHub",
          icon: Github,
          url: "https://github.com/eleasvrahnos/satellite-telemetry-system",
        },
      ],
      description1:
        "Η εφαρμογή είναι μια προσομοίωση ενός συστήματος παρακολούθησης τηλεμετρίας πραγματικού χρόνου που εμφανίζει ζωντανά και ιστορικά δεδομένα από πολλές συνδέσεις δορυφόρων. Οι χρήστες μπορούν να δουν σημαντικά δεδομένα τηλεμετρίας και το σύστημα ενημερώνεται συνεχώς, παρέχοντας έναν αποτελεσματικό και κλιμακούμενο τρόπο παρακολούθησης των λειτουργιών των δορυφόρων και την άμεση ανίχνευση οποιωνδήποτε προβλημάτων. Αυτή η εφαρμογή δημιουργήθηκε ως μέρος ενός Take Home Πρότζεκτ και με προκάλεσε να μάθω Go και PostgreSQL.",
      description2:
        "Το frontend κατασκευάστηκε χρησιμοποιώντας React, Tailwind CSS και TypeScript. Το API του backend τροφοδοτείται από το Go, χρησιμοποιώντας το πλαίσιο Gin για την χειρισμό αιτημάτων HTTP και το GORM για τις αλληλεπιδράσεις βάσης δεδομένων με το PostgreSQL. Το Python χρησιμοποιείται για την προσομοίωση δημιουργίας και λήψης δεδομένων τηλεμετρίας. Έκανα έρευνα για το Docker και τη χρήση του Docker Compose για την ενσωμάτωση της ολόκληρης εφαρμογής, κάνοντάς την εύκολη στην ανάπτυξη και την εκτέλεση τοπικά.",
      stack: [
        technologies.docker,
        technologies.git,
        technologies.github,
        technologies.go,
        technologies.html5,
        technologies.javascript,
        technologies.postgresql,
        technologies.python,
        technologies.react,
        technologies.tailwind,
        technologies.typescript,
      ],
      isVideo: true,
    },
    {
      demo: discordbots,
      title: "Discord Bots",
      period: "Απρ. 2020",
      description1:
        "Έχω αναπτύξει πολλά πρότζεκτ bots, τα οποία σχεδιάστηκαν για να εκτελούν συγκεκριμένες εργασίες για τους εν λόγω διακομιστές. Αυτά περιλαμβάνουν ένα bot που παρακολουθεί την πρόοδο του puzzle hunt μέσω ρόλων και ελέγχου σφαλμάτων, και ένα άλλο που επιτρέπει την αλληλεπίδραση με μια εμφανιζόμενη προσωπικότητα στο Διαδίκτυο μέσω εικόνων και ήχου.",
      description2:
        "Αυτά τα πρότζεκτ bots δημιουργήθηκαν για να καλύψουν τις ανάγκες των πελατών και να λύσουν συγκεκριμένα προβλήματα. Χρησιμοποιώντας την Python για την αλληλεπίδραση με το backend και τη βιβλιοθήκη discord.py, αλληλεπιδρούσα με το Discord API για την εκτέλεση διαφόρων εργασιών διακομιστή. Αυτές περιλαμβάνουν την ρύθμιση δικαιωμάτων διακομιστή, την αλλαγή ρόλων και παρατσιών, και την αποστολή μηνυμάτων μέσω των συνομιλιών του διακομιστή και των προσωπικών μηνυμάτων.",
      stack: [technologies.heroku, technologies.python],
      isVideo: true,
    },
  ],
  [
    // Games
    {
      demo: ciphercypher,
      title: "Cipher Cypher",
      period: "Ιουλ. 2024 - Σεπ. 2024",
      links: [
        {
          label: "Σελίδα",
          icon: Globe,
          url: "https://ciphercypher.vercel.app/",
        },
        {
          label: "Discord",
          icon: Discord,
          url: "https://discord.gg/yPJR55J",
        },
      ],
      description1:
        "Το Cipher Cypher είναι μια προκλητική σειρά από πάνω από 50 δικά μου οπτικά παζλ που δοκιμάζουν την νοητική σας επιδεξιότητα χρησιμοποιώντας μαθηματικά, κρυπτογραφία, τρίβια και ευφυία. Με τρία επίπεδα δυσκολίας, δύο από τα οποία παραμένουν ανεπιτυχή, αυτό το πάθος πρότζεκτ συνδυάζει την αγάπη μου για τα παζλ και την ανάπτυξη λογισμικού. Δοκιμάστε το αν το μυαλό σας χρειάζεται μια πρόκληση!",
      description2:
        "Αυτό το πρότζεκτ είναι μια βαθιά βουτιά στο MERN τεχνολογικό σωρό, χρησιμοποιώντας JWTs/BCrypt/MongoDB για την παρακολούθηση της προόδου των χρηστών, React/Tailwind/Next.js για το frontend και Node/Express για το RESTful backend. Αυτή η ιστοσελίδα που φιλοξενείται στο Vercel είναι μια μεταφορά από έναν διακομιστή και ένα bot Discord, τα οποία φιλοξενούν επίσης αυτά τα παζλ και τις συζητήσεις τους.",
      stack: [
        technologies.express,
        technologies.git,
        technologies.github,
        technologies.html5,
        technologies.javascript,
        technologies.mongodb,
        technologies.nextjs,
        technologies.nodejs,
        technologies.postman,
        technologies.react,
        technologies.tailwind,
        technologies.typescript,
        technologies.vercel,
      ],
      isVideo: false,
    },
    {
      demo: valdle,
      title: "Valdle",
      period: "Aug. 2023",
      links: [
        {
          label: "Σελίδα",
          icon: Globe,
          url: "https://valdle.gg/",
        },
        {
          label: "GitHub",
          icon: Github,
          url: "https://github.com/GabeGibb/valdle",
        },
      ],
      description1:
        "Το Valdle είναι ένα συναρπαστικό trivia mash-up που συνδυάζει τα δημοφιλή online παιχνίδια Valorant και Wordle. Δοκιμάστε τις γνώσεις σας εξερευνώντας διάφορα game modes και συμμετέχοντας σε μοναδικές προκλήσεις.",
      description2:
        "Σε συνεργασία με 5 άλλους προγραμματιστές, το Valdle έχει επιτύχει πάνω από 7,5 εκατομμύρια κλικ! Χρησιμοποιήσαμε μεθοδολογίες ανάπτυξης agile, τονίσαμε την επικοινωνία, κρατήσαμε τα deadlines και ενσωματώσαμε τα σχόλια των χρηστών. Οι συνεισφορές μου περιλάμβαναν πλήρη ανάπτυξη web και SEO, αλληλεπίδραση με το API του Valorant μέσω σεναρίων Python, χρήση τεχνικών web scraping και data mining, και διατήρηση αναγνωσιμότητας και τεκμηρίωσης.",
      stack: [
        technologies.css3,
        technologies.flask,
        technologies.git,
        technologies.github,
        technologies.html5,
        technologies.javascript,
        technologies.jquery,
        technologies.python,
      ],
      isVideo: true,
    },
    {
      demo: wheresjason,
      title: "Πού Είναι ο Jason;",
      period: "Ιούν. 2020 - Δεκ. 2020",
      links: [
        {
          label: "GitHub",
          icon: Github,
          url: "https://github.com/eleasvrahnos/wheres-jason",
        },
      ],
      stack: [
        technologies.bootstrap,
        technologies.css3,
        technologies.flask,
        technologies.git,
        technologies.github,
        technologies.html5,
        technologies.javascript,
        technologies.python,
        technologies.sql,
      ],
      description1:
        "Το Where's Jason?, επίσης στυλισμένο ως Where's Jaosn;, είναι ένα παιχνίδι ιστοσελίδας εμπνευσμένο από τη σειρά Where's Waldo;. Αυτό το προσωπικό πρότζεκτ με εισήγαγε στις βασικές γλώσσες ανάπτυξης ιστοσελίδων και άναψε το ενδιαφέρον μου για το web design, τη δημιουργία δυναμικού περιεχομένου και τις ενδιαφέρουσες εμπειρίες χρήστη. Δημιουργήθηκε αρχικά ως δώρο γενεθλίων για έναν φίλο εδώ και πολύ καιρό, και έγινε μια πύλη για το πάθος μου για την ανάπτυξη ιστοσελίδων.",
      description2:
        "Επί πέντε μήνες, εξοικειώθηκα πλήρως με τις τεχνολογίες που χρησιμοποιήθηκαν σε αυτήν την προσπάθεια αυτομάτου μάθησης, συμπεριλαμβανομένων των HTML, CSS, JavaScript, του πλαισίου Flask backend και των θεμελιωδών SQL.",
      isVideo: true,
    },
    {
      demo: gtargmt,
      title: "Game Theory Alternate Reality Game - Master Tracker",
      period: "Νοέ. 2019 - Μάρ. 2020",
      links: [
        {
          label: "Σελίδα",
          icon: Globe,
          url: "https://gtarg.gitbook.io/master-tracker",
        },
      ],
      description1:
        "Το δημοφιλές κανάλι YouTube 'The Game Theorists' φιλοξένησε ένα διαγωνισμό παιχνιδιών εναλλακτικής πραγματικότητας με βραβεία και εμπορεύματα. Οι συμμετέχοντες λύνουν στοιχεία χρησιμοποιώντας κρυπτογραφία, τεχνικές κυβερνοασφάλειας και εκμετάλλευσης ιστού. Ενταχθήκα σε μια κορυφαία ομάδα κυβερνοασφάλειας, κατατάσσοντας 17η από πάνω από 30.000 παίκτες, και κέρδισα βραβεία και αναφορές από το κανάλι.",
      description2:
        "Το Master Tracker είναι ένα τεκμηριωμένο έγγραφο με όλες τις δοκιμές και τα παζλ του ARG. Μαζί με δύο συνεργάτες, παρήγαμε αυτόν τον περιεκτικό οδηγό, πλήρη με οδηγίες περάσματος παζλ και εξηγήσεις κώδικα.",
      stack: [technologies.python],
      isVideo: false,
    },
  ],
  [
    // School
    {
      demo: pksimulator,
      title: "Προσομοιωτής Pokémon",
      period: "Απρ. 2024 - Μάι. 2024",
      links: [
        {
          label: "GitHub",
          icon: Github,
          url: "https://github.com/eleasvrahnos/pokemon-simulator/tree/main",
        },
      ],
      stack: [
        technologies.css3,
        technologies.figma,
        technologies.flask,
        technologies.html5,
        technologies.javascript,
        technologies.mysql,
        technologies.python,
      ],
      description1:
        "Αυτό το πρότζεκτ, δημιουργημένο ως τελική εργασία για το μάθημα Διαχείρισης Βάσεων Δεδομένων στο Chapman University, δείχνει την πλήρη γνώση του MySQL μέσω ενός βασικού αυτόματου προσομοιωτή για παιχνίδια Pokémon.",
      description2:
        "Ως ένα προσωπικό πρότζεκτ, χρησιμοποίησα πολλά χαρακτηριστικά του MySQL και του SQLAlchemy, συμπεριλαμβανομένων της δημιουργίας, της διαγραφής, της ενημέρωσης εγγραφών, της διαχείρισης συναλλαγών και της σχεδίασης διαγραμμάτων ER. Χρησιμοποίησα το Figma για τη δημιουργία διαγραμμάτων ER και σχημάτων, καθώς και για το συνολικό σχεδιασμό UI/UX της προσομοίωσης. Το HTML, το CSS, το JavaScript και το Flask χρησιμοποιήθηκαν για τη δημιουργία της ιστοσελίδας.",
      isVideo: true,
    },
    {
      demo: rubytutorial,
      title: "Ο Οδηγός Ruby",
      period: "Νοε. 2022 - Δεκ. 2022",
      links: [
        {
          label: "HackMD",
          icon: NotebookText,
          url: "https://hackmd.io/@evrahnos/rJyCCKdri",
        },
      ],
      stack: [technologies.markdown, technologies.rails, technologies.ruby],
      description1:
        "Αυτός ο οδηγός, δημιουργημένος ως τελική εργασία για το μάθημα Γλωσσών Προγραμματισμού στο Chapman University, παρέχει μια λεπτομερή ματιά στη γλώσσα Ruby. Περιλαμβάνει την ιστορία της Ruby, τα πλεονεκτήματά της και τα μειονεκτήματά της, έναν πλήρη οδηγό με ασκήσεις και λύσεις, καθώς και έναν σχεδιασμό για μια ιστοσελίδα Ruby on Rails.",
      description2:
        "Εκτός από την απόδειξη της γνώσης μου για τη Ruby, αυτός ο οδηγός υπογραμμίζει τη σημασία και τη διαδικασία δημιουργίας μιας γλώσσας προγραμματισμού από το μηδέν. Απέκτησα επίσης θεμελιώδεις δεξιότητες στην τεκμηρίωση και την αποτελεσματική χρήση του Markdown μέσω αυτού του πρότζεκτ.",
      isVideo: false,
    },
    {
      demo: proglangreportdemo,
      title: "Αναφορά Γλωσσών Προγραμματισμού",
      period: "Αυγ. 2022 - Δεκ. 2022",
      links: [
        {
          label: "Αναφορά",
          icon: NotebookText,
          url: proglangreportpdf,
        },
        {
          label: "GitHub",
          icon: Github,
          url: "https://github.com/evrahnos/CPSC354",
        },
      ],
      stack: [
        technologies.git,
        technologies.github,
        technologies.haskell,
        technologies.latex,
        technologies.markdown,
        technologies.overleaf,
        technologies.rails,
        technologies.ruby,
      ],
      description1:
        "Αυτή η αναφορά, αναπτυγμένη ως μια συνεχής εργασία για το μάθημα Γλωσσών Προγραμματισμού στο Chapman University, εξερευνά τα θεμέλια ενός γλωσσών προγραμματισμού και πώς σχηματίζουν ένα πλήρες προϊόν. Καλύπτει διάφορα θέματα όπως τα δέντρα σύνταξης, τα αφηρημένα συστήματα μείωσης, οι εφαρμογές αναδρομής και περιλαμβάνει έναν οδηγό γλώσσας ως μετα-τελικό πρότζεκτ.",
      description2:
        "Για τη διαχείριση των προθεσμιών, χρησιμοποίησα το Git και το GitHub για τις χρονοσφραγίδες των commit. Οι έννοιες των γλωσσών προγραμματισμού αποδείχθηκαν μέσω ασκήσεων Haskell και BNFC. Η τελική αναφορά συντάχθηκε χρησιμοποιώντας το Overleaf, ενσωματώνοντας κώδικα LaTeX και Markdown.",
      isVideo: false,
    },
    {
      demo: learninggaming,
      title: "Μάθηση + Gaming: Κατασκευή Υπολογιστών στη VR",
      period: "Αυγ. 2020 - Μάι. 2022",
      links: [
        {
          label: "Αφίσα",
          icon: StickyNote,
          url: "https://blogs.chapman.edu/gci/2022/05/12/learning-gaming-building-computers-in-vr/",
        },
      ],
      description1:
        "Στο πλαίσιο της Grand Challenges Initiative στο Chapman University, συνεργάστηκα με τρεις άλλους μηχανικούς για τη δημιουργία ενός προϊόντος που στοχεύει στην προώθηση της τεχνολογικής παιδείας στα τοπικά σχολεία. Αναπτύξαμε ένα εργαλείο εικονικής πραγματικότητας που βασίζεται σε έρευνα και παιχνίδια και διδάσκει στους μαθητές τα μέρη ενός σύγχρονου υπολογιστή και τις λειτουργίες τους.",
      description2:
        "Οι συνεισφορές μου εστίασαν στη μοντελοποίηση των μερών του υπολογιστή για το περιβάλλον Unity. Χρησιμοποιώντας το Autodesk Fusion 360, μοντελοποίησα χειροκίνητα και μηχανικά βασικά εξαρτήματα όπως τη RAM και τους ανεμιστήρες του υπολογιστή, τα οποία εισήχθησαν στο ενδυναμωμένο εικονικό μας περιβάλλον Unity για αλληλεπίδραση του παίκτη.",
      stack: [technologies.fusion360, technologies.unity],
      isVideo: false,
    },
  ],
];

export {
  projectCategoriesDataEN,
  projectCategoriesDataGR,
  projectDataEN,
  projectDataGR,
};
