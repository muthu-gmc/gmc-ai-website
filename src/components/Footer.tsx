import { motion } from "motion/react";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";
import logo from "figma:asset/10a6fb56a4a37d4ba1494a8e5fb47dcbdb91dac7.png";

const links = [
  { name: "About", href: "#" },
  { name: "Platform", href: "#" },
  { name: "Use Cases", href: "#" },
  { name: "Contact", href: "#" },
];

const socials = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "X" },
  { icon: Mail, href: "#", label: "Email" },
];

export function Footer() {
  return (
    <footer className="bg-white py-12 px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        {/* Logo and company name */}
        <div className="flex justify-center mb-8">
          <img 
            src={logo} 
            alt="Greenmen Consulting" 
            className="h-16 w-auto"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Links */}
          <nav className="flex gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-[#00F000] transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Tagline */}
          <div className="text-center md:text-right">
            <p className="text-[#111111]">Smarter Systems. Sharper Intelligence.</p>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-6 mt-8 pt-8 border-t border-gray-200">
          {socials.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#00F000]/10 hover:text-[#00F000] transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}
