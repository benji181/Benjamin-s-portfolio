import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
<<<<<<< HEAD
        ? "bg-background/95 backdrop-blur-lg border-b border-border"
=======
        ? "bg-background/95 backdrop-blur-md border-b border-border" 
>>>>>>> 224b2926ed23ff35b74273720875242b89c1a418
        : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">
<<<<<<< HEAD
            <span className="text-muted-foreground">@CODE by</span>
=======
            <span className="text-muted-foreground">@code by</span>
>>>>>>> 224b2926ed23ff35b74273720875242b89c1a418
            <span className="text-foreground ml-2">Olabisi Boluwatife</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#projects" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a 
              href="#about" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;