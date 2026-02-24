"use client";

import { motion } from "framer-motion";
import CTAButton from "./CTAButton";

export default function Contact() {
    return (
        <section id="contact" className="relative min-h-[70vh] flex flex-col items-center justify-center py-32 px-8 bg-[#121212] z-20 overflow-hidden">

            {/* Cinematic Ambient Lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl w-full text-center relative z-10 glass-panel p-12 md:p-20 rounded-[3rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl"
            >
                <span className="inline-block py-1 px-4 rounded-full bg-white/10 text-emerald-300 font-medium text-sm mb-6 border border-emerald-500/20">
                    Available for Opportunities
                </span>

                <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 tracking-tight leading-tight">
                    Let’s build meaningful <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">digital experiences</span> together.
                </h2>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a href="mailto:manishabaroliya2025@gmail.com">
                        <CTAButton className="w-full sm:w-auto min-w-[160px]">
                            Email Me
                            <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </CTAButton>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/manisha-baroliya-488016265/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <CTAButton className="w-full sm:w-auto min-w-[160px]">
                            LinkedIn
                        </CTAButton>
                    </a>

                    <a
                        href="https://www.behance.net/manishabarol2023"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <CTAButton className="w-full sm:w-auto min-w-[160px]">
                            Behance
                        </CTAButton>
                    </a>
                </div>

            </motion.div>
        </section>
    );
}
