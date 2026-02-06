"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Calendar } from "lucide-react";
import { useRef } from "react";

const experiences = [
    {
        year: "Nov 2025 – Present",
        role: "Founder and CEO",
        company: "Codiora Tech",
        link: "https://codioratech.com/",
        location: "Remote",
        description: [
            "Founded a tech company delivering innovative digital solutions.",
            "Specializing in scalable web development and custom software architectures.",
            "Driving business growth through modern engineering and creative strategy."
        ]
    },
    {
        year: "Nov 2025 – Present",
        role: "Full Stack Developer",
        company: "Bengal Tech Solutions",
        location: "Remote",
        description: [
            "Architecting enterprise full-stack apps (MERN/PERN).",
            "Designing high-performance REST APIs.",
            "Leading remote CI/CD workflows."
        ]
    },
    {
        year: "2025 (Jul - Oct)",
        role: "Software Engineer Intern",
        company: "Jam Technologies",
        location: "Hybrid",
        description: [
            "Developed modular components for POS systems.",
            "Optimized performance (40% faster loads).",
            "Refactored legacy codebases."
        ]
    },
    {
        year: "2020 – 2023",
        role: "Digital Lead Generation",
        company: "Fiverr (Freelance)",
        location: "Remote",
        description: [
            "Delivered 600+ projects (99% satisfaction).",
            "Managed a 15-person cross-functional team.",
            "Strategic lead generation systems."
        ]
    }
];

export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 40%", "end 90%"]
    });

    const height = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), {
        stiffness: 200,
        damping: 40,
        restDelta: 0.001
    });

    return (
        <section id="experience" className="py-24 md:py-32 bg-black relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-20" />

            <div className="container max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Work History<span className="text-emerald-500">.</span>
                    </h2>
                </motion.div>

                <div ref={containerRef} className="relative">
                    {/* Static Background Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />

                    {/* Animated Scroll Line */}
                    <motion.div
                        style={{ height }}
                        className="absolute left-0 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-emerald-500 via-emerald-400 to-emerald-500 md:-translate-x-1/2 origin-top shadow-[0_0_10px_rgba(16,185,129,0.5)] z-20"
                    >
                        {/* Glowing Tip/Head */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-emerald-400 rounded-full blur-[2px] shadow-[0_0_10px_2px_rgba(16,185,129,0.8)]" />
                    </motion.div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => {
                            // Calculate approximate threshold for this item (0=0.1, 1=0.5, 2=0.9)
                            // Reduced step so all 4 items fit (0, 0.2, 0.4, 0.6)
                            const threshold = index * 0.2;

                            // Dynamic Styles based on whether the "Laser Line" has passed this point
                            // Opacity: Fades in when line reaches
                            const opacity = useTransform(scrollYProgress, [threshold, threshold + 0.1], [0.2, 1]);
                            // Scale: Pops slightly when activated
                            const scale = useTransform(scrollYProgress, [threshold, threshold + 0.1], [0.95, 1]);
                            // Border & Glow for Dot
                            const dotBg = useTransform(scrollYProgress, [threshold, threshold + 0.1], ["#000", "#10b981"]);
                            const dotShadow = useTransform(scrollYProgress, [threshold, threshold + 0.1], ["0px 0px 0px rgba(16,185,129,0)", "0px 0px 20px rgba(16,185,129,0.8)"]);

                            return (
                                <motion.div
                                    key={index}
                                    style={{ opacity, scale }}
                                    className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                                >
                                    {/* Spacer for the other side */}
                                    <div className="hidden md:block md:w-1/2" />

                                    {/* Center Dot (Dynamic) */}
                                    <div className="absolute left-[-5px] md:left-1/2 top-0 md:top-8 w-2.5 h-2.5 bg-black border border-white/20 rounded-full md:-translate-x-1/2 z-10 box-content overflow-visible">
                                        <motion.div
                                            style={{ backgroundColor: dotBg, boxShadow: dotShadow }}
                                            className="w-full h-full rounded-full transition-colors duration-200"
                                        />
                                    </div>

                                    {/* Content Card (Dynamic) */}
                                    <div className="pl-8 md:pl-0 w-full md:w-1/2">
                                        <motion.div
                                            className={`relative p-6 md:p-8 border rounded-2xl transition-all duration-300 md:mx-12 ${index % 2 === 0 ? "text-left" : "text-left"}`}
                                            style={{
                                                backgroundColor: "rgba(255, 255, 255, 0.03)",
                                                borderColor: useTransform(scrollYProgress, [threshold, threshold + 0.1], ["rgba(255,255,255,0.1)", "rgba(16,185,129,0.5)"])
                                            }}
                                        >

                                            {/* Connector Line (Dynamic) */}
                                            <div className={`hidden md:block absolute top-9 w-12 h-px bg-white/10 ${index % 2 === 0 ? "right-full left-auto" : "left-full right-auto"}`}>
                                                <motion.div
                                                    style={{ scaleX: useTransform(scrollYProgress, [threshold, threshold + 0.1], [0, 1]) }}
                                                    className={`h-full w-full bg-emerald-500 origin-left ${index % 2 === 0 ? "origin-right" : "origin-left"}`}
                                                />
                                            </div>

                                            <div className="flex items-center gap-2 text-emerald-500 mb-2 font-mono text-xs uppercase tracking-wider">
                                                <Calendar size={12} />
                                                <span>{exp.year}</span>
                                            </div>

                                            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                                                {exp.role}
                                            </h3>
                                            <div className="text-gray-400 text-sm mb-6 flex items-center gap-2">
                                                {/* Company Name - Link if available */}
                                                {exp.link ? (
                                                    <a href={exp.link} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors border-b border-transparent hover:border-emerald-400/50">
                                                        {exp.company}
                                                    </a>
                                                ) : (
                                                    <span>{exp.company}</span>
                                                )}

                                                <span className="w-1 h-1 bg-gray-600 rounded-full" />
                                                <span>{exp.location}</span>
                                            </div>

                                            <ul className="space-y-2">
                                                {exp.description.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-gray-400 text-base leading-relaxed">
                                                        <span className="w-1.5 h-1.5 bg-emerald-500/50 rounded-full mt-2 flex-shrink-0" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
