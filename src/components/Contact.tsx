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
    FileText,
    AlertCircle
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
    // Replace with your Formspree form ID
    const FORMSPREE_FORM_ID = "mdankzbg"; // Get this from formspree.io

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    // Use Formspree hook
    const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);

    const [errors, setErrors] = useState({});
    const [isClientSideValidating, setIsClientSideValidating] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }

        if (!formData.subject.trim()) {
            newErrors.subject = "Subject is required";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Message should be at least 10 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        // Client-side validation
        setIsClientSideValidating(true);
        const isValid = validateForm();

        if (!isValid) {
            setIsClientSideValidating(false);
            return;
        }

        // Submit to Formspree
        try {
            await handleSubmit(e);
        } catch (error) {
            console.error('Form submission error:', error);
        } finally {
            setIsClientSideValidating(false);
        }
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

                            {/* Formspree Success State */}
                            {state.succeeded ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 mb-6">
                                        <CheckCircle className="h-8 w-8 text-green-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3">Message Sent Successfully!</h3>
                                    <p className="text-muted-foreground mb-6">
                                        Thank you for reaching out. I've received your message and will get back to you within 24 hours.
                                    </p>
                                    <Button
                                        variant="outline"
                                        onClick={() => {
                                            setFormData({ name: "", email: "", subject: "", message: "" });
                                            setErrors({});
                                        }}
                                    >
                                        Send Another Message
                                    </Button>
                                </motion.div>
                            ) : (
                                <>
                                    {/* Show Formspree errors if any */}
                                    {state.errors && (
                                        <Alert variant="destructive" className="mb-6">
                                            <AlertCircle className="h-4 w-4" />
                                            <AlertDescription>
                                                There was an error sending your message. Please try again or email me directly.
                                            </AlertDescription>
                                        </Alert>
                                    )}

                                    <form onSubmit={onSubmit} className="space-y-6">
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="name" className="text-sm">
                                                    <div className="flex items-center gap-2">
                                                        <User className="h-3 w-3" />
                                                        Your Name *
                                                    </div>
                                                </Label>
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="John Doe"
                                                    required
                                                    className={errors.name ? "border-red-500" : ""}
                                                />
                                                {errors.name && (
                                                    <p className="text-xs text-red-500">{errors.name}</p>
                                                )}
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email" className="text-sm">
                                                    <div className="flex items-center gap-2">
                                                        <Mail className="h-3 w-3" />
                                                        Email Address *
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
                                                    className={errors.email ? "border-red-500" : ""}
                                                />
                                                {errors.email && (
                                                    <p className="text-xs text-red-500">{errors.email}</p>
                                                )}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="subject" className="text-sm">
                                                <div className="flex items-center gap-2">
                                                    <FileText className="h-3 w-3" />
                                                    Subject *
                                                </div>
                                            </Label>
                                            <Input
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                placeholder="Project Inquiry"
                                                required
                                                className={errors.subject ? "border-red-500" : ""}
                                            />
                                            {errors.subject && (
                                                <p className="text-xs text-red-500">{errors.subject}</p>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="message" className="text-sm">
                                                <div className="flex items-center gap-2">
                                                    <MessageSquare className="h-3 w-3" />
                                                    Message *
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
                                                className={`min-h-[120px] ${errors.message ? "border-red-500" : ""}`}
                                            />
                                            {errors.message && (
                                                <p className="text-xs text-red-500">{errors.message}</p>
                                            )}
                                        </div>

                                        <div className="pt-4">
                                            <Button
                                                type="submit"
                                                className="w-full py-6 text-lg font-medium"
                                                disabled={state.submitting || isClientSideValidating}
                                            >
                                                {state.submitting || isClientSideValidating ? (
                                                    <>
                                                        <div
                                                            className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent mr-2"
                                                        />
                                                        {state.submitting ? "Sending..." : "Validating..."}
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
                                </>
                            )}
                        </CardContent>
                    </Card>
                </div>

            </div>
        </section>
    );
};

export default Contact;