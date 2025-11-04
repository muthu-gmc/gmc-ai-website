import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function PerformanceStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const layers = [
    { name: "UI Layer", description: "Generative, adaptive interfaces" },
    { name: "Business Logic", description: "Context-aware decision making" },
    { name: "Data Layer", description: "Predictive data management" },
    { name: "Integration", description: "Intelligent API orchestration" },
    { name: "DevOps", description: "AI-driven automation" },
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
          Beyond Chatbots —<br />
          <span className="text-[#00F000]">Into the Core of Business Intelligence</span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Deep AI integration transforms enterprise software from static systems into intelligent ecosystems.
        </motion.p>

        {/* Layered architecture diagram */}
        <div className="max-w-2xl mx-auto space-y-4">
          {layers.map((layer, index) => (
            <motion.div
              key={layer.name}
              className="relative p-6 bg-gradient-to-r from-gray-50 to-white border-l-4 border-[#00F000] rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-[#111111] mb-1">{layer.name}</h3>
                  <p className="text-gray-600">{layer.description}</p>
                </div>
                <div className="w-3 h-3 bg-[#00F000] rounded-full shadow-[0_0_10px_rgba(0,240,0,0.5)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}