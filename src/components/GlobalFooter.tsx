import { useState } from "react";
import { Linkedin, Twitter, Mail, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import logo from "figma:asset/10a6fb56a4a37d4ba1494a8e5fb47dcbdb91dac7.png";
import { ContactModal } from "./ContactModal";

export function GlobalFooter() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const serviceLinks = [
    { name: "Architect & Advise", href: "/services/architect-advise/" },
    { name: "Build & Modernize", href: "/services/build-modernize/" },
    { name: "Innovate with AI & ML", href: "/services/innovate-with-ai-ml/" },
    { name: "Accelerate & Operate", href: "/services/accelerate-operate/" },
  ];

  const companyLinks = [
    { name: "Our Story", href: "/our-story/" },
    { name: "Careers", href: "/careers/" },
    { name: "Insights", href: "/insights/ai-integration/" },
  ];

  const productLinks = [
    { name: "SAF AI", href: "/products/saf-ai/" },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 border-b border-gray-200">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-[#4A5565] mb-3">Stay ahead with insights</h3>
            <p className="text-gray-600">
              Get the latest in data analytics, AI innovations, and digital transformation strategies.
            </p>
          </div>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A5565] focus:border-transparent transition-all text-sm"
            />
            <motion.button
              onClick={() => setContactModalOpen(true)}
              className="px-6 py-3 bg-[#4A5565] text-white font-medium rounded-lg hover:bg-[#4A5565]/90 transition-all shadow-sm flex items-center gap-2 whitespace-nowrap"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="inline-block mb-6 group">
              <img 
                src={logo} 
                alt="GreenMen Consulting" 
                className="h-8 w-auto transition-opacity group-hover:opacity-80"
              />
            </a>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Empowering businesses with data analytics and AI solutions that drive measurable results.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-[#4A5565] hover:text-white flex items-center justify-center transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-[#4A5565] hover:text-white flex items-center justify-center transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@greenmenconsulting.ai"
                className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-gray-900 hover:text-white flex items-center justify-center transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Company Column */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Products</h4>
            <ul className="space-y-3 mb-8">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Get in Touch</h4>
            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href="mailto:info@greenmenconsulting.ai"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  info@greenmenconsulting.ai
                </a>
              </li>
              <li>
                <a
                  href="tel:043126417157"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  0431-26417157
                </a>
              </li>
            </ul>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <p className="text-sm text-gray-700 mb-2 font-medium">Ready to transform your data strategy?</p>
              <button
                onClick={() => setContactModalOpen(true)}
                className="text-sm text-gray-900 hover:text-gray-700 transition-colors inline-flex items-center gap-1 font-medium"
              >
                Schedule a consultation
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2024 GreenMen Consulting. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </footer>
  );
}