import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const featuredProjects = [
    {
      title: "Pro-Connect",
      description: "Job hunting platform built with react and firebase for backend sevices",
      image: "Assests\\ProjectImages\\proconnectimage.png",
      url: "https://proconnect-eta.vercel.app/"
    },
    {
      title: "Number Guessing Game",
      description: "A Web Game built with frontend technologies (Html,css,javascript) , and Django for backend",
      image: "Assests\\ProjectImages\\Number-Guessing-Game.png",
      url: "https://github.com/benji181/NGGame"
    },
    {
      title: "Sky-CLock",
      description: "Built a Flutter‑based mobile application that provides real‑time weather updates and global time zone conversions.",
      image: "Assests\\ProjectImages\\Sky-clock.png",
      url: "https://github.com/benji181/SkyClock.git"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            A showcase of my recent work and side projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              className="animate-scale-in"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationFillMode: 'backwards'
              }}
            />
          ))}
        </div>

        <div className="text-center">
        <a 
  href="https://github.com/benji181" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <Button
    variant="outline"
    size="lg"
    className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
  >
    <ExternalLink className="mr-2 h-5 w-5" />
    Explore More
  </Button>
</a>

        </div>
      </div>
    </section>
  );
};

export default Projects;