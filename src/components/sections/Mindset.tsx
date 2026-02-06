"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Search, PenTool, Rocket, ChevronRight } from "lucide-react";

const steps = [
    {
        id: "01",
        title: "Deconstruct",
        subtitle: "ANALYSIS PHASE",
        icon: Search,
        desc: "I break down complex problems into their atomic truths. Every project begins with deep logic analysis, separating constraints from requirements to find the most efficient path forward.",
        color: "from-blue-500/20 to-cyan-500/5",
        accent: "text-blue-400"
    },
    {
        id: "02",
        title: "Architect",
        subtitle: "DESIGN PHASE",
        icon: PenTool,
        desc: "Scalability isn't an afterthought—it's the blueprint. I design fault-tolerant systems and select the exact technology stack needed to handle growth, security, and performance.",
        color: "from-emerald-500/20 to-green-500/5",
        accent: "text-emerald-400"
    },
    {
        id: "03",
        title: "Execute",
        subtitle: "DEPLOYMENT PHASE",
        icon: Rocket,
        desc: "Code is craft. I implement clean, test-driven logic. The final product is not just functional but optimized for speed, SEO, and a seamless user experience.",
        color: "from-purple-500/20 to-pink-500/5",
        accent: "text-purple-400"
    }
];

export default function Mindset() {
    const [active, setActive] = useState(1); // Middle one active by default

    return (
        <section className="py-24 md:py-32 bg-black relative overflow-hidden">

            {/* Header */}
            <div className="container mx-auto max-w-7xl px-6 mb-16 text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    Engineering <span className="text-gray-600">Protocol.</span>
                </h2>
                <p className="text-gray-400">My systematic approach to solving the unsolvable.</p>
            </div>

            <div className="container mx-auto max-w-7xl px-6 flex flex-col md:flex-row gap-4 h-auto md:h-[600px]">
                {steps.map((step, index) => {
                    const isActive = active === index;
                    return (
                        <motion.div
                            key={index}
                            layout
                            onClick={() => setActive(index)}
                            className={`relative cursor-pointer rounded-3xl border border-white/10 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${isActive ? "min-h-[500px] md:min-h-0 md:flex-[3] bg-white/5" : "h-[100px] md:h-auto md:flex-[1] bg-white/[0.02] hover:bg-white/5"
                                }`}
                        >
                            {/* Gradient Background (Active Only) */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 transition-opacity duration-700 ${isActive ? "opacity-100" : ""}`} />

                            {/* Large Background Number */}
                            <span className="absolute -bottom-12 -right-12 text-[200px] font-bold text-white/[0.02] pointer-events-none select-none leading-none">
                                {step.id}
                            </span>

                            {/* Content Container */}
                            <div className="relative h-full flex flex-col justify-end p-8 md:p-12 pt-32 md:pt-12">

                                {/* Top Content (Icon) */}
                                <div className="absolute top-8 left-8 md:left-12">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 bg-black/50 backdrop-blur-md transition-colors duration-500 ${isActive ? "border-white/30" : ""}`}>
                                        <step.icon className={`w-6 h-6 ${isActive ? "text-white" : "text-gray-500"}`} />
                                    </div>
                                    <h3 className={`mt-6 text-xl font-bold font-mono tracking-widest uppercase origin-left transition-all duration-500 ${isActive ? "opacity-0 translate-y-[-20px]" : "opacity-100 rotate-[-90deg] translate-y-[40px] translate-x-[-10px] md:rotate-0 md:translate-x-0 md:translate-y-0"
                                        }`}>
                                        {step.title}
                                    </h3>
                                </div>

                                {/* Active State Content */}
                                <div className={`transition-all duration-500 delay-100 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 absolute bottom-12 left-12"}`}>
                                    {isActive && (
                                        <>
                                            <span className={`inline-block px-3 py-1 rounded bg-black/50 border border-white/10 text-xs font-mono mb-4 backdrop-blur-md ${step.accent}`}>
                                                {step.subtitle}
                                            </span>
                                            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-300 text-lg leading-relaxed max-w-xl border-l-2 border-white/20 pl-6">
                                                {step.desc}
                                            </p>
                                        </>
                                    )}
                                </div>

                                {/* Inactive State Indicator */}
                                {!isActive && (
                                    <div className="absolute bottom-8 right-8">
                                        <div className="p-3 bg-white/5 rounded-full">
                                            <ChevronRight className="text-gray-500" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
