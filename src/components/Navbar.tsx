import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading] = useState(false);

  const sections = ["home", "about", "projects", "achievements", "contact"];


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop - windowHeight / 3 &&
            scrollPosition < offsetTop + offsetHeight - windowHeight / 3
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return <nav className="fixed top-0 w-full z-50 glass py-4">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-accent-blue">Sarthak.</h1>

      <div className="hidden md:flex gap-8">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`capitalize ${activeSection === section
              ? "text-accent-blue"
              : "text-foreground hover:text-accent-blue"
              } transition-colors duration-300`}
          >
            {section}
          </button>
        ))}
      </div>

      <button
        className="md:hidden text-foreground hover:text-accent-blue"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>

    <div className="md:hidden glass mt-4 py-4 animate-slideUp">
      <div className="flex flex-col gap-4 items-center">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`capitalize ${activeSection === section
              ? "text-accent-blue"
              : "text-foreground hover:text-accent-blue"
              } transition-colors duration-300`}
          >
            {section}
          </button>
        ))}
      </div>
    </div>
  </nav>;
};
export default Navbar;