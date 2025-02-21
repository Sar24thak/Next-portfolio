
import { motion } from "framer-motion";

const Projects = () => {
  const technicalSkills = [
    "NextJS",
    "ReactJS",
    "Redux",
    "VueJS",
    "TypeScript",
    "NodeJS",
    "MongoDB",
    "RESTful Api",
    "FeatherJS",
    "React Native",
    "JavaScript",
    "Mongoose"
  ];

  const projects = [
    {
      title: "Frequently Asked Questions Module",
      date: "06/2023 - Present",
      tech: "Vue.JS, Express.JS, MongoDB, TailwindCSS, TypeScript",
      features: [
        "Vue.JS PINIA",
        "Vue-Validate",
        "TypeScript",
        "TailwindCSS",
        "DaisyUI"
      ]
    },
    {
      title: "XML-TO-JSON",
      date: "05/2023 - 05/2023",
      tech: "Vue.JS, NestJS, TypeScript, JS",
      link: "https://github.com/Ab07hay/XML-TO-JSON"
    },
    {
      title: "TO-DO-LIST",
      date: "Ongoing",
      tech: "Vue.JS, Express.JS, Mongoose, TailwindCSS, TypeScript",
      link: "https://github.com/Ab07hay/TO-DO-LIST"
    },
    {
      title: "MyPortfolio.github.io",
      tech: "Bootstrap, JS",
      link: "https://github.com/Ab07hay/MyPortfolio.github.io"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16"
        >
          My <span className="text-accent">Skills</span>
        </motion.h2>

        {/* Technical Skills */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card hover:bg-card-hover p-4 rounded-lg text-center transition-colors"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card hover:bg-card-hover rounded-lg p-6 transition-colors"
              >
                <h4 className="text-xl font-semibold text-accent mb-2">{project.title}</h4>
                <p className="text-gray-400 text-sm mb-4">{project.date}</p>
                <p className="text-gray-500 mb-4">{project.tech}</p>
                {project.features && (
                  <ul className="list-disc list-inside text-gray-400">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
