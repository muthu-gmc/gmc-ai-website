import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { BarChart3, Database, Brain, LineChart } from "lucide-react"; // Lucide icons

export function PerformanceStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const layers = [
    {
      icon: BarChart3,
      name: "STRATEGY AND ADVISORY",
      description: "Analytics Roadmap, Data Strategy, Platform Strategy"
    },
    {
      icon: Database,
      name: "ENGINEER YOUR DATA",
      description: "Data Modernization, Data Foundation, Data Operations"
    },
    {
      icon: Brain,
      name: "DIFFERENTIATE WITH AI/ML",
      description: "Data Science, AI Engineering, ML Products & Platforms"
    },
    {
      icon: LineChart,
      name: "OPERATIONALIZE INSIGHTS",
      description: "Experience Consulting, Application Engineering, BI, ML Ops"
    },
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-center mb-6 text-[#111111]"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <br />
          <span className="text-[#00F000]">
            Transform your enterprise data into intelligent action
          </span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Deep AI integration transforms enterprise software from static systems
          into intelligent ecosystems.
        </motion.p>

        {/* Grid of vertical cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {layers.map((layer, index) => (
            <motion.div
              key={layer.name}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 relative group"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              {/* Icon container */}
              <div className="w-14 h-14 mb-6 bg-[#00F000]/10 rounded-xl flex items-center justify-center group-hover:bg-[#00F000]/20 transition-all duration-300">
                <layer.icon className="w-7 h-7 text-[#00F000]" />
              </div>

              <h1 className="text-[#111111] font-bold text-lg mb-2 text-center">
                {layer.name}
              </h1>
              <ul className="list-none text-gray-600 leading-relaxed text-center">
                {layer.description.split(",").map((item, i) => (
                  <li key={i}>{item.trim()}</li>
                ))}
              </ul>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
