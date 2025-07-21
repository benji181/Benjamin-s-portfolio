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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />                 {/* Navigation always on top */}
      <Hero />                   {/* Your intro / elevator pitch */}
      <About />                  {/* About you – background & summary */}
      <Services />               {/* What you offer (services, roles, etc.) */}
      <Skills />                 {/* Your core skills / tech stack */}
      <Experience />             {/* Work experience & achievements */}
      <Projects />               {/* Highlight key portfolio projects */}
      <GitHubContributions />   {/* Showcase your open-source activity */}
      <Contact />                {/* How to reach you */}
      <Footer />                 {/* Footer with links, copyright, etc. */}
    </div>
  );
};
 export default Index;