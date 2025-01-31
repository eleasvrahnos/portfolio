import {
  codingminds,
  headstarter,
  turionspace,
} from "../assets/experience/experienceIcons";
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
      technologies.nodejs,
      technologies.postgresql,
      technologies.postman,
      technologies.python,
      technologies.react,
      technologies.ruby,
      technologies.sql,
      technologies.tailwind,
      technologies.typescript,
      technologies.vue,
    ],
  },
  {
    icon: headstarter,
    company: "Headstarter AI",
    title: "Software Engineering Fellow",
    period: "Jul. 2024 - Sep. 2024",
    links: {
      Website: "https://headstarter.co/",
    },
    description1:
      "To sharpen my skills the summer after graduating college, I participated in a software engineering fellowship that focused on learning new technologies, conducting mock interviews, and attending weekly Zoom sessions with experienced professionals and startup founders. It was an eye-opening experience to gain outside, professional feedback on my work and see how others approached similar challenges. I learned a lot about the software engineering industry, how to think more strategically about system design, and how to train to become a top 1% engineer.",
    description2:
      "During the fellowship, I worked on various projects from design to deployment, collaborating with other fellows using MVC design patterns. We formed teams to develop AI-driven applications similar to real-world use cases, such as a music recommendation chatbot. Through this experience, I gained hands-on exposure to Agile methodologies, CI/CD, Git, and microservice architecture. It was insightful to see how different teams approached problem-solving and system design, and I came away with a much deeper understanding of software development in a team setting. Along the way, I also expanded my technical stack, learning Next.js, Stripe, OpenAI, MaterialUI, and more.",
    stack: [
      technologies.bootstrap,
      technologies.css3,
      technologies.express,
      technologies.git,
      technologies.github,
      technologies.html5,
      technologies.javascript,
      technologies.materialui,
      technologies.nextjs,
      technologies.nodejs,
      technologies.openai,
      technologies.react,
      technologies.redux,
      technologies.stripe,
      technologies.tailwind,
      technologies.typescript,
      technologies.vercel,
      technologies.vsc,
    ],
  },
  {
    icon: codingminds,
    company: "Coding Minds, Inc.",
    title: "Part-Time Instructor",
    period: "Sep. 2022 - Jan. 2023",
    links: {
      Website: "https://codingmind.com/",
    },
    description1:
      "At Coding Minds, I mentored students of all ages and skill levels through interactive lessons and hands-on projects, focusing on programming fundamentals and best coding practices. The projects ranged from building a scrolling rocket game to developing a racecar game in Unity, allowing students to apply their skills in creative and engaging ways. I also provided guidance on debugging, code optimization, and project planning, helping students build good habits while coding. It taught me the hardships of teaching to complete beginners and how to adapt to different learning styles and paces.",
    description2:
      "I taught programming languages like Python, Java, and C++, tailoring lessons to different learning styles and experience levels. This was done through self-created coding challenges and exercises, curated to help them learn the concepts for the particular lesson. Additionally, I worked alongside experienced instructors to guide my teaching approach, incorporating techniques like gamification and connecting lessons to students' personal interests to make learning more engaging and effective.",
    stack: [
      technologies.cplusplus,
      technologies.java,
      technologies.python,
      technologies.replit,
      technologies.unity,
    ],
  },
];

