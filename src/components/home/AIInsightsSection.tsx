import { motion } from "motion/react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function AIInsightsSection() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#4A5565]" />
              <span className="text-sm font-medium text-[#4A5565]">Latest Insights</span>
            </div>
            <h2 className="text-5xl font-bold text-[#4A5565] mb-4 tracking-tight">
              Thought Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay ahead with our insights on AI, data analytics, and digital transformation
            </p>
          </div>

          {/* Featured Article */}
          <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:border-gray-300 transition-all duration-500">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-auto overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1744230673231-865d54a0aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwYnVzaW5lc3MlMjBpbnRlZ3JhdGlvbnxlbnwxfHx8fDE3NjI3NDgwNDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="AI Integration in Business"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-10 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00F000]"></div>
                  <span className="font-medium">Featured Article</span>
                  <span className="text-gray-300">•</span>
                  <span>8 min read</span>
                </div>
                <h3 className="text-3xl font-bold text-[#4A5565] mb-4 leading-tight">
                  Enhancing the Incorporation of{" "}
                  <span className="bg-gradient-to-r from-[#00F000] to-emerald-600 bg-clip-text text-transparent">
                    AI in Business Applications
                  </span>
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  As AI becomes a cornerstone of modern enterprise, businesses must move beyond isolated use cases to deeply integrate AI into their core applications. Discover the strategies for enhancing AI incorporation to drive true business value and innovation.
                </p>
                <motion.a
                  href="/insights/ai-integration/"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#4A5565] text-white font-medium rounded-lg hover:bg-[#4A5565]/90 transition-all shadow-lg self-start group"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Key takeaways */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: "Strategic Integration",
                description: "Move beyond siloed AI to embedded intelligence",
              },
              {
                title: "Business Value Focus",
                description: "Align AI initiatives with core business objectives",
              },
              {
                title: "Scalable Solutions",
                description: "Build AI systems that grow with your enterprise",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="p-6 bg-white rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5 text-[#00F000]" />
                </div>
                <h4 className="font-semibold text-[#4A5565] mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}