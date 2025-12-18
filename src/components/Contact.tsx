<<<<<<< HEAD
import { useState } from "react";
import { motion } from "framer-motion";
import {
    Mail,
    MapPin,
    Phone,
    Send,
    MessageSquare,
    Clock,
    CheckCircle,
    Linkedin,
    Github,
    User,
    FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // In a real app, you would integrate with an email service or backend API
        // For now, we'll simulate a submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", subject: "", message: "" });
        }, 3000);
    };

    const contactInfo = [
        {
            icon: <Mail className="h-5 w-5" />,
            title: "Email",
            value: "olabisibolu7@gmail.com",
            action: "mailto:olabisibolu7@gmail.com",
            description: "Send me an email anytime"
        },
        {
            icon: <MapPin className="h-5 w-5" />,
            title: "Location",
            value: "Lagos, Nigeria",
            action: "#",
            description: "Available for remote work worldwide"
        },
        {
            icon: <Phone className="h-5 w-5" />,
            title: "Phone",
            value: "+234 802 840 3494",
            action: "tel:+2348028403494",
            description: "Call or WhatsApp"
        }
    ];

    return (
        <section id="contact" className="py-24 px-4 sm:px-6 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />
            <div className="absolute top-1/4 left-10 w-72 h-72 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-secondary/5 rounded-full blur-3xl" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-3 mb-4">
                        <div className="w-8 sm:w-12 h-0.5 bg-primary" />
                        <span className="text-primary font-semibold uppercase tracking-wider text-xs sm:text-sm">
              Get In Touch
            </span>
                        <div className="w-8 sm:w-12 h-0.5 bg-primary" />
                    </div>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Let's Work Together
                    </h2>

                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                        Have a project in mind? Let's discuss how we can bring your ideas to life.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
                    {/* Left Column - Contact Information */}
                    <div className="space-y-6 sm:space-y-8">
                        <Card className="border-border/30 bg-gradient-to-b from-card to-card/95 backdrop-blur-sm">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <MessageSquare className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Contact Information</h3>
                                        <p className="text-sm text-muted-foreground">Reach out through any channel</p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    {contactInfo.map((info, index) => (
                                        <motion.div
                                            key={info.title}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                        >
                                            <a
                                                href={info.action}
                                                className="flex items-start gap-4 p-4 rounded-lg border border-border/20 hover:border-primary/30 hover:bg-primary/5 transition-all group"
                                            >
                                                <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10">
                                                    {info.icon}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                                                        {info.title}
                                                    </h4>
                                                    <p className="text-foreground font-medium mb-1">{info.value}</p>
                                                    <p className="text-sm text-muted-foreground">{info.description}</p>
                                                </div>
                                            </a>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Social Links */}
                                <div className="mt-8 pt-8 border-t border-border/20">
                                    <h4 className="font-semibold mb-4">Connect with me</h4>
                                    <div className="flex gap-4">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="rounded-full"
                                            asChild
                                        >
                                            <a
                                                href="https://www.linkedin.com/in/bolu-olabisi-benjamin/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Linkedin className="h-4 w-4" />
                                            </a>
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="rounded-full"
                                            asChild
                                        >
                                            <a
                                                href="https://github.com/benji181"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Github className="h-4 w-4" />
                                            </a>
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="rounded-full"
                                            asChild
                                        >
                                            <a
                                                href="mailto:olabisibolu7@gmail.com"
                                            >
                                                <Mail className="h-4 w-4" />
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Availability Card */}
                        <Card className="border-border/30 bg-gradient-to-b from-card to-card/95 backdrop-blur-sm">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-green-500/10">
                                        <Clock className="h-5 w-5 text-green-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Availability</h3>
                                        <p className="text-sm text-muted-foreground">Quick response guaranteed</p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <div>
                                            <p className="font-medium">Response Time</p>
                                            <p className="text-sm text-muted-foreground">Within 24 hours</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <div>
                                            <p className="font-medium">Working Hours</p>
                                            <p className="text-sm text-muted-foreground">Monday - Friday, 9AM - 6PM WAT</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <div>
                                            <p className="font-medium">Remote Work</p>
                                            <p className="text-sm text-muted-foreground">Available for projects worldwide</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column - Contact Form */}
                    <Card className="border-border/30 bg-gradient-to-b from-card to-card/95 backdrop-blur-sm h-fit">
                        <CardContent className="p-6 sm:p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-lg bg-primary/10">
                                    <Send className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Send a Message</h3>
                                    <p className="text-sm text-muted-foreground">Fill out the form below</p>
                                </div>
                            </div>

                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 mb-6">
                                        <CheckCircle className="h-8 w-8 text-green-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3">Message Sent!</h3>
                                    <p className="text-muted-foreground mb-6">
                                        Thank you for reaching out. I'll get back to you within 24 hours.
                                    </p>
                                    <Button
                                        variant="outline"
                                        onClick={() => setIsSubmitted(false)}
                                    >
                                        Send Another Message
                                    </Button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name" className="text-sm">
                                                <div className="flex items-center gap-2">
                                                    <User className="h-3 w-3" />
                                                    Your Name
                                                </div>
                                            </Label>
                                            <Input
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-sm">
                                                <div className="flex items-center gap-2">
                                                    <Mail className="h-3 w-3" />
                                                    Email Address
                                                </div>
                                            </Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="john@example.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="subject" className="text-sm">
                                            <div className="flex items-center gap-2">
                                                <FileText className="h-3 w-3" />
                                                Subject
                                            </div>
                                        </Label>
                                        <Input
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="Project Inquiry"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message" className="text-sm">
                                            <div className="flex items-center gap-2">
                                                <MessageSquare className="h-3 w-3" />
                                                Message
                                            </div>
                                        </Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell me about your project..."
                                            rows={5}
                                            required
                                            className="min-h-[120px]"
                                        />
                                    </div>

                                    <div className="pt-4">
                                        <Button
                                            type="submit"
                                            className="w-full py-6 text-lg font-medium"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent mr-2" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="mr-2 h-5 w-5" />
                                                    Send Message
                                                </>
                                            )}
                                        </Button>
                                        <p className="text-xs text-muted-foreground text-center mt-3">
                                            I'll respond to your inquiry as soon as possible.
                                        </p>
                                    </div>
                                </form>
                            )}
                        </CardContent>
                    </Card>
                </div>

            </div>
        </section>
    );
=======
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
>>>>>>> 224b2926ed23ff35b74273720875242b89c1a418
};

export default Contact;