// Single source of truth for portfolio content. Edit here, not in components.
// Sources: LinkedIn export + Backend CV (private/), GitHub. Keep them in sync.

export const profile = {
  name: "Anthony Olasunkanmi Ogunleye",
  shortName: "Anthony",
  handle: "DprinceDeveloper",
  role: "Full-Stack & AI Engineer",
  tagline: "Improve the world",
  location: "Lagos & Ekiti, Nigeria",
  email: "anthonyolasunkanmi32@gmail.com",
  phone: "+234 816 801 0822",
  phoneHref: "+2348168010822",
  site: "https://dprinces-portfolio.vercel.app",
  cv: "/Anthony-Ogunleye-CV.pdf",
  currently: { role: "Application Developer", org: "Sage Grey Technologies" },
  socials: {
    github: "https://github.com/Dprinces",
    linkedin: "https://www.linkedin.com/in/olasunkanmi-anthony-ogunleye/",
  },
  intro:
    "I ship web, mobile and backend systems that real businesses run on — WhatsApp commerce, payments, POS, attendance and offline AI — from the data model to deployment.",
  about: [
    "I'm Anthony — known online as DprinceDeveloper. I trained as a Computer Science educator at Ekiti State University, and that shapes how I build: I start with the person using the thing, then work backwards to the code.",
    "Over four years I've built production systems for startups, enterprises and 25 freelance clients: a WhatsApp ordering bot handling 5,000+ orders a month, a staff storefront for Flour Mills of Nigeria wired to Moniepoint and POS terminals, and a marketplace app at Sage Grey Technologies whose users grew 300%. I work in TypeScript, React, React Native, Node.js, NestJS and Python, and I'm increasingly focused on applied AI.",
    "Beyond code, I lead. I served as President of the Sandwich Students Association at EKSU, led cohorts at the Ekiti State Digital Skilling Academy, and still mentor developers starting out — because the best software, like the best teaching, makes hard things feel simple.",
  ],
} as const;

export const stats = [
  { value: 5000, suffix: "+", label: "WhatsApp orders automated / month" },
  { value: 60000, suffix: "+", label: "Customers reached" },
  { value: 25, suffix: "", label: "Freelance clients shipped for" },
  { value: 300, suffix: "%", label: "User growth on SplitMulti" },
] as const;

export const stack = [
  "TypeScript",
  "Python",
  "React",
  "Next.js",
  "React Native",
  "Expo",
  "Node.js",
  "NestJS",
  "Express",
  "FastAPI",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  "Docker",
  "Twilio",
  "Paystack",
  "Moniepoint",
  "OpenAI API",
  "Vosk",
  "Tailwind CSS",
  "AWS",
  "Rust",
] as const;

