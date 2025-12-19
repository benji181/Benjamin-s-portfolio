import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © 2026 Olabisi Boluwatife. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-start gap-1 mt-1">
              Using React & TypeScript
            </p>
          </div>
          
          <div className="flex items-center gap-4">
  {/* GitHub */}
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

  {/* LinkedIn */}
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
</div>


        </div>
      </div>
    </footer>
  );
};

export default Footer;