
import {
    Palette,
    Smartphone,
    Cpu,
    Cloud,
    Database,
    Layers,
    Code,
    Zap
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {useState} from "react";

const services = [
    {
        icon: <Palette className="h-8 w-8" />,
        title: "UI/UX Design",
        description: "Crafting intuitive and visually appealing user experiences for web and mobile applications.",
        details: [
            "User Research & Persona Development",
            "Wireframing & Prototyping",
            "Visual Design Systems",
            "Usability Testing",
            "Design Handoff & Developer Collaboration"
        ],
        color: "from-purple-500/10 to-purple-600/5",
        iconColor: "text-purple-500",
        badge: "Figma, Adobe XD"
    },
    {
        icon: <Code className="h-8 w-8" />,
        title: "Web Development",
        description: "Building responsive, high-performance web applications with modern frameworks and best practices.",
        details: [
            "Frontend Development (React, TypeScript)",
            "Backend Development (Spring Boot, Node.js)",
            "RESTful & GraphQL APIs",
            "Performance Optimization",
            "Progressive Web Apps"
        ],
        color: "from-blue-500/10 to-blue-600/5",
        iconColor: "text-blue-500",
        badge: "React, Spring Boot"
    },
    {
        icon: <Smartphone className="h-8 w-8" />,
        title: "Mobile Development",
        description: "Creating cross-platform and native mobile applications with seamless user experiences.",
        details: [
            "Cross-platform Development (Flutter)",
            "Native iOS/Android Apps",
            "Mobile UI/UX Design",
            "App Store Deployment",
            "Push Notifications & Offline Support"
        ],
        color: "from-green-500/10 to-green-600/5",
        iconColor: "text-green-500",
        badge: "Flutter, React Native"
    },
    {
        icon: <Database className="h-8 w-8" />,
        title: "Database Design",
        description: "Designing scalable and efficient database architectures for data-driven applications.",
        details: [
            "SQL & NoSQL Database Design",
            "Query Optimization",
            "Data Migration & ETL Processes",
            "Backup & Recovery Strategies",
            "Database Security & Compliance"
        ],
        color: "from-amber-500/10 to-amber-600/5",
        iconColor: "text-amber-500",
        badge: "MySQL, MongoDB"
    },
    {
        icon: <Cloud className="h-8 w-8" />,
        title: "Cloud & DevOps",
        description: "Implementing scalable cloud infrastructure and CI/CD pipelines for reliable deployments.",
        details: [
            "Cloud Architecture (AWS, GCP)",
            "Containerization (Docker, Kubernetes)",
            "CI/CD Pipeline Setup",
            "Infrastructure as Code",
            "Monitoring & Logging"
        ],
        color: "from-cyan-500/10 to-cyan-600/5",
        iconColor: "text-cyan-500",
        badge: "AWS, Docker"
    },
    {
        icon: <Layers className="h-8 w-8" />,
        title: "System Architecture",
        description: "Designing robust, scalable system architectures for enterprise-grade applications.",
        details: [
            "Microservices Architecture",
            "API Design & Documentation",
            "System Integration",
            "Performance & Scalability Planning",
            "Security Architecture"
        ],
        color: "from-red-500/10 to-red-600/5",
        iconColor: "text-red-500",
        badge: "Microservices, REST APIs"
    }
];

const Services = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section id="services" className="py-24 px-6 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />
            <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 mb-4">
                        <div className="w-12 h-0.5 bg-primary" />
                        <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              My Services
            </span>
                        <div className="w-12 h-0.5 bg-primary" />
                    </div>

                    <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        How I Can Help
                    </h2>

                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                        Comprehensive full-stack solutions from concept to deployment,
                        delivering exceptional digital experiences that drive results.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {services.map((service, index) => (
                        <Card
                            key={service.title}
                            className={`group relative overflow-hidden border-border/30 hover:border-border/50 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] ${
                                hoveredIndex === index ? 'ring-2 ring-primary/20' : ''
                            }`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            {/* Animated border effect */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/10 rounded-xl transition-all duration-500" />

                            <CardContent className="p-8 relative z-10">
                                <div className="flex flex-col h-full">
                                    {/* Icon & Badge */}
                                    <div className="flex justify-between items-start mb-6">
                                        <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color.replace('/10', '/20').replace('/5', '/10')}`}>
                                            <div className={service.iconColor}>
                                                {service.icon}
                                            </div>
                                        </div>
                                        <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {service.badge}
                    </span>
                                    </div>

                                    {/* Title & Description */}
                                    <div className="flex-grow">
                                        <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-muted-foreground mb-6">
                                            {service.description}
                                        </p>
                                    </div>

                                    {/* Service Details */}
                                    <div className="space-y-3 mt-6 pt-6 border-t border-border/20">
                                        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                                            What's Included
                                        </h4>
                                        <ul className="space-y-2">
                                            {service.details.slice(0, 3).map((detail, i) => (
                                                <li key={i} className="flex items-center gap-2 text-sm">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                                                    <span>{detail}</span>
                                                </li>
                                            ))}
                                            {service.details.length > 3 && (
                                                <li className="text-sm text-muted-foreground">
                                                    + {service.details.length - 3} more services
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <Card className="max-w-2xl mx-auto border-border/30 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 backdrop-blur-sm">
                        <CardContent className="p-8 md:p-12">
                            <Zap className="h-12 w-12 text-primary mx-auto mb-6" />
                            <h3 className="text-3xl font-bold mb-4">
                                Ready to Build Something Amazing?
                            </h3>
                            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
                                Let's collaborate to bring your vision to life with cutting-edge technology and exceptional design.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="px-8 py-6 text-lg font-medium">
                                    Start a Project
                                </Button>
                                <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
                                    Schedule a Consultation
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Services;
