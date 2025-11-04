import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Gauge, TrendingUp, Users, Zap } from "lucide-react";

const impacts = [
  {
    icon: Gauge,
    title: "Operational Efficiency",
    description: "Automate workflows, reduce manual effort.",
  },
  {
    icon: TrendingUp,
    title: "Improved Decision-Making",
    description: "Predictive analytics and proactive insights.",
  },
  {
    icon: Users,
    title: "Hyper-Personalization",
    description: "Adaptive experiences for each user.",
  },
  {
    icon: Zap,
    title: "Faster Innovation Cycles",
    description: "From idea to deployment in record time.",
  },
];

export function Impact() {
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
          AI That Drives<br />
          <span className="text-[#00F000]">Measurable Results</span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Deep AI integration delivers tangible business value across every dimension of your enterprise.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.title}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <div className="relative inline-block mb-6">
                {/* Outer glowing ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-[#00F000]/30"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
                {/* Main circle */}
                <div className="relative w-24 h-24 rounded-full border-2 border-[#00F000] flex items-center justify-center bg-gradient-to-br from-[#00F000]/10 to-transparent group-hover:shadow-[0_0_20px_rgba(0,240,0,0.4)] transition-all duration-300">
                  <impact.icon className="w-10 h-10 text-[#00F000]" />
                </div>
              </div>
              <h3 className="text-[#111111] mb-2">{impact.title}</h3>
              <p className="text-gray-600">{impact.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}