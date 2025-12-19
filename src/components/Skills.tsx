import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
    GitBranch,
    Palette,
    Smartphone,
    Cloud,
    Globe,
    Database,
    Code,
    Cpu,
    Zap,
    Layers,
    Terminal
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Enhanced skills data with categories, icons, and colors
const skillsByCategory = [
    {
        category: "Frontend & UI",
        icon: <Palette className="h-5 w-5" />,
        color: "from-purple-500/20 to-purple-600/10",
        skills: [
            { name: "HTML/CSS/JavaScript", percent: 95, icon: <Globe className="h-4 w-4" /> },
            { name: "React", percent: 96, icon: <Layers className="h-4 w-4" /> },
            { name: "UI/UX Design (Figma)", percent: 70, icon: <Palette className="h-4 w-4" /> },
            { name: "TypeScript", percent: 75, icon: <Code className="h-4 w-4" /> }
        ]
    },
    {
        category: "Backend & Databases",
        icon: <Database className="h-5 w-5" />,
        color: "from-blue-500/20 to-blue-600/10",
        skills: [
            { name: "MySQL", percent: 99, icon: <Database className="h-4 w-4" /> },
            { name: "MongoDB", percent: 60, icon: <Database className="h-4 w-4" /> },
            { name: "Firebase", percent: 98, icon: <Cpu className="h-4 w-4" /> },
            { name: "RESTful APIs", percent: 99, icon: <Terminal className="h-4 w-4" /> }
        ]
    },
    {
        category: "Mobile & Cross-Platform",
        icon: <Smartphone className="h-5 w-5" />,
        color: "from-green-500/20 to-green-600/10",
        skills: [
            { name: "Flutter", percent: 99.99, icon: <Smartphone className="h-4 w-4" /> },
            { name: "React Native", percent: 20, icon: <Smartphone className="h-4 w-4" /> },
        ]
    },
    {
        category: "Tools & DevOps",
        icon: <Zap className="h-5 w-5" />,
        color: "from-amber-500/20 to-amber-600/10",
        skills: [
            { name: "Git & GitHub", percent: 90, icon: <GitBranch className="h-4 w-4" /> },
            { name: "Vercel", percent: 99, icon: <Cloud className="h-4 w-4" /> },
            { name: "Postman", percent: 99, icon: <Terminal className="h-4 w-4" /> },
            { name: "Docker", percent: 99, icon: <Cpu className="h-4 w-4" /> }
        ]
    }
];

