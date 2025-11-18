import { motion } from "motion/react";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export function LakehouseModernization() {
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
            <span className="text-[#00F000]">Lakehouse Modernization with AI</span>
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
              Accelerating Lakehouse Modernization with an AI-Driven Development Lifecycle
            </h1>
            <p className="text-xl text-white/80">
              75% reduction in development time through AI-accelerated SDLC for Financial Services, Home Loan/Mortgage
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1762330465857-07e4c81c0dfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGRldmVsb3BtZW50JTIwY29kaW5nfGVufDF8fHx8MTc2Mjg3MDc3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Lakehouse Modernization"
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
              <p className="text-gray-600">Financial Services, Home Loan/Mortgage Lending</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-bold text-[#4A5565] mb-2">Industry</h3>
              <p className="text-gray-600">Financial Services, Home Loan/Mortgage Lending</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-bold text-[#4A5565] mb-2">Core Systems Migrated</h3>
              <p className="text-gray-600">Legacy MySQL OLTP Database, Legacy PostgreSQL Data Mart</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-bold text-[#4A5565] mb-2">New Data Platform</h3>
              <p className="text-gray-600">Databricks Lakehouse Platform</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-bold text-[#4A5565] mb-2">Cloud Environment</h3>
              <p className="text-gray-600">AWS (Amazon Web Services)</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-bold text-[#4A5565] mb-2">Key Technologies</h3>
              <p className="text-gray-600">Delta Live Tables (DLT), Unity Catalog, Databricks SQL, AI-Assisted Development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#4A5565] mb-6">The Challenge: The Burden of Legacy Data</h2>
          <p className="text-gray-600 mb-6">
            The client, a prominent financial services provider specializing in the Home Loan and Mortgage sector, was paralyzed by an aging data infrastructure.
          </p>
          
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-[#00F000] mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-bold text-[#4A5565]">Data Silos and Fragmentation</p>
                <p className="text-gray-600">Operational data was locked in rigid, on-premises relational databases (MySQL, PostgreSQL), making it impossible to get a unified view of a single customer's loan portfolio.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-[#00F000] mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-bold text-[#4A5565]">Stale, Untrustworthy BI</p>
                <p className="text-gray-600">The traditional batch ETL process took over 24 hours to complete. Analysts spent ~10 hours/week manually cross-referencing reports due to frequent inconsistencies.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-[#00F000] mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-bold text-[#4A5565]">Absence of Automated Quality Gate</p>
                <p className="text-gray-600">No automated mechanism for strict data validation. Data quality issues only surfaced in final Power BI reports, causing crises and delays.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-[#00F000] mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-bold text-[#4A5565]">Scaling Bottleneck</p>
                <p className="text-gray-600">On-premises systems could not scale to handle growth in transaction volume, leading to high operational costs and performance degradation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#4A5565] mb-6">The Solution: AI-Driven SDLC Meets Databricks Lakehouse</h2>
          <p className="text-gray-600 mb-8">
            To meet the client's urgent need, we adopted an AI-driven software development lifecycle (SDLC). By leveraging generative AI code assistants, our team automated over 60% of the development code—from generating PySpark/SQL boilerplate for DLT pipelines to creating complex data quality rules. This AI-first approach was the key to accelerating the project delivery from a planned 4 months to just 1 month.
          </p>

          <div className="bg-[#00F000]/10 border border-[#00F000] p-6 rounded-xl mb-8">
            <h3 className="text-xl font-bold text-[#4A5565] mb-3">🚀 Key Innovation</h3>
            <p className="text-gray-600">
              This accelerated process was used to build a comprehensive data modernization strategy on the Databricks Lakehouse Platform, demonstrating how AI can dramatically reduce time-to-value for complex data projects.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-[#4A5565] mb-4">AI-Generated Medallion Architecture</h3>
              <p className="text-gray-600 mb-4">
                Our AI-assisted developers rapidly scaffolded the new platform using a Medallion Architecture:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-[#00F000]">•</span>
                  <span className="text-gray-600"><strong>Ingestion (Bronze Layer):</strong> Automated ingestion synced data from MySQL and PostgreSQL into raw, immutable Bronze Delta tables using Fivetran and Databricks Auto Loader.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#00F000]">•</span>
                  <span className="text-gray-600"><strong>Cleansing & Validation (Silver Layer):</strong> Core transformation layer built entirely using Delta Live Tables (DLT). AI code-gen tools were instrumental in defining declarative transformations and implementing automated data validation using Expectations.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#00F000]">•</span>
                  <span className="text-gray-600"><strong>Consumption (Gold Layer):</strong> Final, highly governed tables materialized for high-performance query execution using Databricks SQL Endpoints.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-[#4A5565] mb-4">AI-Accelerated Data Quality via DLT Expectations</h3>
              <p className="text-gray-600 mb-4">
                Our AI-driven process rapidly generated a robust data quality (DQ) framework using DLT Expectations:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-bold text-[#4A5565]">Validation Type</th>
                      <th className="px-4 py-3 text-left font-bold text-[#4A5565]">Example Constraint</th>
                      <th className="px-4 py-3 text-left font-bold text-[#4A5565]">DLT Action</th>
                      <th className="px-4 py-3 text-left font-bold text-[#4A5565]">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-gray-600">Data Type / Format</td>
                      <td className="px-4 py-3 text-gray-600">CAST(interest_rate AS DECIMAL(5, 2)) IS NOT NULL</td>
                      <td className="px-4 py-3 text-gray-600">EXPECT_OR_DROP</td>
                      <td className="px-4 py-3 text-gray-600">Ensures numeric fidelity</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-600">Data Length</td>
                      <td className="px-4 py-3 text-gray-600">LENGTH(loan_id) &lt;= 20</td>
                      <td className="px-4 py-3 text-gray-600">EXPECT_OR_DROP</td>
                      <td className="px-4 py-3 text-gray-600">Prevents data truncation</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-600">Completeness</td>
                      <td className="px-4 py-3 text-gray-600">customer_id IS NOT NULL</td>
                      <td className="px-4 py-3 text-gray-600">EXPECT_OR_FAIL</td>
                      <td className="px-4 py-3 text-gray-600">Acts as circuit breaker for critical fields</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-[#4A5565] mb-4">Consumption and BAU</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-[#00F000]">•</span>
                  <span className="text-gray-600"><strong>Power BI Integration:</strong> The Power BI team connected directly to Gold tables via SQL Endpoints, leveraging the reliability ensured by DLT.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#00F000]">•</span>
                  <span className="text-gray-600"><strong>Best Practices for BAU:</strong> Unity Catalog provided centralized data governance, granting fine-grained access based on user roles.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#4A5565] mb-6">Results and Quantifiable Business Impact</h2>
          <p className="text-gray-600 mb-8">
            The AI-driven delivery model not only met the accelerated 1-month timeline but also transformed the client's data operations, significantly increasing efficiency and data trust.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-[#4A5565]">Metric</th>
                  <th className="px-4 py-3 text-left font-bold text-[#4A5565]">Before Modernization</th>
                  <th className="px-4 py-3 text-left font-bold text-[#4A5565]">After Modernization</th>
                  <th className="px-4 py-3 text-left font-bold text-[#4A5565]">Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white">
                  <td className="px-4 py-3 text-gray-600">Project Delivery Timeline</td>
                  <td className="px-4 py-3 text-gray-600">4 Months (Traditional SDLC)</td>
                  <td className="px-4 py-3 text-gray-600">1 Month (AI-Driven SDLC)</td>
                  <td className="px-4 py-3 text-[#00F000] font-bold">75% Reduction</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-gray-600">BI Data Freshness</td>
                  <td className="px-4 py-3 text-gray-600">24 hours (Daily Batch)</td>
                  <td className="px-4 py-3 text-gray-600">30 minutes (Triggered DLT)</td>
                  <td className="px-4 py-3 text-[#00F000] font-bold">98% Reduction</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 text-gray-600">Manual QA Effort</td>
                  <td className="px-4 py-3 text-gray-600">~10 hours/week</td>
                  <td className="px-4 py-3 text-gray-600">&lt; 1 hour/week</td>
                  <td className="px-4 py-3 text-[#00F000] font-bold">90% Reduction</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-gray-600">Data Quality Issues</td>
                  <td className="px-4 py-3 text-gray-600">Post-Facto (Found in BI reports)</td>
                  <td className="px-4 py-3 text-gray-600">Real-Time (Caught in Silver Layer)</td>
                  <td className="px-4 py-3 text-[#00F000] font-bold">Eliminated Crises</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 text-gray-600">Query Performance (Power BI)</td>
                  <td className="px-4 py-3 text-gray-600">High Latency, Query Timeouts</td>
                  <td className="px-4 py-3 text-gray-600">8x faster average dashboard load time</td>
                  <td className="px-4 py-3 text-[#00F000] font-bold">8x Faster</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-gray-600">Infrastructure Cost</td>
                  <td className="px-4 py-3 text-gray-600">High Fixed OpEx</td>
                  <td className="px-4 py-3 text-gray-600">Optimized Cloud Costs</td>
                  <td className="px-4 py-3 text-[#00F000] font-bold">35% Reduction</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-[#00F000]/10 border border-[#00F000] p-6 rounded-xl">
            <p className="text-gray-600">
              <strong>Key Takeaway:</strong> The move from slow, manual data validation to AI-accelerated development of DLT Expectations was the single biggest factor in establishing data trust, giving the Power BI team the confidence to build critical financial models directly on the Lakehouse data.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#4A5565] to-[#4A5565]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Accelerate Your Data Modernization?</h2>
          <p className="text-xl text-white/80 mb-8">
            Let's discuss how AI-driven development can help you achieve similar results
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