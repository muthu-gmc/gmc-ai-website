import { motion } from "motion/react";
import logo from "figma:asset/10a6fb56a4a37d4ba1494a8e5fb47dcbdb91dac7.png";

export function Header() {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-[#111111]/80 backdrop-blur-md border-b border-[#00F000]/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img 
              src={logo} 
              alt="Greenmen Consulting" 
              className="h-12 w-auto"
            />
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#platform" className="text-white hover:text-[#00F000] transition-colors duration-300">
              Platform
            </a>
            <a href="#solutions" className="text-white hover:text-[#00F000] transition-colors duration-300">
              Solutions
            </a>
            <a href="#use-cases" className="text-white hover:text-[#00F000] transition-colors duration-300">
              Use Cases
            </a>
            <a href="#contact" className="text-white hover:text-[#00F000] transition-colors duration-300">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
