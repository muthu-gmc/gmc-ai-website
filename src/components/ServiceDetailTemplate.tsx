import { motion } from "motion/react";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import { ReactNode } from "react";

interface ServiceDetailProps {
  breadcrumbs: { name: string; href: string }[];
  title: string;
  description: string;
  heroContent?: ReactNode;
  sections?: {
    title: string;
    content: ReactNode;
  }[];
  features?: string[];
  benefits?: string[];
}

export function ServiceDetailTemplate({
  breadcrumbs,
  title,
  description,
  heroContent,
  sections = [],
  features = [],
  benefits = [],
}: ServiceDetailProps) {
  return (
    <div className="mt-16">
      {/* Breadcrumbs */}
      <section className="bg-gray-50 py-4 px-6 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-600 flex-wrap">
            {breadcrumbs.map((crumb, index) => (
              <div key={crumb.href} className="flex items-center gap-2">
                {index > 0 && <ChevronRight className="w-4 h-4" />}
                <a
                  href={crumb.href}
                  className={
                    index === breadcrumbs.length - 1
                      ? "text-[#00F000]"
                      : "hover:text-[#00F000] transition-colors"
                  }
                >
                  {crumb.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#4A5565] to-[#4A5565]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-white mb-6">{title}</h1>
              <p className="text-white/80 mb-8">{description}</p>
              {heroContent}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1758691736498-422201cc57da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzYyNzQ3Njg2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt={title}
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {features.length > 0 && (
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-[#111111] mb-8">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <CheckCircle2 className="w-6 h-6 text-[#00F000] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {benefits.length > 0 && (
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-[#111111] mb-8">Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <p className="text-gray-700">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Custom Sections */}
      {sections.map((section, index) => (
        <section
          key={section.title}
          className={`py-20 px-6 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-[#111111] mb-8">{section.title}</h2>
            {section.content}
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#4A5565] to-[#4A5565]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white mb-6">Ready to get started?</h2>
          <p className="text-white/80 mb-8">
            Let's discuss how we can help transform your business with our expertise.
          </p>
          <motion.a
            href="#contact"
            className="inline-block px-8 py-3 bg-[#00F000] text-[#111111] rounded-sm hover:bg-[#00F000]/90 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Us
          </motion.a>
        </div>
      </section>
    </div>
  );
}