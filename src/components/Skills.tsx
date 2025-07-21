const skills = [
  { name: "Git & GitHub", percent: 80 },
  { name: "Figma (UI/UX Design)", percent: 85 },
  { name: "Flutter", percent: 70 },
  { name: "Vercel", percent: 75 },
  { name: "Postman", percent: 60 },
  { name: "HTML/CSS/JavaScript", percent: 85 },
  { name: "React", percent: 80 },
  { name: "MySQL", percent: 70 },
  { name: "MongoDB", percent: 60 },
  { name: "Firebase", percent: 70 }

];

const Skills = () => (
  <section id="skills" className="py-20 px-6 bg-card rounded-xl max-w-3xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>
    <div className="space-y-7">
      {skills.map(s => (
        <div key={s.name}>
          <div className="flex justify-between">
            <span className="font-semibold">{s.name}</span>
            <span className="text-muted-foreground">{s.percent}%</span>
          </div>
          <div className="w-full bg-border h-3 rounded-full mt-2">
            <div
              className="bg-accent h-3 rounded-full transition-all duration-700"
              style={{ width: `${s.percent}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
