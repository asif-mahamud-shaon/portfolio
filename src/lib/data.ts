export const projects = [
    {
        slug: "mediwise",
        title: "MediWise",
        category: "Healthcare Platform",
        year: "2025",
        description: "Full-stack healthcare management with Admin, Doctor, and Patient portals. Features appointments, payments, and real-time chat.",
        fullDescription: "MediWise is a comprehensive full-stack healthcare management platform offering distinct portals for Admins, Doctors, and Patients. It streamlines clinical operations with features like appointment scheduling, automated fee splitting, salary payouts, and secure medical record management. Built with a robust Node.js/Sequelize backend and a Next.js App Router frontend.",
        image: "/images/mediwise.png",
        gallery: ["/images/mediwise-1.png", "/images/mediwise-2.png"],
        tech: ["Next.js", "Node.js", "Express", "Sequelize", "PostgreSQL"],
        features: [
            "Role-based portals (Admin, Doctor, Patient)",
            "Automated payment processing & fee splits",
            "Real-time appointment scheduling",
            "Secure medical records & prescriptions"
        ],
        challenge: "Managing complex relationships between doctors, patients, and appointments while ensuring data privacy and accurate financial calculations.",
        solution: "Implemented a modular MVC backend with Sequelize associations and a granular role-based access control (RBAC) system.",
        color: "from-teal-900/50 to-emerald-900/50",
        link: "https://cse-309-medi-wise-project.vercel.app",
        github: "https://github.com/asif-mahamud-shaon/MediWise"
    },
    {
        slug: "explorer-nature",
        title: "Explorer Nature",
        category: "Tourism Platform",
        year: "2025",
        description: "Premium tourism platform showcasing Bangladesh's natural wonders and international tours with interactive maps and booking.",
        fullDescription: "Explorer Nature is an award-winning tourism platform connecting travelers with authentic experiences in Bangladesh and abroad. It features advanced search filtering, interactive Leaflet maps, and a seamless booking flow. The UI is crafted with Framer Motion for premium animations and includes a dark/light mode for accessibility.",
        image: "/images/explorer-nature.png",
        gallery: ["/images/explorer-nature-1.png", "/images/explorer-nature-2.png"],
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Leaflet"],
        features: [
            "Interactive tour search & filtering",
            "Dynamic maps with Leaflet integration",
            "Dark/Light mode toggle",
            "SEO optimized with Next-SEO"
        ],
        challenge: "Creating an immersive, visually rich experience that remains performant and accessible.",
        solution: "Utilized Next.js image optimization and Framer Motion for lightweight, hardware-accelerated animations.",
        color: "from-green-900/50 to-lime-900/50",
        link: "https://explore-nature-kappa.vercel.app/",
        github: "https://github.com/asif-mahamud-shaon/Explore-Nature"
    },
    {
        slug: "ems-admin",
        title: "EMS Admin Panel",
        category: "Admin System",
        year: "2025",
        description: "Comprehensive Employee Management System for tracking attendance, performance, and payroll.",
        fullDescription: "This Admin Panel serves as the central hub for the Employee Management System. It allows HR administrators to manage employee records, track daily attendance, process payroll, and generate performance reports. Designed for efficiency and data accuracy in innovative corporate environments.",
        image: "/images/ems.png",
        gallery: ["/images/ems-1.png", "/images/ems-2.png"],
        tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
        features: [
            "Employee lifecycle management",
            "Attendance & leave tracking",
            "Payroll processing",
            "Performance analytics"
        ],
        challenge: "Handling large volumes of employee data with real-time updates.",
        solution: "Optimized database queries and implemented server-side pagination for efficient data retrieval.",
        color: "from-slate-900/50 to-blue-900/50",
        link: "#",
        github: "https://github.com/asif-mahamud-shaon/EMS_ADMIN_PANEL-"
    },
    {
        slug: "motocare",
        title: "MotoCare",
        category: "Auto Marketplace",
        year: "2025",
        description: "Full-stack automotive marketplace with role-based access control and dashboard management.",
        fullDescription: "MotoCare is a premium automotive marketplace platform providing a seamless experience for car buyers, shops, and vendors. It features a robust role-based authentication system, vehicle inventory management, and a comprehensive admin dashboard. The platform ensures secure transactions and easy listing management with image uploads.",
        image: "/images/motocare.png",
        gallery: ["/images/motocare-1.png", "/images/motocare-2.png"],
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Prisma"],
        features: [
            "Role-based Auth (Owner, Shop, Vendor, Admin)",
            "Detailed Car Inventory Management",
            "Secure Image Uploads with Multer",
            "Admin Dashboard for Analytics"
        ],
        challenge: "Handling complex relationships between varying user roles and vehicle data attributes security.",
        solution: "Implemented a scalable relational database schema with Prisma and strict JWT middleware for route protection.",
        color: "from-red-900/50 to-orange-900/50",
        link: "#",
        github: "https://github.com/asif-mahamud-shaon/MotoCare"
    },
    {
        slug: "ecoswap",
        title: "EcoSwap",
        category: "Sustainable Marketplace",
        year: "2025",
        description: "A community-driven marketplace for swapping pre-loved goods to reduce waste and promote sustainability.",
        fullDescription: "EcoSwap facilitates the exchange of used items, promoting a circular economy. It connects users locally to swap goods, featuring real-time chat, item categorization, and user profiles. The platform aims to reduce environmental impact by extending the lifecycle of products.",
        image: "/images/ecoswap.png",
        gallery: ["/images/ecoswap-1.png", "/images/ecoswap-2.png"],
        tech: ["React Native", "Firebase", "Node.js", "Express"],
        features: [
            "Local item discovery",
            "Real-time user chat",
            "Item categorization & search",
            "User reputation system"
        ],
        challenge: "Building trust between strangers for physical item swaps.",
        solution: "Integrated a rating/review system and secure user verification flow.",
        color: "from-emerald-900/50 to-teal-900/50",
        link: "#",
        github: "https://github.com/asif-mahamud-shaon/EcoSwap"
    },
    {
        slug: "astro-ecommerce",
        title: "Astro Commerce",
        category: "E-commerce Interface",
        year: "2025",
        description: "High-performance e-commerce frontend built with Astro for maximum speed and SEO scoring.",
        fullDescription: "Astro E-commerce is an experimental frontend leveraging the Island Architecture of Astro. It delivers near-zero JavaScript to the client for static content, resulting in blazing fast load times and perfect LightHouse scores. Ideal for SEO-heavy retail environments.",
        image: "/images/astro.png",
        gallery: ["/images/astro-1.png", "/images/astro-2.png"],
        tech: ["Astro", "Tailwind CSS", "React", "TypeScript"],
        features: [
            "Island Architecture for zero-JS load",
            "Perfect 100/100 Lighthouse scores",
            "Responsive product grids",
            "View Transitions API support"
        ],
        challenge: "Optimizing load performance for heavy image-based product changes.",
        solution: "Used Astro's static site generation (SSG) capabilities combined with lazy-loading strategies.",
        color: "from-purple-900/50 to-pink-900/50",
        link: "#",
        github: "https://github.com/asif-mahamud-shaon/Astro-Ecommerce-frontend"
    },
    {
        slug: "campus-pilot",
        title: "CampusPilot Defense",
        category: "University Portal",
        year: "2024",
        description: "A C# based university management portal for academic scheduling, grading, and student resources.",
        fullDescription: "CampusPilot is a robust desktop/web portal solution built with C# for university ecosystems. It handles course registration, grading systems, student profiles, and resource scheduling. Built with a focus on data integrity and secure role-based access for faculty and students.",
        image: "/images/campus.png",
        gallery: ["/images/campus-1.png", "/images/campus-2.png"],
        tech: ["C#", ".NET", "SQL Server", "Entity Framework"],
        features: [
            "Course registration system",
            "Automated grading calculator",
            "Student profile management",
            "Faculty resource portal"
        ],
        challenge: "Ensuring data consistency across complex academic relational data.",
        solution: "Leveraged Entity Framework for strict schema enforcement and transactional integrity.",
        color: "from-indigo-900/50 to-violet-900/50",
        link: "#",
        github: "https://github.com/asif-mahamud-shaon/CampusPilot-Defense"
    },
    {
        slug: "dabble-game",
        title: "Dabble Game",
        category: "Word Puzzle Game",
        year: "2025",
        description: "A fun word unscramble game built with Python and Tkinter challenging players to solve puzzles.",
        fullDescription: "Dabble Game is an interactive word unscramble puzzle built using Python and Tkinter. It features three difficulty levels (Easy, Medium, Hard), random word shuffling, a scoring system, and automatic level progression. The game offers a user-friendly GUI and a 'Play Again' option, making it engaging for word puzzle enthusiasts.",
        image: "/images/dabble.png",
        gallery: ["/images/dabble-1.png", "/images/dabble-2.png"],
        tech: ["Python", "Tkinter", "Random Module"],
        features: [
            "Three Difficulty Levels",
            "Dynamic Word Shuffling",
            "Real-time Scoring System",
            "Interactive GUI with Tkinter"
        ],
        challenge: "Designing a responsive game loop with GUI updates without freezing the main application thread.",
        solution: "Utilized Tkinter's event-driven architecture to manage game states and UI refreshes seamlessly.",
        color: "from-yellow-900/50 to-amber-900/50",
        link: "#",
        github: "https://github.com/asif-mahamud-shaon/Dabble"
    }
];
