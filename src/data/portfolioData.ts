import { 
  Project, 
  SkillCategory, 
  ServiceItem, 
  ExperienceItem, 
  EducationItem, 
  TestimonialItem, 
  StatItem
} from '../types';

export const PERSONAL_INFO = {
  name: "Adithya Sri Krishna",
  headline: "Video Editor • Full Stack Developer",
  tagline: "Adithya Sri Krishna is a video editor and full stack developer in Bhimavaram, Andhra Pradesh, India, creating cinematic edits and modern, responsive web experiences for businesses, creators, and startups.",
  bio: "I help businesses and creators with video editing and full stack web development. From polished landing pages and React-based applications to high-retention video content, I combine creative storytelling with clean technical execution. Based in Bhimavaram, I build portfolio websites, freelance development projects, and brand-focused digital experiences that look premium and perform well.",
  email: "editncode@gmail.com",
  phone: "+91 97059 45589",
  location: "Bhimavaram, Andhra Pradesh, India",
  address: "4-45 Natta Rameswaram, Penumatra Mandal, West Godavari District, Andhra Pradesh, India",
  linkedIn: "https://www.linkedin.com/in/adithya-sri-krishna-2b2608378",
  github: "https://github.com/kadaliadithya123-dot",
  twitter: "https://twitter.com",
  instagram: "https://instagram.com",
  youtube: "https://youtube.com",
  status: "Open for Opportunities & Freelance",
  coordinates: {
    lat: 16.5449,
    lng: 81.5212,
    timezone: "Asia/Kolkata (IST, UTC+5:30)"
  }
};

