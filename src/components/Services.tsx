import { FaLaptopCode, FaMobileAlt, FaPencilRuler, FaSitemap } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode className="text-3xl text-accent mb-3" />,
    title: "Web Development",
    description: "Creating beautiful and functional interfaces with a focus on user experience and accessibility.",
  },
  {
    icon: <FaMobileAlt className="text-3xl text-accent mb-3" />,
    title: "Mobile Development",
    description: "Creating cross-platform and native mobile applications with seamless user experiences.",
  },
  {
    icon: <FaPencilRuler className="text-3xl text-accent mb-3" />,
    title: "UI/UX Design",
    description: "Crafting intuitive and visually appealing user experiences for web and mobile applications.",
  },
  {
    icon: <FaSitemap className="text-3xl text-accent mb-3" />,
    title: "System Architecture",
    description: "APIs, endpoints, auth, hosting, git, deployment and maintenance.",
  },
];

const Services = () => (
  <section id="services" className="py-20 px-6">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">What I Do</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map(s => (
          <div
            key={s.title}
            className="bg-card border border-border/40 rounded-xl p-7 flex flex-col items-center text-center shadow-card transition-all hover:shadow-glow"
          >
            {s.icon}
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-base">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
