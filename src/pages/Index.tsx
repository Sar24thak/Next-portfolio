
import Layout from "@/components/Layout"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Projects"
import Achievements from "@/components/Achievements"
import Contact from "@/components/Contact"

const Index = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Achievements />
      <Contact />
    </Layout>
  );
};

export default Index;
