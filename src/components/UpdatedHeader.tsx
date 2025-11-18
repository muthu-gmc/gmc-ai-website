import { motion } from "motion/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "figma:asset/10a6fb56a4a37d4ba1494a8e5fb47dcbdb91dac7.png";

export function UpdatedHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <a href="/" className="flex items-center">
            <img
              src={logo}
              alt="Greenmen Consulting"
              className="h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/"
              className="text-white hover:text-[#00F000] transition-colors duration-300"
            >
              Home
            </a>
            <div className="relative group">
              <button className="text-white hover:text-[#00F000] transition-colors duration-300">
                Services
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-[#111111] border border-[#00F000]/20 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <a
                  href="/services/strategy-advisory"
                  className="block px-4 py-3 text-white hover:text-[#00F000] hover:bg-white/5 transition-colors duration-300"
                >
                  Strategy & Advisory
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 text-white hover:text-[#00F000] hover:bg-white/5 transition-colors duration-300"
                >
                  Engineer Your Data
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 text-white hover:text-[#00F000] hover:bg-white/5 transition-colors duration-300"
                >
                  Differentiate with AI/ML
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 text-white hover:text-[#00F000] hover:bg-white/5 transition-colors duration-300"
                >
                  Operationalize Insights
                </a>
              </div>
            </div>
            <a
              href="#about"
              className="text-white hover:text-[#00F000] transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#careers"
              className="text-white hover:text-[#00F000] transition-colors duration-300"
            >
              Careers
            </a>
            <a
              href="#contact"
              className="text-white hover:text-[#00F000] transition-colors duration-300"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.nav
            className="md:hidden mt-4 pb-4 border-t border-[#00F000]/20 pt-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col gap-4">
              <a
                href="/"
                className="text-white hover:text-[#00F000] transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/services/strategy-advisory"
                className="text-white hover:text-[#00F000] transition-colors duration-300 pl-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Strategy & Advisory
              </a>
              <a
                href="#about"
                className="text-white hover:text-[#00F000] transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#careers"
                className="text-white hover:text-[#00F000] transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Careers
              </a>
              <a
                href="#contact"
                className="text-white hover:text-[#00F000] transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
