import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Compass, Wrench, Sparkles, Rocket } from "lucide-react";
import { ContactModal } from "../ContactModal";

const services = [
  {
    icon: Compass,
    title: "Architect & Advise",
    description: "We design the Data-first strategy and cloud roadmap to future-proof your business",
    items: [
      "Strategic Data & AI Roadmaps",
      "Your AI-Driven Future, Mapped",
      "Cloud-Smart Strategy & Advisory",
    ],
    link: "/services/architect-advise/",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Wrench,
    title: "Build & Modernize",
    description: "Building the high-performance, scalable data core your AI ambitions demand",
    items: [
      "Next-Gen Data Platforms",
      "Scalable Data Ecosystems",
      "Intelligent Cloud Optimization",
      "Building Your Modern Data Core",
    ],
    link: "/services/build-modernize/",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Sparkles,
    title: "Innovate with AI & ML",
    description: "Harnessing advanced analytics and Generative AI to solve your most complex challenges",
    items: [
      "Applied AI & Advanced Analytics",
      "Enterprise Generative AI",
      "Custom AI Agents & Automation",
      "Intelligent Solutions Lab",
    ],
    link: "/services/innovate-with-ai-ml/",
    color: "from-[#00F000] to-emerald-500",
  },
  {
    icon: Rocket,
    title: "Accelerate & Operate",
    description: "Automating and accelerating your operations for continuous, reliable, and high-speed impact",
    items: [
      "Intelligent DataOps & MLOps",
      "Cloud-Native Engineering & Automation",
      "AI-Ready Operations (MLOps)",
    ],
    link: "/services/accelerate-operate/",
    color: "from-orange-500 to-red-500",
  },
];

export function HomeSection3() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section id="how-it-works" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full mb-6">
            <span className="text-sm font-medium text-[#4A5565]">Our Services</span>
          </div>
          <h2 className="text-5xl font-bold text-[#4A5565] mb-6 tracking-tight">
            Transform your enterprise data into{" "}
            <span className="bg-gradient-to-r from-[#00F000] to-emerald-600 bg-clip-text text-transparent">
              intelligent action
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            End-to-end data and AI services designed to deliver measurable business outcomes
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                {/* Icon with gradient background */}
                <div className="mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#4A5565] mb-1">{service.title}</h3>
                  <p className="text-sm text-gray-500">{service.description}</p>
                </div>

                {/* Items */}
                <ul className="space-y-2.5 mb-6">
                  {service.items.map((item) => (
                    <li key={item} className="text-sm text-gray-700 flex items-start gap-2">
                      <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${service.color} mt-2 flex-shrink-0`}></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <a
                  href={service.link}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#4A5565] group-hover:gap-3 transition-all"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          className="relative overflow-hidden bg-[#4A5565] rounded-3xl p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00F000]/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h3 className="text-4xl font-bold text-white mb-4">
              Ready to transform your data strategy?
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              Let's discuss how we can help you unlock the full potential of your data and AI initiatives
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                onClick={() => setContactModalOpen(true)}
                className="px-8 py-3 bg-white text-[#4A5565] font-medium rounded-lg hover:bg-gray-100 transition-all shadow-lg inline-flex items-center gap-2"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule a Consultation
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.a
                href="/our-story/"
                className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-medium border border-white/20 rounded-lg hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </section>
  );
}