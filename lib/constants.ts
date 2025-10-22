// Personal Information Constants
export const PERSONAL_INFO = {
    // Basic Info
    name: "Maaz Irfan",
    firstName: "Maaz",
    lastName: "Irfan",
    displayName: "Maaz Irfan",
    title: "Senior Backend Engineer",

    // Contact Details
    email: "maazirfan000@gmail.com",
    phone: "+92 321 - 3452923",
    location: "Riyadh, Saudi Arabia",
    timezone: "Asia/Riyadh", // Central Time

    // Professional Summary
    experience: "7+ years",
    usersServed: "20M+",
    description:
        "Senior Backend Engineer building scalable, cloud-native systems for 20M+ users. Laravel, Node.js and AWS expert specializing in high-performance solutions.",

    // Social Links
    social: {
        github: "https://github.com/maazirfaan",
        linkedin: "https://www.linkedin.com/in/maaz-irfan-cs",
        email: "mailto:maazirfan000@gmail.com",
        phone: "tel:+923213452923",
    },

    // Website & SEO
    website: {
        url: "https://maazirfaan.github.io",
        domain: "maazirfaan.github.io",
        title: "Maaz Irfan | Senior Backend Engineer",
        description:
            "7+ years experience building scalable systems for 20M+ users. Laravel, Node.js, AWS expert specializing in high-performance backend solutions.",
        keywords:
            "senior backend engineer, senior software engineer, PHP, Laravel, Node.js, AWS, scalable systems, API development, Maaz Irfan, Riyadh, KSA, Saudi Arabia",
    },

    // Resume
    resume: {
        filename: "CV_Maaz_Irfan_25.pdf",
        path: "/downloads/CV_Maaz_Irfan_25.pdf",
    },

    // Images
    images: {
        profile: "/images/Maaz_Profile.jpg",
        socialPreview: "/images/social-preview.jpg",
        cover: "/images/cover.jpg",
    },

    // Analytics
    analytics: {
        googleAnalyticsId: "G-PWEQ5RJ569",
    },

    // Current Work Status
    currentWork: {
        company: "Golootlo - DECAGON PAKISTAN PVT. LTD",
        position: "Senior Software Engineer",
        // type: "Part-time Remote",
        type: "Full-time",
        startDate: "July 2023",
        // currentStatus: "Present (Part-time Remote since Jul 2025)",
        currentStatus: "October 2025",
        // location: "Glen Ellyn, IL, USA (Remote)",
        location: "Karachi, Pakistan",
    },
} as const

// Tech Stack
export const TECH_STACK = {
    primary: ["Laravel", "PHP", "Python", "MySQL", "MongoDB", "Node.js", "AWS"],
    languages: ["PHP", "Python", "JavaScript", "TypeScript", "SQL", "C#"],
    frameworks: ["Laravel", "Node.js"],
    databases: ["MySQL", "MongoDB", "Redis", "Elasticsearch", "Firebase"],
    cloud: ["AWS", "Docker"],
    // testing: ["pytest", "PHPUnit", "Jest", "Selenium"],
} as const

// Education & Certifications
export const EDUCATION = {
  degrees: [
    {
      degree: "MS in Project Management - MS(PM)",
      school: "Bahria University",
      location: "Karachi, Pakistan",
      period: "2019 – 2021",
      description:
        "Focused on strategic project planning, risk management, and agile methodologies to lead and deliver successful technology-driven projects.",
      achievements: [
        "Expertise in Agile & Scrum practices",
        "Strengthened leadership and team coordination skills",
        "Enhanced project execution and resource management",
      ],
    },
    {
      degree: "BS in Computer Science - BS(CS)",
      school: "Bahria University",
      location: "Karachi, Pakistan",
      period: "2014 – 2018",
      description:
        "Comprehensive undergraduate program focusing on software engineering, programming, and database systems, building a solid foundation in backend and web development.",
      achievements: ["Software Development", "Database Systems", "Web Technologies"],
    },
    {
      degree: "Diploma in Software Engineering - ACCP",
      school: "Aptech Computer Education",
      location: "Karachi, Pakistan",
      period: "2012 – 2014",
      description:
        "Comprehensive diploma program covering core programming, software design, and application development fundamentals.",
      achievements: [
        "Gained proficiency in desktop and web-based application development",
        "Developed strong understanding of database design and management",
        "Hands-on experience with backend technologies and programming languages",
      ],
    },
  ],
  certifications: [
    // {
    //   name: "AWS Certified Solutions Architect",
    //   issuer: "Amazon Web Services",
    //   year: "2023",
    //   type: "Professional Certification",
    // },
    // {
    //   name: "Google Cloud Professional Developer",
    //   issuer: "Google Cloud",
    //   year: "2022",
    //   type: "Professional Certification",
    // },
    // {
    //   name: "MongoDB Certified Developer",
    //   issuer: "MongoDB Inc.",
    //   year: "2021",
    //   type: "Professional Certification",
    // },
  ],
  courses: [
    // {
    //   name: "FastAPI - From Beginner to Advanced",
    //   platform: "Udemy",
    //   year: "2025",
    //   description:
    //     "Comprehensive course covering FastAPI framework development with advanced features and unit testing using pytest.",
    //   skills: ["FastAPI", "Python", "pytest", "pydantic", "API Development", "Unit Testing", "Async Programming"],
    //   type: "Online Course",
    // },
  ],
} as const

// Contact Form
export const CONTACT_FORM = {
    formspreeEndpoint: "https://formspree.io/f/mnnvgrdd",
    subjects: {
        default: "New contact form submission from portfolio",
    },
} as const

// Navigation Items
export const NAVIGATION_ITEMS = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
] as const
