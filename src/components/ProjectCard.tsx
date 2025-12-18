import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
  className?: string;
  style?: React.CSSProperties;
}

const ProjectCard = ({ title, description, image, url, className, style }: ProjectCardProps) => {
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-xl bg-project-card border border-border/50",
        "transition-all duration-500 hover:bg-project-card-hover hover:border-primary/50",
        "hover:shadow-card hover:scale-[1.02] cursor-pointer",
        className
      )}
      style={style}
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <ExternalLink className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        <div className="mt-4 flex items-center text-primary text-sm font-medium">
          <span className="group-hover:mr-2 transition-all">Visit</span>
          <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
      
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="absolute inset-0"
        aria-label={`Visit ${title}`}
      />
    </div>
  );
};

export default ProjectCard;