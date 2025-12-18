import { Palette, Code, Smartphone, Target, Zap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const About = () => {
    return (
        <section id="about" className="py-24 px-6 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
            <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 mb-4">
                        <div className="w-12 h-0.5 bg-primary" />
                        <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Professional Profile
            </span>
                        <div className="w-12 h-0.5 bg-primary" />
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        About Me
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Crafting digital experiences with precision, passion, and purpose
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-12">
                    {/* Main Content Card */}
                    <Card className="lg:col-span-2 border-border/40 shadow-xl bg-gradient-to-br from-card to-card/95 backdrop-blur-sm">
                        <CardContent className="p-10">
                            <div className="flex items-start gap-4 mb-8">
                                <div className="bg-primary/10 p-3 rounded-2xl">
                                    <Target className="h-8 w-8 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-3">My Mission</h3>
                                    <p className="text-lg leading-relaxed">
                                        To bridge the gap between elegant design and robust engineering,
                                        creating digital solutions that are both beautiful and functional.
                                    </p>
                                </div>
                            </div>

                            <Separator className="my-1 bg-border/10" />

                            <div className="space-y-6">
                                <p className="text-lg leading-relaxed">
                                    I'm a passionate <span className="font-bold text-primary">Full‑Stack Developer</span> based in Nigeria, dedicated to turning ideas into robust digital experiences.
                                    With expertise in <span className="font-semibold">Frontend, backend and modern cloud integrations</span>, I specialize in transforming complex challenges into intuitive, scalable, and maintainable solutions.
                                </p>

                                <p className="text-lg leading-relaxed">
                                    Over the years, I’ve architected everything from enterprise‑grade backends to seamless cross‑platform mobile applications.
                                    My toolkit spans <span className="font-medium">Springboot, JavaScript,  Python, Dart, C, SQL, HTML, CSS, Node.js, Flutter,React, Django, Spring MVC, , MySQL, PostgreSQL, MongoDB, Firebase</span>, and more, enabling me to deliver performant and reliable systems for diverse projects.
                                </p>

                                <p className="text-lg leading-relaxed">
                                    I thrive at the intersection of creativity and logic crafting engaging interfaces while building resilient systems behind the scenes.
                                    My mission is to deliver not just software, but meaningful experiences that empower businesses, delight users, and make a lasting impact.
                                </p>

                                <p className="text-lg leading-relaxed">
                                    Beyond coding, I value collaboration, continuous learning, and innovation. Whether working with cross-functional teams or exploring emerging technologies, I aim to bridge the gap between technical excellence and real-world impact, ensuring every project leaves a mark of quality and usability.
                                </p>
                            </div>


                        </CardContent>
                    </Card>

                    {/* Expertise Sidebar */}
                    <div className="space-y-8">
                        <Card className="border-border/40 bg-gradient-to-b from-card to-card/90 backdrop-blur-sm shadow-lg">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <Zap className="h-6 w-6 text-primary" />
                                    My Expertise
                                </h3>
                                <div className="space-y-6">

                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-2 rounded-lg">
                                            <Code className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">Full‑Stack Development</h4>
                                            <p className="text-sm text-muted-foreground">
                                                End‑to‑end solutions with modern frameworks and scalable architectures
                                            </p>
                                        </div>
                                    </div>


                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-2 rounded-lg">
                                            <Palette className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">UI/UX Design</h4>
                                            <p className="text-sm text-muted-foreground">
                                                Creating intuitive, accessible interfaces with user‑centric design principles
                                            </p>
                                        </div>
                                    </div>



                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-2 rounded-lg">
                                            <Smartphone className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">Mobile Development</h4>
                                            <p className="text-sm text-muted-foreground">
                                                Cross‑platform apps with Flutter for consistent, native‑like experiences
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-2 rounded-lg">
                                            <Users className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">Collaboration & Leadership</h4>
                                            <p className="text-sm text-muted-foreground">
                                                Team leadership, code reviews, and mentoring junior developers
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Philosophy Card */}
                        <Card className="border-border/40 bg-gradient-to-b from-card to-card/90 backdrop-blur-sm shadow-lg">
                            <CardContent className="p-8">
                                <h3 className="text-xl font-bold mb-4">Development Philosophy</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full" />
                                        <span className="text-sm">Clean, maintainable code over clever shortcuts</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full" />
                                        <span className="text-sm">User experience as the primary metric of success</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full" />
                                        <span className="text-sm">Continuous learning and adapting to new technologies</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full" />
                                        <span className="text-sm">Testing and documentation as essential, not optional</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Stats or Highlights */}
                <div className="grid md:grid-cols-3 gap-6">
                    <Card className="border-border/30 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
                        <CardContent className="p-6 text-center">
                            <div className="text-3xl font-bold text-primary mb-2">12+</div>
                            <p className="text-sm text-muted-foreground">Projects Completed</p>
                        </CardContent>
                    </Card>
                    <Card className="border-border/30 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
                        <CardContent className="p-6 text-center">
                            <div className="text-3xl font-bold text-primary mb-2">15+</div>
                            <p className="text-sm text-muted-foreground">Technologies Mastered</p>
                        </CardContent>
                    </Card>
                    <Card className="border-border/30 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
                        <CardContent className="p-6 text-center">
                            <div className="text-3xl font-bold text-primary mb-2">5+</div>
                            <p className="text-sm text-muted-foreground">Years Experience</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default About;


