import { motion } from "motion/react";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export function EcommerceDatabricksGenie() {
  return (
    <div className="mt-16">
      {/* Breadcrumbs */}
      <section className="bg-gray-50 py-4 px-6 border-b border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="/" className="hover:text-[#00F000] transition-colors">
              Home
            </a>
            <ChevronRight className="w-4 h-4" />
            <a href="/services/innovate-with-ai-ml/" className="hover:text-[#00F000] transition-colors">
              Services
            </a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#00F000]">Databricks AI/BI Genie</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#4A5565] to-[#4A5565]">
        <div className="max-w-5xl mx-auto">
          <a href="/services/innovate-with-ai-ml/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </a>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 bg-[#00F000] text-[#4A5565] rounded-full text-sm font-medium mb-4">
              Case Study
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              e-Commerce Giant Transforms Self-Service Analytics with Databricks AI/BI Genie
            </h1>
            <p className="text-xl text-white/80">
              Transforming complex data analysis into natural language queries for enterprise-wide adoption
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZhbmNlZCUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjI4NjUxMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Databricks AI/BI Genie"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#4A5565] mb-6">The Challenge</h2>
          <p className="text-gray-600 mb-6">
            In the modern data landscape, many enterprises find that their traditional self-service analytics platforms are failing. While the goal is to empower all users, the reality is that data analysis remains a complex task. Business teams, from Marketing to Customer Support, struggle to get deep, actionable insights from their data, which is often siloed and difficult to query.
          </p>
          <p className="text-gray-600">
            Furthermore, concerns over data security and governance often create bottlenecks, as IT must manually manage permissions, limiting the promise of true self-service.
          </p>
        </div>
      </section>

      {/* Solution */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#4A5565] mb-6">The Solution</h2>
          <p className="text-gray-600 mb-8">
            GreenMen Consulting introduced Databricks AI/BI Genie, a revolutionary platform designed to solve this exact problem. The solution integrates advanced Artificial Intelligence (AI) directly with Business Intelligence (BI) to:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-[#00F000] rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-[#4A5565] mb-3">Simplify Complex Analysis</h3>
              <p className="text-gray-600">Allow all users, regardless of technical skill, to analyze complex data using natural language queries.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-[#00F000] rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-[#4A5565] mb-3">Enhance Self-Service</h3>
              <p className="text-gray-600">Significantly boost self-service analytics capabilities across the organization.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-[#00F000] rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-[#4A5565] mb-3">Unlock Deeper Insights</h3>
              <p className="text-gray-600">Move beyond surface-level reporting to uncover meaningful, predictive insights.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[#4A5565] mb-6">Implementation: Governance as the Foundation</h3>
          <p className="text-gray-600 mb-6">
            A core component of the Databricks AI/BI Genie implementation was establishing a foundation of Enhanced Security & Governance using Unity Catalog. This unified data governance solution was critical for enterprise-wide adoption.
          </p>

          <div className="bg-gray-50 p-6 rounded-xl mb-8">
            <h4 className="font-bold text-[#4A5565] mb-4">The architecture provided:</h4>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-[#00F000]">•</span>
                <span className="text-gray-600"><strong>Unified Governance:</strong> A central Metastore managed all data assets, from development and staging to production environments.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#00F000]">•</span>
                <span className="text-gray-600"><strong>Automated Access Control:</strong> Fine-grained access controls were automatically enforced. Data access was managed through "Groups" (e.g., Developers, Analysts, BU Users), ensuring users could only access data relevant to their roles via their "Workspaces".</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#00F000]">•</span>
                <span className="text-gray-600"><strong>Embedded Security:</strong> Security policies flowed directly into the BI queries.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#00F000]">•</span>
                <span className="text-gray-600"><strong>Enterprise-Grade Features:</strong> The platform provided full support for essential security functions, including audit logging, data masking, and data lineage.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#4A5565] mb-6">The Outcome: Actionable Insights for Key Departments</h2>
          <p className="text-gray-600 mb-8">
            By building on this secure and governed foundation, Databricks AI/BI Genie was successfully rolled out to key business units, including Marketing and Customer Support.
          </p>

          <div className="bg-white p-8 rounded-xl border border-gray-200 mb-8">
            <h3 className="text-xl font-bold text-[#4A5565] mb-6">Use Case: Customer Support Operations</h3>
            <p className="text-gray-600 mb-6">
              The platform delivered a comprehensive "Support Total Interactions" dashboard, consolidating data from previously separate channels (Calls, Chats, and Cases) into one unified view.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-[#4A5565] mb-3">At-a-Glance KPIs</h4>
                <p className="text-gray-600 mb-4">Leadership could instantly view:</p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-[#00F000]">→</span>
                    <span className="text-gray-600">Total interactions (43,465)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#00F000]">→</span>
                    <span className="text-gray-600">Total calls (26,285)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#00F000]">→</span>
                    <span className="text-gray-600">Total chats (10,370)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#00F000]">→</span>
                    <span className="text-gray-600">Total resolved cases (6,810)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#4A5565] mb-3">Deep-Dive Analysis</h4>
                <p className="text-gray-600 mb-4">Managers could drill down into granular details:</p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-[#00F000]">→</span>
                    <span className="text-gray-600">Chat Time metrics</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#00F000]">→</span>
                    <span className="text-gray-600">Avg. Queue Time</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#00F000]">→</span>
                    <span className="text-gray-600">Chat Disposition analysis</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#00F000]">→</span>
                    <span className="text-gray-600">Campus & Program Level insights</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#00F000]/10 border border-[#00F000] p-6 rounded-xl">
            <h4 className="font-bold text-[#4A5565] mb-3">Actionable Insights</h4>
            <p className="text-gray-600">
              By analyzing data at the "Campus Level" or "Program Level", the team could identify specific areas for improvement, optimize staffing, and understand the root cause of customer inquiries, ultimately enhancing efficiency and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#4A5565] mb-6">Conclusion</h2>
          <p className="text-gray-600 mb-6">
            Databricks AI/BI Genie successfully bridged the gap between complex data and end-user needs. By integrating AI with a robust BI framework built on a foundation of security and governance, GreenMen Consulting delivered on the true promise of self-service analytics.
          </p>
          <p className="text-gray-600">
            The client's teams are now empowered to move beyond simple reporting and use data to gain deeper insights and drive business value.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#4A5565] to-[#4A5565]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Analytics?</h2>
          <p className="text-xl text-white/80 mb-8">
            Let's discuss how we can help you implement AI-powered self-service analytics
          </p>
          <a
            href="/contact/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#00F000] text-[#4A5565] rounded-lg hover:bg-[#00D000] transition-all"
          >
            <span>Get Started</span>
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}