"use client";

import emailjs from "@emailjs/browser";
import { motion, useScroll, useTransform, useMotionTemplate, AnimatePresence } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter, Mail, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { useRef, useState } from "react";

export default function Contact() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        project_details: ""
    });
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const form = useRef<HTMLFormElement>(null);

    const checkFormValidity = () => {
        return formData.name && formData.email && formData.phone && formData.project_details;
    };

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!checkFormValidity()) return;

        setStatus("sending");

        emailjs.sendForm(
            'service_6hxh39r',
            'template_6hm18xl',
            form.current!,
            'r5FRZ6PBbEXsb074d'
        )
            .then(() => {
                setStatus("success");
                setFormData({ name: "", email: "", phone: "", project_details: "" });
            }, (error: any) => {
                console.error("FAILED...", error);
                setStatus("error");
                setTimeout(() => setStatus("idle"), 3000);
            });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section ref={containerRef} id="contact" className="min-h-screen flex items-center bg-black relative overflow-hidden py-24">

            {/* Background Kinetic Mesh (Abstract) */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-emerald-900/30 rounded-full blur-[150px] animate-blob mix-blend-screen" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-blue-900/20 rounded-full blur-[150px] animate-blob animation-delay-2000 mix-blend-screen" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-20 items-center">

                {/* Left Side: The Hook */}
                <motion.div style={{ y, opacity }}>
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                        Let's Build <br />
                        <span className="text-gray-700">Something Great.</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-md leading-relaxed mb-12">
                        Open for opportunities, collaborations, and technical consulting.
                    </p>

                    <div className="flex gap-6">
                        {[
                            { Icon: Github, href: "#" },
                            { Icon: Linkedin, href: "#" },
                            { Icon: Twitter, href: "#" },
                            { Icon: Mail, href: "mailto:hello@example.com" }
                        ].map(({ Icon, href }, i) => (
                            <a key={i} href={href} className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-emerald-500 hover:bg-emerald-500/10 transition-all duration-300">
                                <Icon size={24} />
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* Right Side: The Magnetic Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="group relative bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 p-10 md:p-16 rounded-[2rem] transition-colors duration-500 backdrop-blur-2xl min-h-[600px] flex items-center justify-center">

                        {/* Hover Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-[2rem] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />

                        <AnimatePresence mode="wait">
                            {status === "success" ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="text-center flex flex-col items-center"
                                >
                                    <div className="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6 relative">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
                                        >
                                            <div className="absolute inset-0 bg-emerald-500 rounded-full blur-xl opacity-50" />
                                            <CheckCircle2 size={48} className="text-emerald-500 relative z-10" />
                                        </motion.div>
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-2">Message Sent!</h3>
                                    <p className="text-gray-400 max-w-xs mx-auto mb-8">
                                        Thanks for reaching out. I'll get back to you as soon as possible.
                                    </p>
                                    <button
                                        onClick={() => setStatus("idle")}
                                        className="text-emerald-500 font-mono text-sm hover:text-emerald-400 transition-colors"
                                    >
                                        SEND ANOTHER MESSAGE
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    ref={form}
                                    onSubmit={sendEmail}
                                    className="space-y-12 w-full"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <div className="relative z-0 group/input">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder=" "
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="block py-4 px-0 w-full text-xl text-white bg-transparent border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-500 peer transition-colors"
                                            required
                                        />
                                        <label className="absolute text-xl text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                            Your Name
                                        </label>
                                    </div>

                                    <div className="relative z-0 group/input">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder=" "
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="block py-4 px-0 w-full text-xl text-white bg-transparent border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-500 peer transition-colors"
                                            required
                                        />
                                        <label className="absolute text-xl text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                            Email Address
                                        </label>
                                    </div>

                                    <div className="relative z-0 group/input">
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder=" "
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="block py-4 px-0 w-full text-xl text-white bg-transparent border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-500 peer transition-colors"
                                            required
                                        />
                                        <label className="absolute text-xl text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                            Phone Number
                                        </label>
                                    </div>

                                    <div className="relative z-0 group/input">
                                        <textarea
                                            name="project_details"
                                            rows={1}
                                            placeholder=" "
                                            value={formData.project_details}
                                            onChange={handleChange}
                                            className="block py-4 px-0 w-full text-xl text-white bg-transparent border-0 border-b-2 border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-500 peer transition-colors resize-none min-h-[50px]"
                                            required
                                            onInput={(e) => {
                                                const target = e.target as HTMLTextAreaElement;
                                                target.style.height = "auto";
                                                target.style.height = target.scrollHeight + "px";
                                            }}
                                        />
                                        <label className="absolute text-xl text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                            Project Details
                                        </label>
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            disabled={status === "sending"}
                                            className="group relative w-full flex items-center justify-between text-2xl font-bold text-white py-6 border-t border-b border-white/10 hover:border-emerald-500 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <span className="group-hover:pl-4 transition-all duration-300">
                                                {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
                                            </span>
                                            <span className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-black group-hover:scale-125 group-hover:rotate-[-45deg] transition-all duration-300">
                                                {status === "sending" ? (
                                                    <Loader2 size={24} className="animate-spin" />
                                                ) : (
                                                    <ArrowRight size={24} />
                                                )}
                                            </span>
                                        </button>
                                        {status === "error" && (
                                            <p className="text-red-500 mt-4 text-sm flex items-center gap-2">
                                                <AlertCircle size={16} />
                                                Failed to send. Please try again or email directly.
                                            </p>
                                        )}
                                    </div>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
