"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="relative min-h-screen flex items-center py-32 px-8 md:px-24 bg-[#121212] z-20">

            {/* Decorative ambient background glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Col: Header & Specialties */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">About Me</h2>

                    <div className="space-y-6 text-xl text-gray-400 font-light leading-relaxed">
                        <p>
                            I’m Manisha Baroliya, a UX/UI and Product Designer with nearly 2 years of experience designing scalable SaaS platforms, dashboards, and enterprise digital products.
                        </p>
                        <p>
                            Currently working as UX Product Designer and Design Team Lead at RCV Technologies, I lead end-to-end design from research to high-fidelity UI and developer handoff.
                        </p>
                        <p>
                            My approach is rooted in psychology and systems thinking, ensuring every design decision aligns with user behavior and business goals.
                        </p>
                    </div>

                </motion.div>

                {/* Right Col: Glass Panel Highlights */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="flex flex-col gap-6"
                >
                    {/* Top Specialties Box */}
                    <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all">
                        <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                            <span className="w-8 h-px bg-white/30" /> I specialize in
                        </h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300 font-medium tracking-wide">
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-400" /> Design systems
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-400" /> Dashboard UX
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-purple-400" /> SaaS platforms
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-pink-400" /> Enterprise tools
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-orange-400" /> Government platforms
                            </li>
                        </ul>
                    </div>

                    {/* AI Banner Box */}
                    <div className="relative p-8 rounded-3xl overflow-hidden group">
                        {/* Animated gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 border border-white/10 rounded-3xl backdrop-blur-xl z-0" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-0" />

                        <div className="relative z-10">
                            <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-3">
                                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                AI-Augmented Designer
                            </h3>
                            <p className="text-gray-300 font-light leading-relaxed">
                                I leverage prompt engineering and intelligent AI workflows to aggressively accelerate ideation, freeing up time to strictly focus on solving the most meaningful core product problems.
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
