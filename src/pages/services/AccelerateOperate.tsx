import { motion } from "motion/react";
import { ChevronRight, ArrowRight } from "lucide-react";
import { CustomerStoriesSection } from "../../components/CustomerStoriesSection";

const offerings = [
  {
    title: "DataOps & MLOps",
    description: "Streamline data and ML operations for continuous delivery and reliability.",
    link: "/services/accelerate-operate/dataops-mlops/",
  },
  {
    title: "Cloud-Native DevOps",
    description: "Implement modern DevOps practices for cloud-native applications.",
    link: "/services/accelerate-operate/cloud-native-devops/",
  },
  {
    title: "Application Evolution & Support",
    description: "Enhance and maintain applications for peak performance and reliability.",
    link: "/services/accelerate-operate/application-evolution/",
  },
  {
    title: "Salesforce Acceleration",
    description: "Optimize and accelerate your Salesforce implementations.",
    link: "/services/accelerate-operate/salesforce-acceleration/",
  },
];

export function AccelerateOperate() {
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
            <a href="/services/accelerate-operate/" className="hover:text-[#00F000] transition-colors">
              Services
            </a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#00F000]">Accelerate & Operate</span>
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
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Accelerate & Operate: Driving{" "}
                <span className="text-[#00F000]">Continuous Value</span>
              </h1>
              <p className="text-white/80 text-lg">
                Ensuring your data pipelines, applications, and platforms are managed, enhanced, and optimized for peak performance and reliability.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/flagged/photo-1579274216947-86eaa4b00475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2VydmVyJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjI3NDc2ODl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Operations and Infrastructure"
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
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