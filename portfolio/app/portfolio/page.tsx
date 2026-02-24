import Projects from "@/components/Projects";
import ProjectsHero from "@/components/ProjectsHero";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function PortfolioPage() {
    return (
        <main className="bg-[#121212] min-h-screen text-white font-sans antialiased overflow-x-clip selection:bg-emerald-500/30">
            <ProjectsHero />
            <Projects />
            <Contact />
            <Footer />
        </main>
    );
}
