export const siteConfig = {
  name: "Putra Hadiyanto Nugroho",
  title: "Aspiring AI/ML & Data Engineer",
  tagline:
    "I build machine learning systems and data pipelines — from multimodal detection models to production-ready ETL and RAG assistants.",
  description:
    "Portfolio of Putra Hadiyanto Nugroho, an aspiring AI/ML & Data Engineer working with Python, PyTorch, FastAPI, and Docker.",
  email: "putra.h.nugroho@example.com",
  location: "Indonesia",
  socials: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
    email: "mailto:putra.h.nugroho@example.com",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
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
      "Text + image classifier that detects AI-generated content. Built for GEMASTIK XVIII with fusion architecture and robust evaluation.",
    techStack: ["Python", "PyTorch", "Transformers", "Scikit-learn"],
    github: "https://github.com/",
  },
  {
    slug: "ai-powered-biology-assistant",
    title: "AI-Powered Biology Assistant",
    description:
      "Q&A assistant for biology topics with retrieval over curated materials and a clean chat UI.",
    techStack: ["Python", "FastAPI", "LangChain", "Vector DB"],
    github: "https://github.com/",
  },
  {
    slug: "automated-idx-etl-pipeline",
    title: "Automated IDX ETL Pipeline",
    description:
      "Scheduled ETL that ingests, cleans, and loads Indonesia Stock Exchange (IDX) data for analysis.",
    techStack: ["Python", "Pandas", "PostgreSQL", "Docker"],
    github: "https://github.com/",
  },
  {
    slug: "mpasi-rag-recommender",
    title: "Personalized Baby Food (MPASI) RAG Recommender",
    description:
      "RAG recommender that suggests age-appropriate MPASI recipes with nutrition-aware retrieval.",
    techStack: ["Python", "RAG", "FastAPI", "Vector DB"],
    github: "https://github.com/",
  },
];

export const skillGroups = [
  {
    label: "Languages",
    skills: ["Python", "SQL", "TypeScript", "Bash"],
  },
  {
    label: "ML / AI",
    skills: ["PyTorch", "Scikit-learn", "Transformers", "LangChain", "RAG"],
  },
  {
    label: "Data & Backend",
    skills: ["Pandas", "PostgreSQL", "FastAPI", "REST APIs"],
  },
  {
    label: "Tools & Ops",
    skills: ["Docker", "Git", "Linux", "Nginx"],
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
    role: "Data / Engineering Intern",
    org: "Antam (Aneka Tambang)",
    period: "2024 — 2025",
    points: [
      "Supported data collection and reporting for operational needs.",
      "Built spreadsheet / Python workflows to clean and summarize datasets.",
      "Collaborated with mentors to document processes and results.",
    ],
  },
  {
    role: "Laboratory Assistant",
    org: "University Lab",
    period: "2023 — 2024",
    points: [
      "Guided practicum sessions and graded assignments.",
      "Prepared lab materials and helped students debug code.",
      "Maintained session notes and improved teaching handouts.",
    ],
  },
];
