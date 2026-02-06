"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Monitor, Cpu, Fingerprint, GitBranch, Terminal } from "lucide-react";

// Detailed Content Data
const tabs = [
    {
        id: "developer",
        label: "Developer",
        icon: Terminal,
        title: "CORE_DEVELOPER",
        subtitle: "Precision & Performance",
        content: "I don't just write code; I craft digital logic. My development philosophy centers on creating systems that are not only functional but also elegantly structured. I adhere to strict clean code principles, ensuring every function serves a unified purpose.",
        features: [
            "Semantic HTML & Modern CSS Architecture",
            "Type-Safe Logic with TypeScript",
            "Component-Driven Development (CDD)",
            "Performance Optimization (Web Vitals)"
        ]
    },
    {
        id: "engineer",
        label: "Engineer",
        icon: Cpu,
        title: "SYSTEM_ENGINEER",
        subtitle: "Scalability & Architecture",
        content: "Building for today while architecting for tomorrow. I design robust back-end infrastructures that handle data with efficiency and security. My approach connects disjointed services into a cohesive, fault-tolerant ecosystem.",
        features: [
            "Microservices & Serverless Patterns",
            "Database Design & Optimization",
            "API Security & Authentication",
            "CI/CD Pipeline Automation"
        ]
    },
    {
        id: "problem-solver",
        label: "Problem Solver",
        icon: GitBranch,
        title: "LOGIC_SOLVER",
        subtitle: "Analytics & Strategy",
        content: "Complex problems require creative algorithms. I thrive in debugging difficult scenarios and finding optimized paths through logical mazes. I bridge the gap between abstract business requirements and concrete technical solutions.",
        features: [
            "Algorithmic Problem Solving",
            "Data-Driven Decision Making",
            "User Experience (UX) Strategy",
            "Legacy Code Refactoring"
        ]
    }
];

// Helper Component for Content Rendering
const TabContent = ({ tab, isMobile = false }: { tab: typeof tabs[0], isMobile?: boolean }) => {
    return (
        <div className={`relative bg-white/5 border border-white/10 p-6 md:p-12 rounded-2xl backdrop-blur-md overflow-hidden ${isMobile ? 'mt-4' : 'h-full'}`}>
            {/* Glowing Background Effect for Content */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                    <div className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded text-[10px] font-mono text-emerald-400 uppercase tracking-wider">
                        Role Analysis
                    </div>
                </div>

                <h3 className="text-2xl md:text-5xl font-bold text-white mb-2">
                    {tab.title}
                </h3>
                <p className="text-emerald-500/80 font-mono text-xs md:text-sm mb-6 md:mb-8 tracking-widest uppercase">
                    {tab.subtitle}
                </p>

                <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 md:mb-10 border-l-2 border-white/10 pl-4 md:pl-6">
                    {tab.content}
                </p>

                {/* Feature List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    {tab.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 group/item">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full group-hover/item:shadow-[0_0_8px_rgba(16,185,129,0.8)] transition-all" />
                            <span className="text-sm font-mono text-gray-400 group-hover/item:text-white transition-colors">
                                {feature}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Huge Background Icon */}
            <div className="absolute -bottom-12 -right-12 opacity-[0.03] pointer-events-none rotate-12">
                <tab.icon size={isMobile ? 200 : 400} />
            </div>
        </div>
    );
};

export default function Identity() {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <section className="py-24 md:py-32 bg-black relative overflow-hidden">
            {/* Background Grid & Noise */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

            <div className="container max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 md:mb-20"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <Fingerprint className="text-emerald-500 w-5 h-5" />
                        <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase">My Digital DNA</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        The Identity<span className="text-emerald-500">.</span>
                    </h2>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start">
                    {/* Navigation Tabs (Left Side on Desktop, Accordion on Mobile) */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-3 lg:gap-2">
                        {tabs.map((tab) => (
                            <div key={tab.id} className="flex flex-col">
                                <button
                                    onClick={() => setActiveTab(activeTab === tab.id ? activeTab : tab.id)}
                                    className={`group relative p-6 text-left rounded-lg border transition-all duration-300 overflow-hidden ${activeTab === tab.id
                                        ? "bg-white/5 border-emerald-500/50"
                                        : "bg-transparent border-white/5 hover:bg-white/5 hover:border-white/10"
                                        }`}
                                >
                                    {/* Active Indicator Bar */}
                                    {activeTab === tab.id && (
                                        <motion.div
                                            layoutId="active-tab-bar"
                                            className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"
                                        />
                                    )}

                                    <div className="flex items-center gap-4 relative z-10">
                                        <tab.icon className={`w-6 h-6 transition-colors duration-300 ${activeTab === tab.id ? "text-emerald-400" : "text-gray-500 group-hover:text-white"
                                            }`} />
                                        <div>
                                            <span className={`block text-lg font-bold transition-colors duration-300 ${activeTab === tab.id ? "text-white" : "text-gray-400 group-hover:text-white"
                                                }`}>
                                                {tab.label}
                                            </span>
                                        </div>
                                    </div>
                                </button>

                                {/* Mobile Accordion Content */}
                                <div className="lg:hidden">
                                    <AnimatePresence>
                                        {activeTab === tab.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <TabContent tab={tab} isMobile={true} />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Desktop Content Display (Hidden on Mobile) */}
                    <div className="hidden lg:block w-full lg:w-2/3">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                            >
                                <TabContent tab={tabs.find(t => t.id === activeTab)!} />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
