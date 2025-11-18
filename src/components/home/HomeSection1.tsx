import { motion } from "motion/react";
import {
  ArrowRight,
  Target,
  Users,
  Zap,
  Award,
  CheckCircle2,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import strategyIllustration from "figma:asset/41e5324c913d6af1c4c1ee33aa0fd8b57eb06e46.png";
import scientistIllustration from "figma:asset/94d8e6117acf6cad12ab47cf5749c64e294078c6.png";

export function HomeSection1() {
  const features = [
    {
      icon: Target,
      title: "Ownership Mindset",
      description:
        "We take full responsibility for delivering results that matter to your business",
    },
    {
      icon: Zap,
      title: "Future-Focused",
      description:
        "Building solutions that scale with emerging technologies and trends",
    },
    {
      icon: Users,
      title: "Deep Expertise",
      description:
        "Breadth and depth of knowledge across all data and AI domains",
    },
    {
      icon: Award,
      title: "Proven Results",
      description:
        "Track record of delivering measurable business value",
    },
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* First Section - Problem Solving */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full mb-6">
                <span className="text-sm font-medium text-[#4A5565]">
                  Our Approach
                </span>
              </div>
              <h2 className="text-5xl font-bold text-[#4A5565] mb-6 tracking-tight leading-tight">
                Data-Driven Certainty for Your{" "}
                <span className="bg-gradient-to-r from-[#00F000] to-emerald-600 bg-clip-text text-transparent">
                  Biggest Moves
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our method goes beyond surface-level answers; we analyze, question, and probe until we define what winning looks like for you. By integrating the best of AI and analytics, we transform ambiguity into a precise, actionable strategy. Your next move, made with total confidence.
              </p>
              <a
                href="/our-story/"
                className="inline-flex items-center gap-2 text-[#4A5565] font-medium hover:gap-3 transition-all group"
              >
                <span>Read our commitment to you</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00F000]/10 to-emerald-500/10 rounded-3xl blur-2xl"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2Mjg1MzExOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Data Analytics Strategy"
                className="relative z-10 w-full h-auto rounded-2xl border-2 border-gray-200/50 shadow-2xl ring-1 ring-[#00F000]/10"
              />
            </div>
          </div>
        </motion.div>

        {/* Second Section - The Gene */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691736843-90f58dce465e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMGlubm92YXRpb258ZW58MXx8fHwxNzYyODU1NDQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team Collaboration"
                className="relative z-10 w-full h-auto rounded-2xl border border-gray-200 shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full mb-6">
                <span className="text-sm font-medium text-[#4A5565]">
                  What Powers Us
                </span>
              </div>
              <h2 className="text-5xl font-bold text-[#4A5565] mb-6 tracking-tight leading-tight">
                The{" "}
                <span className="bg-gradient-to-r from-[#00F000] to-emerald-600 bg-clip-text text-transparent">
                  GreenMen Gene
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                It's how we turn complexity into clarity
              </p>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.title}
                      className="p-5 bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1,
                      }}
                    >
                      <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5 text-[#4A5565]" />
                      </div>
                      <h4 className="font-semibold text-[#4A5565] mb-1.5">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#how-it-works"
                  className="px-6 py-3 bg-[#4A5565] text-white font-medium rounded-lg hover:bg-[#4A5565]/90 transition-all shadow-lg inline-flex items-center gap-2"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  See How It Works
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="/careers/"
                  className="px-6 py-3 bg-white text-[#4A5565] border border-gray-200 font-medium rounded-lg hover:border-gray-300 hover:shadow-md transition-all"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Find Career With Us
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}