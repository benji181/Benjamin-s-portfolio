const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            About
          </h2>
        </div>

        <div className="bg-card rounded-xl p-8 md:p-12 border border-border/50 animate-scale-in">
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-xl leading-relaxed mb-6">
              I’m a passionate <span className="font-semibold">Full‑Stack Developer</span> and <span className="font-semibold">UI/UX Designer</span> based in Nigeria, with strong expertise in <span className="font-semibold">Java, Spring Boot, React, Flutter, and modern cloud integrations</span>. 
              My journey in tech has been driven by a love for building scalable, intuitive, and impactful digital solutions.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Over the years, I’ve designed and developed a variety of applications—ranging from enterprise‑grade backends to cross‑platform mobile apps—leveraging tools like <span className="font-medium">MySQL, Firebase, Docker, Kubernetes, and AWS</span>. 
              My approach bridges the gap between clean UI design and efficient backend architecture, ensuring that every product I build is both visually engaging and highly performant.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Beyond coding and design, I enjoy exploring new technologies, contributing to open‑source projects, and sharing knowledge within the developer community. 
              I thrive on solving complex problems and delivering experiences that help businesses and individuals grow in the digital world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
