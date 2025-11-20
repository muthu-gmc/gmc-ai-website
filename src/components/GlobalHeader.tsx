import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logo from "figma:asset/10a6fb56a4a37d4ba1494a8e5fb47dcbdb91dac7.png";
import { ContactModal } from "./ContactModal";

export function GlobalHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const serviceLinks = [
    { name: "Architect & Advise", href: "/services/architect-advise/" },
    { name: "Build & Modernize", href: "/services/build-modernize/" },
    { name: "Innovate with AI & ML", href: "/services/innovate-with-ai-ml/" },
    { name: "Accelerate & Operate", href: "/services/accelerate-operate/" },
  ];

  const resourceLinks = [
    { name: "Blogs", href: "/resources/blogs/" },
  ];

  return (
    <>

      <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200/50 bg-white/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex items-center group">
              <img
                src={logo}
                alt="GreenMen Consulting"
                className="h-10 w-auto transition-opacity group-hover:opacity-80"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <a
                href="/"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#4A5565] rounded-lg hover:bg-gray-50 transition-colors"
              >
                Home
              </a>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#4A5565] rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-1"
                  onClick={(e) => {
                    e.preventDefault();
                    setServicesOpen(!servicesOpen);
                  }}
                  onMouseEnter={() => setServicesOpen(true)}
                >
                  Services
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden"
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      {serviceLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#4A5565] hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
                          onClick={() => setServicesOpen(false)}
                        >
                          {link.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="/products/"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#4A5565] rounded-lg hover:bg-gray-50 transition-colors"
              >
                Products
              </a>
              <a
                href="/insights/ai-integration/"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#4A5565] rounded-lg hover:bg-gray-50 transition-colors"
              >
                Insights
              </a>
              <a
                href="/our-story/"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#4A5565] rounded-lg hover:bg-gray-50 transition-colors"
              >
                Our Story
              </a>
              <a
                href="/careers/"
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#4A5565] rounded-lg hover:bg-gray-50 transition-colors"
              >
                Careers
              </a>

              {/* Resources Dropdown */}
              {/* <div className="relative">
                <button
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#4A5565] rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-1"
                  onClick={(e) => {
                    e.preventDefault();
                    setResourcesOpen(!resourcesOpen);
                  }}
                  onMouseEnter={() => setResourcesOpen(true)}
                >
                  Resources
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {resourcesOpen && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden"
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      onMouseLeave={() => setResourcesOpen(false)}
                    >
                      {resourceLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#4A5565] hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
                          onClick={() => setResourcesOpen(false)}
                        >
                          {link.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div> */}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.button
                onClick={() => setContactModalOpen(true)}
                className="px-5 py-2 bg-[#4A5565] text-white text-sm font-medium rounded-lg hover:bg-[#4A5565]/90 transition-all shadow-sm"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Us
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.nav
                className="lg:hidden border-t border-gray-100 py-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-col gap-1">
                  <a
                    href="/"
                    className="px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-[#4A5565] hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </a>
                  <div className="px-3 py-2">
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Services</div>
                    {serviceLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="block pl-3 py-2 text-sm text-gray-600 hover:text-[#4A5565] transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                  <a
                    href="/products/"
                    className="px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-[#4A5565] rounded-lg hover:bg-gray-50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Products
                  </a>
                  <a
                    href="/insights/ai-integration/"
                    className="px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-[#4A5565] rounded-lg hover:bg-gray-50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Insights
                  </a>
                  <a
                    href="/our-story/"
                    className="px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-[#4A5565] rounded-lg hover:bg-gray-50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Our Story
                  </a>
                  <a
                    href="/careers/"
                    className="px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-[#4A5565] rounded-lg hover:bg-gray-50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Careers
                  </a>
                  {/* <div className="px-3 py-2">
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Resources</div>
                    {resourceLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="block pl-3 py-2 text-sm text-gray-600 hover:text-[#4A5565] transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </a>
                    ))}
                  </div> */}
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setContactModalOpen(true);
                    }}
                    className="mx-3 mt-3 px-5 py-2.5 bg-[#4A5565] text-white text-sm font-medium text-center rounded-lg hover:bg-[#4A5565]/90 transition-colors"
                  >
                    Contact Us
                  </button>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>

        {/* Contact Modal */}
        {/* <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} /> */}
      </header>
      {/* Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </>
  );
}