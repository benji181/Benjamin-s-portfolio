import { useState } from "react";
import { motion } from "framer-motion";
import {
    Calendar,
    MapPin,
    ExternalLink,
    GraduationCap,
    Briefcase,
    Award,
    ChevronRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Experience = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const experiences = [
        {
            type: "work",
            logo: "https://via.placeholder.com/48/3b82f6/ffffff?text=GN",
            company: "GN128 Solutions Limited",
            role: "Mobile Software Engineer",
            period: "2024 - Present",
            location: "Lagos, Nigeria",
            description: "Developing cross-platform mobile applications using Flutter and React Native, implementing modern UI/UX principles and integrating with RESTful APIs.",
            technologies: ["Flutter", "React Native", "Firebase", "REST APIs", "Dart", "JavaScript"],
            achievements: [
                "Built 3+ mobile applications from scratch to deployment",
                "Improved app performance by 40% through code optimization",
                "Integrated Firebase for real-time data synchronization",
                "Collaborated with design team to implement pixel-perfect UIs"
            ],
            url: "#"
        },
        {
            type: "work",
            logo: "https://via.placeholder.com/48/8b5cf6/ffffff?text=CBC",
            company: "CBC Crypto Bootcamp",
            role: "Frontend Developer",
            period: "2023 - 2024",
            location: "Remote",
            description: "Developed responsive web applications for cryptocurrency education platform, focusing on user experience and modern design patterns.",
            technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Web3.js"],
            achievements: [
                "Reduced page load time by 30% through code splitting",
                "Implemented responsive design for mobile-first approach",
                "Integrated cryptocurrency APIs for real-time data",
                "Mentored 5+ junior developers in React best practices"
            ],
            url: "#"
        },
        {
            type: "work",
            logo: "https://via.placeholder.com/48/10b981/ffffff?text=NSF",
            company: "Nigerian Software Foundation (NSF)",
            role: "Mobile Frontend Developer",
            period: "April - June 2021",
            location: "Lagos, Nigeria",
            description: "Contributed to open-source mobile applications focused on community development and software education in Nigeria.",
            technologies: ["React Native", "Redux", "Git", "Figma", "Node.js"],
            achievements: [
                "Developed 2 mobile applications for community initiatives",
                "Participated in code reviews and collaborative development",
                "Documented codebase for future contributors",
                "Presented technical solutions to stakeholders"
            ],
            url: "https://software-ng.com/"
        },
        {
            type: "education",
            logo: "https://via.placeholder.com/48/ef4444/ffffff?text=ACE",
            company: "Aptech Computer Education",
            role: "Advanced Diploma in Software Engineering",
            period: "2023 - 2025",
            location: "Lagos, Nigeria",
            description: "Comprehensive software engineering program covering full-stack development, software architecture, and modern development practices.",
            technologies: ["Java", "Spring Boot", "SQL", "React", "DevOps", "Software Testing"],
            achievements: [
                "Graduated with distinction",
                "Completed 5 major software projects",
                "Participated in hackathons and coding competitions",
                "Gained industry-recognized certification"
            ],
            courses: ["Software Engineering Fundamentals", "Database Management", "Web Development", "Mobile App Development", "Cloud Computing"],
            url: "https://aptech.ng/"
        }
    ];

    const filteredExperiences = activeCategory === 'all'
        ? experiences
        : experiences.filter(exp => exp.type === activeCategory);

    return (
        <section id="experience" className="py-24 px-4 sm:px-6 relative overflow-hidden">
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
              Professional Journey
            </span>
                        <div className="w-8 sm:w-12 h-0.5 bg-primary" />
                    </div>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Experience & Education
                    </h2>

                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                        A timeline of my professional growth, education, and key achievements
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-8 sm:mb-12">
                    <Button
                        variant={activeCategory === 'all' ? "default" : "outline"}
                        size="sm"
                        onClick={() => setActiveCategory('all')}
                        className="rounded-full"
                    >
                        <Briefcase className="h-4 w-4 mr-2" />
                        All Experience
                    </Button>
                    <Button
                        variant={activeCategory === 'work' ? "default" : "outline"}
                        size="sm"
                        onClick={() => setActiveCategory('work')}
                        className="rounded-full"
                    >
                        <Briefcase className="h-4 w-4 mr-2" />
                        Work Experience
                    </Button>
                    <Button
                        variant={activeCategory === 'education' ? "default" : "outline"}
                        size="sm"
                        onClick={() => setActiveCategory('education')}
                        className="rounded-full"
                    >
                        <GraduationCap className="h-4 w-4 mr-2" />
                        Education
                    </Button>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-primary/30 via-primary/50 to-primary/30" />

                    {/* Experience Cards */}
                    <div className="space-y-8 sm:space-y-12">
                        {filteredExperiences.map((experience, index) => (
                            <motion.div
                                key={`${experience.company}-${index}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-2 sm:left-1/2 transform sm:-translate-x-1/2 top-6 z-10">
                                    <div className={`w-4 h-4 rounded-full border-4 border-background ${
                                        experience.type === 'work' ? 'bg-blue-500' : 'bg-red-500'
                                    }`} />
                                </div>

                                {/* Card */}
                                <Card className={`ml-10 sm:ml-0 sm:w-[calc(50%-2rem)] ${
                                    index % 2 === 0
                                        ? 'sm:mr-auto sm:ml-4'
                                        : 'sm:ml-auto sm:mr-4'
                                } border-border/30 bg-gradient-to-b from-card to-card/95 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow`}>
                                    <CardContent className="p-5 sm:p-6">
                                        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                                            {/* Logo */}
                                            <div className="flex-shrink-0">
                                                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-gradient-to-br from-border/30 to-border/10 flex items-center justify-center">
                                                    {experience.logo ? (
                                                        <img
                                                            src={experience.logo}
                                                            alt={experience.company}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    ) : (
                                                        <div className={`text-2xl font-bold ${
                                                            experience.type === 'work' ? 'text-blue-500' : 'text-red-500'
                                                        }`}>
                                                            {experience.company.charAt(0)}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="flex-grow min-w-0">
                                                {/* Header */}
                                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                                                    <div>
                                                        <div className="flex items-center gap-2 mb-1">
                                                            <h3 className="text-lg sm:text-xl font-bold">{experience.role}</h3>
                                                            {experience.url && experience.url !== '#' && (
                                                                <a
                                                                    href={experience.url}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="text-muted-foreground hover:text-primary transition-colors"
                                                                >
                                                                    <ExternalLink className="h-4 w-4" />
                                                                </a>
                                                            )}
                                                        </div>
                                                        <div className="flex items-center gap-2 text-sm sm:text-base text-primary font-semibold">
                                                            {experience.type === 'work' ? (
                                                                <Briefcase className="h-3 w-3 sm:h-4 sm:w-4" />
                                                            ) : (
                                                                <GraduationCap className="h-3 w-3 sm:h-4 sm:w-4" />
                                                            )}
                                                            {experience.company}
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                                                        {experience.period}
                                                    </div>
                                                </div>

                                                {/* Location */}
                                                {experience.location && (
                                                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                                                        <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                                                        {experience.location}
                                                    </div>
                                                )}

                                                {/* Description */}
                                                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                                                    {experience.description}
                                                </p>

                                                {/* Technologies */}
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {experience.technologies.map((tech) => (
                                                        <Badge
                                                            key={tech}
                                                            variant="secondary"
                                                            className="text-xs"
                                                        >
                                                            {tech}
                                                        </Badge>
                                                    ))}
                                                </div>

                                                {/* Achievements */}
                                                {experience.achievements && (
                                                    <div className="space-y-2">
                                                        <div className="flex items-center gap-2 text-sm font-semibold">
                                                            <Award className="h-4 w-4 text-primary" />
                                                            Key Achievements
                                                        </div>
                                                        <ul className="space-y-1">
                                                            {experience.achievements.map((achievement, i) => (
                                                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                                    <ChevronRight className="h-3 w-3 text-primary flex-shrink-0 mt-0.5" />
                                                                    {achievement}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {/* Courses (for education) */}
                                                {experience.courses && (
                                                    <div className="mt-4">
                                                        <div className="flex items-center gap-2 text-sm font-semibold mb-2">
                                                            <GraduationCap className="h-4 w-4 text-primary" />
                                                            Key Courses
                                                        </div>
                                                        <div className="flex flex-wrap gap-2">
                                                            {experience.courses.map((course, i) => (
                                                                <Badge
                                                                    key={i}
                                                                    variant="outline"
                                                                    className="text-xs"
                                                                >
                                                                    {course}
                                                                </Badge>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12 sm:mt-16">
                    <Card className="max-w-3xl mx-auto border-border/30 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 backdrop-blur-sm">
                        <CardContent className="p-6 sm:p-8">
                            <h3 className="text-xl sm:text-2xl font-bold mb-4">Looking for Collaboration?</h3>
                            <p className="text-base sm:text-lg text-muted-foreground mb-6">
                                I'm always open to discussing new opportunities, interesting projects, or potential collaborations.
                                Let's connect and build something amazing together!
                            </p>
                            <Button size="lg" className="px-6 py-3 sm:px-8 sm:py-4">
                                Let's Connect
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Experience;

