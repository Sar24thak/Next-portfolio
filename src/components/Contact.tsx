
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Contact <span className="text-accent">Me</span>
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.a
              href="mailto:abhaymanmode9991@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-4 bg-card hover:bg-card-hover rounded-lg p-6 transition-colors"
            >
              <Mail className="text-accent" size={24} />
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-gray-400 text-sm">abhaymanmode9991@gmail.com</p>
              </div>
            </motion.a>

            <motion.a
              href="tel:7709904943"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center space-x-4 bg-card hover:bg-card-hover rounded-lg p-6 transition-colors"
            >
              <Phone className="text-accent" size={24} />
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-gray-400 text-sm">+91 7709904943</p>
              </div>
            </motion.a>

            <motion.a
              href="https://github.com/Ab07hay"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center space-x-4 bg-card hover:bg-card-hover rounded-lg p-6 transition-colors"
            >
              <Github className="text-accent" size={24} />
              <div>
                <h3 className="font-semibold mb-1">GitHub</h3>
                <p className="text-gray-400 text-sm">github.com/Ab07hay</p>
              </div>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/abhay-manmode-17b149193"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center space-x-4 bg-card hover:bg-card-hover rounded-lg p-6 transition-colors"
            >
              <Linkedin className="text-accent" size={24} />
              <div>
                <h3 className="font-semibold mb-1">LinkedIn</h3>
                <p className="text-gray-400 text-sm">linkedin.com/in/abhay-manmode-17b149193</p>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
