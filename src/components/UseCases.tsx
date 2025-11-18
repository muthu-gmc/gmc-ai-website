import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Heart, DollarSign, ShoppingCart, Factory } from "lucide-react";

const useCases = [
  {
    icon: Heart,
    title: "Healthcare",
    description: "Predictive diagnostics and automated patient documentation.",
  },
  {
    icon: DollarSign,
    title: "Finance",
    description: "Fraud detection, credit scoring, and risk modeling.",
  },
  {
    icon: ShoppingCart,
    title: "Retail",
    description: "Personalized recommendations and inventory forecasting.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Predictive maintenance and supply chain optimization.",
  },
];

export function UseCases() {
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
          Use Cases Across<br />
          <span className="text-[#00F000]">Industries</span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          From healthcare to manufacturing, deep AI integration transforms how industries operate and compete.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200 hover:border-[#00F000]/30"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <div className="w-14 h-14 mb-6 bg-[#00F000]/10 rounded-xl flex items-center justify-center group-hover:bg-[#00F000]/20 transition-all duration-300">
                <useCase.icon className="w-7 h-7 text-[#00F000]" />
              </div>
              <h3 className="mb-3 text-[#111111]">{useCase.title}</h3>
              <p className="text-gray-600">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}