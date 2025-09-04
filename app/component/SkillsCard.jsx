import React from "react";

const SkillsCard = () => {
  const skills = [
    "JavaScript", "TypeScript", "Java", "Python", "SQL", "NoSQL",
    "PostgreSQL", "MongoDB", "React", "Node.js", "Flask", "Next.js",
    "GSAP", "Express", "Django", "TensorFlow", "TailwindCSS",
    "Docker", "AWS", "Prisma", "Git", "WebSockets", "REST API", "Redis"
  ];

  const skillLogos = {
    JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    SQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    NoSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    Django: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    TensorFlow: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    TailwindCSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    AWS: "https://cdn.worldvectorlogo.com/logos/amazon-web-services-2.svg",
    Prisma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
    Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    Redis: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  };

  const priority = ["React", "Next.js", "Node.js", "PostgreSQL", "Prisma", "Express"];
  const orderedSkills = [
    ...priority,
    ...skills.filter(skill => !priority.includes(skill))
  ];

  return (
    <div className="w-full max-w-5xl mx-auto border border-white/15 rounded-2xl bg-[#0A0A0A]/40 backdrop-blur-sm">
      <div>
        <h1 className="px-4 sm:px-6 font-semibold font-[font2] text-base sm:text-lg md:text-xl pt-4 text-white">
          Skills
        </h1>
      </div>
      <div className="px-3 sm:px-6 py-4 flex flex-wrap gap-2 sm:gap-3">
        {orderedSkills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#0A0A0A] flex items-center gap-1 sm:gap-1 rounded-full px-1 sm:px-2 py-1 text-xs sm:text-sm md:text-base text-[#D4D4D4] border border-white/15 hover:bg-white/10 transition"
          >
            {skillLogos[skill] && (
              <img
                src={skillLogos[skill]}
                alt={skill}
                className="w-2.5 h-2.5 sm:w-4 sm:h-4 md:w-4 md:h-4"
              />
            )}
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
