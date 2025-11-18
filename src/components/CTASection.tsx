import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Button } from "./ui/button";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-6 bg-gradient-to-br from-[#4A5565] via-[#3a424f] to-[#2a2f39] overflow-hidden">
      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#00F000 1px, transparent 1px), linear-gradient(90deg, #00F000 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00F000]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#00F000]/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          className="mb-6 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Transform Your Enterprise with<br />
          <span className="text-[#00F000]">Deep AI Integration</span>
        </motion.h2>

        <motion.p
          className="text-gray-300 text-xl mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          From architecture to execution — we help you embed intelligence at every layer of your business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button 
            size="lg"
            className="bg-[#00F000] text-[#4A5565] hover:bg-[#00F000]/90 hover:shadow-[0_0_30px_rgba(0,240,0,0.6)] transition-all duration-300 text-lg px-8 py-6"
          >
            Get Started Today
          </Button>
        </motion.div>
      </div>
    </section>
  );
}