import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import GitHubContributions from "@/components/GitHubContributions";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials.tsx";
import TechBadge from "@/components/TechBadge.tsx";
import {badgeVariants} from "@/components/ui/badge.tsx";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />                 {/* Navigation always on top */}
      <Hero />
        <TechBadge />
      <About />                  {/* About you – background & summary */}
      <Services />               {/* What you offer (services, roles, etc.) */}
      <Skills />                 {/* Your core skills / tech stack */}
      <Experience />             {/* Work experience & achievements */}
      <Projects />               {/* Highlight key portfolio projects */}
      <GitHubContributions />   {/* Showcase your open-source activity */}
      <Testimonials />   {/* Showcase your open-source activity */}
      <TechBadge />   {/* Showcase your open-source activity */}
      <Contact />                {/* How to reach you */}
      <Footer />                 {/* Footer with links, copyright, etc. */}
    </div>
  );
};
 export default Index;