const Skills = () => {
    const [animatedPercents, setAnimatedPercents] = useState({});
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Animate all skills when section is in view
                        const newPercents = {};
                        skillsByCategory.forEach((category) => {
                            category.skills.forEach((skill) => {
                                newPercents[skill.name] = skill.percent;
                            });
                        });
                        setAnimatedPercents(newPercents);
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="skills" className="py-24 px-4 sm:px-6 relative overflow-hidden" ref={sectionRef}>
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />
            <div className="absolute top-1/3 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-secondary/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-3 mb-4">
                        <div className="w-8 sm:w-12 h-0.5 bg-primary" />
                        <span className="text-primary font-semibold uppercase tracking-wider text-xs sm:text-sm">
                            Technical Proficiency
                        </span>
                        <div className="w-8 sm:w-12 h-0.5 bg-primary" />
                    </div>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Skills & Expertise
                    </h2>

                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                        A comprehensive overview of my technical capabilities across multiple domains
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
                    {/* Left Column - Progress Bars (2/3 width) */}
                    <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6 sm:gap-8">
                        {skillsByCategory.map((category, categoryIndex) => (
                            <Card
                                key={category.category}
                                className="border-border/30 bg-gradient-to-b from-card to-card/95 backdrop-blur-sm shadow-lg h-full"
                            >
                                <CardContent className="p-5 sm:p-6 h-full flex flex-col">
                                    {/* Category Header */}
                                    <div className="flex items-center gap-3 mb-5 sm:mb-6">
                                        <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} flex-shrink-0`}>
                                            <div className="text-foreground">{category.icon}</div>
                                        </div>
                                        <div className="min-w-0">
                                            <h3 className="text-lg sm:text-xl font-bold truncate">{category.category}</h3>
                                            <p className="text-xs sm:text-sm text-muted-foreground">
                                                {category.skills.length} skills
                                            </p>
                                        </div>
                                    </div>

                                    {/* Skills List */}
                                    <div className="space-y-4 flex-grow">
                                        {category.skills.map((skill, skillIndex) => {
                                            const animatedPercent = animatedPercents[skill.name] || 0;
                                            return (
                                                <div key={skill.name} className="group">
                                                    <div className="flex justify-between items-center mb-2">
                                                        <div className="flex items-center gap-2 min-w-0">
                                                            <div className="text-muted-foreground flex-shrink-0">
                                                                {skill.icon}
                                                            </div>
                                                            <span className="font-medium text-sm sm:text-base truncate">
                                                                {skill.name}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-2 flex-shrink-0">
                                                            <span className="text-xs sm:text-sm font-semibold text-foreground whitespace-nowrap">
                                                                {animatedPercent}%
                                                            </span>
                                                            <div className="w-6 sm:w-8 h-1 bg-border rounded-full overflow-hidden">
                                                                <motion.div
                                                                    className="h-full bg-primary rounded-full"
                                                                    initial={{ width: 0 }}
                                                                    animate={{ width: `${animatedPercent}%` }}
                                                                    transition={{
                                                                        duration: 1.5,
                                                                        delay: (categoryIndex * 0.2) + (skillIndex * 0.1),
                                                                        ease: "easeOut"
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Animated Progress Bar */}
                                                    <div className="w-full h-2 bg-gradient-to-r from-border/30 to-border/20 rounded-full overflow-hidden">
                                                        <motion.div
                                                            className="h-full rounded-full bg-gradient-to-r from-primary/80 to-primary"
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${animatedPercent}%` }}
                                                            transition={{
                                                                duration: 1.5,
                                                                delay: (categoryIndex * 0.2) + (skillIndex * 0.1),
                                                                ease: "easeOut"
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Right Column - Overview & Additional Info (1/3 width) */}
                    <div className="flex flex-col gap-6 sm:gap-8">
                        {/* Proficiency Overview Card */}
                        <Card className="border-border/30 bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-sm flex-grow">
                            <CardContent className="p-5 sm:p-6 h-full flex flex-col">
                                <div className="mb-6">
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 mb-4">
                                        <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                                        <span className="text-xs sm:text-sm font-medium text-primary">Expertise Distribution</span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold mb-3">Skill Overview</h3>
                                    <p className="text-sm sm:text-base text-muted-foreground">
                                        My skills span across the full development stack, with strong expertise in
                                        frontend technologies, backend systems, and modern development tools.
                                    </p>
                                </div>

                                {/* Skill Distribution */}
                                <div className="space-y-4 sm:space-y-6 mt-auto">
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-medium text-sm sm:text-base">Frontend & Design</span>
                                            <span className="text-primary font-semibold text-sm sm:text-base">97%</span>
                                        </div>
                                        <div className="w-full h-2 bg-border/30 rounded-full overflow-hidden">
                                            <div className="h-full rounded-full bg-gradient-to-r from-purple-500 to-purple-600" style={{ width: "97%" }} />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-medium text-sm sm:text-base">Backend & Databases</span>
                                            <span className="text-primary font-semibold text-sm sm:text-base">98%</span>
                                        </div>
                                        <div className="w-full h-2 bg-border/30 rounded-full overflow-hidden">
                                            <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600" style={{ width: "98%" }} />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-medium text-sm sm:text-base">Mobile Development</span>
                                            <span className="text-primary font-semibold text-sm sm:text-base">99%</span>
                                        </div>
                                        <div className="w-full h-2 bg-border/30 rounded-full overflow-hidden">
                                            <div className="h-full rounded-full bg-gradient-to-r from-green-500 to-green-600" style={{ width: "99%" }} />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-medium text-sm sm:text-base">Tools & DevOps</span>
                                            <span className="text-primary font-semibold text-sm sm:text-base">89%</span>
                                        </div>
                                        <div className="w-full h-2 bg-border/30 rounded-full overflow-hidden">
                                            <div className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-600" style={{ width: "89%" }} />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Learning & Growth Card */}
                        <Card className="border-border/30 bg-gradient-to-br from-card to-card/95 backdrop-blur-sm">
                            <CardContent className="p-5 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-bold mb-4">Currently Learning</h3>
                                <div className="space-y-3 sm:space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse flex-shrink-0" />
                                        <span className="font-medium text-sm sm:text-base">Advanced TypeScript Patterns</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse flex-shrink-0" />
                                        <span className="font-medium text-sm sm:text-base">Microservices Architecture</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse flex-shrink-0" />
                                        <span className="font-medium text-sm sm:text-base">Cloud Native Development</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse flex-shrink-0" />
                                        <span className="font-medium text-sm sm:text-base">Advanced Database Optimization</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;
