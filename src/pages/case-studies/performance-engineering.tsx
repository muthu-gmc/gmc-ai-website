import { motion } from "motion/react";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export function PerformanceEngineering() {
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
            <span className="text-[#00F000]">Performance Engineering - Digital Lending</span>
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
              Accelerating the Digital Core for Financial Services, Digital Lending
            </h1>
            <p className="text-xl text-white/80">
              Performance Engineering - 78% reduction in API latency, 192% increase in throughput
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
              alt="Performance Engineering"
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
              <h3 className="font-bold text-[#4A5565] mb-2">Industry</h3>
              <p className="text-gray-600">Financial Services, Digital Lending</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-bold text-[#4A5565] mb-2">Core Systems</h3>
              <p className="text-gray-600">Loan Lifecycle Management System (LLMS), Document Management System (DMS), and Digital API Handshakes</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-bold text-[#4A5565] mb-2">Platform</h3>
              <p className="text-gray-600">Enterprise Java (JDK), JBoss EAP (Application Server)</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-bold text-[#4A5565] mb-2">Cloud Environment</h3>
              <p className="text-gray-600">AWS (Amazon Web Services) - EC2/RDS</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-bold text-[#4A5565] mb-2">Tools</h3>
              <p className="text-gray-600">New Relic (APM), Load Testing Frameworks (JMeter/Gatling)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#4A5565] mb-6">The Challenge: Latency, Instability, and Document Failures</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Financial Services, Digital Lending recognized that their rapid growth and increasing reliance on digital channels were exposing critical bottlenecks within their core lending infrastructure, primarily running on Java applications deployed on JBoss Server in a cloud environment.
            </p>
            
            <h3 className="text-xl font-bold text-[#4A5565] mb-4">Key Symptoms Identified:</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-[#00F000] mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-bold text-[#4A5565]">LLMS API Latency</p>
                  <p className="text-gray-600">High-latency API calls between the LLMS and crucial third-party services (credit checks, KYC, fraud scoring) were causing the application approval stage to exceed acceptable time limits, resulting in customer drop-off and potential loss of revenue.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-[#00F000] mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-bold text-[#4A5565]">DMS Upload Failures</p>
                  <p className="text-gray-600">The Document Management System (DMS) faced critical instability, specifically manifesting as document upload failures and excessive latency when handling large, concurrent file payloads. This issue was directly traced to synchronous (blocking) Java I/O operations, severely impacting customer onboarding and compliance workflows.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-[#00F000] mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-bold text-[#4A5565]">JBoss/JVM Instability</p>
                  <p className="text-gray-600">Periodic performance spikes indicated underlying resource management issues, including inefficient Garbage Collection (GC) pauses and poor thread utilization, leading to inconsistent system behavior.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-[#00F000] mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-bold text-[#4A5565]">Unidentified Bottlenecks</p>
                  <p className="text-gray-600">Lack of deep, real-time observability made root cause analysis (RCA) complex and slow across the distributed API handshakes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#4A5565] mb-6">The Solution: A Data-Driven Optimization Framework</h2>
          <p className="text-gray-600 mb-8">
            Our partnership introduced a four-phased, data-driven framework focused on achieving sustainable performance improvements across the entire digital loan ecosystem. The strategy leveraged the power of New Relic for continuous, deep visibility and Load Testing for validation against real-world transaction volumes.
          </p>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-[#4A5565] mb-4">Phase 1: Deep Observability and Baseline Assessment (Using New Relic)</h3>
              <p className="text-gray-600 mb-4">
                The initial step involved deploying and configuring New Relic Application Performance Monitoring (APM) across the Java/JBoss stack, including instrumentation of all key microservices and API endpoints.
              </p>
              <ul className="space-y-2">
                <li className="flex gap-3">
                  <span className="text-[#00F000]">•</span>
                  <span className="text-gray-600"><strong>Transaction Tracing:</strong> We used New Relic to map service dependencies and trace high-latency transactions end-to-end, specifically identifying the slowest database queries and external API calls.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#00F000]">•</span>
                  <span className="text-gray-600"><strong>Bottleneck Identification:</strong> Focused analysis on the LLMS code to pinpoint common Java performance issues, including N+1 queries, thread contention, and memory allocation hotspots.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-[#4A5565] mb-4">Phase 2: Load Testing and Stress Simulation</h3>
              <p className="text-gray-600 mb-4">
                A realistic load testing regime was designed to simulate peak-hour traffic, sudden volume surges, and endurance runs on the LLMS and DMS.
              </p>
              <ul className="space-y-2">
                <li className="flex gap-3">
                  <span className="text-[#00F000]">•</span>
                  <span className="text-gray-600"><strong>Capacity Planning:</strong> Determine the maximum sustainable transaction throughput (TPS) before response times degrade beyond SLOs.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#00F000]">•</span>
                  <span className="text-gray-600"><strong>Failure Point Analysis:</strong> Use stress tests to push the JBoss server and database to their breaking points, specifically targeting the DMS upload endpoints.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-[#4A5565] mb-4">Phase 3: Technical Optimization</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-bold text-[#4A5565]">Area of Optimization</th>
                      <th className="px-4 py-3 text-left font-bold text-[#4A5565]">Specific Action Taken</th>
                      <th className="px-4 py-3 text-left font-bold text-[#4A5565]">Impact on API Performance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-gray-600">DMS/File I/O</td>
                      <td className="px-4 py-3 text-gray-600">Implemented non-blocking Java I/O (NIO) for document uploads/downloads</td>
                      <td className="px-4 py-3 text-gray-600">Eliminated upload failures and reduced latency for large documents</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-600">JVM Memory Management</td>
                      <td className="px-4 py-3 text-gray-600">Switched to G1 Garbage Collector (G1GC) with optimized heap sizes</td>
                      <td className="px-4 py-3 text-gray-600">Minimized GC pause times, ensuring consistent API response latency</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-600">Java Code / Database</td>
                      <td className="px-4 py-3 text-gray-600">Query Optimization - implementing eager loading (JOIN FETCH)</td>
                      <td className="px-4 py-3 text-gray-600">Reduction in database I/O, dramatically reducing API endpoint latency</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-[#4A5565] mb-4">Phase 4: Monitoring and Proactive Alerting</h3>
              <p className="text-gray-600">
                Post-optimization, New Relic was configured as a proactive defense system. Custom dashboards provided operations and executive teams with real-time visibility into business-critical metrics (e.g., "Loan Application Success Rate" vs. "LLMS API Latency").
              </p>
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
                  <th className="px-4 py-3 text-left font-bold text-[#4A5565]">Before Optimization</th>
                  <th className="px-4 py-3 text-left font-bold text-[#4A5565]">After Optimization</th>
                  <th className="px-4 py-3 text-left font-bold text-[#4A5565]">Improvement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white">
                  <td className="px-4 py-3 text-gray-600">LLMS API P95 Response Time</td>
                  <td className="px-4 py-3 text-gray-600">2,850 ms</td>
                  <td className="px-4 py-3 text-gray-600">620 ms</td>
                  <td className="px-4 py-3 text-[#00F000] font-bold">78% Reduction</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-gray-600">Maximum Sustainable Throughput (TPS)</td>
                  <td className="px-4 py-3 text-gray-600">120 Transactions/second</td>
                  <td className="px-4 py-3 text-gray-600">350 Transactions/second</td>
                  <td className="px-4 py-3 text-[#00F000] font-bold">192% Increase</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 text-gray-600">Average Loan Approval Time</td>
                  <td className="px-4 py-3 text-gray-600">15 minutes (manual intervention)</td>
                  <td className="px-4 py-3 text-gray-600">Under 5 minutes (fully automated)</td>
                  <td className="px-4 py-3 text-[#00F000] font-bold">66% Reduction</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-gray-600">DB Connection Pool Wait Time</td>
                  <td className="px-4 py-3 text-gray-600">Avg. 450 ms at peak</td>
                  <td className="px-4 py-3 text-gray-600">Avg. 5 ms</td>
                  <td className="px-4 py-3 text-[#00F000] font-bold">98% Reduction</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 text-gray-600">Mean Time to Recovery (MTTR)</td>
                  <td className="px-4 py-3 text-gray-600">4 hours (due to manual RCA)</td>
                  <td className="px-4 py-3 text-gray-600">45 minutes (via New Relic alerts)</td>
                  <td className="px-4 py-3 text-[#00F000] font-bold">81% Reduction</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600">
            The ability to quickly identify and address performance regressions means Financial Services, Digital Lending can now scale its digital lending platform confidently, onboard new financial partners faster, and ensure a superior, highly competitive customer experience. The system is now validated to handle projected transaction volume increases for the next three years without major architectural changes.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#4A5565] to-[#4A5565]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Performance?</h2>
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
