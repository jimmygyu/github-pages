export type Project = {
  title: string;
  type: string;
  description: string;
  stack: string[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export const profile = {
  name: "MinGyu Jin",
  tagline: "AI & Data Science Builder",
  motto: "차근차근 해가자고",
  intro:
    "I build practical AI systems, data tools, and workflow automation that turn messy ideas into useful products.",
  about:
    "I am a Computational and Data Sciences student at George Mason Korea focused on LLMs, agents, RAG, workflow automation, personal AI systems, and data analysis.",
  focusAreas: [
    "Computational and Data Sciences at George Mason Korea",
    "AI engineering, product thinking, and useful automation",
    "LLMs, agents, RAG, and personal knowledge workflows",
    "Data analysis that supports better product decisions",
  ],
  metrics: [
    { value: "GMK", label: "George Mason Korea student" },
    { value: "AI", label: "LLMs, agents, and retrieval systems" },
    { value: "Build", label: "Data tools and workflow automation" },
  ],
};

export const projects: Project[] = [
  {
    title: "RAG Study Assistant",
    type: "AI System",
    description:
      "A retrieval-augmented assistant concept for turning course notes, PDFs, and research material into grounded study workflows.",
    stack: ["LLMs", "RAG", "Embeddings", "TypeScript"],
  },
  {
    title: "Personal AI Workflow Hub",
    type: "Automation",
    description:
      "A product direction for connecting reminders, notes, documents, and repeated tasks into one AI-assisted operating layer.",
    stack: ["Agents", "APIs", "Automation", "UX"],
  },
  {
    title: "Data Analysis Toolkit",
    type: "Data Product",
    description:
      "Reusable analysis patterns for cleaning messy data, finding trends, and presenting decisions with clear visual summaries.",
    stack: ["Python", "Pandas", "Visualization", "SQL"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "AI Engineering",
    items: ["LLMs", "Agents", "RAG", "Prompt systems", "Evaluation"],
  },
  {
    category: "Data Science",
    items: ["Python", "Pandas", "SQL", "Data analysis", "Visualization"],
  },
  {
    category: "Automation",
    items: ["Workflow design", "APIs", "Personal AI systems", "No-code bridges"],
  },
  {
    category: "Product Building",
    items: ["Next.js", "TypeScript", "Tailwind CSS", "Prototyping", "UX thinking"],
  },
];

export const contactLinks = [
  {
    label: "GitHub" as const,
    display: "github.com/min-gyu-jin",
    href: "https://github.com/min-gyu-jin",
  },
  {
    label: "Email" as const,
    display: "email@example.com",
    href: "mailto:email@example.com",
  },
  {
    label: "LinkedIn" as const,
    display: "linkedin.com/in/mingyu-jin",
    href: "https://linkedin.com/in/mingyu-jin",
  },
];
