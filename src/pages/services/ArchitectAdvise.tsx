import { motion } from "motion/react";
import { ChevronRight, ArrowRight } from "lucide-react";
import { CustomerStoriesSection } from "../../components/CustomerStoriesSection";

const offerings = [
  {
    title: "AI & Analytics Roadmap",
    description: "Drive AI and analytics adoption across critical business areas with personalized roadmaps.",
    link: "/services/architect-advise/ai-analytics-roadmap/",
  },
  {
    title: "Modern Data Strategy",
    description: "Implement the right data strategy tailored to your business objectives.",
    link: "/services/architect-advise/modern-data-strategy/",
  },
  {
    title: "Cloud & Platform Strategy",
    description: "Define the right technology infrastructure for seamless data integration and analytics.",
    link: "/services/architect-advise/cloud-platform-strategy/",
  },
  {
    title: "Cloud Advisory Services",
    description: "Expert guidance for cloud migration, optimization, and governance.",
    link: "/services/architect-advise/cloud-advisory/",
  },
  {
    title: "Intelligent Solution Design",
    description: "Architecting intelligent solutions that align technology with business goals.",
    link: "/services/architect-advise/intelligent-solution-design/",
  },
];

export function ArchitectAdvise() {
  return (
    <div className="mt-16">
      {/* Breadcrumbs */}
      <section className="bg-gray-50 py-4 px-6 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="/" className="hover:text-[#00F000] transition-colors">
              Home
            </a>
            <ChevronRight className="w-4 h-4" />
            <a href="/services/architect-advise/" className="hover:text-[#00F000] transition-colors">
              Services
            </a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#00F000]">Architect & Advise</span>
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
              <h1 className="text-white mb-6">
                Architect & Advise: Guiding Your{" "}
                <span className="text-[#00F000]">Data & AI Journey</span>
              </h1>
              <p className="text-white/80">
                Crafting the strategic roadmaps, cloud strategies, and solution architectures that align your technology with your business goals.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1740908900846-4bbd4f22c975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYXJjaGl0ZWN0dXJlJTIwY29uc3VsdGluZ3xlbnwxfHx8fDE3NjMwOTM0NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Architecture and Advisory"
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.title}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#00F000] hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-[#4A5565] mb-4">{offering.title}</h3>
                <p className="text-gray-700 mb-6">{offering.description}</p>
                <a
                  href={offering.link}
                  className="inline-flex items-center gap-2 text-[#00F000] hover:gap-3 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Stories Section */}
      <CustomerStoriesSection />
    </div>
  );
}