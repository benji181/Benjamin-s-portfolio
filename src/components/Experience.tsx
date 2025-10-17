import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const experiences = [
      {
      company: "GN128 solutions limited",
      role: "Mobile SOftware Engineer",
      period: " April 2025",
    },
    {
      logo: "https://media.licdn.com/dms/image/v2/C4E03AQEDLim-0oc2iA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1631381441803?e=1755734400&v=beta&t=FMADReR9emC-eFQIhwj8XU4UmDDmMwcEhcBfpErsaSg",
      company: "CBC CRYPTO BOOTCAMP",
      role: "Frontend Developer",
      period: "July 2025",
    },
     {
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=200&h=200&fit=crop&crop=center",
      company: "Nigerian Software Foundation (NFS)",
      role: " Mobile Frontend Developer",
      period: "April - June 2021",
      url: "https://software-ng.com/"
    },
    {
      logo: "https://aptech.ng/wp-content/uploads/2023/10/aptech-logo.png",
      company: "APTECH COMPUTER EDUCATION",
      role: "Advance diploma in software engineering",
      period: "2023 - 2025",
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Education & Work Experience
          </h2>
        </div>

        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <div
              key={experience.company}
              className="animate-slide-up"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationFillMode: 'backwards'
              }}
            >
              <ExperienceCard {...experience} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
