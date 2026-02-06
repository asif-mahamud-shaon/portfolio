export const projects = [
    {
        slug: "mediwise",
        title: "MediWise",
        category: "Healthcare Platform",
        description: "A comprehensive dashboard for patient health trends, appointment scheduling, and resource allocation. Built with real-time data visualization.",
        fullDescription: "MediWise represents a paradigm shift in healthcare management systems. It aggregates fragmented patient data into a unified, real-time dashboard that allows medical professionals to make faster, data-driven decisions. The system handles complex appointment scheduling, resource allocation algorithms, and secure patient records with HIPAA-compliant architecture.",
        image: "/images/mediwise.png",
        gallery: ["/images/mediwise-1.png", "/images/mediwise-2.png"],
        tech: ["Next.js", "TypeScript", "D3.js", "Supabase", "Tailwind CSS"],
        features: [
            "Real-time vital signs monitoring dashboard",
            "AI-powered appointment scheduling optimization",
            "Secure patient data encryption (HIPAA compliant)",
            "Resource allocation heatmap"
        ],
        challenge: "Healthcare data is often siloed and difficult to visualize in real-time.",
        solution: "We built a centralized event-driven architecture that normalizes data streams into a cohesive React frontend.",
        color: "from-blue-900/50 to-cyan-900/50",
        link: "#",
        github: "#"
    },
    {
        slug: "ecoswap",
        title: "EcoSwap",
        category: "Product Exchange Platform",
        description: "Sustainable marketplace connecting communities to swap goods. Features real-time chat, geolocation, and environmental impact tracking.",
        fullDescription: "EcoSwap is a community-driven marketplace designed to reduce waste by facilitating the exchange of pre-loved goods. Beyond just a marketplace, it calculates the carbon footprint saved with each transaction, gamifying sustainability. The platform features real-time messaging, geolocation-based item discovery, and a trust-based reputation system.",
        image: "/images/ecoswap.png",
        gallery: ["/images/ecoswap-1.png", "/images/ecoswap-2.png"],
        tech: ["React Native", "Node.js", "PostgreSQL", "Socket.io", "Redis"],
        features: [
            "Geolocation-based item discovery",
            "Real-time chat with Socket.io",
            "Environmental impact calculator",
            "User reputation and trust system"
        ],
        challenge: "Building trust and facilitating instant communication in a hyper-local marketplace.",
        solution: "Implemented a robust reputation scoring algorithm and a low-latency WebSocket chat server.",
        color: "from-green-900/50 to-emerald-900/50",
        link: "#",
        github: "#"
    },
    {
        slug: "astro-ecommerce",
        title: "Astro E-commerce",
        category: "Future Commerce",
        description: "Experimental e-commerce interface with space-themed aesthetics. Focus on micro-interactions and immersive product purchasing flow.",
        fullDescription: "Astro E-commerce tests the boundaries of web performance and visual storytelling. Using Astro's island architecture, we achieved near-zero JavaScript load times while maintaining rich interactivity. The design language is inspired by futuristic HUDs and space travel, creating an immersive shopping experience that feels like browsing a terminal on a spaceship.",
        image: "/images/astro.png",
        gallery: ["/images/astro-1.png", "/images/astro-2.png"],
        tech: ["Astro", "Tailwind", "Stripe", "Vercel KV", "View Transitions"],
        features: [
            "Zero-JS initial load with Astro Islands",
            "Immersive 3D product viewer",
            "Seamless View Transitions API navigation",
            "Futuristic glassmorphism UI"
        ],
        challenge: "Balancing heavy visual effects with elite-level web performance.",
        solution: "Leveraged Astro to isolate interactive islands, ensuring the main thread remains free for smooth animations.",
        color: "from-purple-900/50 to-indigo-900/50",
        link: "#",
        github: "#"
    },
    {
        slug: "ems-dashboard",
        title: "EMS Dashboard",
        category: "Employee Management",
        description: "Enterprise-grade HR analytics tool. manage team structures, performance reviews, and retention metrics with granular access control.",
        fullDescription: "The EMS Dashboard is a powerful internal tool designed for large-scale organizations. It visualizes complex organizational hierarchies and tracks employee performance metrics over time. Security is paramount, with a granular Role-Based Access Control (RBAC) system ensuring data privacy across departments.",
        image: "/images/ems.png",
        gallery: ["/images/ems-1.png", "/images/ems-2.png"],
        tech: ["Next.js", "GraphQL", "Apollo", "AWS Cognito", "Chart.js"],
        features: [
            "Interactive organization chart visualization",
            "Performance review cycle management",
            "Granular RBAC (Role-Based Access Control)",
            "Automated retention risk analysis"
        ],
        challenge: "Visualizing complex, nested organizational structures without performance lag.",
        solution: "Used a graph-based data model and optimized SVG rendering for the organizational chart using D3.js.",
        color: "from-slate-900/50 to-gray-900/50",
        link: "#",
        github: "#"
    }
];
