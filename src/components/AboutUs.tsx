import { motion } from "motion/react";
import { Zap, Target, Eye } from "lucide-react";

const principlesData = [
  {
    icon: Zap,
    title: "Accelerated Digital Transformation",
    description:
      "GREENMEN CONSULTING boasts over 60 years of cumulative functional expertise as co-creators in the digital transformation industry. We focus on quality, customer satisfaction, and quick turnaround. Our ethical practices are purely driven to deliver unbeatable ROIs, supported by an extensive network of resources spanning various industrial niches.",
  },
  {
    icon: Target,
    title: "Our Mission",
    description:
      "Our mission is to be the “Dependable Partner of Choice” for both our clients and career aspirants. We take pride in our extensive knowledge of the market landscape and our ability to leverage our wide network of databases and sourcing channels to provide our clients with the best possible talent.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "Our vision is to continue to innovate and evolve with the changing market landscape while providing reliable and efficient services that add value to our client’s businesses.",
  },
];

export function AboutUs() {
  return (
    <div id='aboutUs' className="relative min-h-screen bg-gradient-to-br from-[#111111] via-[#0a0a0a] to-[#000000] text-gray-200 pt-20 overflow-hidden">
      {/* 🔹 Animated Grid Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#00F000 1px, transparent 1px),
                               linear-gradient(90deg, #00F000 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "60px 60px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Optional glowing orbs for extra depth */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#00F000]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#00F000]/10 rounded-full blur-3xl" />

      {/* 🔹 Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* 1. About Us Header Section */}
        <motion.header
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#00F000] mb-4">
            About Us
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Innovating the future, one green solution at a time.
          </p>
        </motion.header>

        {/* 2. Principles Cards Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-[#00F000] mb-12 md:mb-16">
            Our Guiding Principles
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            {principlesData.map((principle, index) => (
              <motion.div
                key={index}
                className="bg-black/70 p-8 rounded-[2rem] border border-[#00F000]/20 shadow-[0_0_40px_rgba(0,240,0,0.05)] hover:shadow-[0_0_60px_rgba(0,240,0,0.25)] transition-shadow duration-500 flex flex-col h-full backdrop-blur-md"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <principle.icon className="w-10 h-10 text-[#00F000] mb-4" />
                <h3 className="text-2xl font-bold text-[#00F000] mb-3">
                  {principle.title}
                </h3>
                <p className="text-gray-400 leading-relaxed flex-grow">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