export type Project = {
  slug: string;
  title: string;
  kicker: string;
  year: string;
  summary: string;
  tags: string[];
  image?: string;
  live?: string;
  repo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
    {
    slug: "fmn-tuckshop",
    title: "FMN Tuckshop Portal",
    kicker: "Enterprise · Payments",
    year: "2026",
    summary:
      "A staff storefront and admin dashboard for Flour Mills of Nigeria, selling FMN products to employees at discounted rates. Online payments through Moniepoint, plus a “Pay with POS” option that sends the charge straight to a Moniebook POS terminal.",
    tags: ["PostgreSQL", "Moniepoint", "Moniebook POS", "OTP auth"],
    image: "/images/projects/fmn-tuckshop.png",
    live: "https://fmn-tuckshop-portal.loadbundle.com.ng",
    featured: true,
  },
   {
    slug: "award-portal",
    title: "Sandwich Award Platform",
    kicker: "Voting · 600 paid votes",
    year: "2026",
    summary:
      "EKSU's student awards, online: 708 registered students, 45 nominees and 600 paid votes processed through Paystack, secured with JWT, rate limiting and audit logs.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Paystack"],
    image: "/images/projects/award-portal.png",
    live: "https://award-portal.vercel.app",
    repo: "https://github.com/Dprinces/Award-Portal",
    featured: true,
  },
  {
    slug: "scripturesense",
    title: "ScriptureSense",
    kicker: "Offline AI · Desktop",
    year: "2026",
    summary:
      "An AI sermon assistant: transcribes the preacher live with an offline speech-recognition model, detects Bible references like “John 3:16”, and puts them on screen in EasyWorship, ProPresenter or PowerPoint. Runs fully offline, for venues without reliable internet.",
    tags: ["Python", "Vosk", "NLP", "Automation"],
    image: "/images/projects/scripturesense.png",
    live: "https://scripturesense.vercel.app",
    repo: "https://github.com/Dprinces/scripturesense",
    featured: true,
  },
  {
    slug: "smartchurch-cams",
    title: "SmartChurch CAMS",
    kicker: "SaaS · 420 members",
    year: "2026",
    summary:
      "QR-code attendance for churches, now serving 420 registered members. Check-in takes under five seconds, the Sunday report is ready the same afternoon, and absentees are flagged for pastoral follow-up. Typed Express API with JWT auth and Zod validation.",
    tags: ["Next.js", "TypeScript", "Express", "PostgreSQL", "Prisma"],
    image: "/images/projects/smartchurch.png",
    live: "https://smartchurch-cams-six.vercel.app",
    repo: "https://github.com/Dprinces/smartchurch-cams",
    featured: true,
  },
  {
    slug: "project-legacy",
    title: "Project Legacy",
    kicker: "WhatsApp commerce · Chamuze",
    year: "2025",
    summary:
      "A WhatsApp chatbot for FMCG retail ordering: 5,000+ orders a month across 60,000+ customers, about 600 hours of manual processing saved. Twilio messaging and OTP, Chowdeck delivery dispatch, and inventory synced to Moniepoint POS terminals.",
    tags: ["Node.js", "Express", "MongoDB", "Twilio", "Docker"],
  },
  {
    slug: "eacc",
    title: "Ekiti AirLift & Cargo Connect",
    kicker: "Logistics · API + Mobile",
    year: "2026",
    summary:
      "Backend for a logistics and airport-pickup platform around Ekiti Cargo Airport, connecting passengers, farmers, traders and drivers. JWT auth, passenger and cargo bookings, and pricing by distance, weight and airport fees.",
    tags: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL"],
    repo: "https://github.com/Dprinces/eacc_backend",
  },
  {
    slug: "virtual-assistant",
    title: "Dashboard Virtual Assistant",
    kicker: "AI · Full-stack",
    year: "2025",
    summary:
      "An OpenAI-powered chat assistant inside a dashboard, with JWT auth and refresh tokens. React + Vite on the front, Express and MongoDB behind it.",
    tags: ["React", "Express", "MongoDB", "OpenAI API"],
    repo: "https://github.com/Dprinces/Web-Dashboard-Virtual-Assistant",
  },
  {
    slug: "goodnesseer",
    title: "Goodnesseer",
    kicker: "Community · Full-stack",
    year: "2026",
    summary:
      "An anonymous space to ask questions, share feelings and get advice without judgment. Next.js client and Express/MongoDB API in a TypeScript monorepo.",
    tags: ["Next.js", "TypeScript", "Express", "MongoDB"],
    image: "/images/projects/goodnesseer.png",
    live: "https://goodnesseer.vercel.app",
    repo: "https://github.com/Dprinces/Goodnesseer",
  },
  {
    slug: "shortboy",
    title: "The Shortboy",
    kicker: "Agency brand · Backend",
    year: "2026",
    summary:
      "Backend for a creative agency's brand site: a merch store with products, cart, checkout and orders, plus an admin dashboard to manage portfolio projects, services, job applicants and contact enquiries.",
    tags: ["Node.js", "Express", "REST API", "Admin auth"],
    live: "https://shortboy-f6jk.vercel.app",
  },
  {
    slug: "service-booking",
    title: "Service Booking App",
    kicker: "Mobile · Sage Grey Technologies",
    year: "2026",
    summary:
      "Browse service providers and book appointments. Modular architecture with Zustand state, validated forms and local persistence.",
    tags: ["React Native", "Expo", "TypeScript", "Zustand", "Zod"],
    repo: "https://github.com/Dprinces/Service_Booking_App",
  },
  {
    slug: "civicconnect",
    title: "CivicConnect",
    kicker: "Civic tech · 3MTT",
    year: "2024",
    summary:
      "A portal for transparency and accountability between Nigerian government officials and citizens: browse government reports, track projects, and submit requests for what government should work on next. Built during the 3MTT programme.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/images/projects/civicconnect.png",
    live: "https://civic-connect-liard.vercel.app",
    repo: "https://github.com/Dprinces/CivicConnect",
  },
];

