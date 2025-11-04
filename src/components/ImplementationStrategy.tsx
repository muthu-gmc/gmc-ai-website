import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Target, Database, Wrench, TrendingUp, Users } from "lucide-react";

const strategies = [
  {
    icon: Target,
    title: "Define Clear Business Goals",
    description: "Establish specific objectives for AI integration aligned with your enterprise vision.",
  },
  {
    icon: Database,
    title: "Prioritize Data Quality",
    description: "AI learns only as well as your data allows — invest in clean, structured data.",
  },
  {
    icon: Wrench,
    title: "Choose the Right AI Tools",
    description: "Select ML, NLP, Computer Vision tools and integration frameworks (APIs, iPaaS).",
  },
  {
    icon: TrendingUp,
    title: "Plan for Scalability",
    description: "Build systems that evolve and scale with your business needs.",
  },
  {
    icon: Users,
    title: "Build an AI-Ready Culture",
    description: "Foster adoption through training, change management, and cross-team collaboration.",
  },
];

export function ImplementationStrategy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-center mb-6 text-[#111111]"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Implementation<br />
          <span className="text-[#00F000]">Strategy</span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A structured approach to embedding AI into your enterprise systems with lasting impact.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strategies.map((strategy, index) => (
            <motion.div
              key={strategy.title}
              className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-[#00F000]/30 hover:shadow-lg transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <div className="w-12 h-12 mb-4 bg-[#00F000]/10 rounded-lg flex items-center justify-center group-hover:bg-[#00F000]/20 transition-all duration-300">
                <strategy.icon className="w-6 h-6 text-[#00F000]" />
              </div>
              <h3 className="mb-2 text-[#111111]">{strategy.title}</h3>
              <p className="text-gray-600 text-sm">{strategy.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
