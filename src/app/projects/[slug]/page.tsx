"use client";

import { projects } from "@/lib/data";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = projects.find((p) => p.slug === params.slug);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-black text-white selection:bg-white/20 pb-20">
            {/* Hero Header - No Background Image */}
            <div className={`relative h-[50vh] w-full overflow-hidden flex flex-col justify-end bg-gradient-to-br ${project.color}`}>
                <div className="absolute inset-0 bg-black/80" /> {/* Dark Overlay */}

                <div className="container relative z-10 h-full flex flex-col justify-between pt-10 pb-12 md:pb-24 px-4 mx-auto max-w-6xl">
                    <Link
                        href="/#work"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all w-fit"
                    >
                        <ArrowLeft size={16} /> Back to Projects
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/10">
                                {project.category}
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">{project.title}</h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
                            {project.description}
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto max-w-6xl px-4 mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
                {/* Left Content */}
                <div className="md:col-span-2 space-y-16">

                    {/* Overview */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white">System Overview</h2>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            {project.fullDescription}
                        </p>
                    </section>

                    {/* Challenge & Solution */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                            <h3 className="text-lg font-bold text-red-300 mb-3">The Challenge</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{project.challenge}</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                            <h3 className="text-lg font-bold text-green-300 mb-3">The Solution</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{project.solution}</p>
                        </div>
                    </section>

                    {/* Key Features */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-white">Key Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {project.features.map((feature, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                                    <span className="text-gray-300">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Mockup Gallery with Lightbox */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-white">System Interface</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {project.gallery.map((img, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.02 }}
                                    className="aspect-[16/10] bg-neutral-900 rounded-xl border border-white/10 relative overflow-hidden group cursor-pointer"
                                    onClick={() => setSelectedImage(img)}
                                >
                                    <Image
                                        src={img}
                                        alt={`${project.title} gallery ${i + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                        <ExternalLink className="text-white drop-shadow-md" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right Sidebar */}
                <div className="space-y-8">
                    {/* Actions */}
                    <div className="flex flex-col gap-4">
                        <a href={project.link} target="_blank" className="w-full py-4 bg-white text-black font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
                            View Live System <ExternalLink size={18} />
                        </a>
                        <a href={project.github} target="_blank" className="w-full py-4 bg-white/5 border border-white/10 text-white font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
                            Source Code <Github size={18} />
                        </a>
                    </div>

                    {/* Tech Stack */}
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/5">
                        <h3 className="text-lg font-bold text-white mb-6">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t) => (
                                <span key={t} className="px-3 py-1.5 bg-black/50 border border-white/10 rounded-md text-sm text-gray-300">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Credits or Date */}
                    <div className="text-sm text-gray-500 font-mono">
                        <div>ROLE: Lead Engineer</div>
                        <div>YEAR: {project.year}</div>
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
                    >
                        <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50">
                            <X size={32} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-6xl aspect-video rounded-xl overflow-hidden shadow-2xl bg-black border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage}
                                alt="Gallery Preview"
                                fill
                                className="object-contain"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