export const archive = [
  { title: "E-Assessment System (final-year project)", year: "2025", tech: "React, Node.js", href: "https://e-assessment-system-for-practical-p.vercel.app" },
  { title: "Testrack · open-source contribution", year: "2025", tech: "Web3, TypeScript", href: "https://github.com/Dprinces/Testrack" },
  { title: "SalonConnect · open-source contribution", year: "2024", tech: "React, TypeScript, Redux", href: "https://github.com/Dprinces/SalConFrontend" },
  { title: "Car Registry API", year: "2025", tech: "Node.js", href: "https://github.com/Dprinces/carregistry" },
  { title: "Dynamic Dashboard", year: "2024", tech: "React", href: "https://dynamic-dashboard-nine.vercel.app" },
  { title: "Login Form · Redux Toolkit", year: "2024", tech: "React, Redux", href: "https://github.com/Dprinces/simple_loginForm" },
  { title: "Banking Landing Page", year: "2024", tech: "HTML, CSS", href: "https://banking-website-landing-page-puce.vercel.app" },
  { title: "Zidio Chat App", year: "2024", tech: "JavaScript", href: "https://github.com/Dprinces/zidio_chat_application" },
] as const;

export const services = [
  {
    title: "Web & mobile apps",
    body: "Products in React, Next.js and React Native (Expo) — one typed codebase mindset across browser and phone, fast on cheap devices and slow networks.",
  },
  {
    title: "APIs & backends",
    body: "Node.js, NestJS, Express or FastAPI services with JWT auth, rate limiting, validation and clean data models on PostgreSQL or MongoDB — containerised and shipped with CI/CD.",
  },
  {
    title: "Payments & integrations",
    body: "Paystack, Moniepoint, Moniebook POS, Chowdeck delivery, Twilio WhatsApp, Zoho, HubSpot and WooCommerce — the glue that turns an app into a business.",
  },
  {
    title: "Applied AI & automation",
    body: "Chatbots and AI agents built on LLM APIs, offline speech recognition, and WhatsApp bots that take orders while your team sleeps.",
  },
] as const;

export type TimelineItem = {
  period: string;
  title: string;
  org: string;
  body: string;
  tags?: string[];
  image?: string;
};

