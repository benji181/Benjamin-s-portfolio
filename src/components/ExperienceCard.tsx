import { ExternalLink } from "lucide-react";

interface ExperienceCardProps {
  logo: string;
  company: string;
  role: string;
  period: string;
  url?: string;
}

const ExperienceCard = ({ logo, company, role, period, url }: ExperienceCardProps) => {
  const CardContent = () => (
    <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card group">
      <div className="flex-shrink-0">
        <img 
          src={logo} 
          alt={`${company} logo`}
          className="w-12 h-12 rounded-lg object-contain bg-muted p-2"
        />
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {company}
          </h3>
          {url && (
            <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
          )}
        </div>
        <p className="text-foreground font-medium mb-1">{role}</p>
        <p className="text-muted-foreground text-sm">{period}</p>
      </div>
    </div>
  );

  if (url) {
    return (
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
};

export default ExperienceCard;