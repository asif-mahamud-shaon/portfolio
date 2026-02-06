"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorFollower() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 300 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Main Cursor Dot - 8px */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />

            {/* Outer Glow Ring trail - 24px */}
            <motion.div
                className="fixed top-0 left-0 w-6 h-6 rounded-full border border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.4)] pointer-events-none z-[9998]"
                style={{
                    x: useSpring(cursorX, { damping: 40, stiffness: 200 }),
                    y: useSpring(cursorY, { damping: 40, stiffness: 200 }),
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
        </>
    );
}