export const STATS: StatItem[] = [
  {
    id: "projects",
    label: "Projects Completed",
    value: 25,
    suffix: "+",
    description: "Modern web apps, landing pages & digital tools"
  },
  {
    id: "tech",
    label: "Technologies Mastered",
    value: 18,
    suffix: "+",
    description: "Across frontend, backend, tools & design"
  },
  {
    id: "hours",
    label: "Hours of Coding",
    value: 1500,
    suffix: "+",
    description: "Committed to clean code & responsive UI"
  },
  {
    id: "creative",
    label: "Creative Works & Edits",
    value: 50,
    suffix: "+",
    description: "Commercial reels, cinematic edits & color grades"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    description: "Building responsive, blazing-fast, and accessible web experiences.",
    accent: "from-cyan-500 to-blue-600",
    skills: [
      { name: "React.js", level: 95, tag: "Core" },
      { name: "JavaScript (ES6+)", level: 94, tag: "Core" },
      { name: "Tailwind CSS", level: 96, tag: "Styling" },
      { name: "Vite", level: 90, tag: "Build Tool" },
      { name: "HTML5 & Semantic Web", level: 98, tag: "Markup" },
      { name: "CSS3 & Animations", level: 92, tag: "Styling" },
      { name: "Bootstrap", level: 86, tag: "UI Framework" },
      { name: "Responsive Web Design", level: 96, tag: "UX" }
    ]
  },
  {
    id: "backend",
    title: "Backend & APIs",
    description: "Developing scalable server architectures and secure REST endpoints.",
    accent: "from-purple-500 to-indigo-600",
    skills: [
      { name: "Node.js", level: 85, tag: "Runtime" },
      { name: "Express.js", level: 87, tag: "Framework" },
      { name: "MongoDB", level: 84, tag: "Database" },
      { name: "Mongoose ODM", level: 86, tag: "Data Modeling" },
      { name: "Authentication & JWT", level: 88, tag: "Security" },
      { name: "REST API Development", level: 89, tag: "Architecture" }
    ]
  },
  {
    id: "cloud",
    title: "Cloud & Deployment",
    description: "Deploying production-ready applications with automated workflows.",
    accent: "from-emerald-500 to-teal-600",
    skills: [
      { name: "Cloudflare Pages", level: 96, tag: "Frontend Hosting" },
      { name: "Render", level: 88, tag: "Backend Cloud" },
      { name: "Cloudinary", level: 86, tag: "Media CDN" },
      { name: "Git & Version Control", level: 92, tag: "DevOps" },
      { name: "GitHub Workflows", level: 90, tag: "CI/CD" }
    ]
  },
  {
    id: "programming",
    title: "Programming Languages",
    description: "Solid theoretical fundamentals, algorithmic thinking, and problem solving.",
    accent: "from-amber-500 to-orange-600",
    skills: [
      { name: "Java", level: 82, tag: "OOP" },
      { name: "Python (Basics)", level: 75, tag: "Scripting" },
      { name: "C (Basics)", level: 78, tag: "Systems" }
    ]
  },
  {
    id: "creative",
    title: "Creative & Video Production",
    description: "Visual storytelling, cinematic pacing, and brand identity.",
    accent: "from-pink-500 to-rose-600",
    skills: [
      { name: "Professional Video Editing", level: 96, tag: "Cinema" },
      { name: "Cinematic Editing", level: 90, tag: "Animation" },
      { name: "Color Grading", level: 92, tag: "Aesthetics" },
      { name: "Thumbnail Design", level: 95, tag: "Conversion" },
      { name: "Logo Design", level: 88, tag: "Branding" },
      { name: "Social Media Content", level: 94, tag: "Engagement" }
    ]
  },
  {
    id: "tools",
    title: "Developer & Design Tools",
    description: "Industry-standard software stack powering daily development workflows.",
    accent: "from-blue-500 to-cyan-600",
    skills: [
      { name: "VS Code", level: 96, tag: "IDE" },
      { name: "Figma", level: 89, tag: "Prototyping" },
      { name: "GitHub Copilot", level: 92, tag: "AI Pair Dev" },
      { name: "Postman", level: 90, tag: "API Testing" }
    ]
  },
  {
    id: "soft",
    title: "Professional Soft Skills",
    description: "Mindset, adaptability, and leadership driving technical excellence.",
    accent: "from-violet-500 to-purple-700",
    skills: [
      { name: "Problem Solving", level: 95, tag: "Analytical" },
      { name: "Team Collaboration", level: 92, tag: "Communication" },
      { name: "Fast Learner", level: 96, tag: "Growth" },
      { name: "Debugging & QA", level: 94, tag: "Execution" },
      { name: "Attention to Detail", level: 98, tag: "Craftsmanship" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "nextgen-devs",
    title: "NextGen Devs",
    category: "Full Stack",
    shortDesc: "Company website for a boutique web studio building handcrafted, high-performance digital experiences.",
    description: "The official company website for NextGen Devs, a boutique web development studio serving founders, creators, gyms, tuition centers, and growing businesses. It presents the studio's mission to replace template-driven websites with bespoke digital experiences, along with its services, recent work, client outcomes, and contact process.",
    image: "https://nextgendevs.kadaliadithya123.workers.dev/assets/project-portfolio-kM1-KsRw.jpg",
    tags: ["React", "Vite", "Tailwind CSS", "Responsive UI", "Studio Website", "Cloudflare Workers"],
    githubUrl: "https://github.com/kadaliadithya123-dot",
    liveUrl: "https://nextgendevs.kadaliadithya123.workers.dev/",
    featured: true,
    metrics: [
      { label: "Projects", value: "80+" },
      { label: "Clients", value: "50+" },
      { label: "Rating", value: "5★" }
    ],
    keyFeatures: [
      "Clear studio positioning built around handcrafted, conversion-focused websites",
      "Service, project, testimonial, FAQ, and contact journeys in one cohesive experience",
      "Clear craft-first positioning, transparent process, and long-term partnership values",
      "Performance-led presentation with responsive layouts and strong calls to action"
    ]
  },
  {
    id: "interfaith-ngo",
    title: "Interfaith NGO",
    category: "Frontend",
    shortDesc: "NGO website presenting the organization's mission, initiatives & community work.",
    description: "A welcoming and accessible NGO website designed to present the organization's mission, social initiatives, and community impact. Built with a focus on clear information hierarchy, responsive design, and an approachable visual identity.",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80",
    tags: ["NGO Website", "Responsive UI", "HTML5", "CSS3", "JavaScript"],
    githubUrl: "",
    liveUrl: "https://interfaithngo.in",
    featured: true,
    metrics: [
      { label: "Type", value: "NGO" },
      { label: "Design", value: "Responsive" },
      { label: "Status", value: "Live" }
    ],
    keyFeatures: [
      "Clear and welcoming presentation of the organization's mission and values",
      "Fully responsive layout optimized for all screen sizes and devices",
      "Structured content sections for initiatives, events, and community outreach"
    ]
  },
  {
    id: "nbits",
    title: "NBITS",
    category: "Frontend",
    shortDesc: "IT company website presenting technology services, solutions & business capabilities.",
    description: "A professional IT company website designed to present technology services, technical solutions, and business capabilities to prospective clients. Features a clean corporate aesthetic with well-structured service pages and a strong call-to-action flow.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    tags: ["IT Company", "Web Development", "Corporate Design", "Responsive UI"],
    githubUrl: "",
    liveUrl: "https://nbits.in",
    featured: true,
    metrics: [
      { label: "Type", value: "IT Company" },
      { label: "Design", value: "Corporate" },
      { label: "Status", value: "Live" }
    ],
    keyFeatures: [
      "Professional corporate design tailored to attract B2B clients",
      "Comprehensive service and solutions showcase with clear CTAs",
      "Mobile-first responsive layout with fast page load performance"
    ]
  },
  {
    id: "sri-tech-solution",
    title: "Sri Tech Solution",
    category: "Full Stack",
    shortDesc: "Full stack corporate website for a technology solutions company with backend-powered service presentation.",
    description: "A full stack corporate website for a technology solutions company, built end-to-end with both frontend and backend capabilities. Professionally communicates services, expertise, and company information to business clients with a robust, scalable architecture.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    tags: ["Full Stack", "Corporate Website", "Node.js", "React", "MongoDB", "REST APIs"],
    githubUrl: "",
    liveUrl: "https://sritechsolution.com",
    featured: true,
    metrics: [
      { label: "Type", value: "Full Stack" },
      { label: "Design", value: "Corporate" },
      { label: "Status", value: "Live" }
    ],
    keyFeatures: [
      "Full stack architecture with backend APIs and database integration",
      "Professional presentation of technology services and company capabilities",
      "Fully responsive and cross-browser compatible implementation"
    ]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "frontend-dev",
    title: "Frontend Web Development",
    tagline: "Pixel-perfect, ultra-fast web applications",
    description: "Crafting modern, responsive, and accessible user interfaces using React, TypeScript, and Tailwind CSS with attention to layout, typography, and state architecture.",
    icon: "Code2",
    deliverables: [
      "Single Page Applications (SPAs) in React & Vite",
      "Responsive, mobile-first design across all viewports",
      "Performance optimization (Lighthouse 95+ score)",
      "Cross-browser compatibility and SEO optimization"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite", "HTML5/CSS3"],
    badge: "Most Requested"
  },
  {
    id: "video-editing",
    title: "Professional Video Editing",
    tagline: "Cinematic pacing, hooks & high-retention storytelling",
    description: "Transforming raw footage into high-impact visual stories. Specialized in pacing, audio mastering, seamless transitions, and narrative rhythm that captivates audiences.",
    icon: "Video",
    deliverables: [
      "Commercials, YouTube long-form & short-form reels",
      "Precision cut pacing and narrative timing",
      "Sound design, Foley, dialogue cleanup & mastering",
      "Custom thumbnail design and visual brand hooks"
    ],
    techStack: ["Premiere Pro", "After Effects", "Color Grading", "Sound FX"],
    badge: "Creative Core"
  },
  {
    id: "fullstack-dev",
    title: "Full Stack Development",
    tagline: "Complete end-to-end web solutions",
    description: "Connecting intuitive user interfaces with robust backend architectures, MongoDB databases, and secure authentication to build complete digital products.",
    icon: "Layers",
    deliverables: [
      "Full MERN stack web application builds",
      "Database schema design & query optimization",
      "Secure authentication (JWT, cookies, OAuth)",
      "Automated deployment on Cloudflare Pages & Render"
    ],
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    badge: "Enterprise"
  },
  {
    id: "cinematic-editing",
    title: "Cinematic Editing & UI Animation",
    tagline: "Bringing digital interfaces and videos to life",
    description: "Designing bespoke animations, title sequences, 3D elements, and micro-interactions that elevate brand perception and delight users.",
    icon: "Sparkles",
    deliverables: [
      "Interactive Framer Motion web animations",
      "Kinetic typography and lower-thirds for video",
      "Animated logo reveals and social media assets",
      "3D canvas interactions with Three.js"
    ],
    techStack: ["Framer Motion", "After Effects", "Three.js", "SVG Animation"]
  },
  {
    id: "ui-ux-design",
    title: "Modern UI/UX & Glassmorphism",
    tagline: "Human-centric aesthetics with futuristic polish",
    description: "Prototyping intuitive user journeys, wireframes, and design systems inspired by Apple, Tesla, and Linear with luminous glass cards and sleek dark themes.",
    icon: "Palette",
    deliverables: [
      "High-fidelity Figma wireframes and prototypes",
      "Futuristic Dark mode & Glassmorphic UI systems",
      "Design-to-code translation with 100% fidelity",
      "User journey mapping & usability audits"
    ],
    techStack: ["Figma", "Design Systems", "Glassmorphism", "Micro-Interactions"]
  },
  {
    id: "api-integration",
    title: "REST & Realtime API Integration",
    tagline: "Seamless data exchange & third-party hooks",
    description: "Architecting and consuming RESTful services, media CDNs, cloud storage providers, and third-party webhooks with rock-solid error handling.",
    icon: "Cpu",
    deliverables: [
      "RESTful API design and Postman documentation",
      "Cloudinary media upload and CDN streaming pipelines",
      "Third-party webhook listeners and payment bridges",
      "Data caching, state synchronisation & error boundaries"
    ],
    techStack: ["Node.js", "Postman", "Cloudinary", "Express", "REST"]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Freelance Frontend Developer",
    company: "NextGenDevs",
    period: "2026 - Present",
    location: "Remote / Bhimavaram, AP",
    type: "Freelance",
    description: "Building responsive web applications for small business clients, focusing on modern design, clean code, and seamless user experiences.",
    highlights: [
      "Designing and developing responsive websites for small business clients from scratch",
      "Implementing modern UI/UX principles with React, TypeScript, and Tailwind CSS",
      "Delivering production-ready web applications with a focus on performance and accessibility"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Vite", "Git"]
  },
  {
    id: "exp-2",
    role: "Freelance Video Editor",
    company: "Editncode",
    period: "2024 - 2025",
    location: "Remote / Bhimavaram, AP",
    type: "Freelance",
    description: "Delivering high-quality short-form and long-form video edits for content creators, with a focus on cinematic pacing, color grading, and polished visual storytelling.",
    highlights: [
      "Produced short-form and long-form edits for content creators across multiple platforms",
      "Applied professional color grading and visual effects to elevate storytelling",
      "Managed end-to-end post-production workflow from raw footage to final delivery"
    ],
    techStack: ["Premiere Pro", "After Effects", "Color Grading", "Sound Design", "Visual Storytelling"]
  },
  {
    id: "exp-3",
    role: "Junior Developer Intern",
    company: "Skillhub",
    period: "2023",
    location: "Andhra Pradesh, India",
    type: "Internship",
    description: "Assisted in building and maintaining internal web tools, gaining hands-on experience with web development workflows and collaborative team environments.",
    highlights: [
      "Assisted senior developers in building and maintaining internal web tooling",
      "Gained hands-on experience with version control, code reviews, and agile workflows",
      "Contributed to UI improvements and bug fixes across existing internal platforms"
    ],
    techStack: ["HTML", "CSS", "JavaScript", "Git", "React"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Diploma in Computer Science",
    institution: "Smt. B. Seetha Polytechnic",
    location: "Andhra Pradesh, India",
    period: "2024 - 2027",
    grade: "Pursuing",
    description: "A rigorous diploma program covering the fundamentals of computer science with hands-on coursework in data structures, web technologies, and database management systems.",
    courses: [
      "Data Structures & Algorithms",
      "Web Technologies",
      "Database Management Systems",
      "Object Oriented Programming",
      "Computer Networks"
    ]
  },
  {
    id: "edu-2",
    degree: "High School — MPC Stream",
    institution: "Government School",
    location: "Andhra Pradesh, India",
    period: "2023 - 2024",
    grade: "Completed",
    description: "Completed secondary education with a focus on Mathematics, Physics, and Chemistry (MPC stream), building strong analytical and problem-solving foundations.",
    courses: [
      "Mathematics",
      "Physics",
      "Chemistry"
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Siddharth Verma",
    role: "Lead Product Designer",
    company: "Nexis Digital Agency",
    content: "Adithya has a rare dual superpower: he possesses the aesthetic eye of a seasoned video editor and the technical rigor of a sharp frontend engineer. The web interfaces he builds have motion and rhythm that you simply don't see in ordinary developer portfolios.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    relationship: "Collaborated on Web & Motion Projects"
  },
  {
    id: "test-2",
    name: "Rajesh K.",
    role: "YouTube Creator & Educator",
    company: "100k+ Tech Channel",
    content: "Adithya's video editing turned our raw content into high-retention gold. His sound design, pacing, and visual hooks directly increased our channel's retention by over 35%. He is reliable, quick to iterate, and an absolute pleasure to work with.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    relationship: "Long-term Video Editing Client"
  },
  {
    id: "test-3",
    name: "Pooja Reddy",
    role: "Engineering Manager",
    company: "HyperScale Tech",
    content: "From clean React components to responsive Tailwind layouts and smooth API integrations, Adithya writes readable, maintainable, and modern code. His attention to detail and ability to learn new technologies rapidly is remarkable.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    relationship: "Reviewed Frontend Codebase"
  }
];
