import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Rocket, Layers, GitBranch, Users as UsersIcon, BarChart } from "lucide-react";

const roadmapSteps = [
  {
    icon: Layers,
    title: "Cloud Consulting Strategy and Migration",
    description:
      "Define a clear, concise cloud migration plan and roadmap. Use established scanning tools and conduct stakeholder interviews to understand existing infrastructure and applications. Create a bespoke migration approach and categorize the applications into rehost, re-platform, re-architect, and refactor.",
  },
  {
    icon: BarChart,
    title: "Cloud Optimization & Modernization",
    description:
      "Eliminate manual efforts in tracking where applications and workloads run and how they interact using Blazeclan’s agile monitoring with automated discovery.",
  },
  {
    icon: UsersIcon,
    title: "Application Maintenance & Enhancement",
    description:
      "Receive ITIL-based support, standard operating procedures, and security compliance for all applications.",
  },
];

export function StrategicRoadmap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="solutions"
      ref={ref}
      className="py-24 px-6 bg-[#111111] relative overflow-hidden"
    >
      {/* Animated background lines */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-[#00F000]"
            style={{ top: `${20 + i * 15}%`, left: 0, right: 0 }}
            animate={{ scaleX: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-center mb-6 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Strategic<br />
          <span className="text-[#00F000]">Roadmap</span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 text-lg max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A proven path from initial pilots to enterprise-wide AI transformation.
        </motion.p>

        {/* Vertical Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roadmapSteps.map((step, index) => (
            <motion.div
              key={step.title}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#00F000]/20 rounded-2xl p-8 shadow-lg hover:border-[#00F000]/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              {/* Icon */}
              <div className="w-14 h-14 mb-6 bg-[#00F000]/10 rounded-xl flex items-center justify-center group-hover:bg-[#00F000]/20 transition-all duration-300">
                <step.icon className="w-7 h-7 text-[#00F000]" />
              </div>

              {/* Step number */}
              <div className="text-sm text-[#00F000] font-semibold mb-2">
                {/* Step {index + 1} */}
              </div>

              {/* Title */}
              <h3 className="text-white text-lg font-semibold mb-3">
                {step.title}
              </h3>

              {/* Description split into lines */}
              <div className="text-gray-400 leading-relaxed space-y-1">
                {step.description.split(".").map((line, i) =>
                  line.trim() ? (
                    <p key={i} className="text-gray-400">
                      {line.trim()}.
                    </p>
                  ) : null
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
