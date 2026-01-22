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
            logo: "/ETHICA-RESOLVE-MAIN.png",
            company: "Ethica Resolve CC",
            role: "Website Developer/ Executive Assistant",
            period: "jan 2026 - Present",
            location: "Lagos, Nigeria (Remote)",
            description: "Web Developer & Digital Specialist skilled in designing, developing, and maintaining responsive, high-performance websites aligned with brand and business goals.",
            technologies: ["Wix", "Html", "css", "Scss", "Automations", "React", "JavaScript"],
            achievements: [
                "Full-cycle web development with focus on functionality, mobile responsiveness, performance optimization, and security best practices",
                "Executing timely updates for coaching programs, digital products, drop shipping stores, and content launches",
                "Supported by strong collaboration with leadership and stakeholders to drive digital growth in coaching and e-commerce. Passionate about delivering impactful online experiences."
            ],
            url: "https://ethicaresolvecc.com/"
        },
        {
            type: "work",
            logo: "/gen128_solutions_logo (1).jpg",
            company: "GN128 Solutions Limited",
            role: "Full-Stack Developer (Mobile/Web)",
            period: "2024 - Present",
            location: "Lagos, Nigeria (On-site)",
            description: "Developing cross-platform mobile applications using Flutter , implementing modern UI/UX principles and integrating with RESTful APIs.",
            technologies: ["Flutter", "Springboot", "Java", "Firebase", "REST APIs", "Dart", "JavaScript"],
            achievements: [
                "Built 2+ mobile applications from scratch to deployment",
                "Improved app performance by 40% through code optimization",
                "Integrated APIs from lavarvel backend",
                "Collaborated with design team to implement pixel-perfect UIs"
            ],
            url: "https://Gn128.com"
        },
        {
            type: "education",
            logo: "https://schooltry-tertiary-2.s3.eu-west-1.amazonaws.com/institutionLogos/WMOU_0806%20370%2038031716913430.png?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJGMEQCIB7j%2FIFMTMYdcQDIM0STyWo%2FKa9tOejOW2wHxWbu2XrTAiBeZEPnRymr7qU8AtKgrEkBfzfZj12LTwoTezuUmU5kYyrEBQir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAEaDDM1OTI0MTA4MDkzNSIMpxhKOL0msTgBP2j7KpgFh97rF%2Fjcf1iUOMG4f2ki0ZTsFMPENIuRXVHDfikC7A02ucT%2FyR0yR0QMrP8hlWWEtnUIuNF8V0q%2BYsA8BnPn9iyF%2BuSMkVeqpvaNz9NWXQLxdFoau5icymK5XJuIi72ST3a11Oh05GLXsh5xWYstHzcjKf%2BJGL9opHLe4kxiBBJN399Nzwt4wPX4NZdmFUmCvo0pJ%2FI3wKYe1wXZyfm%2BwPxzdoh8LuA2oueTg5JQ41cYNntR1v%2Bg9szHzAp6joIPxnfgn0ZlzWCFB0TcpMzX7E0WrH8bu5Mb28mRuYLAcB%2FiwTMxjs%2BXIG5u%2Fh7Pd0vbjT%2FipUZpoMGv1wlcxw0UTTGYIAqmB0KA5aVKrZSBIcSM7kSfp3KboamF8OGsGjVM%2BhwRyYQEDvAb0H9vJFUNiV2F1cipHdeTcrdSsO4G189a9Wtxu6V%2B6r%2BXeL%2FWnS2sbxbdMTggm%2F%2FmQn86sLOOFCk80ZHFxGlMGhFbpvogvR1PzCahOwoSvosn5H9AMpU1RZ38SAFjNgKJituLSSwbQQTvepCtuN252XhhUFz2USrs4B8YzT7JysdNIBdh4q%2Bc7fDmvh1HWZplyVEyMnH911Zq8KsBN6HBK1Gxe3DqBTLfGM5d5u9BhFQhEAnxP0oEjt%2BoPsnWaFXyWxt4gnZDz%2BGuwlWoOIlkhLX2H0m5tiGXYPlYw7tHMdREIsI0883eq2TiG3YX0OgyJGWr9OlBLXXFXuhhLNdHVWcvFEJ9krbvLDLbEDcABgw9GA1JdTe1k0S7D7XOIapSXVb4ygdR72uMyBwpJV8Q9yw7omYOnA8E93UYgfik5qyweQoVUFfQyy4jHbijdg1YbAyfUfgEncwBAlcNEe37uUDRinMaW2lMpuGc0NFBZTD6tpTKBjqyAVKMgDP0TSYGQMpk416gVskFBzTbIkM8qYEWPL8wHeiGekJlqR6Rr88D%2F5i1%2Bz3VqENwAPCt8GzYSlhM33O%2FxYhY%2BRzHyluNSw34gRaaDz%2BeX14hZelP1YWGSNcRokxvNZSKLu6F7PXnduQwC6tio9gI7EaU6oJYv7EyABG0JMJ%2FfYr4sOdlK65E5YVL9Y6JNm2kFxJoikoi11wUsJnx%2BqqpeEpc6IYNlWnC2KqZxAgiO60%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAVHJDP4BTVYQOSOHK%2F20251219%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20251219T100451Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Signature=f0d6da898ecf93705648dbe20b5ec6412a92bcca6437113aca26a32cf0831c6e",
            company: "West Midlands Open University",
            role: "BSc Computer Science",
            period: "2026 - 2029",
            location: "Lagos, Nigeria (online)",
            description: "Undergraduate study in Computer Science with focus on software development, computing fundamentals, and problem-solving skills applicable to real-world systems.Just to strengthen my educational background",
            technologies: [],
            achievements: [
                "Introduction to Computer Science",
                "Programming Fundamentals",
                "Discrete Mathematics",
                "Computer Hardware & Software",
                "Use of English"
            ],
            url: "https://https://westmidlands.university"
        },
        {

            type: "work",
            logo: "/crypto_bootcamp_community_logo.jpg",
            company: "CBC Crypto Bootcamp",
            role: "Frontend Developer",
            period: "2023 - 2024",
            location: "Remote",
            description: "Developed responsive web applications for cryptocurrency education platform, focusing on user experience and modern design patterns.",
            technologies: ["React", "Html", "Javascript", " CSS", "Web3.js"],
            achievements: [
                "Reduced page load time by 30% through code splitting",
                "Implemented responsive design for mobile-first approach",
                "Integrated cryptocurrency APIs for real-time data",
                "Mentored 5+ junior developers in React best practices"
            ],
            url: "https://cbc-op22.vercel.app/"
        },
        {
            type: "work",
            logo: "/logo_swf.gif",
            company: "Nigerian Software Foundation (NSF)",
            role: "Website Developer",
            period: "January 2021",
            location: "Lagos, Nigeria",
            description: "Completed an intensive 16-week software development bootcamp focused on responsive web development and full-stack fundamentals.",
            technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Java", "Git"],
            achievements: [
                "Completed a 16-week intensive bootcamp focused on responsive web development",
                "Built and deployed a web application with authentication, dynamic UI, and API integration",
                "Collaborated in a team of four to develop an e-commerce web platform",
                "Integrated payment gateways and optimized performance and accessibility",
                "Used Git for version control to streamline team collaboration",
                "Configured CI/CD workflows using GitHub Actions, reducing deployment time by 15%"
            ],
            url: "https://software-ng.com/"
        },

        {
            type: "education",
            logo: "/download.png",
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
            </div>
        </section>
    );
};

export default Experience;

