import { motion } from "framer-motion";

const Achievements = () => {
  const achievements = [
    {
      title: "HACK-A-BIT 2.0 hackathon",
      date: "08/2019 - 08/2019",
      description: "2nd Rank in National level hackathon organised by BIT Mesra Ranch",
      points: [
        "Runner up position",
        "National level competition",
        "Demonstrated innovative solutions"
      ]
    }
  ];

  return (
    <section id="achievements" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Certificates & <span className="text-accent">Achievements</span>
        </motion.h2>

        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-card hover:bg-card-hover rounded-lg p-6 transition-colors"
            >
              <h3 className="text-2xl font-semibold text-accent mb-2">{achievement.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{achievement.date}</p>
              <p className="text-gray-300 mb-4">{achievement.description}</p>
              <ul className="list-disc list-inside text-gray-400">
                {achievement.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
