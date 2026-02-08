"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

export default function Education() {
    return (
        <section id="education" className="py-32 bg-black relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="container max-w-5xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Education<span className="text-emerald-500">.</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12 border-l-2 border-emerald-500/50 pl-8 md:pl-12 py-4"
                >
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono tracking-widest rounded uppercase">
                                Verified Degree
                            </span>
                            <span className="text-gray-600 text-sm font-mono">
                                2021 — 2025
                            </span>
                        </div>

                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 leading-tight">
                                B.Sc. in Computer Science <br /> & Engineering
                            </h2>
                            <h3 className="text-xl md:text-2xl text-gray-400 font-light">
                                American International University-Bangladesh
                            </h3>
                        </div>

                        <p className="text-gray-500 max-w-xl text-sm md:text-base leading-relaxed">
                            Specialized in Software Architecture, Development, Advanced Algorithms, and Distributed Systems.
                            Graduated with a focus on scalable engineering solutions.
                        </p>
                    </div>

                    <div className="hidden md:block">
                        <div className="w-24 h-24 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-emerald-500 animate-spin-slow">
                            <GraduationCap size={40} />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
