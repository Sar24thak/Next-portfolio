
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16"
        >
          About <span className="text-accent">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6">
                <h4 className="text-xl font-semibold text-accent">BE in Computer Engineering</h4>
                <p className="text-gray-400">Karmaveer Dadasaheb Kannamwar Engineering College</p>
                <p className="text-sm text-gray-500">Nagpur, Maharashtra, India</p>
                <p className="text-sm text-gray-500">06/2017 - 07/2021</p>
                <p className="text-accent mt-2">CGPA: 8.87</p>
              </div>
            </div>
          </motion.div>

          {/* Work Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Work Experience</h3>
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6">
                <h4 className="text-xl font-semibold text-accent">FullStack Developer</h4>
                <p className="text-gray-400">Team Pumpkin Global India Pvt Ltd</p>
                <p className="text-sm text-gray-500">Bangalore, India</p>
                <p className="text-sm text-gray-500">10/2023 - Present</p>
                <ul className="list-disc list-inside mt-3 text-gray-400">
                  <li>Developed front-end interfaces using React JS</li>
                  <li>Applied Tailwind CSS for responsive designs</li>
                  <li>Built cross-platform mobile applications using React Native</li>
                  <li>Implemented backend services with Feathers JS</li>
                </ul>
              </div>

              <div className="bg-card rounded-lg p-6">
                <h4 className="text-xl font-semibold text-accent">Jr Software Developer</h4>
                <p className="text-gray-400">Claim Genius India Pvt Ltd</p>
                <p className="text-sm text-gray-500">Nagpur, Maharashtra, India</p>
                <p className="text-sm text-gray-500">09/2021 - 10/2023</p>
                <ul className="list-disc list-inside mt-3 text-gray-400">
                  <li>Followed AGILE methodology for software development</li>
                  <li>Developed E2E features and processed data</li>
                  <li>Built REST APIs with authentication</li>
                  <li>Worked with cross-functional teams</li>
                </ul>
              </div>

              <div className="bg-card rounded-lg p-6">
                <h4 className="text-xl font-semibold text-accent">Intern (Web Developer)</h4>
                <p className="text-gray-400">Vigo Technoworld pvt.ltd</p>
                <p className="text-sm text-gray-500">Nagpur, Maharashtra, India</p>
                <p className="text-sm text-gray-500">06/2020 - 12/2020</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
