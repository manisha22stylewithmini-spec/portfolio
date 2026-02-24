"use client";

import { motion } from "framer-motion";

const experience = [
    {
        role: "UX Product Designer & Design Team Lead",
        company: "RCV Technologies",
        date: "April 2024 – Present",
        points: [
            "Lead UX/UI design for SaaS platforms and enterprise products",
            "Created design systems for scalability and consistency",
            "Improved onboarding, dashboards, and workflows",
            "Collaborate with product managers and developers",
            "Mentor junior designers"
        ]
    },
    {
        role: "Product Designer (Freelance)",
        company: "Freelance",
        date: "Dec 2023 – Present",
        points: [
            "Delivered end-to-end product design solutions",
            "Created UX flows, UI designs, and developer handoff documentation"
        ]
    },
    {
        role: "UX/UI Designer Intern",
        company: "Flashcube IT",
        date: "Oct 2023 – Dec 2023",
        points: [
            "Worked on web and mobile UI design",
            "Improved usability and component systems"
        ]
    }
];

const skills = [
    "UX/UI Design", "Product Design", "Design Systems",
    "UX Research", "Prompt Engineering", "AI-Augmented Design"
];

const education = [
    { degree: "BA Psychology", school: "Delhi University" },
    { degree: "UX/UI Master Course", school: "Ducat Academy" }
];

export default function Resume() {
    return (
        <section id="resume" className="relative min-h-screen py-32 px-8 md:px-24 bg-[#121212] z-20 overflow-hidden">

            {/* Background glow lines */}
            <div className="absolute inset-0 flex justify-center -z-10 opacity-30">
                <div className="w-px h-full bg-gradient-to-b from-transparent via-emerald-500/50 to-transparent" />
            </div>

            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">Experience</h2>
                    <motion.a
                        href="/CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                            // Programmatically trigger the download so the natural href can open the preview
                            const link = document.createElement("a");
                            link.href = "/CV.pdf";
                            link.download = "Manisha_Baroliya_CV.pdf";
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white font-medium transition-colors shadow-lg shadow-white/5"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View Resume
                    </motion.a>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                    {/* Main Experience Column */}
                    <div className="lg:col-span-2 space-y-12">
                        {experience.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="relative pl-8 md:pl-0"
                            >
                                {/* Timeline node for mobile/tablet */}
                                <div className="md:hidden absolute left-0 top-2 w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />

                                <div className="glass-panel p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors group">
                                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
                                        <div>
                                            <h3 className="text-2xl font-semibold text-white group-hover:text-emerald-300 transition-colors">{job.role}</h3>
                                            <p className="text-xl text-gray-400 font-light mt-1">{job.company}</p>
                                        </div>
                                        <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-sm font-medium text-gray-300 whitespace-nowrap border border-white/5 h-fit">
                                            {job.date}
                                        </div>
                                    </div>
                                    <ul className="space-y-3 mt-6">
                                        {job.points.map((point, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-300 font-light leading-relaxed">
                                                <svg className="w-5 h-5 text-emerald-400/70 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Side Column: Skills & Education */}
                    <div className="space-y-16">

                        {/* Skills */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                Industry Skills
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-200 text-sm font-medium hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:text-emerald-200 transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Education */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                Education
                            </h3>
                            <div className="space-y-6">
                                {education.map((edu, i) => (
                                    <div key={i} className="glass-panel p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
                                        <h4 className="text-lg font-semibold text-white mb-1">{edu.degree}</h4>
                                        <p className="text-gray-400 font-light">{edu.school}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </div>

            </div>
        </section>
    );
}
