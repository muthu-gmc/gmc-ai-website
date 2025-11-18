import { motion } from "motion/react";
import { ChevronRight, Linkedin, Twitter } from "lucide-react";

export function DataAnalyticsSales() {
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
                <p className="text-sm text-gray-500 mb-2">CASE STUDY | July 20, 2024</p>
                <h1 className="text-4xl md:text-5xl text-[#111111] mb-8">
                  Enterprise AI DataOps Platform for Financial Services
                </h1>

                {/* Hero Image */}
                <div className="mb-8">
                  <img
                    src="https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwb3BlcmF0aW9ucyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYyODY2MzU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="AI DataOps Platform Overview"
                    className="w-full h-auto rounded-lg"
                  />
                </div>

                {/* Tags */}
                <div className="mb-8">
                  <p className="text-sm text-[#00F000] mb-2">TAGS:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">AI DataOps</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Financial Services</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">MLOps</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Enterprise AI</span>
                  </div>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-6">
                    GreenMen Consulting partnered with a leading financial services institution to build and deploy an enterprise-grade AI DataOps platform, enabling scalable, governed, and production-ready machine learning operations across the organization.
                  </p>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[#00F000] hover:underline mb-8"
                  >
                    Download the full case study
                    <ChevronRight className="w-4 h-4" />
                  </a>

                  <h2 className="text-2xl text-[#111111] mt-8 mb-4">The Challenge</h2>
                  <p className="text-gray-700 mb-6">
                    The financial institution faced significant challenges in scaling their AI initiatives. Data scientists worked in isolated environments with inconsistent tooling, leading to siloed models that rarely made it to production. The lack of standardized data pipelines, model governance, and deployment infrastructure created bottlenecks, compliance risks, and prevented the organization from realizing the full value of their AI investments.
                  </p>

                  <h2 className="text-2xl text-[#111111] mt-8 mb-4">Our Solution</h2>
                  <p className="text-gray-700 mb-6">
                    We architected and implemented an end-to-end AI DataOps platform that provides a unified environment for data ingestion, feature engineering, model development, and production deployment. The platform includes automated data quality checks, version control for datasets and models, CI/CD pipelines for ML workflows, and comprehensive monitoring and governance frameworks that ensure compliance with financial regulations.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Key components of the solution include:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                    <li>Unified data lake architecture with automated ingestion and validation</li>
                    <li>Self-service feature store for consistent feature engineering</li>
                    <li>Centralized model registry with lineage tracking and governance</li>
                    <li>Automated ML pipeline orchestration and deployment</li>
                    <li>Real-time model monitoring and drift detection</li>
                    <li>Compliance-ready audit trails and explainability tools</li>
                  </ul>

                  <h2 className="text-2xl text-[#111111] mt-8 mb-4">Results</h2>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                    <li>10x increase in the number of models deployed to production</li>
                    <li>80% reduction in time-to-production for new models</li>
                    <li>90% improvement in data quality and consistency</li>
                    <li>100% compliance with regulatory requirements and audit standards</li>
                  </ul>

                  <h2 className="text-2xl text-[#111111] mt-8 mb-4">Impact</h2>
                  <p className="text-gray-700 mb-6">
                    The AI DataOps platform transformed the organization's approach to machine learning, creating a scalable factory for AI innovation. Data scientists now collaborate seamlessly, models are deployed with confidence, and business stakeholders have real-time visibility into AI performance and ROI. The platform has become the foundation for the institution's AI-native transformation, enabling them to compete effectively in an increasingly data-driven financial landscape.
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