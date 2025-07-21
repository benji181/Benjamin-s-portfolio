import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card rounded-xl p-6 border border-border/50 animate-scale-in">
            <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground">olabisibolu7@gmail.com</p>
          </div>
          
          <div className="bg-card rounded-xl p-6 border border-border/50 animate-scale-in">
            <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-muted-foreground">Lagos, Nigeria</p>
          </div>
          
          <div className="bg-card rounded-xl p-6 border border-border/50 animate-scale-in">
            <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-muted-foreground">+2348028403494</p>
          </div>
        </div>

        <Button 
          size="lg" 
          className="px-8 py-6 text-lg font-medium bg-gradient-primary hover:shadow-glow transition-all duration-300"
        >
          <Mail className="mr-2 h-5 w-5" />
          Get In Touch
        </Button>
      </div>
    </section>
  );
};

export default Contact;