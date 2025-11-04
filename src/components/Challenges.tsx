import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Shield, RefreshCw, Link, GraduationCap } from "lucide-react";

const challenges = [
  {
    icon: Shield,
    challenge: "Data Governance",
    solution: "Privacy, compliance, and ethical AI frameworks built-in from day one.",
  },
  {
    icon: RefreshCw,
    challenge: "Model Drift",
    solution: "Continuous retraining pipelines that adapt to business changes automatically.",
  },
  {
    icon: Link,
    challenge: "Integration Complexity",
    solution: "Seamless bridges between legacy systems and modern AI frameworks.",
  },
  {
    icon: GraduationCap,
    challenge: "Talent Gap",
    solution: "Intuitive tools that simplify AI adoption for non-experts and domain specialists.",
  },
];

export function Challenges() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-center mb-6 text-[#111111]"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Challenges and<br />
          <span className="text-[#00F000]">How We Solve Them</span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We tackle the toughest obstacles in AI integration with proven solutions and enterprise-grade reliability.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {challenges.map((item, index) => (
            <motion.div
              key={item.challenge}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-[#00F000]/30"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-[#00F000]/10 rounded-xl flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-[#00F000]" />
                </div>
                <div>
                  <h3 className="mb-3 text-[#111111]">{item.challenge}</h3>
                  <p className="text-gray-600">{item.solution}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
