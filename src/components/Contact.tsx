import { motion } from "motion/react";
import { Button } from "./ui/button";

export function ContactPage() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#111111] via-[#0a0a0a] to-[#000000] pt-20"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#00F000 1px, transparent 1px), linear-gradient(90deg, #00F000 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Animated nodes */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#00F000] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-white mb-6">
            Get in <span className="text-[#00F000]">Touch</span>
          </h1>
          <p className="text-gray-300 text-lg mb-10">
            Have a question or want to collaborate? Fill out the form below, and
            our team will reach out soon.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col gap-4 max-w-md mx-auto"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="bg-transparent border border-[#00F000] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00F000]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-transparent border border-[#00F000] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00F000]"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="bg-transparent border border-[#00F000] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00F000]"
          ></textarea>

          <Button
            size="lg"
            className="bg-[#00F000] text-black hover:bg-[#00F000]/90 hover:shadow-[0_0_20px_rgba(0,240,0,0.5)] transition-all duration-300"
          >
            Send Message
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
