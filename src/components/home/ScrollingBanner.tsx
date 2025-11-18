import { motion } from "motion/react";
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import analyticsIllustration from "figma:asset/b3ae19198d77a9ab912d087accc7fbc1ceb6318e.png";

export function ScrollingBanner() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50/50">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#00F000]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-[#00F000]/10 to-emerald-500/10 border border-[#00F000]/20 rounded-full"
            >
              <Sparkles className="w-4 h-4 text-[#00F000]" />
              <span className="text-sm font-medium text-[#4A5565]">AI-Powered Data Solutions</span>
            </motion.div>

            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-bold text-[#4A5565] tracking-tight leading-[1.1]">
                Transform Data Into{" "}
                <span className="bg-gradient-to-r from-[#00F000] to-emerald-600 bg-clip-text text-transparent">
                  Competitive Advantage
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                We help enterprises unlock the full potential of their data through advanced analytics, AI/ML solutions, and strategic consulting.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href="/services/architect-advise/"
                className="group px-6 py-3 bg-[#4A5565] text-white rounded-lg font-medium inline-flex items-center gap-2 hover:bg-[#4A5565]/90 transition-all shadow-lg shadow-[#4A5565]/10"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="/our-story/"
                className="px-6 py-3 bg-white text-[#4A5565] border border-gray-200 rounded-lg font-medium hover:border-gray-300 hover:shadow-md transition-all"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Our Story
              </motion.a>
            </div>
          </motion.div>

          {/* Right Content - Modern Card */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main Analytics Card */}
              <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#00F000]/10 to-transparent rounded-2xl blur-2xl"></div>
                
                <div className="relative">
                  {/* Small badge above image */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="h-1 w-8 bg-gradient-to-r from-[#00F000] to-emerald-500 rounded-full"></div>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Analytics Platform</span>
                  </div>
                  
                  {/* Image container with subtle shadow and effects */}
                  <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-white p-4">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGFuYWx5dGljcyUyMGRhc2hib2FyZCUyMG1vZGVybnxlbnwxfHx8fDE3NjI4NTQ4NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Analytics workspace illustration"
                      className="w-full h-auto relative z-10 rounded-lg"
                    />
                    {/* Subtle glow effect under image */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/4 bg-[#00F000]/10 blur-3xl"></div>
                  </div>
                  
                  {/* Bottom caption with green accent */}
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F000] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F000]"></span>
                      </div>
                      <span className="text-sm font-medium text-gray-700">Live Dashboard</span>
                    </div>
                    <span className="text-xs text-gray-500">Real-time Data</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge - Top Right */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg border border-gray-100"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Zap className="w-5 h-5 text-orange-500" />
              </motion.div>

              {/* Floating Badge - Bottom Left */}
              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-xl px-4 py-2 shadow-lg border border-gray-100"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                {/* Fast badge removed */}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Removed scroll indicator */}
      </motion.div>
    </section>
  );
}