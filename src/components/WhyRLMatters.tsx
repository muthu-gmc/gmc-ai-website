import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Sparkles, Database, Brain, Cpu, Code } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Generative UI (GenUI)",
    description: "Interfaces dynamically adapt to user behavior and context.",
  },
  {
    icon: Database,
    title: "Predictive Data Management",
    description: "AI anticipates data needs, reducing latency and improving responsiveness.",
  },
  {
    icon: Brain,
    title: "Contextual Business Logic",
    description: "Applications adjust behavior based on time, location, and user patterns.",
  },
  {
    icon: Cpu,
    title: "Intelligent Resource Allocation",
    description: "Systems optimize computing resources in real time.",
  },
  {
    icon: Code,
    title: "AI-Driven DevOps",
    description: "AI copilots automate code testing, deployment, and maintenance.",
  },
];

export function WhyRLMatters() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 bg-[#111111] relative overflow-hidden">
      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #00F000 2px, transparent 2px), radial-gradient(circle at 80% 80%, #00F000 2px, transparent 2px)`,
          backgroundSize: '100px 100px',
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-center mb-6 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Core Elements of<br />
          <span className="text-[#00F000]">Deep AI Integration</span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 text-lg max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          AI embedded at every layer transforms how enterprise systems think, learn, and evolve.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative p-8 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-2xl border border-[#00F000]/20 hover:border-[#00F000]/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              {/* Glowing effect on hover */}
              <div className="absolute inset-0 bg-[#00F000]/0 group-hover:bg-[#00F000]/5 rounded-2xl transition-all duration-300" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 mb-6 bg-[#00F000]/10 rounded-xl flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(0,240,0,0.3)] transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-[#00F000]" />
                </div>
                <h3 className="mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}