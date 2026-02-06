"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Cpu, Database, Globe, Layers, ChevronRight, Terminal } from "lucide-react";

const expertises = [
    {
        id: "01",
        category: "LANGUAGES & CORE",
        icon: Terminal,
        status: "OPTIMIZED",
        skills: ["TypeScript", "JavaScript", "Python", "Go", "SQL", "C++"]
    },
    {
        id: "02",
        category: "FRONTEND SYSTEMS",
        icon: Globe,
        status: "ONLINE",
        skills: ["Next.js 14", "React", "Tailwind CSS", "Framer Motion", "Three.js", "GSAP"]
    },
    {
        id: "03",
        category: "BACKEND ARCHITECTURE",
        icon: Layers,
        status: "ACTIVE",
        skills: ["Node.js", "Express", "NestJS", "GraphQL", "WebSockets", "Microservices"]
    },
    {
        id: "04",
        category: "DATA & INFRASTRUCTURE",
        icon: Database,
        status: "SECURE",
        skills: ["PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Terraform"]
    }
];

export default function Skills() {
    const [activeModule, setActiveModule] = useState<number | null>(0); // First one open by default

    return (
        <section id="expertise" className="py-32 relative bg-black min-h-screen flex items-center overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* Ambient Glow */}
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />

            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Left Panel: Header & Intro */}
                    <div className="lg:w-1/3">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                <span className="font-mono text-emerald-500 tracking-widest text-sm uppercase">System Modules</span>
                            </div>

                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                TECHNICAL <br />
                                <span className="text-gray-600">ARSENAL.</span>
                            </h2>

                            <p className="text-gray-400 text-lg leading-relaxed mb-8 border-l-2 border-white/10 pl-6">
                                High-performance tools configured for scalable solutions. Accessing system capabilities...
                            </p>

                            <div className="hidden lg:block p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                                <div className="flex justify-between items-center text-xs font-mono text-gray-400 mb-2">
                                    <span>SYSTEM_STATUS</span>
                                    <span className="text-emerald-500">ALL_SYSTEMS_GO</span>
                                </div>
                                <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-emerald-500"
                                        initial={{ width: "0%" }}
                                        whileInView={{ width: "100%" }}
                                        transition={{ duration: 1.5, ease: "circOut" }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Panel: Interactive Modules (Accordion) */}
                    <div className="lg:w-2/3 flex flex-col gap-4">
                        {expertises.map((module, index) => {
                            const isOpen = activeModule === index;

                            return (
                                <motion.div
                                    key={module.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    onClick={() => setActiveModule(isOpen ? null : index)}
                                    className={`group cursor-pointer relative overflow-hidden rounded-xl border transition-all duration-500 ${isOpen
                                        ? "bg-white/5 border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.1)]"
                                        : "bg-black/40 border-white/10 hover:border-white/30 hover:bg-white/5"
                                        }`}
                                >
                                    {/* Accordion Header */}
                                    <div className="p-6 md:p-8 flex items-center justify-between relative z-10">
                                        <div className="flex items-center gap-6">
                                            <div className={`p-3 rounded-lg transition-colors duration-300 ${isOpen ? "bg-emerald-500/20 text-emerald-400" : "bg-white/5 text-gray-400 group-hover:text-white"
                                                }`}>
                                                <module.icon size={24} />
                                            </div>

                                            <div>
                                                <div className="flex items-center gap-3 mb-1">
                                                    <span className="text-xs font-mono text-gray-500">MODULE_{module.id}</span>
                                                    {isOpen && (
                                                        <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 tracking-wider">
                                                            {module.status}
                                                        </span>
                                                    )}
                                                </div>
                                                <h3 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${isOpen ? "text-white" : "text-gray-400 group-hover:text-white"
                                                    }`}>
                                                    {module.category}
                                                </h3>
                                            </div>
                                        </div>

                                        <ChevronRight className={`text-gray-500 transition-transform duration-500 ${isOpen ? "rotate-90 text-emerald-500" : "group-hover:text-white"}`} />
                                    </div>

                                    {/* Accordion Content */}
                                    <motion.div
                                        initial={false}
                                        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-8 md:px-8 md:pb-8 pt-0 pl-[88px]">
                                            <div className="w-full h-px bg-white/10 mb-6" />
                                            <div className="flex flex-wrap gap-3">
                                                {module.skills.map((skill, i) => (
                                                    <div
                                                        key={skill}
                                                        className="relative bg-black/50 border border-white/10 rounded px-4 py-2 text-sm text-gray-300 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300"
                                                    >
                                                        {skill}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Decorative Scan Line */}
                                    {isOpen && (
                                        <motion.div
                                            layoutId="scan-line"
                                            className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-transparent to-transparent opacity-50"
                                        />
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
