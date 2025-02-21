
import { motion } from "framer-motion";
import { Github } from "lucide-react";

const Hero = () => {
  return (
    <div id="home" className="min-h-screen  flex items-center justify-center pt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm mb-6">
              Full Stack Developer
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm Abhay Manmode
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              Passionate full-stack developer with 3 years of experience, skilled in front-end and back-end development. Committed to delivering exceptional results and creating innovative solutions.
            </p>
            <div className="flex items-center justify-center lg:justify-start space-x-4">
              <a 
                href="#contact" 
                className="bg-accent hover:bg-accent-hover text-black px-8 py-3 rounded-md transition duration-300"
              >
                Contact Me
              </a>
              <a 
                href="https://github.com/Ab07hay" 
                className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-8 py-3 rounded-md transition duration-300"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 mt-12 lg:mt-0"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 rounded-full blur-3xl"></div>
              <img
                src="/lovable-uploads/591e87d8-85ca-4905-9b7b-a00bb1d1bb8d.png"
                alt="Profile"
                className="relative w-96 h-96 object-cover rounded-3xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
