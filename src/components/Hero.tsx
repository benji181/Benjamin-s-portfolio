import { useEffect, useRef } from "react";
import { Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import TechBadge from "./TechBadge";
import Typed from "typed.js";

const Hero = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  const techStack = [
    "Java", "JavaScript", "TypeScript", "HTML", "CSS", "Dart",
    "Spring Boot", "Spring MVC", "Hibernate",
    "MySQL", "PostgreSQL", "MongoDB", "Firebase Realtime Database",
    "React", "Flutter",
    "Docker", "Kubernetes", "AWS", "Vercel",
    "UI-UX Design", "Figma",
    "NPM", "Git", "GitHub", "Xammp",
  ];

  useEffect(() => {
    const typed = new Typed(typedRef.current!, {
      strings: [
        "Software Developer",
        "Full‑stack Web Developer",
        "Mobile app Developer",
        "UI/UX Designer",
        "Freelancer",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none">
              <span className="text-foreground">Hi, I'm </span>
              <span className="text-foreground">Olabisi Boluwatife</span>
              <br />
              {/* Instead of static text, use span for Typed.js */}
              <span className="text-foreground">
                <span ref={typedRef} className="typing"></span>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I build exceptional digital experiences with modern technologies.
              <br />
              Specialized in Full Stack Development and UI & UX Design.
            </p>
          </div>

          {/* Resume Button */}
          <div className="pt-4">
            <a
              href="Assests/resume_olabisi_boluwatife .pdf"
              download
              className="inline-flex items-center px-8 py-6 text-lg font-medium bg-gradient-primary hover:shadow-glow transition-all duration-300 rounded-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 pt-8">
            <a
              href="https://www.linkedin.com/in/bolu-olabisi-benjamin/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>

            <a
              href="https://github.com/benji181"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </Button>
            </a>
          </div>

          {/* Tech Stack */}
          <div className="pt-16">
            <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
              {techStack.map((tech, index) => (
                <TechBadge
                  key={tech}
                  className={`animate-fade-in`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: "backwards",
                  }}
                >
                  {tech}
                </TechBadge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
