import { motion } from "motion/react";
import { ChevronRight, Database, Cpu, Target, Users, TrendingUp, Shield, Zap, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { useState } from "react";
import { ContactModal } from "../../components/ContactModal";


export function AIIntegration() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="mt-16">
      {/* Breadcrumbs */}
      <section className="bg-gray-50 py-4 px-6 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="/" className="hover:text-[#00F000] transition-colors">
              Home
            </a>
            <ChevronRight className="w-4 h-4" />
            <a href="/insights/ai-integration/" className="hover:text-[#00F000] transition-colors">
              Insights
            </a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#00F000]">AI Integration</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#111111] to-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-white mb-6">
                Enhancing the Incorporation of{" "}
                <span className="text-[#00F000]">AI in Business Applications</span>
              </h1>
              <p className="text-white/80">
                Moving from isolated AI models to strategic, deep integration that drives competitive advantage
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1744230673231-865d54a0aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwYnVzaW5lc3MlMjBpbnRlZ3JhdGlvbnxlbnwxfHx8fDE3NjI3NDgwNDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="AI Integration"
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#111111] mb-6">Introduction</h2>
            <p className="text-gray-700 mb-6">
              Artificial Intelligence (AI) is no longer a futuristic concept but a foundational element of modern enterprise. However, many organizations struggle to move beyond isolated, standalone AI models. The true competitive advantage lies in deeply embedding AI capabilities directly into core business applications.
            </p>
            <p className="text-gray-700">
              This strategic integration transforms AI from a simple tool into a core driver of business value, automating processes, enhancing decision-making, and creating intelligent, responsive services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#111111] mb-6">The Challenge: Moving Beyond Siloed AI</h2>
            <p className="text-gray-700 mb-12 max-w-4xl">
              Many businesses face significant hurdles when trying to integrate AI on a broad scale. These challenges often include:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="bg-white border border-gray-200 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="w-12 h-12 bg-[#00F000]/10 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-[#00F000]" />
                </div>
                <h3 className="text-[#111111] mb-3">Data Silos</h3>
                <p className="text-gray-700">
                  AI models are only as good as the data they consume. When data is locked in separate, disconnected systems, it's difficult to build a comprehensive, intelligent view of the business.
                </p>
              </motion.div>

              <motion.div
                className="bg-white border border-gray-200 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="w-12 h-12 bg-[#00F000]/10 rounded-lg flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6 text-[#00F000]" />
                </div>
                <h3 className="text-[#111111] mb-3">Legacy System Integration</h3>
                <p className="text-gray-700">
                  Older, "legacy" applications were not designed for the demands of modern AI. Integrating them can be complex, costly, and slow.
                </p>
              </motion.div>

              <motion.div
                className="bg-white border border-gray-200 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="w-12 h-12 bg-[#00F000]/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-[#00F000]" />
                </div>
                <h3 className="text-[#111111] mb-3">Lack of a Clear Strategy</h3>
                <p className="text-gray-700">
                  Without a unified roadmap, teams often build redundant solutions or focus on low-impact use cases, failing to align AI initiatives with core business objectives.
                </p>
              </motion.div>

              <motion.div
                className="bg-white border border-gray-200 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="w-12 h-12 bg-[#00F000]/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#00F000]" />
                </div>
                <h3 className="text-[#111111] mb-3">Skill Gaps</h3>
                <p className="text-gray-700">
                  There is often a disconnect between data science teams who build the models and the application developers who must implement them.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategies Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#111111] mb-6">Strategies for Deep Integration & Success</h2>
            <p className="text-gray-700 mb-12 max-w-4xl">
              To successfully enhance AI incorporation, businesses must adopt a holistic approach.
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-[#00F000] rounded-full flex items-center justify-center text-[#111111]">
                        1
                      </div>
                    </div>
                    <div>
                      <h3 className="text-[#111111] mb-3">Develop a Unified Data Strategy</h3>
                      <p className="text-gray-700">
                        Break down data silos. Establish a modern data foundation (like a "data fabric" or "mesh") that makes high-quality, relevant data accessible to all your business applications and AI models.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-[#00F000] rounded-full flex items-center justify-center text-[#111111]">
                        2
                      </div>
                    </div>
                    <div>
                      <h3 className="text-[#111111] mb-3">Create an AI-Driven Roadmap</h3>
                      <p className="text-gray-700">
                        Prioritize AI initiatives based on their potential business impact. This roadmap should guide the integration of AI capabilities, starting with high-value processes and expanding across the enterprise.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1573757056004-065ad36e2cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlY2hub2xvZ3klMjBpbm5vdmF0aW9ufGVufDF8fHx8MTc2Mjc0ODA0OXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Business Strategy"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1760531932521-8eb5a064dbca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwaW50ZWdyYXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2Mjc0ODA0OXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Application Integration"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-[#00F000] rounded-full flex items-center justify-center text-[#111111]">
                        3
                      </div>
                    </div>
                    <div>
                      <h3 className="text-[#111111] mb-3">Integrate at the Application Layer</h3>
                      <p className="text-gray-700">
                        Instead of building standalone AI tools, focus on embedding AI features into the applications your teams already use every day. This could mean adding intelligent forecasting to your financial software, predictive maintenance alerts to your operational dashboards, or personalized recommendations to your sales platform.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-[#00F000] rounded-full flex items-center justify-center text-[#111111]">
                        4
                      </div>
                    </div>
                    <div>
                      <h3 className="text-[#111111] mb-3">Focus on Business Value, Not Just Technology</h3>
                      <p className="text-gray-700">
                        The goal of any AI project should be to solve a specific business problem. By focusing on the desired outcome—such as increasing efficiency, reducing risk, or improving customer experience—you ensure that your AI investments deliver a clear and measurable return.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Value Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#111111] to-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white mb-6 text-center">The Business Value</h2>
            <p className="text-white/80 max-w-4xl mx-auto mb-12 text-center">
              By strategically embedding AI into your business applications, you move from simply using AI to becoming an AI-driven organization. This deep integration unlocks:
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: TrendingUp,
                  title: "New Efficiencies",
                  description: "Automate complex processes and free your teams to focus on high-value work",
                },
                {
                  icon: Zap,
                  title: "Powerful Insights",
                  description: "Deliver actionable intelligence directly to decision-makers in real-time",
                },
                {
                  icon: Shield,
                  title: "Competitive Advantage",
                  description: "Build sustainable differentiation in an increasingly intelligent world",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="w-16 h-16 bg-[#00F000]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-[#00F000]" />
                    </div>
                    <h3 className="text-white mb-3">{item.title}</h3>
                    <p className="text-white/80">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[#111111] mb-6">Ready to transform your business with AI?</h2>
          <p className="text-gray-700 mb-8">
            Let's discuss how we can help you strategically integrate AI into your core business applications.
          </p>
          <motion.a
            href="#contact"
            className="inline-block px-8 py-3 bg-[#00F000] text-[#111111] rounded-sm hover:bg-[#00F000]/90 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setContactModalOpen(true);
            }}
          >
            Contact Us
          </motion.a>
        </div>
      </section>
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
