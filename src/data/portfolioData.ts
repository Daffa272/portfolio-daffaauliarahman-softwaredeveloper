import { Project, ExperienceItem, LeadershipItem, SkillCategory, Certification } from '../types';

export const PERSONAL_INFO = {
  name: "Daffa Aulia Rahman",
  nickname: "Daffa",
  role: "Software Developer",
  titles: [
    "Software Developer",
    "Web Application Developer",
    "AI Integration Specialist"
  ],
  location: "Tangerang, Indonesia",
  email: "daffaar202@gmail.com",
  linkedin: "https://linkedin.com/in/daffaauliar",
  portfolio: "https://bit.ly/daffaar-portfolio",
  availability: "Open to Software Development Opportunities",
  summary:
    "Software Developer with experience in web application development, AI integration, database management, and data visualization. Proficient in JavaScript, TypeScript, Python, SQL, HTML, and CSS, with project experience using React, Vite, Streamlit, Supabase, and PostgreSQL. Skilled in developing functional web applications, integrating APIs, and building data-driven solutions to address practical problems.",
  about:
    "I'm a Software Developer with an Economics background from IPB University. My experience combines software development, data analysis, and practical problem-solving. I enjoy building web applications, integrating AI capabilities, organizing data, and turning complex requirements into usable digital products.",
  education: {
    institution: "IPB University",
    degree: "Bachelor of Economics",
    minor: "Minor in Resources and Environmental Economics",
    gpa: "3.53 / 4.00",
    period: "2021 – 2025",
  },
  pillars: [
    {
      title: "Web Application Development",
      description: "Building responsive, modern user interfaces and full-featured web applications with clean component architecture using React, TypeScript, and modern styling.",
    },
    {
      title: "AI and API Integration",
      description: "Engineering intelligent workflows that parse unstructured inputs into structured schemas, integrating generative AI endpoints with backend databases.",
    },
    {
      title: "Database and Data Visualization",
      description: "Designing structured database schemas, SQL queries, and transforming complex analytical datasets into intuitive dashboards and interactive charts.",
    },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", iconName: "Code2" },
      { name: "TypeScript", iconName: "FileCode2" },
      { name: "Python", iconName: "Terminal" },
      { name: "SQL", iconName: "Database" },
      { name: "HTML5", iconName: "Layout" },
      { name: "CSS3", iconName: "Palette" },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React", iconName: "Atom" },
      { name: "Responsive Web Design", iconName: "Smartphone" },
      { name: "Component-Based Development", iconName: "Boxes" },
    ],
  },
  {
    title: "Frameworks and Platforms",
    skills: [
      { name: "Vite", iconName: "Zap" },
      { name: "Streamlit", iconName: "BarChart3" },
      { name: "WordPress", iconName: "Globe" },
      { name: "Elementor", iconName: "Layers" },
    ],
  },
  {
    title: "Database and Backend",
    skills: [
      { name: "PostgreSQL", iconName: "Database" },
      { name: "Supabase", iconName: "Server" },
      { name: "Database Integration", iconName: "HardDrive" },
    ],
  },
  {
    title: "AI Integration",
    skills: [
      { name: "AI API Integration", iconName: "Cpu" },
      { name: "Data Processing", iconName: "Binary" },
    ],
  },
  {
    title: "Tools and Analytics",
    skills: [
      { name: "Git / GitHub", iconName: "GitBranch" },
      { name: "VS Code", iconName: "Laptop" },
      { name: "RStudio", iconName: "LineChart" },
      { name: "JupyterLab", iconName: "FileSpreadsheet" },
      { name: "Google Colab", iconName: "Cloud" },
      { name: "Looker Studio", iconName: "PieChart" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "finmetrics",
    title: "Finmetrics — Financial Analysis Web Application",
    shortTitle: "Finmetrics Financial Suite",
    category: ["Web Development", "Financial Applications"],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    description:
      "A modular financial analysis application designed to organize financial information and provide interactive learning and analysis tools.",
    detailedOverview:
      "Finmetrics provides a unified interface for evaluating corporate financial health. It includes automated computation of liquidity, profitability, and leverage ratios, alongside an interactive financial glossary and self-assessment quizzes for finance learners.",
    features: [
      "Income statement analysis & gross margin breakdowns",
      "Balance sheet comparisons across multiple periods",
      "Cash flow metrics & operating cash conversion tracking",
      "Financial ratio comparisons (DuPont, ROE, Current Ratio, Debt-to-Equity)",
      "Interactive financial scenario calculators",
      "Interactive knowledge checks & self-assessment quizzes",
      "Searchable financial accounting glossary",
    ],
    image: "/src/assets/images/finmetrics_dashboard_preview_1791816087400.jpg",
    role: "Lead Frontend Developer",
    timeline: "2025",
  },
  {
    id: "biblio-analyzer",
    title: "Biblio Analyzer Pro — Bibliometric Analytics",
    shortTitle: "Biblio Analyzer Pro",
    category: ["AI Integration", "Data Analytics"],
    stack: ["Python", "Streamlit", "Pandas", "Scopus API"],
    description:
      "A bibliometric analysis application developed to support scientific publication analysis and data visualization.",
    detailedOverview:
      "Engineered to accelerate academic research foresight by processing large-scale bibliographic datasets. Visualizes publication trajectories, citation co-occurrence networks, author affiliation trees, and emerging thematic clusters using Python analytical libraries.",
    features: [
      "Publication volume trajectory and citation growth curves",
      "Citation network graph visualization across domains",
      "Scopus dataset statistics & SJR metric normalization",
      "Top author, institution, and country contribution rankings",
      "Thematic keyword co-occurrence heatmaps",
      "Automated summary report generation for research teams",
    ],
    image: "/src/assets/images/biblio_analyzer_preview_1791816111345.jpg",
    role: "Data & Application Developer",
    timeline: "2025 – 2026",
  },
  {
    id: "reparfume-ai-entry",
    title: "Reparfume AI-Powered Data Entry Pipeline",
    shortTitle: "Reparfume AI Data Entry",
    category: ["AI Integration", "Web Development"],
    stack: ["HTML", "CSS", "JavaScript", "AI API Integration", "SQL"],
    description:
      "An AI-assisted data-entry workflow designed to transform unstructured information into structured data and support database-oriented processing.",
    detailedOverview:
      "Solves the bottleneck of manual cataloging and order reconciliation. Unstructured invoice summaries and product fragrance notes are parsed through an AI pipeline, extracting normalized entities and generating SQL-ready records directly into database tables.",
    features: [
      "Natural language extraction of vendor, line items, and prices",
      "Automated field tokenization and named entity recognition",
      "SQL schema preview and validation prior to persistence",
      "Structured table review editor with inline corrections",
      "Database insert batching with constraint verification",
    ],
    image: "/src/assets/images/reparfume_ai_entry_preview_1791816125037.jpg",
    role: "Freelance Software Developer",
    timeline: "2026",
  },
  {
    id: "reparfume-web-app",
    title: "Reparfume Web Application",
    shortTitle: "Reparfume Core Web App",
    category: ["Web Development"],
    stack: ["HTML", "CSS", "JavaScript", "SQL"],
    description:
      "A web application with user interface components and database-driven functionality.",
    detailedOverview:
      "A commercial web platform delivering a clean product catalog interface, customer order flow, and administrative inventory management backed by a relational database schema.",
    features: [
      "Responsive customer-facing catalog with filterable fragrance notes",
      "Interactive AI perfume comparison banner to assist fragrance selection",
      "Real-time catalog search filtering by code, notes, and mood vibes",
      "Product inventory synchronization backed by SQL database tables",
      "Admin data management views for order statuses",
      "Modular JavaScript UI architecture",
    ],
    image: "/src/assets/images/reparfume_web_app_mockup_1791818039037.jpg",
    role: "Frontend & Database Developer",
    timeline: "2026",
  },
  {
    id: "kang-raling",
    title: "Kang Raling — Environmental & Waste Analytics",
    shortTitle: "Kang Raling Dashboard",
    category: ["Data Analytics", "Web Development"],
    stack: ["Google Looker Studio", "Google Sites", "Data Management"],
    description:
      "An information and data visualization website designed to present information in a structured and accessible format.",
    detailedOverview:
      "Created during community development initiatives to support local circular economy programs. Delivers interactive public dashboards tracking neighborhood waste volumes, recycling diversion rates, and collection routes.",
    features: [
      "Interactive waste collection maps and active neighborhood zones",
      "Monthly collection volume trends and historical tracking",
      "Waste classification breakdown (organics, recyclables, landfill)",
      "Recycling progress indicators and community engagement metrics",
      "Public-facing information portal built for community accessibility",
    ],
    image: "/src/assets/images/kang_raling_analytics_preview_1791816135474.jpg",
    role: "Community Digital Solutions Developer",
    timeline: "2024",
  },
  {
    id: "financial-analysis-app",
    title: "Financial Analysis & Scenario Modeling App",
    shortTitle: "Financial Scenario Modeler",
    category: ["Financial Applications", "Web Development"],
    stack: ["HTML", "CSS", "JavaScript"],
    description:
      "A financial analysis application covering trend analysis, DuPont analysis, scenario projections, and investment feasibility assessment.",
    detailedOverview:
      "Combines corporate financial logic with dynamic web calculations. Enables users to perform multi-factor DuPont decompositions, project balance sheet scenarios under variable market conditions, and evaluate capital investment metrics like NPV and IRR.",
    features: [
      "Multi-period financial trend analysis graphs",
      "Three-stage and five-stage DuPont analysis breakdown",
      "Dynamic scenario projection simulator with adjustable sensitivity levers",
      "Capital investment feasibility calculations",
      "Client-side formula validation and immediate chart updating",
    ],
    role: "Sole Developer",
    timeline: "2024",
  },
  {
    id: "gather-uxer",
    title: "Gather & UXER — Board Game & E-Grocery Platform",
    shortTitle: "Gather & UXER Digital Suite",
    category: ["Web Development"],
    stack: ["HTML", "CSS", "JavaScript", "WordPress", "Elementor"],
    description:
      "Digital projects involving a web-based board game and an e-grocery web application.",
    detailedOverview:
      "A dual-initiative project comprising an interactive browser-based board game experience alongside UXER Indonesia's e-grocery platform connecting local producers directly with urban households.",
    features: [
      "Interactive web game mechanics with state-based turn management",
      "E-grocery catalog with category filtering and checkout workflow",
      "Responsive layout optimized for mobile consumers",
      "Content management integration using WordPress and Elementor",
    ],
    role: "Team Leader & Web Developer",
    timeline: "2024 – 2025",
  },
  {
    id: "cibanteng-hijau",
    title: "Cibanteng Hijau — Village Development Initiative",
    shortTitle: "Cibanteng Hijau Portal",
    category: ["Web Development"],
    stack: ["WordPress", "HTML", "CSS"],
    description:
      "A community-oriented web application supporting village development initiatives.",
    detailedOverview:
      "Developed for the Cibanteng community development project to highlight sustainable village programs, agricultural output, and local initiatives through an accessible web portal.",
    features: [
      "Community project showcase and program documentation",
      "Information distribution for local residents and external partners",
      "Clean content layout with lightweight styling and rapid page load speeds",
    ],
    role: "Vice Team Leader & Web Developer",
    timeline: "2023",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "reparfume",
    role: "Freelance Software Developer",
    company: "Reparfume",
    period: "May 2026 – July 2026",
    location: "Indonesia",
    responsibilities: [
      "Developed web applications using HTML, CSS, JavaScript, and SQL.",
      "Integrated AI services into a data-entry workflow to transform unstructured information into structured data.",
    ],
    techStack: ["JavaScript", "SQL", "AI API Integration", "HTML/CSS"],
  },
  {
    id: "brin-research",
    role: "Research Assistant",
    company: "Badan Riset dan Inovasi Nasional (BRIN)",
    period: "May 2026 – September 2026",
    location: "Jakarta / Remote",
    responsibilities: [
      "Processed and classified over 500,000 Scopus-indexed publications using SCImago Journal Rank metrics and RStudio.",
      "Maintained data consistency and prepared visual materials to communicate research findings.",
    ],
    techStack: ["RStudio", "Bibliometric Analysis", "Data Visualization", "Scopus"],
  },
  {
    id: "brin-foresight",
    role: "Foresight and Trend Innovation Analysis Assistant",
    company: "Badan Riset dan Inovasi Nasional (BRIN)",
    period: "November 2025 – May 2026",
    location: "Jakarta / Remote",
    responsibilities: [
      "Processed bibliometric datasets and developed visualizations to identify research trends.",
      "Delivered training on Biblioshiny and WIPO tools, contributing to a reported 30% reduction in processing time compared with alternative tools.",
    ],
    techStack: ["Python", "Biblioshiny", "WIPO Tools", "Trend Analysis"],
  },
  {
    id: "agavi",
    role: "Community Development Intern",
    company: "PT Agritama Sinergi Inovasi (AGAVI)",
    period: "September 2024 – December 2024",
    location: "Bogor, Indonesia",
    responsibilities: [
      "Developed the Kang Raling website and a village waste data-management application.",
      "Supported local waste-management initiatives through digital solutions.",
    ],
    techStack: ["Looker Studio", "Google Sites", "Data Management", "Web Design"],
  },
];

export const LEADERSHIP_ENTRIES: LeadershipItem[] = [
  {
    id: "pkm-ki",
    role: "Team Leader",
    organization: "Innovation Project (PKM-KI)",
    period: "January 2024 – July 2024",
    description:
      "Led the development of an IoT- and web-based maggot farming innovation, coordinating prototype development and implementation planning.",
  },
  {
    id: "uxer-indonesia",
    role: "Team Leader",
    organization: "UXER Indonesia (PMW IPB)",
    period: "January 2024 – February 2025",
    description:
      "Coordinated project planning, team activities, stakeholder collaboration, and implementation of an e-grocery business concept.",
  },
  {
    id: "reesa",
    role: "Vice Team Leader",
    organization: "PPK Ormawa REESA",
    period: "January 2023 – December 2023",
    description:
      "Coordinated community development initiatives and led the development of the Cibanteng Hijau web application.",
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-html-css",
    title: "Frontend HTML & CSS",
    issuer: "MySkill",
  },
  {
    id: "cert-wordpress",
    title: "WordPress Development",
    issuer: "MySkill",
  },
  {
    id: "cert-sql",
    title: "SQL for Data Analysis",
    issuer: "MySkill",
  },
  {
    id: "cert-genai",
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft and LinkedIn",
  },
  {
    id: "cert-iot",
    title: "IoT Developer Training",
    issuer: "PT Nusabot Inovasi Teknologi",
  },
];