export const experience: TimelineItem[] = [
  {
    period: "Mar 2026 — Present",
    title: "Application Developer (Contract)",
    org: "Sage Grey Technologies Limited · Lagos (Remote)",
    body: "Building the cross-platform mobile app for SplitMulti, serving both vendor and customer marketplaces. Features I launched streamlined vendor sales and customer purchasing, helping grow users from 20 to 80 — a 300% increase.",
    tags: ["React Native", "Expo", "TypeScript"],
  },
  {
    period: "Jul 2025 — Sep 2026",
    title: "Backend & Automation Developer",
    org: "Chamuze · Lagos",
    body: "Designed and built Project Legacy, a WhatsApp chatbot for FMCG retail ordering — 5,000+ orders a month for 60,000+ customers, saving about 600 hours of manual processing. Integrated Twilio for messaging and OTP, Chowdeck for automatic delivery dispatch, and worked with Moniepoint's team to sync inventory across POS terminals.",
    tags: ["Node.js", "Express", "MongoDB", "Twilio", "Docker", "CI/CD"],
  },
  {
    period: "Jun 2025 — Sep 2026",
    title: "Backend Developer",
    org: "Redot Global Services Limited · Lagos",
    body: "Built the Flour Mills of Nigeria Tuckshop Portal with Moniepoint online payments and Moniebook “Pay with POS”. Developed and maintained the backend for Maxystuff, and managed integrations with Zoho and other ERP systems.",
    tags: ["PostgreSQL", "Moniepoint", "Zoho", "REST APIs"],
  },
  {
    period: "Ongoing",
    title: "Full-Stack Engineer (Freelance)",
    org: "Self-employed · Remote",
    body: "Delivered and maintained web and mobile applications for 25 clients — turning loose requirements into deployed software and fixing problems in production on my own.",
  },
  {
    period: "Internship",
    title: "Full-Stack Developer (Intern)",
    org: "Kinplus Technology",
    body: "Built the SalonConnect frontend with React, TypeScript, Redux Toolkit, Formik/Yup and Material UI, and a service-booking mobile app in React Native with Zustand.",
    tags: ["React", "React Native", "TypeScript"],
  },
  {
    period: "Jan — Dec 2025",
    title: "President, Sandwich Students Association",
    org: "Ekiti State University, Ado-Ekiti",
    body: "Represented sandwich students across departments, led governance and welfare initiatives, and coordinated between students and the Sandwich Directorate.",
    tags: ["Leadership"],
  },
  {
    period: "2024",
    title: "Fellow, 3MTT Programme",
    org: "Three Million Technical Talent · Ekiti cohort",
    body: "Completed and graduated from Nigeria's national tech-talent programme. Built CivicConnect, a government–citizen transparency portal, during the programme.",
    tags: ["Web development"],
  },
  {
    period: "Mar — Sep 2023",
    title: "Team Lead",
    org: "Ekiti State Digital Skilling Academy (EDSA)",
    body: "Led projects and programmes organised by EDSA, supervised capstone projects, and coordinated visits to private and government schools.",
    tags: ["Leadership", "Mentoring"],
  },
  {
    period: "Feb — Aug 2023",
    title: "Frontend Developer (Trainee)",
    org: "Tech4Dev × Meta · EDSA",
    body: "Built responsive, user-centred websites with HTML, CSS, Tailwind CSS and React, and delivered the Real Estate Web App capstone in a cross-functional team.",
    tags: ["React", "Tailwind CSS"],
  },
];

export const education: TimelineItem[] = [
  {
    period: "2021 — 2026",
    title: "B.Sc (Ed.) Computer Science",
    org: "Ekiti State University, Ado-Ekiti",
    body: "GPA 3.9 / 5.0. Award of Excellence in Academics (Sandwich Students' Welfare Association, 2023). Final-year project: an e-assessment system for practical programming tests.",
    image: "/images/graduation.jpg",
  },
];

export type Certification = { title: string; issuer?: string; year?: string };

export const certifications: Certification[] = [
  { title: "Frontend Development", issuer: "EDSA · Tech4Dev × Meta", year: "2024" },
  { title: "Certificate of Internship", issuer: "Zidio Development", year: "2024" },
  { title: "3MTT Programme (Three Million Technical Talent)", issuer: "Federal Ministry of Communications, Innovation & Digital Economy", year: "2024" },
  { title: "Programming with JavaScript", issuer: "Meta · Coursera", year: "2023" },
  { title: "HTML, CSS, and JavaScript for Web Developers" },
  { title: "What Is Generative AI?" },
  { title: "Essential Digital Skill (Computer Operations)" },
];

export const faqs = [
  {
    q: "What kind of projects do you take on?",
    a: "Web apps, mobile apps, backends and AI products — especially products that move money or orders (storefronts, marketplaces, WhatsApp commerce, attendance and booking systems), plus chatbots and AI agents that answer customers, take orders and automate work.",
  },
  {
    q: "Which stack do you use?",
    a: "TypeScript with React, Next.js and React Native on the client; Node.js, NestJS, Express or Python (FastAPI) on the server; PostgreSQL or MongoDB; Docker and CI/CD to ship. I pick what fits your team, not what's trendy.",
  },
  {
    q: "Which integrations have you shipped?",
    a: "Paystack, Moniepoint, Moniebook POS, Chowdeck delivery, Twilio WhatsApp and OTP, Zoho, HubSpot, WooCommerce, Cloudinary and the OpenAI API — in production, with real customers.",
  },
  {
    q: "Are you available for new work?",
    a: "I'm open to full-time roles, contracts and consulting — remote or in Nigeria. Send a message and I'll reply within a day or two.",
  },
] as const;
