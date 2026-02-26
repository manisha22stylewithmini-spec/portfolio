import Hero from "@/components/Hero";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Projects from "../components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen text-white font-sans antialiased overflow-x-clip selection:bg-emerald-500/30">

      {/* 500vh Scroll Area Container (Isolated Animation) */}
      <Hero />

      {/* Cinematic Main Sections */}
      <About />
      <Resume />
      <Projects />
      <Contact />
      <Footer />

    </main>
  );
}
