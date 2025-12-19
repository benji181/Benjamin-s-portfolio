import { cn } from "@/lib/utils";

interface TechBadgeProps {
  children: React.ReactNode;
  c?: "default" | "active";
  className?: string;
  style?: React.CSSProperties;
}

const TechBadge = ({ children, variant = "default", className, style }: TechBadgeProps) => {
  return (
    <div 
      className={cn(
        "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
        "border border-border/50 backdrop-blur-sm",
        variant === "default" && [
          "bg-tech-badge text-tech-badge-foreground",
          "hover:bg-tech-badge-active hover:text-tech-badge-active-foreground",
          "hover:border-primary/50 hover:shadow-glow"
        ],
        variant === "active" && [
          "bg-tech-badge-active text-tech-badge-active-foreground",
          "border-primary/50 shadow-glow"
        ],
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default TechBadge;