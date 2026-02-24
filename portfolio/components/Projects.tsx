"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projectsData = [
    {
        title: "Government Platform UX Redesign",
        description: "Redesigned a government website to improve usability, accessibility, and workflow clarity.",
        points: [
            "Improved structure, navigation, and user experience.",
            "Modernized legacy workflows with user-centered design."
        ],
        ctaText: "View Case Study",
        link: "#case-studies"
    },
    {
        title: "Legal Case Management Dashboard",
        description: "Designed a comprehensive SaaS platform optimized for legal teams.",
        points: [
            "Created dashboards, workflows, and UX architecture.",
            "Improved efficiency and usability for complex legal data."
        ]
    },
    {
        title: "ANTRE HRMS Platform",
        description: "Designed complete HRMS dashboards and employee workflows.",
        points: [
            "Created reusable UX patterns.",
            "Developed a highly scalable enterprise design system."
        ]
    },
    {
        title: "ANTFLUENS Social Media Platform",
        description: "Designed an advanced social media management dashboard.",
        points: [
            "Simplified complex analytics into clear, actionable interfaces.",
            "Enhanced user retention through gamified UX patterns."
        ]
    }
];

export default function Projects() {
    return (
        <section id="portfolio" className="relative min-h-screen py-32 px-8 md:px-24 bg-[#121212] z-20">

            {/* Background ambient glow */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">Selected Work</h2>
                    <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
                        A curated selection of enterprise products, dashboards, and scalable platforms.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projectsData.map((project, index) => (
                        <ProjectCard
                            key={index}
                            index={index}
                            title={project.title}
                            description={project.description}
                            points={project.points}
                            ctaText={project.ctaText}
                            link={project.link}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
