"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/data";

export default function Projects() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section id="work" ref={targetRef} className="relative bg-background">

            {/* Desktop Horizontal Scroll View */}
            <div className="hidden lg:block h-[400vh]">
                <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex gap-20 pl-20 pr-20">
                        {/* Title Card */}
                        <div className="flex-shrink-0 w-[30vw] flex flex-col justify-center">
                            <h2 className="text-8xl font-bold text-white mb-6">
                                Selected <br />
                                <span className="text-gray-600">Works.</span>
                            </h2>
                            <p className="text-xl text-gray-400 max-w-md">
                                A collection of high-performance web applications and scalable systems engineered with precision.
                            </p>
                            <div className="mt-12 flex gap-4">
                                <div className="text-sm font-mono text-gray-500 uppercase tracking-widest">
                                    Scroll to explore
                                </div>
                                <div className="animate-bounce text-white">→</div>
                            </div>
                        </div>

                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="group relative h-[65vh] w-[45vw] overflow-hidden rounded-3xl border border-white/10 bg-neutral-900"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />

                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                                </div>

                                <div className="relative z-10 flex h-full flex-col justify-end p-16">
                                    <div className="mb-4 flex items-center gap-4">
                                        <span className="rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-white backdrop-blur-sm">
                                            {project.category}
                                        </span>
                                        <div className="flex gap-2">
                                            {project.tech.map(t => (
                                                <span key={t} className="text-xs text-gray-400 border border-white/10 px-2 py-1 rounded">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <h3 className="mb-4 text-6xl font-bold text-white">{project.title}</h3>
                                    <p className="mb-8 max-w-xl text-xl text-gray-300">{project.description}</p>

                                    <div className="flex gap-4">
                                        <Link
                                            href={`/projects/${project.slug}`}
                                            className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition-transform hover:scale-105"
                                        >
                                            View Project <ExternalLink size={18} />
                                        </Link>
                                        <button className="flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10">
                                            <Github size={18} /> Source
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Mobile Vertical Stack View */}
            <div className="lg:hidden py-24 px-4 container mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Selected Work
                    </h2>
                    <p className="text-gray-400">
                        High-performance systems and applications.
                    </p>
                </div>

                <div className="space-y-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />

                            {/* Image */}
                            <div className="relative h-48 md:h-64 w-full">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover opacity-60"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                            </div>

                            <div className="relative p-6">
                                <div className="mb-3 flex flex-wrap items-center gap-2">
                                    <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
                                        {project.category}
                                    </span>
                                </div>

                                <h3 className="mb-2 text-3xl font-bold text-white">{project.title}</h3>
                                <p className="mb-6 text-sm text-gray-400 line-clamp-3">{project.description}</p>

                                <div className="mb-6 flex flex-wrap gap-2">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-xs text-gray-500 border border-white/10 px-2 py-1 rounded">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3">
                                    <Link
                                        href={`/projects/${project.slug}`}
                                        className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-white py-3 text-sm font-bold text-black"
                                    >
                                        View <ExternalLink size={16} />
                                    </Link>
                                    <button className="flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-black/50 px-4 py-3 text-white">
                                        <Github size={16} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