const experienceDataGR = [
  {
    icon: turionspace,
    company: "Turion Space",
    title: "Μηχανικός Λογισμικού Εδάφους",
    period: "Οκτ. 2024 - Παρόν",
    links: {
      Website: "https://turionspace.com/",
    },
    description1:
      "Στο Turion Space, εργάζομαι σε πολλά πρότζεκτ και ομάδες για να ευθυγραμμίσω τις απαιτήσεις, να μάθω γρήγορα τεχνικές έννοιες και να οδηγήσω την ανάπτυξη χαρακτηριστικών. Παίζω επίσης καίριο ρόλο στην ενσωμάτωση γράφοντας και ενημερώνοντας την τεκμηρίωση για νέους υπαλλήλους και υποψήφιους συνεντεύξεων. Κάποια από τα πρότζεκτ στα οποία συνέβαλα περιλαμβάνουν την ανάπτυξη κρίσιμου λογισμικού δοκιμών για το δορυφόρο DROID.002 της Turion Space, την υποστήριξη στην ανάπτυξη του συστήματος ελέγχου αποστολής μας, και τη δημιουργία του STARFIRE OS, ενός πλατφόρμας βασισμένης σε ιστοσελίδες και API για πελάτες να αλληλεπιδρούν και να αγοράζουν εικόνες δορυφόρων.",
    description2:
      "Εργάζομαι με μια ευρεία γκάμα τεχνολογιών, κατασκευάζοντας αποδοτικά συστήματα frontend και backend, μαζί με αυτοματοποιημένα σενάρια, χρησιμοποιώντας Go, Python, Ruby, και JavaScript. Στο frontend, σχεδιάζω ανταποκρινόμενες, εστιασμένες στον χρήστη ιστοσελίδες με React, Vue, και TypeScript. Η δουλειά μου συχνά τέμνεται με την τεχνολογία διαστήματος και δορυφόρων, δίνοντάς μου την ευκαιρία να μάθω για διαφορετικές μηχανικές περιοχές όπως οι αγωγοί AI/ML και ο κώδικας C του λογισμικού πτήσης. Δίνουμε προτεραιότητα σε μοντέρνα εργαλεία και βέλτιστες πρακτικές για να παρέχουμε κλιμακούμενο, υψηλής απόδοσης λογισμικό που καλύπτει τις εσωτερικές μας ανάγκες και αυτές των πελατών μας.",
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
      technologies.tailwind,
      technologies.typescript,
    ],
  },
  {
    icon: headstarter,
    company: "Headstarter AI",
    title: "Συνάδελφος Μηχανικής Λογισμικού",
    period: "Ιουλ. 2024 - Σεπ. 2024",
    links: {
      Website: "https://headstarter.co/",
    },
    description1:
      "Για να ακονίσω τις δεξιότητές μου το καλοκαίρι μετά την αποφοίτηση από το κολέγιο, συμμετείχα σε ένα πρόγραμμα ειδίκευσης στην μηχανική λογισμικού που εστίαζε στην μάθηση νέων τεχνολογιών, τη διεξαγωγή προσομοιωτικών συνεντεύξεων, και τη συμμετοχή σε εβδομαδιαίες συνεδρίες Zoom με έμπειρους επαγγελματίες και ιδρυτές startups. Ήταν μια ενδιαφέρουσα εμπειρία να αποκτήσω εξωτερικά, επαγγελματικά σχόλια για τη δουλειά μου και να δω πώς άλλοι προσέγγιζαν παρόμοιες προκλήσεις. Έμαθα πολλά για τη βιομηχανία της μηχανικής λογισμικού, πώς να σκέφτομαι πιο στρατηγικά για το σχεδιασμό συστημάτων, και πώς να εκπαιδευτώ για να γίνω μηχανικός του 1%.",
    description2:
      "Κατά τη διάρκεια της ειδίκευσης, εργάστηκα σε διάφορα πρότζεκτ από το σχεδιασμό μέχρι την ανάπτυξη, συνεργαζόμενος με άλλους ειδικευόμενους χρησιμοποιώντας πρότυπα σχεδιασμού MVC. Δημιουργήσαμε ομάδες για να αναπτύξουμε εφαρμογές που κινούνται από την AI παρόμοιες με πραγματικές περιπτώσεις χρήσης, όπως ένα chatbot προτάσεων μουσικής. Μέσα από αυτή την εμπειρία, απέκτησα πρακτική εκθέση σε μεθοδολογίες Agile, CI/CD, Git, και αρχιτεκτονική μικρουπηρεσιών. Ήταν ενδιαφέρον να δω πώς διαφορετικές ομάδες προσέγγιζαν την επίλυση προβλημάτων και το σχεδιασμό συστημάτων, και αποκόμισα μια πολύ βαθύτερη κατανόηση της ανάπτυξης λογισμικού σε ομαδικό περιβάλλον. Κατά τη διάρκεια της πορείας μου, επίσης επεκτάθηκε το τεχνικό μου στοίβα, μαθαίνοντας Next.js, Stripe, OpenAI, MaterialUI, και άλλα.",
    stack: [
      technologies.bootstrap,
      technologies.css3,
      technologies.express,
      technologies.git,
      technologies.github,
      technologies.html5,
      technologies.javascript,
      technologies.materialui,
      technologies.nextjs,
      technologies.nodejs,
      technologies.openai,
      technologies.react,
      technologies.redux,
      technologies.stripe,
      technologies.tailwind,
      technologies.typescript,
      technologies.vercel,
      technologies.vsc,
    ],
  },
  {
    icon: codingminds,
    company: "Coding Minds, Inc.",
    title: "Εκπαιδευτής Part-Time",
    period: "Σεπ. 2022 - Ιαν. 2023",
    links: {
      Website: "https://codingmind.com/",
    },
    description1:
      "Στη Coding Minds, καθοδήγησα μαθητές όλων των ηλικιών και επιπέδων δεξιοτήτων μέσω διαδραστικών μαθημάτων και hands-on πρότζεκτ, εστιάζοντας στις βασικές αρχές προγραμματισμού και τις καλύτερες πρακτικές κωδικοποίησης. Τα πρότζεκτ κυμάνθηκαν από τη δημιουργία ενός παιχνιδιού με κύλιση ρουκετών μέχρι την ανάπτυξη ενός παιχνιδιού αυτοκινήτων στην Unity, επιτρέποντας στους μαθητές να εφαρμόσουν τις δεξιότητές τους με δημιουργικούς και συναρπαστικούς τρόπους. Παρείχα επίσης καθοδήγηση στην εντοπισμό σφαλμάτων, τη βελτιστοποίηση κώδικα, και το σχεδιασμό πρότζεκτ, βοηθώντας τους μαθητές να χτίσουν καλές συνήθειες κατά την κωδικοποίηση. Μου δίδαξε τις δυσκολίες της διδασκαλίας σε αρχάριους και πώς να προσαρμοστώ σε διαφορετικά στυλ και ρυθμούς μάθησης.",
    description2:
      "Δίδαξα γλώσσες προγραμματισμού όπως Python, Java, και C++, προσαρμόζοντας τα μαθήματα σε διαφορετικά στυλ μάθησης και επίπεδα εμπειρίας. Αυτό έγινε μέσω αυτοσχεδιασμένων προκλήσεων και ασκήσεων κωδικοποίησης, σχεδιασμένων για να τους βοηθήσουν να μάθουν τις έννοιες για το συγκεκριμένο μάθημα. Επιπλέον, εργάστηκα δίπλα σε έμπειρους εκπαιδευτές για να καθοδηγήσω την προσέγγισή μου στη διδασκαλία, ενσωματώνοντας τεχνικές όπως η gamification και η σύνδεση των μαθημάτων με τα προσωπικά ενδιαφέροντα των μαθητών για να κάνω τη μάθηση πιο ενδιαφέρουσα και αποτελεσματική.",
    stack: [
      technologies.cplusplus,
      technologies.java,
      technologies.python,
      technologies.replit,
      technologies.unity,
    ],
  },
];

export { experienceDataEN, experienceDataGR };
