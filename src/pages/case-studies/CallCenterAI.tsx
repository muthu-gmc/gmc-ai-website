import { motion } from "motion/react";
import { ChevronRight, Linkedin, Twitter } from "lucide-react";

export function CallCenterAI() {
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
            <a href="/services/innovate-with-ai-ml/" className="hover:text-[#00F000] transition-colors">
              Services
            </a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#00F000]">Case Study</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Content - 2/3 width */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-sm text-gray-500 mb-2">CASE STUDY | e-Commerce</p>
                <h1 className="text-4xl md:text-5xl text-[#111111] mb-8">
                  Databricks AI/BI Genie: How Business Intelligence Met AI to Make Self-Service Analytics Finally Work
                </h1>

                {/* Hero Image */}
                <div className="mb-8">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZhbmNlZCUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjI4NjUxMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Conversational AI Analytics"
                    className="w-full h-auto rounded-lg"
                  />
                </div>

                {/* Tags */}
                <div className="mb-8">
                  <p className="text-sm text-[#00F000] mb-2">TAGS:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">AI/BI</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Databricks</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">e-Commerce</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Self-Service Analytics</span>
                  </div>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl text-[#111111] mt-8 mb-4">The Challenge</h2>
                  <p className="text-gray-700 mb-6">
                    In the modern data landscape, many enterprises find that their traditional self-service analytics platforms are failing. While the goal is to empower all users, the reality is that data analysis remains a complex task. Business teams, from Marketing to Customer Support, struggle to get deep, actionable insights from their data, which is often siloed and difficult to query. Furthermore, concerns over data security and governance often create bottlenecks, as IT must manually manage permissions, limiting the promise of true self-service.
                  </p>

                  <h2 className="text-2xl text-[#111111] mt-8 mb-4">The Solution</h2>
                  <p className="text-gray-700 mb-6">
                    Greenmen Consulting introduced Databricks AI/BI Genie, a revolutionary platform designed to solve this exact problem. The solution integrates advanced Artificial Intelligence (AI) directly with Business Intelligence (BI) to:
                  </p>
                  
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                    <li><strong>Simplify Complex Analysis:</strong> Allow all users, regardless of technical skill, to analyze complex data.</li>
                    <li><strong>Enhance Self-Service:</strong> Significantly boost self-service analytics capabilities across the organization.</li>
                    <li><strong>Unlock Deeper Insights:</strong> Move beyond surface-level reporting to uncover meaningful, predictive insights.</li>
                  </ul>

                  <h2 className="text-2xl text-[#111111] mt-8 mb-4">Implementation: Governance as the Foundation</h2>
                  <p className="text-gray-700 mb-6">
                    A core component of the Databricks AI/BI Genie implementation was establishing a foundation of Enhanced Security & Governance using Unity Catalog. This unified data governance solution was critical for enterprise-wide adoption.
                  </p>

                  <p className="text-gray-700 mb-4">This architecture provided:</p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                    <li><strong>Unified Governance:</strong> A central Metastore managed all data assets, from development and staging to production environments.</li>
                    <li><strong>Automated Access Control:</strong> Fine-grained access controls were automatically enforced. Data access was managed through "Groups" (e.g., Developers, Analysts, BU Users), ensuring users could only access data relevant to their roles via their "Workspaces".</li>
                    <li><strong>Embedded Security:</strong> Security policies flowed directly into the BI queries.</li>
                    <li><strong>Enterprise-Grade Features:</strong> The platform provided full support for essential security functions, including audit logging, data masking, and data lineage.</li>
                  </ul>

                  <h2 className="text-2xl text-[#111111] mt-8 mb-4">The Outcome: Actionable Insights for Key Departments</h2>
                  <p className="text-gray-700 mb-6">
                    By building on this secure and governed foundation, Databricks AI/BI Genie was successfully rolled out to key business units, including Marketing and Customer Support.
                  </p>

                  <h3 className="text-xl text-[#111111] mt-6 mb-3">Use Case: Customer Support Operations</h3>
                  <p className="text-gray-700 mb-6">
                    The platform delivered a comprehensive "Support Total Interactions" dashboard, consolidating data from previously separate channels (Calls, Chats, and Cases) into one unified view.
                  </p>

                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                    <li><strong>At-a-Glance KPIs:</strong> Leadership could instantly view total interactions (43,465), total calls (26,285), total chats (10,370), and total resolved cases (6,810) for a given period.</li>
                    <li><strong>Deep-Dive Analysis:</strong> Managers could drill down into granular details. The "Support Chat Interactions" dashboard revealed critical operational metrics like Chat Time, Avg. Queue Time, and Chat Disposition (e.g., "Abandon," "Cancel," "Financial").</li>
                    <li><strong>Actionable Insights:</strong> By analyzing data at the "Campus Level" or "Program Level", the team could identify specific areas for improvement, optimize staffing, and understand the root cause of customer inquiries, ultimately enhancing efficiency and customer satisfaction.</li>
                  </ul>

                  <h2 className="text-2xl text-[#111111] mt-8 mb-4">Results</h2>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                    <li>Enabled true self-service analytics across the enterprise</li>
                    <li>Unified data governance with automated access control</li>
                    <li>Consolidated multi-channel data into single dashboards</li>
                    <li>Empowered non-technical users to gain deep insights</li>
                    <li>Enhanced data security with enterprise-grade features</li>
                    <li>Reduced IT bottlenecks for data access and permissions</li>
                  </ul>

                  <h2 className="text-2xl text-[#111111] mt-8 mb-4">Conclusion</h2>
                  <p className="text-gray-700 mb-6">
                    Databricks AI/BI Genie successfully bridged the gap between complex data and end-user needs. By integrating AI with a robust BI framework built on a foundation of security and governance, Greenmen Consulting delivered on the true promise of self-service analytics. The client's teams are now empowered to move beyond simple reporting and use data to gain deeper insights and drive business value.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Sidebar - 1/3 width */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-50 rounded-lg p-6 sticky top-24"
              >
                {/* Share Section */}
                <div className="mb-8">
                  <h3 className="text-[#00F000] mb-4">Share</h3>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-[#00F000] hover:bg-[#00F000] hover:text-white transition-all"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-[#00F000] hover:bg-[#00F000] hover:text-white transition-all"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <hr className="border-gray-200 mb-8" />

                {/* Contact Section */}
                <div>
                  <h3 className="text-[#00F000] mb-4">To know more</h3>
                  <a
                    href="/contact-us/"
                    className="inline-flex items-center gap-2 bg-[#111111] text-white px-6 py-3 rounded-lg hover:bg-[#00F000] hover:text-[#111111] transition-all"
                  >
                    Contact Us
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}