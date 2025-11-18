import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Rocket, Layers, GitBranch, Users as UsersIcon, BarChart } from "lucide-react";

const roadmapSteps = [
  {
    icon: Rocket,
    title: "Start with High-Impact Pilots",
    description: "Launch focused projects in customer service or analytics to prove value quickly.",
  },
  {
    icon: Layers,
    title: "Build Scalable AI Foundation",
    description: "Create cloud-native, API-first architecture for long-term growth.",
  },
  {
    icon: GitBranch,
    title: "Implement MLOps",
    description: "Establish model lifecycle management for continuous improvement.",
  },
  {
    icon: UsersIcon,
    title: "Foster Cross-Team Collaboration",
    description: "Unite data scientists, engineers, and business teams around shared goals.",
  },
  {
    icon: BarChart,
    title: "Measure ROI Continuously",
    description: "Track accuracy, efficiency, and user satisfaction to validate impact.",
  },
];

export function StrategicRoadmap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 bg-[#111111] relative overflow-hidden">
      {/* Animated background lines */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-[#00F000]"
            style={{
              top: `${20 + i * 15}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              scaleX: [0, 1, 1, 0],
              opacity: [0, 1, 1, 0],
            }}
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

        <div className="space-y-6 max-w-4xl mx-auto">
          {roadmapSteps.map((step, index) => (
            <motion.div
              key={step.title}
              className="flex items-start gap-6 p-6 bg-gradient-to-r from-[#1a1a1a] to-[#0a0a0a] rounded-xl border border-[#00F000]/20 hover:border-[#00F000]/40 transition-all duration-300 group"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              {/* Step number */}
              <div className="flex-shrink-0 w-12 h-12 bg-[#00F000]/10 rounded-full flex items-center justify-center border-2 border-[#00F000] group-hover:shadow-[0_0_15px_rgba(0,240,0,0.4)] transition-all duration-300">
                <span className="text-[#00F000]">{index + 1}</span>
              </div>

              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 bg-[#00F000]/10 rounded-lg flex items-center justify-center group-hover:bg-[#00F000]/20 transition-all duration-300">
                <step.icon className="w-6 h-6 text-[#00F000]" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="mb-2 text-white">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
