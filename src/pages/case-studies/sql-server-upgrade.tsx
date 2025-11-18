import { motion } from "motion/react";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export function SQLServerUpgrade() {
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
            <a href="/services/build-modernize/" className="hover:text-[#00F000] transition-colors">
              Services
            </a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#00F000]">SQL Server Upgrades</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#4A5565] to-[#4A5565]">
        <div className="max-w-5xl mx-auto">
          <a href="/services/build-modernize/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
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
              Modernizing the Data Core via SQL Server Upgrade
            </h1>
            <p className="text-xl text-white/80">
              76% reduction in query time, 173% increase in throughput
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhYmFzZSUyMHBlcmZvcm1hbmNlJTIwc2VydmVyfGVufDF8fHx8MTc2Mjg4NDczOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="SQL Server Upgrade"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#4A5565] mb-8">Project Overview</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-bold text-[#4A5565] mb-2">Client</h3>
              <p className="text-gray-600">Financial Services, Digital Lending</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-bold text-[#4A5565] mb-2">Core Systems Affected</h3>
              <p className="text-gray-600">Loan Lifecycle Management System (LLMS) Database, Document Management System (DMS) Metadata</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-bold text-[#4A5565] mb-2">Platform</h3>
              <p className="text-gray-600">Microsoft SQL Server (Upgrade from SQL Server 2014 to SQL Server 2022)</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-bold text-[#4A5565] mb-2">Cloud Environment</h3>
              <p className="text-gray-600">AWS (Amazon Web Services) - RDS (Relational Database Service)</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-bold text-[#4A5565] mb-2">Tools</h3>
              <p className="text-gray-600">New Relic (DB Monitoring), SQL Server Migration Assistant (SSMA), Query Store</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-bold text-[#4A5565] mb-2">Mandate</h3>
              <p className="text-gray-600">Database upgrade to enhance query performance, security posture, and leverage modern SQL capabilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#4A5565] mb-6">The Challenge: Legacy Database as a Scalability Ceiling</h2>
          <p className="text-gray-600 mb-6">
            Despite application-level (Java/JBoss) optimizations, Financial Services, Digital Lending's growth was being capped by the limitations of their legacy SQL Server database instance. Running on an aging version (e.g., SQL Server 2014) introduced significant operational risks and performance ceilings.
          </p>
          
          <h3 className="text-xl font-bold text-[#4A5565] mb-4">Key Symptoms and Risks Identified:</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-[#00F000] mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-bold text-[#4A5565]">I/O Latency and Timeouts</p>
                <p className="text-gray-600">The database struggled with transactional concurrency during peak load, resulting in increased disk I/O latency and frequent SQL command timeouts, directly impacting LLMS API performance.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-[#00F000] mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-bold text-[#4A5565]">Lack of Modern Features</p>
                <p className="text-gray-600">Inability to leverage advanced features like Intelligent Query Processing (IQP) from newer SQL Server versions, leading to inefficient query plans and poor resource utilization.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-[#00F000] mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-bold text-[#4A5565]">Security and Compliance Gaps</p>
                <p className="text-gray-600">The older version faced end-of-life support risks and lacked modern security enhancements (e.g., Always Encrypted, enhanced data masking) required for strict financial services compliance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#4A5565] mb-6">The Solution: Phased Migration to SQL Server 2022 (RDS)</h2>
          <p className="text-gray-600 mb-8">
            The solution involved a structured, phased migration and upgrade to the latest version of SQL Server running on Amazon RDS. This strategy was designed to minimize downtime, ensure data integrity, and immediately benefit from performance improvements.
          </p>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-[#4A5565] mb-4">Phase 1: Assessment and Pre-Migration Tuning</h3>
              <ul className="space-y-2">
                <li className="flex gap-3">
                  <span className="text-[#00F000]">•</span>
                  <span className="text-gray-600"><strong>Deep Baseline Analysis:</strong> Used New Relic Database Monitoring to capture the top 20 slowest and most frequently executed queries (by duration and count) as a performance benchmark.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#00F000]">•</span>
                  <span className="text-gray-600"><strong>Compatibility Check:</strong> Utilized SQL Server Migration Assistant (SSMA) to analyze the existing database schema, stored procedures, and scripts, identifying potential compatibility issues before the migration began.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-[#4A5565] mb-4">Phase 2: Migration and Upgrade</h3>
              <ul className="space-y-2">
                <li className="flex gap-3">
                  <span className="text-[#00F000]">•</span>
                  <span className="text-gray-600"><strong>Blue/Green Deployment:</strong> A new, identical SQL Server 2022 RDS instance was provisioned (the 'Green' environment).</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#00F000]">•</span>
                  <span className="text-gray-600"><strong>Data Migration:</strong> Data was replicated to the new instance, leveraging native AWS/RDS tools for high-speed, minimal-downtime transfer.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#00F000]">•</span>
                  <span className="text-gray-600"><strong>Testing and Validation:</strong> Extensive functional, integration, and performance testing ensured the LLMS and DMS performed correctly against the new database engine.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-[#4A5565] mb-4">Phase 3: Post-Upgrade Optimization and Feature Leverage</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-bold text-[#4A5565]">Area of Optimization</th>
                      <th className="px-4 py-3 text-left font-bold text-[#4A5565]">Specific Action Taken</th>
                      <th className="px-4 py-3 text-left font-bold text-[#4A5565]">Impact on Database Performance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-gray-600">Query Performance</td>
                      <td className="px-4 py-3 text-gray-600">Enabled Compatibility Level 160 to leverage IQP features like Batch Mode Memory Grant Feedback</td>
                      <td className="px-4 py-3 text-gray-600">Reduction in CPU time spent on query compilation</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-600">Indexing and I/O</td>
                      <td className="px-4 py-3 text-gray-600">Reran optimization scripts specific to the new SQL Server engine. Consolidated fragmentation using online index rebuilds</td>
                      <td className="px-4 py-3 text-gray-600">Accelerated data retrieval across the entire LLMS</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-600">Security & Compliance</td>
                      <td className="px-4 py-3 text-gray-600">Implemented Always Encrypted for sensitive PII data and used Dynamic Data Masking</td>
                      <td className="px-4 py-3 text-gray-600">Strengthened data protection posture</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#4A5565] mb-6">Results and Quantifiable Business Impact</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-[#4A5565]">Metric</th>
                  <th className="px-4 py-3 text-left font-bold text-[#4A5565]">Before Upgrade (SQL 2014)</th>
                  <th className="px-4 py-3 text-left font-bold text-[#4A5565]">After Upgrade (SQL 2022)</th>
                  <th className="px-4 py-3 text-left font-bold text-[#4A5565]">Improvement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white">
                  <td className="px-4 py-3 text-gray-600">P95 Query Execution Time (LLMS)</td>
                  <td className="px-4 py-3 text-gray-600">485 ms</td>
                  <td className="px-4 py-3 text-gray-600">115 ms</td>
                  <td className="px-4 py-3 text-[#00F000] font-bold">76% Reduction</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-gray-600">Database Transaction Throughput (TPS)</td>
                  <td className="px-4 py-3 text-gray-600">150 Transactions/second</td>
                  <td className="px-4 py-3 text-gray-600">410 Transactions/second</td>
                  <td className="px-4 py-3 text-[#00F000] font-bold">173% Increase</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 text-gray-600">LLMS API Timeouts (Peak Load)</td>
                  <td className="px-4 py-3 text-gray-600">Avg. 15 per hour</td>
                  <td className="px-4 py-3 text-gray-600">Zero</td>
                  <td className="px-4 py-3 text-[#00F000] font-bold">100% Elimination</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-gray-600">DB I/O Latency</td>
                  <td className="px-4 py-3 text-gray-600">Avg. 7 ms</td>
                  <td className="px-4 py-3 text-gray-600">Avg. 1.8 ms</td>
                  <td className="px-4 py-3 text-[#00F000] font-bold">74% Reduction</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 text-gray-600">Security Compliance Score</td>
                  <td className="px-4 py-3 text-gray-600">Good (Meets minimum)</td>
                  <td className="px-4 py-3 text-gray-600">Excellent (Exceeds industry best practice)</td>
                  <td className="px-4 py-3 text-[#00F000] font-bold">Higher Audit Confidence</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600">
            The successful migration ensures Financial Services, Digital Lending can handle massive projected transaction increases while maintaining the highest levels of security and data integrity. The stability provided by the new SQL Server version allows the internal development team to shift focus from reactive tuning to feature innovation.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#4A5565] to-[#4A5565]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Modernize Your Database?</h2>
          <p className="text-xl text-white/80 mb-8">
            Let's discuss how we can help you achieve similar results
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
