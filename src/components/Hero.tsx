import { useEffect, useRef } from "react";
import { Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

import Typed from "typed.js";
import Hyperspeed from "./Hyperspeed";

const Hero = () => {
    const typedRef = useRef<HTMLSpanElement>(null);

    const techStack = [
        // Programming Languages
        "Java", "JavaScript", "TypeScript", "Python", "Dart", "C",
        "SQL", "HTML", "CSS", "C#", "Node.js", "Flutter", "Swift",

        // Frameworks & Libraries
        "React", "Spring Boot", ".NET", "Django", "Spring MVC", "Hibernate",

        // Databases
        "MySQL", "PostgreSQL", "MongoDB", "Firebase", "NoSQL", "Workbench",

        // Tools & Platforms
        "Git", "Figma", "Postman", "Jira", "Docker", "Xcode",
        "Kubernetes", "AWS", "Vercel", "NPM", "GitHub", "XAMPP",

        // IDEs
        "IntelliJ IDEA", "VS Code", "Android Studio", "RStudio", "PyCharm",

        // Design
        "UI-UX Design"
    ];

    const techLogoMap: Record<string, string> = {
        // Programming Languages
        "Java": "openjdk",
        "JavaScript": "javascript",
        "TypeScript": "typescript",
        "Python": "python",
        "Dart": "dart",
        "C": "c",
        "SQL": "sql",
        "HTML": "html5",
        "CSS": "css3",
        "C#": "csharp",
        "Node.js": "nodedotjs",
        "Flutter": "flutter",
        "Swift": "swift",

        // Frameworks & Libraries
        "React": "react",
        "Spring Boot": "springboot",
        ".NET": "dotnet",
        "Django": "django",
        "Spring MVC": "spring",
        "Hibernate": "hibernate",

        // Databases
        "MySQL": "mysql",
        "PostgreSQL": "postgresql",
        "MongoDB": "mongodb",
        "Firebase": "firebase",
        "NoSQL": "mongodb",
        "Workbench": "mysql",

        // Tools & Platforms
        "Git": "git",
        "Figma": "figma",
        "Postman": "postman",
        "Jira": "jira",
        "Docker": "docker",
        "Xcode": "xcode",
        "Kubernetes": "kubernetes",
        "AWS": "amazonaws",
        "Vercel": "vercel",
        "NPM": "npm",
        "GitHub": "github",
        "XAMPP": "xampp",

        // IDEs
        "IntelliJ IDEA": "intellijidea",
        "VS Code": "visualstudiocode",
        "Android Studio": "androidstudio",
        "PyCharm": "pycharm",

        // Design
        "UI-UX Design": "figma"
    };

    useEffect(() => {
        const typed = new Typed(typedRef.current!, {
            strings: [
                "A Software Developer",
                "A Full‑stack Web Developer",
                "A Mobile App Developer",
            ],
            typeSpeed: 50,
            backSpeed: 60,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    // Responsive hyperspeed preset
    const hyperspeedPreset = {
        onSpeedUp: () => console.log("Speeding up!"),
        onSlowDown: () => console.log("Slowing down..."),
        distortion: 'turbulentDistortion',
        length: 400,
        roadWidth: 15,
        islandWidth: 2,
        lanesPerRoad: 4,
        fov: 90,
        fovSpeedUp: 150,
        speedUp: 1,
        carLightsFade: 1,
        totalSideLightSticks: 30,
        lightPairsPerRoadWay: 50,
        shoulderLinesWidthPercentage: 0.05,
        brokenLinesWidthPercentage: 0.1,
        brokenLinesLengthPercentage: 0.5,
        lightStickWidth: [0.12, 0.5],
        lightStickHeight: [1.3, 1.7],
        movingAwaySpeed: [80, 120],
        movingCloserSpeed: [-150, -200],
        carLightsLength: [400 * 0.03, 400 * 0.2],
        carLightsRadius: [0.05, 0.14],
        carWidthPercentage: [0.3, 0.5],
        carShiftX: [-0.8, 0.8],
        carFloorSeparation: [0, 5],
        colors: {
            roadColor: 0x0a0a0a,
            islandColor: 0x0d0d0d,
            background: 0x000000,
            shoulderLines: 0x1a1a1a,
            brokenLines: 0x1a1a1a,
            leftCars: [0x2c5282, 0x2d3748, 0x4a5568],
            rightCars: [0x553c9a, 0x44337a, 0x322659],
            sticks: 0x0a0a0a
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center px-10 sm:px-6 pt-16 md:pt-20 relative overflow-hidden">
            {/* Hyperspeed Background */}
            <div className="absolute inset-0 z-0">
                <Hyperspeed effectOptions={hyperspeedPreset} />
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70 z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-20 w-full px-4 sm:px-6">
                <div className="text-center space-y-6 sm:space-y-8 animate-fade-in">
                    {/* Hero Text */}
                    <div className="space-y-3 sm:space-y-4">
                        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-10xl xl:text-8xl font-medium leading-tight sm:leading-none">
                            <span className="text-foreground block sm:inline">Hello, I'm </span>
                            <span className="text-foreground block sm:inline">Olabisi Boluwatife,</span>
                            <br className="hidden sm:block" />
                            <span className="text-foreground block sm:inline mt-2 sm:mt-0">
                                <span ref={typedRef} className="typing"></span>
                            </span>
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
                            I build exceptional digital experiences with modern technologies.
                            <br className="hidden sm:block" />
                            Specialized in Web and Mobile Full Stack Development.
                        </p>
                    </div>

                    {/* Resume Button */}
                    <div className="pt-2 sm:pt-4">
                        <a
                            href="/resume_olabisi_boluwatife.pdf" // Changed path
                            download="Olabisi_Boluwatife_Resume.pdf"
                            className="inline-flex items-center px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg font-medium bg-green-600 text-white border-2 border-green-900 rounded-lg shadow-lg hover:bg-transparent hover:text-green-400 hover:border-green-600 hover:shadow-green-500/20 transition-all duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                            Hire me
                        </a>
                    </div>
                    {/* Social Links */}
                    <div className="flex justify-center gap-3 sm:gap-4 pt-6 sm:pt-8">
                        <a
                            href="https://www.linkedin.com/in/bolu-olabisi-benjamin/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <Button
                                variant="ghost"
                                size="icon"
                                className="inline-flex items-center px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg font-mediumbg-green-900  text-white border-2 border-green-900 rounded-lg shadow-lg hover:bg-transparent hover:text-green-400 hover:border-green-600 hover:shadow-green-500/20transition-all duration-300"
                            >
                                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                            </Button>
                        </a>

                        <a
                            href="https://github.com/benji181"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <Button
                                variant="ghost"
                                size="icon"
                                className="inline-flex items-center px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg font-mediumbg-green-900  text-white border-2 border-green-900 rounded-lg shadow-lg hover:bg-transparent hover:text-green-400 hover:border-green-600 hover:shadow-green-500/20transition-all duration-300"
                            >
                                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                            </Button>
                        </a>
                    </div>

                    {/* Tech Stack Carousel */}
                    <div className="pt-10 sm:pt-16 overflow-hidden">
                        <div className="relative">
                            {/* Gradient fade effect on edges */}
                            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 lg:w-20 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
                            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 lg:w-20 bg-gradient-to-l from-black/80 to-transparent z-10"></div>

                            {/* Infinite scrolling wrapper */}
                            <div className="flex animate-infinite-scroll">
                                {/* First set of badges */}
                                {techStack.map((tech) => {
                                    const logoName = techLogoMap[tech] || tech.toLowerCase();
                                    const badgeUrl = `https://img.shields.io/badge/-${encodeURIComponent(tech)}-000000?logo=${logoName}&style=for-the-badge`;

                                    return (
                                        <div key={tech} className="flex-shrink-0 mx-1 sm:mx-2">
                                            <img
                                                src={badgeUrl}
                                                alt={tech}
                                                className="h-8 sm:h-10 md:h-12 rounded-lg transition-transform hover:scale-105 bg-black/30 backdrop-blur-sm"
                                                loading="lazy"
                                                onError={(e) => {
                                                    // Fallback for broken images
                                                    e.currentTarget.src = `https://img.shields.io/badge/-${encodeURIComponent(tech)}-000000?style=for-the-badge`;
                                                }}
                                            />
                                        </div>
                                    );
                                })}
                                {/* Duplicated set for seamless loop */}
                                {techStack.map((tech) => {
                                    const logoName = techLogoMap[tech] || tech.toLowerCase();
                                    const badgeUrl = `https://img.shields.io/badge/-${encodeURIComponent(tech)}-000000?logo=${logoName}&style=for-the-badge`;

                                    return (
                                        <div key={`${tech}-duplicate`} className="flex-shrink-0 mx-1 sm:mx-2">
                                            <img
                                                src={badgeUrl}
                                                alt={tech}
                                                className="h-8 sm:h-10 md:h-12 rounded-lg transition-transform hover:scale-105 bg-black/30 backdrop-blur-sm"
                                                loading="lazy"
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
