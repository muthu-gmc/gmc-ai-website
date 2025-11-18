import { motion } from "motion/react";
import { Button } from "./ui/button";

export function HeroSection() {
  const randomPercent = () => (crypto.getRandomValues(new Uint32Array(1))[0] % 100) + "%";
  const random = () => crypto.getRandomValues(new Uint32Array(1))[0] % 100;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#4A5565] via-[#3a424f] to-[#2a2f39] pt-20">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#00F000 1px, transparent 1px), linear-gradient(90deg, #00F000 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Animated nodes */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#00F000] rounded-full"
          style={{
            left: randomPercent(),
            top: randomPercent(),
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + random() * 2,
            repeat: Infinity,
            delay: random() * 2,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-white mb-6">
            Enhancing the Incorporation of AI<br />
            <span className="text-[#00F000]">in Business Applications</span>
          </h1>
        </motion.div>

        <motion.p
          className="text-gray-300 text-xl max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We embed AI into the heart of enterprise systems — enabling them to think, learn, and adapt, not just automate.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button 
            size="lg"
            className="bg-[#00F000] text-[#4A5565] hover:bg-[#00F000]/90 hover:shadow-[0_0_20px_rgba(0,240,0,0.5)] transition-all duration-300"
          >
            Explore Our Platform
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-[#4A5565] transition-all duration-300"
          >
            Request a Demo
          </Button>
        </motion.div>

        {/* Animated wave visualization */}
        <motion.div
          className="mt-20 opacity-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <svg width="100%" height="100" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <motion.path
              d="M0,50 Q250,0 500,50 T1000,50"
              stroke="#00F000"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.8, repeat: Infinity, repeatType: "reverse" }}
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}