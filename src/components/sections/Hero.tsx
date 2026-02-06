"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect, useState, MouseEvent } from "react";
import { cn } from "@/lib/utils";

export default function Hero() {
    const [text, setText] = useState("");
    const fullText = "I don’t just build websites. I engineer scalable digital systems.";

    // Mouse interaction
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) clearInterval(interval);
        }, 40); // Faster typing for longer text
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black group"
            onMouseMove={handleMouseMove}
        >
            {/* Dynamic Spotlight */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.08),
              transparent 80%
            )
          `,
                }}
            />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="container relative z-10 px-4 flex flex-col items-center justify-center text-center">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8 backdrop-blur-md"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-mono text-white/60 tracking-wider">ONLINE // DHAKA, BD</span>
                </motion.div>

                {/* Main Title */}
                <div className="min-h-[120px] md:min-h-[180px] max-w-5xl">
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-6 relative z-20">
                        {text}
                        <span className="animate-pulse ml-1 inline-block bg-emerald-500 w-3 h-8 md:h-16 align-middle" />
                    </h1>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 1 }}
                    className="text-lg md:text-xl text-white/50 max-w-2xl font-light tracking-wide mb-12 mt-8"
                >
                    Architecting performance-critical applications with modern web technologies.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3 }}
                    className="flex flex-col md:flex-row gap-6"
                >
                    <button className="px-8 py-4 bg-white text-black font-bold text-sm tracking-widest uppercase hover:bg-emerald-400 transition-colors duration-300 transform hover:scale-105">
                        View Projects
                    </button>
                    <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold text-sm tracking-widest uppercase hover:bg-white/10 transition-colors duration-300">
                        Contact Me
                    </button>
                </motion.div>

            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-10 left-10 text-xs font-mono text-white/20 hidden md:block">
                <div>COORDS: 23.8103° N, 90.4125° E</div>
                <div>STATUS: OPERATIONAL</div>
            </div>

            <div className="absolute top-1/2 right-10 transform -translate-y-1/2 flex flex-col gap-4 text-[10px] font-mono text-white/10 hidden md:flex">
                <div className="rotate-90 origin-right">SCROLL</div>
                <div className="w-[1px] h-20 bg-white/10 self-center" />
            </div>
        </section>
    );
}
