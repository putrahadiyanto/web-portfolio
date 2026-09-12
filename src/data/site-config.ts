export const siteConfig = {
  name: "Putra Hadiyanto Nugroho",
  url: "https://putrahadiyanto.web.id",
  title: "Aspiring AI/ML & Data Engineer",
  tagline:
    "Computer Science undergraduate at Universitas Pendidikan Indonesia specializing in end-to-end deep learning systems (YOLO, ViT, Transformers), backend orchestration (FastAPI, LangChain), and automated ETL pipelines (Airflow, Docker).",
  description:
    "Portfolio of Putra Hadiyanto Nugroho — Computer Science undergraduate at UPI (GPA 3.93/4.00, expected 2027) working across deep learning, NLP, and ETL pipelines.",
  email: "putrahadiyantonugroho@gmail.com",
  location: "Bandung, Indonesia",
  socials: {
    github: "https://github.com/putrahadiyanto",
    linkedin: "https://www.linkedin.com/in/putra-hadiyanto-nugroho-9ba427293/",
    email: "mailto:putrahadiyantonugroho@gmail.com",
  },
  nav: [
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/#experience" },
    { label: "Skills", href: "/#skills" },
    { label: "Contact", href: "/#contact" },
  ],
};

export const education = {
  school: "Universitas Pendidikan Indonesia",
  degree: "S.Kom. (Computer Science)",
  gpa: "3.93 / 4.00",
  graduation: "Expected 2027",
  focus: ["Deep Learning", "NLP", "Big Data Platforms", "ETL Pipelines"],
};

export type ProjectPreview = {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  github: string;
};

export const projectsPreview: ProjectPreview[] = [
  {
    slug: "multimodal-ai-generated-content-detection",
    title: "Multimodal AI-Generated Content Detection",
    description:
      "Official UPI representative for GEMASTIK XVIII. Visual + audio pipeline over 1,379 Indonesian social videos with fine-tuned ViT and Audio Transformer streams and 5-fold weighted soft-voting fusion. 97.76% accuracy, 97.62% F1.",
    techStack: ["Python", "PyTorch", "Vision Transformer", "Audio Transformer"],
    github: "https://github.com/putrahadiyanto/mancing-tipu",
  },
  {
    slug: "ai-powered-biology-assistant",
    title: "AI-Powered Biology Assistant",
    description:
      "End-to-end backend orchestration for collaborative university research: low-latency Q&A and adaptive quizzes via LangChain + Groq, YOLO outputs merged into LLM prompts for spatial audio feedback, containerized with Docker.",
    techStack: ["FastAPI", "LangChain", "Groq", "WebSockets", "MongoDB", "Docker"],
    github: "https://github.com/putrahadiyanto",
  },
  {
    slug: "automated-idx-etl-pipeline",
    title: "Automated IDX ETL Pipeline",
    description:
      "Automated pipeline extracting real-time stock prices (yFinance), financial reports, and news with LLM summarization for market intelligence, served via unified Flask REST API in containerized services.",
    techStack: ["Apache Airflow", "Docker", "Flask", "MongoDB", "Python"],
    github: "https://github.com/putrahadiyanto/etl-idx-stock-dashboard",
  },
  {
    slug: "mpasi-rag-recommender",
    title: "Personalized Baby Food (MPASI) RAG Recommender",
    description:
      "1st Place nationally for AI in personalized pediatric nutrition. End-to-end RAG web app combining LLM reasoning with nutritional guidelines to generate safe recommendations by age, health, and dietary preference.",
    techStack: ["LangChain", "LLM / RAG", "Python", "Vector DB", "REST APIs"],
    github: "https://tinyurl.com/sertifikatpkmamli",
  },
];

export const skillGroups = [
  {
    label: "Languages",
    skills: ["Python", "SQL", "Java", "C"],
  },
  {
    label: "ML / AI",
    skills: ["PyTorch", "YOLO", "Vision Transformer", "Transformers", "LangChain", "RAG"],
  },
  {
    label: "Data & Backend",
    skills: ["Apache Airflow", "FastAPI", "MongoDB", "Vector DB", "REST APIs"],
  },
  {
    label: "Tools & Ops",
    skills: ["Docker", "Git", "Selenium", "Appium", "WebSockets"],
  },
];

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Software Quality Assurance Intern",
    org: "PT Aneka Tambang Tbk, South Jakarta",
    period: "Jan 2026 – Jun 2026",
    points: [
      "Executed manual test suites and engineered automated testing scripts using Selenium and Appium (Python) for web/mobile enterprise applications.",
      "Reviewed technical documentation and query architecture for upcoming ETL systems.",
      "Identified flawed SQL/data extraction queries during documentation audits and proposed optimized, production-ready fixes.",
    ],
  },
  {
    role: "Programming Lab Assistant",
    org: "Programming Lab UPI, Bandung",
    period: "Sep 2024 – Dec 2025",
    points: [
      "Mentored 70+ students per semester in OOP (Java), Data Structures, and C programming.",
      "Designed weekly lab modules and collaborated with lecturer to align coursework with standards.",
    ],
  },
];
