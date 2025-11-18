import { motion } from "motion/react";
import { ChevronRight, Linkedin, Twitter } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
// import awsLogo from "asset/21f780df65c0b80c2c01431e71f89ced48f379d5.png";
import awsLogo from "../../assets/21f780df65c0b80c2c01431e71f89ced48f379d5.png";
import databricksLogo from "../../assets/58f91b2d331e6d416e60d6d8160a67ac553e9e1d.png";
import s3Logo from "../../assets/5e0210eeb488b88734fb7f98d4e9eab62e43baf4.png";
import gptLogo from "../../assets/85c89c3056d6ec67aa1cdf0154b54b9f37e79baf.png";

export function HomeFinanceLakehouse() {
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
                <p className="text-sm text-gray-500 mb-2">CASE STUDY | HOME FINANCE</p>
                <h1 className="text-4xl md:text-5xl text-[#111111] mb-8">
                  Accelerating Lakehouse Modernization with an AI-Driven Development Lifecycle
                </h1>

                {/* Hero Image */}
                <div className="mb-8">
                  <img
                    src="https://images.unsplash.com/photo-1740908900846-4bbd4f22c975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhYnJpY2tzJTIwZGF0YSUyMGxha2Vob3VzZXxlbnwxfHx8fDE3NjI4NjcxNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Databricks Lakehouse Platform"
                    className="w-full h-auto rounded-lg"
                  />
                </div>

                {/* Client Overview Table */}
                <div className="mb-8 bg-gray-50 rounded-lg p-6">
                  <h3 className="text-[#00F000] mb-6">Project Overview</h3>
                  
                  {/* Client & Industry Info Cards */}
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">Client</div>
                      <div className="text-gray-900">Home Finance</div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">Industry</div>
                      <div className="text-gray-900">Financial Services, Home Loan/Mortgage Lending</div>
                    </div>
                  </div>

                  {/* Technology Stack Section with Images */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 mb-6">
                    <h4 className="text-sm uppercase tracking-wide text-gray-700 mb-4">Technology Stack</h4>
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-white rounded-lg p-4 border border-gray-200 hover:border-[#00F000] transition-all">
                        <div className="flex items-center gap-3 mb-2">
                          <img src={awsLogo} alt="AWS" className="w-16 h-16 object-contain" />
                          <div>
                            <div className="text-xs text-gray-500">Cloud</div>
                            <div className="text-sm text-gray-900">AWS</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-gray-200 hover:border-[#00F000] transition-all">
                        <div className="flex items-center gap-3 mb-2">
                          <img src={databricksLogo} alt="Databricks" className="w-16 h-16 object-contain" />
                          <div>
                            <div className="text-xs text-gray-500">Platform</div>
                            <div className="text-sm text-gray-900">Databricks</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-gray-200 hover:border-[#00F000] transition-all">
                        <div className="flex items-center gap-3 mb-2">
                          {/* <ImageWithFallback src={s3Logo} alt="Delta Lake" className="w-16 h-16 object-contain" /> */}
                          <div>
                            <div className="text-xs text-gray-500">Storage</div>
                            <div className="text-sm text-gray-900">Delta Lake (S3)</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-gray-200 hover:border-[#00F000] transition-all">
                        <div className="flex items-center gap-3 mb-2">
                          {/* <img src={gptLogo} alt="GPT" className="w-16 h-16 object-contain" /> */}
                          <div>
                            <div className="text-xs text-gray-500">AI Assistant</div>
                            <div className="text-sm text-gray-900">GPT</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Technology Badges */}
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs text-gray-700">Delta Live Tables</span>
                      <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs text-gray-700">Unity Catalog</span>
                      <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs text-gray-700">SQL Endpoints</span>
                      <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs text-gray-700">Auto Loader</span>
                    </div>
                  </div>

                  {/* Legacy Systems */}
                  <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
                    <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">Migrated From</div>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-red-50 border border-red-200 rounded text-xs text-red-700">Legacy MySQL OLTP</span>
                      <span className="px-3 py-1 bg-red-50 border border-red-200 rounded text-xs text-red-700">Legacy PostgreSQL Data Mart</span>
                    </div>
                  </div>

                  {/* Downstream Consumer with Image */}
                  <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
                    <div className="text-xs text-gray-500 uppercase tracking-wide mb-3">Downstream Consumer</div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <img src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjI4MDU2ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Power BI" className="w-16 h-16 object-cover rounded" />
                        <div className="text-sm text-gray-900">Power BI Team (Reporting & Analysis)</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <img src="https://images.unsplash.com/photo-1554744512-d6c603f27c54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBtb2RlbHxlbnwxfHx8fDE3NjI4Njg3NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Model Team" className="w-16 h-16 object-cover rounded" />
                        <div className="text-sm text-gray-900">Model Team (ML & Predictive Analytics)</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <img src="https://images.unsplash.com/photo-1746988043334-b8677f2ec74c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwcGlwZWxpbmUlMjBFVEx8ZW58MXx8fHwxNzYyODY4NzU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Reverse ETL" className="w-16 h-16 object-cover rounded" />
                        <div className="text-sm text-gray-900">Reverse ETL Team (Data Activation)</div>
                      </div>
                    </div>
                  </div>

                  {/* Project Mandate */}
                  <div className="bg-gradient-to-r from-[#00F000]/5 to-transparent border-l-4 border-[#00F000] rounded-r-lg p-4">
                    <div className="text-xs text-[#00F000] uppercase tracking-wide mb-2">Project Mandate</div>
                    <div className="text-sm text-gray-900">
                      Migrate legacy home loan data to a scalable, governed platform, establish automated data validation, and provide near real-time data access to BI consumers.
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl text-[#111111] mt-8 mb-4">1. The Challenge: The Burden of Legacy Data in Financial Services</h2>
                  <p className="text-gray-700 mb-6">
                    The client, a prominent financial services provider specializing in the Home Loan and Mortgage sector, was paralyzed by an aging data infrastructure.
                  </p>
                  
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <h3 className="text-lg text-[#111111] mb-3">Key Pain Points:</h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li><span className="font-semibold">Data Silos and Fragmentation:</span> Operational data was locked in rigid, on-premises relational databases (MySQL, PostgreSQL), making it impossible to get a unified view of a single customer's loan portfolio.</li>
                      <li><span className="font-semibold">Stale, Untrustworthy BI:</span> The traditional batch ETL process took over 24 hours to complete. As a result, the downstream Power BI team was working with day-old data, and frequent inconsistencies led to low data trust. Analysts spent ~10 hours/week manually cross-referencing reports.</li>
                      <li><span className="font-semibold">Absence of Automated Quality Gate:</span> There was no automated mechanism for strict data validation (e.g., checking if a required column was NULL). Data quality issues, including wrong data types or truncated strings, only surfaced in the final Power BI reports, causing crises and delays.</li>
                      <li><span className="font-semibold">Scaling Bottleneck:</span> The on-premises systems could not scale to handle the growth in transaction volume, leading to high operational costs and performance degradation.</li>
                    </ul>
                  </div>

                  <h2 className="text-2xl text-[#111111] mt-8 mb-4">2. The Solution: AI-Driven SDLC Meets the Databricks Lakehouse</h2>
                  <p className="text-gray-700 mb-6">
                    To meet the client's urgent need, we adopted an <span className="font-semibold text-[#00F000]">AI-driven software development lifecycle (SDLC)</span>. By leveraging generative AI code assistants, our team automated over 60% of the development code—from generating PySpark/SQL boilerplate for DLT pipelines to creating complex data quality rules. This AI-first approach was the key to accelerating the project delivery from a planned 4 months to just 1 month.
                  </p>
                  <p className="text-gray-700 mb-6">
                    This accelerated process was used to build a comprehensive data modernization strategy on the Databricks Lakehouse Platform.
                  </p>

                  <h3 className="text-xl text-[#111111] mt-6 mb-3">2.1. AI-Generated Medallion Architecture</h3>
                  <p className="text-gray-700 mb-4">
                    Our AI-assisted developers rapidly scaffolded the new platform using a Medallion Architecture:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                    <li><span className="font-semibold">Ingestion (Bronze Layer):</span> Automated ingestion (using tools like Fivetran combined with Databricks Auto Loader) synced data from MySQL and PostgreSQL into the raw, immutable Bronze Delta tables.</li>
                    <li><span className="font-semibold">Cleansing & Validation (Silver Layer):</span> This was the core transformation layer, built entirely using Delta Live Tables (DLT). The AI code-gen tools were instrumental in defining the declarative transformations and, most importantly, implementing automated data validation checks using Expectations.</li>
                  </ul>

                  <h3 className="text-xl text-[#111111] mt-6 mb-3">2.2. AI-Accelerated Data Quality via DLT Expectations</h3>
                  <p className="text-gray-700 mb-4">
                    Our AI-driven process rapidly generated a robust data quality (DQ) framework using DLT Expectations, covering the client's critical requirements:
                  </p>

                  <p className="text-gray-700 mb-6">
                    A dedicated pipeline ran the new Gold layer data against legacy ETL outputs. The DLT Event Log provided quantifiable metrics on failed rows for each expectation, allowing the QA team to precisely validate the migration.
                  </p>

                  <h3 className="text-xl text-[#111111] mt-6 mb-3">2.3. Consumption and BAU</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                    <li><span className="font-semibold">Consumption (Gold Layer):</span> The final, highly governed tables were materialized in the Gold layer, modeled for high-performance query execution using Databricks SQL Endpoints.</li>
                    <li><span className="font-semibold">Power BI Integration:</span> The Power BI team connected directly to the Gold tables via the SQL Endpoints, leveraging the reliability ensured by DLT.</li>
                    <li><span className="font-semibold">Best Practices for BAU:</span> Unity Catalog provided centralized data governance, granting fine-grained access to Power BI users based on their roles.</li>
                  </ul>

                  <h2 className="text-2xl text-[#111111] mt-8 mb-4">3. Results and Quantifiable Business Impact</h2>
                  <p className="text-gray-700 mb-6">
                    The AI-driven delivery model not only met the accelerated 1-month timeline but also transformed the client's data operations, significantly increasing efficiency and data trust.
                  </p>

                  {/* Results Table */}
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
                      <thead className="bg-[#00F000] text-[#111111]">
                        <tr>
                          <th className="px-4 py-3 text-left">Metric</th>
                          <th className="px-4 py-3 text-left">Before Modernization</th>
                          <th className="px-4 py-3 text-left">After Modernization</th>
                          <th className="px-4 py-3 text-left">Business Impact</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-sm text-gray-900">Project Delivery Timeline</td>
                          <td className="px-4 py-3 text-sm text-gray-700">4 Months (Traditional SDLC)</td>
                          <td className="px-4 py-3 text-sm text-[#00F000]">1 Month (AI-Driven SDLC)</td>
                          <td className="px-4 py-3 text-sm text-gray-700"><strong>75% reduction</strong> in development time, delivering business value in a single quarter.</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-sm text-gray-900">BI Data Freshness</td>
                          <td className="px-4 py-3 text-sm text-gray-700">24 hours (Daily Batch)</td>
                          <td className="px-4 py-3 text-sm text-[#00F000]">30 minutes (Triggered DLT)</td>
                          <td className="px-4 py-3 text-sm text-gray-700"><strong>98% reduction</strong> in data latency, enabling near real-time financial reporting.</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-sm text-gray-900">Manual QA Effort</td>
                          <td className="px-4 py-3 text-sm text-gray-700">~10 hours/week</td>
                          <td className="px-4 py-3 text-sm text-[#00F000]">&lt; 1 hour/week</td>
                          <td className="px-4 py-3 text-sm text-gray-700"><strong>60% reduction</strong> in manual effort, freeing analysts to focus on insights, not validation.</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-sm text-gray-900">Data Quality Issues</td>
                          <td className="px-4 py-3 text-sm text-gray-700">Post-Facto (Found in BI reports)</td>
                          <td className="px-4 py-3 text-sm text-[#00F000]">Real-Time (Caught in Silver Layer)</td>
                          <td className="px-4 py-3 text-sm text-gray-700">Eliminated reporting crises caused by bad data.</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-sm text-gray-900">Query Performance (Power BI)</td>
                          <td className="px-4 py-3 text-sm text-gray-700">High Latency, Query Timeouts</td>
                          <td className="px-4 py-3 text-sm text-[#00F000]">8x faster average dashboard load time</td>
                          <td className="px-4 py-3 text-sm text-gray-700">Enabled faster decision-making for 150+ business users.</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-sm text-gray-900">Infrastructure Cost</td>
                          <td className="px-4 py-3 text-sm text-gray-700">High Fixed OpEx</td>
                          <td className="px-4 py-3 text-sm text-[#00F000]">35% reduction in Cloud/Compute costs</td>
                          <td className="px-4 py-3 text-sm text-gray-700">Achieved through Databricks' auto-scaling and optimized storage.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-[#00F000]/10 border-l-4 border-[#00F000] rounded-r-lg p-6 mb-6">
                    <p className="text-gray-900">
                      <strong>Key Takeaway:</strong> The move from slow, manual data validation to AI-accelerated development of DLT Expectations was the single biggest factor in establishing data trust, giving the Power BI team the confidence to build critical financial models directly on the Lakehouse data.
                    </p>
                  </div>

                  <h2 className="text-2xl text-[#111111] mt-8 mb-4">The GreenMen Difference</h2>
                  <p className="text-gray-700 mb-6">
                    This project showcases GreenMen Consulting's unique ability to combine cutting-edge AI development methodologies with deep expertise in modern data platforms. By leveraging AI-driven code generation and automation, we delivered a complex lakehouse migration in record time while ensuring enterprise-grade data quality and governance.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Our approach transforms traditional data modernization projects from multi-month endeavors into rapid, value-generating initiatives that establish a foundation for long-term scalability and innovation.
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

                {/* Key Highlights */}
                <div className="mb-8">
                  <h3 className="text-[#00F000] mb-4">Key Highlights</h3>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00F000] mt-1">✓</span>
                      <span>75% faster project delivery with AI-driven SDLC</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00F000] mt-1">✓</span>
                      <span>98% reduction in data latency (24 hours → 30 minutes)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00F000] mt-1">✓</span>
                      <span>60% reduction in manual QA effort</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00F000] mt-1">✓</span>
                      <span>8x faster Power BI dashboard performance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00F000] mt-1">✓</span>
                      <span>35% reduction in infrastructure costs</span>
                    </li>
                  </ul>
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