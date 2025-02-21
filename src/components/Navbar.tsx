import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-accent text-2xl font-bold transition hover:text-accent-hover">Abhay.</Link>
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Projects", "Achievements", "Contact"].map(item => <Link key={item} to={`/${item.toLowerCase()}`} className="text-gray-300 hover:text-accent transition duration-300">
                {item}
              </Link>)}
          </div>
        </div>
      </div>
    </nav>;
};
export default Navbar;