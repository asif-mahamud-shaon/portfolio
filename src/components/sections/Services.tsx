"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { Code2, Palette, Zap, Globe, Database, Smartphone, ArrowUpRight } from "lucide-react";
import { MouseEvent } from "react";

const services = [
    {
        icon: Code2,
        title: "Frontend Architecture",
        description: "Building scalable, pixel-perfect web applications. Expert in modern styling frameworks and strict typing.",
        tags: ["TypeScript", "JavaScript", "Tailwind CSS", "Bootstrap", "DaisyUI"],
        className: "md:col-span-2"
    },
    {
        icon: Palette,
        title: "UI/UX Design",
        description: "Intuitive interfaces that blend aesthetics with functionality.",
        tags: ["Figma", "Design Systems"],
        className: "md:col-span-1"
    },
    {
        icon: Database,
        title: "Backend Engine",
        description: "Robust server-side solutions with diverse languages and scalable databases.",
        tags: ["Python", "Node.js", "Express.js", "PHP", "Java", "PostgreSQL", "MySQL", "MongoDB", "Firebase"],
        className: "md:col-span-2"
    },
    {
        icon: Smartphone,
        title: "Mobile First",
        description: "Responsive across all devices.",
        tags: ["Responsive", "PWA"],
        className: "md:col-span-1"
    },
    {
        icon: Globe,
        title: "Full Stack Systems",
        description: "End-to-end development, taking projects from concept to deployment with CI/CD pipelines and cloud infrastructure.",
        tags: ["AWS", "Docker", "Terraform", "CI/CD", "Microservices"],
        className: "md:col-span-2"
    },
    {
        icon: Zap,
        title: "Performance",
        description: "Speed optimization and SEO.",
        tags: ["Core Vitals", "SEO"],
        className: "md:col-span-1"
    }
];

function ServiceCard({ service, index }: { service: any; index: number }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const x = useSpring(useMotionValue(0), { stiffness: 50, damping: 20 });
    const y = useSpring(useMotionValue(0), { stiffness: 50, damping: 20 });

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);

        const xPct = (clientX - left) / width - 0.5;
        const yPct = (clientY - top) / height - 0.5;

        x.set(xPct * 10);
        y.set(yPct * -10);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
        mouseX.set(0);
        mouseY.set(0);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`group relative ${service.className}`}
            style={{ perspective: 1000 }}
        >
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX: y,
                    rotateY: x,
                    transformStyle: "preserve-3d",
                }}
                className="relative h-full border border-white/10 bg-zinc-900/40 backdrop-blur-xl rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:border-emerald-500/40 hover:bg-zinc-900/60"
            >
                {/* Spotlight Gradient - Refined & Subtle */}
                <motion.div
                    className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                    style={{
                        background: useMotionTemplate`
                            radial-gradient(
                              650px circle at ${mouseX}px ${mouseY}px,
                              rgba(16, 185, 129, 0.08),
                              transparent 80%
                            )
                        `,
                    }}
                />

                <div className="relative z-10 flex flex-col h-full transform-gpu" style={{ transform: "translateZ(20px)" }}>
                    <div className="flex justify-between items-start mb-6">
                        {/* Icon Box - Subtle Glass */}
                        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/5 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-all duration-500">
                            <service.icon className="text-gray-400 group-hover:text-emerald-400 transition-colors duration-300" size={24} />
                        </div>
                        <ArrowUpRight className="text-white/10 group-hover:text-emerald-500/50 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                        {service.title}
                    </h3>

                    <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-grow">
                        {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                        {service.tags.map((tag: string, i: number) => (
                            <span key={i} className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-emerald-500/60 bg-emerald-500/5 border border-emerald-500/5 px-2.5 py-1 rounded-md group-hover:border-emerald-500/20 group-hover:text-emerald-400/80 transition-all duration-300">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function Services() {
    return (
        <section id="services" className="py-32 bg-black relative overflow-hidden">
            {/* Background Details - Refined */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
                            Capabilities <span className="text-emerald-500">.</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-xl">
                            A curated suite of technical services designed to scale your business.
                        </p>
                    </div>

                    <div className="hidden md:block pb-2">
                        <div className="h-px w-32 bg-gradient-to-r from-emerald-500 to-transparent" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
