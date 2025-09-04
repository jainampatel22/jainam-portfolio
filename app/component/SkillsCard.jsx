import React from "react";

const SkillsCard = () => {
  const skills = [
    "JavaScript", "TypeScript", "Java", "Python", "SQL", "NoSQL",
    "PostgreSQL", "MongoDB", "React", "Node.js", "Flask", "Next.js",
    "GSAP", "Express", "Django", "TensorFlow", "TailwindCSS",
    "Docker", "AWS", "Prisma", "Git", "WebSockets", , 
    "REST API", "Redis"
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
    // Vercel: "https://assets.vercel.com/image/upload/v1662130559/front/favicon/vercel/57x57.png",
  };

  // Reorder so React, Next.js, Node.js appear first
  const priority = ["React", "Next.js", "Node.js",'PostgreSQL','Prisma','Express'];
  const orderedSkills = [
    ...priority,
    ...skills.filter(skill => !priority.includes(skill))
  ];

  return (
    <div className="max-h-xl border border-white/15 w-full rounded-xl">
      <div>
        <h1 className="px-5 font-semibold font-[font2] text-md pt-4">Skills.</h1>
      </div>
      <div className="px-5 py-4 flex flex-wrap gap-1">
        {orderedSkills.map((skill, index) => (
          <div 
            key={index} 
            className="bg-[#0A0A0A]    flex items-center gap-2 rounded-full px-3 py-1 text-sm text-[#D4D4D4] border border-white/15"
          >
            {skillLogos[skill] && (
              <img src={skillLogos[skill]} alt={skill} className="w-4 h-4" />
            )}
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
