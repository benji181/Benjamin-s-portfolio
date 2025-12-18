import { useState } from "react";
import { motion } from "framer-motion";
import {
    ExternalLink,
    Github,
    Eye,
    Code,
    Globe,
    Smartphone,
    GamepadIcon,
    Sparkles
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const featuredProjects = [
        {
            title: "Pro-Connect",
            description: "A comprehensive job hunting platform connecting job seekers with employers through intelligent matching algorithms and real-time notifications.",
            image: "Assests\\ProjectImages\\proconnectimage.png",
            liveUrl: "https://proconnect-eta.vercel.app/",
            githubUrl: "https://github.com/benji181/proconnect",
            technologies: ["React", "Firebase", "Tailwind CSS", "Context API", "Vercel"],
            category: "web",
            features: [
                "User authentication & authorization",
                "Real-time job applications",
                "Resume parsing and analysis",
                "Employer dashboard",
                "Responsive design"
            ],
            status: "Live"
        },
        {
            title: "Number Guessing Game",
            description: "An interactive web game built with Django backend and modern frontend technologies that challenges users' logical thinking skills.",
            image: "Assests\\ProjectImages\\Number-Guessing-Game.png",
            liveUrl: "#",
            githubUrl: "https://github.com/benji181/NGGame",
            technologies: ["Django", "JavaScript", "HTML5", "CSS3", "Python", "SQLite"],
            category: "game",
            features: [
                "Multiple difficulty levels",
                "Score tracking & leaderboard",
                "Interactive UI with animations",
                "User session management"
            ],
            status: "Open Source"
        },
        {
            title: "Sky-Clock",
            description: "A Flutter-based mobile application providing real-time weather updates and global time zone conversions with beautiful visualizations.",
            image: "Assests\\ProjectImages\\Sky-clock.png",
            liveUrl: "#",
            githubUrl: "https://github.com/benji181/SkyClock.git",
            technologies: ["Flutter", "Dart", "REST APIs", "Provider", "Firebase"],
            category: "mobile",
            features: [
                "Real-time weather updates",
                "Global time zone converter",
                "7-day weather forecast",
                "Location-based services",
                "Customizable widgets"
            ],
            status: "In Development"
        }
    ];

    const filteredProjects = activeFilter === 'all'
        ? featuredProjects
        : featuredProjects.filter(project => project.category === activeFilter);

    return (
        <section id="projects" className="py-20 px-4 sm:px-6 relative overflow-hidden">
            {/* Background decorative elements */}
            <div
                className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none"/>
            <div className="absolute top-1/4 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl"/>
            <div
                className="absolute bottom-1/4 left-10 w-72 h-72 sm:w-96 sm:h-96 bg-secondary/5 rounded-full blur-3xl"/>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-3 mb-4">
                        <div className="w-8 sm:w-12 h-0.5 bg-primary"/>
                        <span className="text-primary font-semibold uppercase tracking-wider text-xs sm:text-sm">
              Portfolio Showcase
            </span>
                        <div className="w-8 sm:w-12 h-0.5 bg-primary"/>
                    </div>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Featured Projects
                    </h2>

                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                        A curated selection of my recent work showcasing innovation, design, and technical expertise
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-8 sm:mb-12">
                    <Button
                        variant={activeFilter === 'all' ? "default" : "outline"}
                        size="sm"
                        onClick={() => setActiveFilter('all')}
                        className="rounded-full"
                    >
                        All Projects
                    </Button>
                    <Button
                        variant={activeFilter === 'web' ? "default" : "outline"}
                        size="sm"
                        onClick={() => setActiveFilter('web')}
                        className="rounded-full"
                    >
                        <Globe className="h-4 w-4 mr-2"/>
                        Web Apps
                    </Button>
                    <Button
                        variant={activeFilter === 'mobile' ? "default" : "outline"}
                        size="sm"
                        onClick={() => setActiveFilter('mobile')}
                        className="rounded-full"
                    >
                        <Smartphone className="h-4 w-4 mr-2"/>
                        Mobile Apps
                    </Button>
                    <Button
                        variant={activeFilter === 'game' ? "default" : "outline"}
                        size="sm"
                        onClick={() => setActiveFilter('game')}
                        className="rounded-full"
                    >
                        <GamepadIcon className="h-4 w-4 mr-2"/>
                        Games
                    </Button>
                </div>

                {/* Projects Grid */}
                <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: index * 0.1}}
                            viewport={{once: true}}
                        >
                            <Card
                                className="group relative overflow-hidden border-border/30 bg-gradient-to-b from-card to-card/95 backdrop-blur-sm h-full hover:shadow-xl transition-all duration-300">
                                {/* Project Status Badge */}
                                <div className="absolute top-4 right-4 z-10">
                                    <Badge
                                        variant={project.status === 'Live' ? "default" : "secondary"}
                                        className="text-xs"
                                    >
                                        {project.status}
                                    </Badge>
                                </div>

                                {/* Project Image */}
                                <div
                                    className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent z-10"/>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        onError={(e) => {
                                            e.target.src = `https://via.placeholder.com/600x400/3b82f6/ffffff?text=${project.title.charAt(0)}`
                                        }}
                                    />
                                </div>

                                <CardContent className="p-5 sm:p-6">
                                    {/* Project Header */}
                                    <div className="mb-4">
                                        <div className="flex items-start justify-between mb-2">
                                            <h3 className="text-xl sm:text-2xl font-bold group-hover:text-primary transition-colors">
                                                {project.title}
                                            </h3>
                                            <div className="flex gap-2">
                                                {project.liveUrl && project.liveUrl !== '#' && (
                                                    <a
                                                        href={project.liveUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                                                    >
                                                        <Eye className="h-4 w-4"/>
                                                    </a>
                                                )}
                                                {project.githubUrl && (
                                                    <a
                                                        href={project.githubUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-2 rounded-lg bg-secondary/10 text-secondary hover:bg-secondary hover:text-secondary-foreground transition-colors"
                                                    >
                                                        <Github className="h-4 w-4"/>
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                        <p className="text-sm sm:text-base text-muted-foreground">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Technologies */}
                                    <div className="mb-4">
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech) => (
                                                <Badge
                                                    key={tech}
                                                    variant="outline"
                                                    className="text-xs"
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Features List */}
                                    <div className="mb-6">
                                        <div className="flex items-center gap-2 text-sm font-semibold mb-3">
                                            <Sparkles className="h-4 w-4 text-primary"/>
                                            Key Features
                                        </div>
                                        <ul className="space-y-2">
                                            {project.features.slice(0, 3).map((feature, i) => (
                                                <li key={i}
                                                    className="flex items-start gap-2 text-sm text-muted-foreground">
                                                    <div
                                                        className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 flex-shrink-0"/>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-3">
                                        {project.liveUrl && project.liveUrl !== '#' && (
                                            <Button
                                                size="sm"
                                                className="flex-1"
                                                asChild
                                            >
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center gap-2"
                                                >
                                                    <Eye className="h-4 w-4"/>
                                                    Live Demo
                                                </a>
                                            </Button>
                                        )}
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            className="flex-1"
                                            asChild
                                        >
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2"
                                            >
                                                <Code className="h-4 w-4"/>
                                                View Code
                                            </a>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>


            </div>
        </section>
    );
}

export default Projects;