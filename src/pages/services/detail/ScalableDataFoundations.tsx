import { motion } from "motion/react";
import { ChevronRight, Layers, Box, Gauge, Database, Shield, Lock, GitBranch, Activity, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "../../../components/figma/ImageWithFallback";

export function ScalableDataFoundations() {
  const deliverables = [
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Future-Proof Architecture Blueprint",
      description: "Comprehensive foundational structure supporting both analytical and operational needs (Data Mesh principles, centralized Lakehouse).",
    },
    {
      icon: <Box className="w-6 h-6" />,
      title: "Modular Domain-Oriented Design",
      description: "Independent, domain-oriented data products for improved agility, ownership, and faster time-to-market.",
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "Performance Benchmarking & Optimization",
      description: "Platform designed for low-latency queries and high-concurrency workloads with documented performance targets.",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Enterprise Data Cataloging Solution",
      description: "Centralized discovery and metadata management tools enabling self-service data access and exploration.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Automated Data Quality Frameworks",
      description: "Built-in quality checks and validation rules integrated directly into ingestion pipelines for trusted data.",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Multi-Tier Access Control & Compliance",
      description: "Granular security and compliance policies implemented across all data tiers (raw, curated, consumption).",
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "DataOps CI/CD Implementation",
      description: "Automated deployment pipelines applying software engineering best practices to data workflows for rapid, reliable releases.",
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Proactive Monitoring & Alerting System",
      description: "Automated health checks and intelligent alerts for pipeline failures, data anomalies, and quality issues.",
    },
  ];

  const outcomes = [
    {
      title: "Unlimited Scalability & Growth",
      description: "Build on foundations that handle exponential data growth without performance degradation or costly re-architecture.",
    },
    {
      title: "Enterprise-Grade Data Quality",
      description: "Automated quality frameworks ensure trusted, accurate data across all domains and use cases.",
    },
    {
      title: "Accelerated Analytics & Insights",
      description: "High-performance architecture delivers sub-second query responses and supports thousands of concurrent users.",
    },
    {
      title: "Self-Service Data Access",
      description: "Empower business users to discover and consume data independently with intuitive cataloging and governance.",
    },
    {
      title: "Reduced Operational Overhead",
      description: "DataOps automation and proactive monitoring minimize manual intervention and accelerate delivery cycles.",
    },
    {
      title: "Modular Flexibility & Agility",
      description: "Domain-oriented design enables teams to iterate independently without dependencies or bottlenecks.",
    },
  ];

  return (
    <div className="mt-16">
      {/* Breadcrumbs */}
      <section className="bg-gray-50 py-4 px-6 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-600 flex-wrap">
            <a href="/" className="hover:text-[#00F000] transition-colors">Home</a>
            <ChevronRight className="w-4 h-4" />
            <a href="/services/build-modernize/" className="hover:text-[#00F000] transition-colors">Services</a>
            <ChevronRight className="w-4 h-4" />
            <a href="/services/build-modernize/" className="hover:text-[#00F000] transition-colors">Build & Modernize</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#00F000]">Scalable Data Foundations</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-[#4A5565] via-[#5A6575] to-[#4A5565] overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#00F000]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#00F000]/5 rounded-full blur-3xl" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-white mb-6">Build Robust Data Foundations That Scale with Your Business Growth</h1>
              <p className="text-white/90 text-xl mb-8 leading-relaxed">
                Create the underlying architecture that handles exponential data growth, supports diverse analytics needs, and ensures high-quality data for every business decision.
              </p>
              <motion.a
                href="#deliverables"
                className="inline-block px-8 py-3 bg-[#00F000] text-[#4A5565] rounded-sm hover:bg-[#00F000]/90 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Our Approach
              </motion.a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1546464677-f093ea6dd0df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FsYWJsZSUyMGluZnJhc3RydWN0dXJlfGVufDF8fHx8MTc2MzQ1MDQyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Scalable Data Foundations"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A5565]/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You Get (Our Deliverables) */}
      <section id="deliverables" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl text-[#4A5565] mb-6">What You Get <span className="text-gray-500">(Our Deliverables)</span></h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our Scalable Data Foundations service delivers enterprise-grade architecture that grows with your business, combining performance, quality, and governance in a single unified platform.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-lg overflow-hidden shadow-lg h-64"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1705167067400-0cca32706d97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZm91bmRhdGlvbiUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjM0NTA0MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Data Foundation Architecture"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {deliverables.map((item, index) => (
              <motion.div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-6 hover:border-[#00F000]/30 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#00F000]/10 rounded-lg flex items-center justify-center text-[#00F000] group-hover:bg-[#00F000] group-hover:text-[#4A5565] transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#4A5565] text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Gain (Your Outcomes) */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 relative rounded-lg overflow-hidden shadow-lg h-64"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1651955784685-f969100bfc25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXRhJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2MzQ1MDQyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern Architecture"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl text-[#4A5565] mb-6">What You Gain <span className="text-gray-500">(Your Outcomes)</span></h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Transform your data platform into a strategic asset with measurable outcomes that drive innovation, efficiency, and competitive advantage.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outcomes.map((item, index) => (
              <motion.div
                key={index}
                className="relative bg-white border border-gray-200 rounded-lg p-8 hover:border-[#00F000]/50 hover:shadow-xl transition-all duration-300 group overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00F000]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-[#00F000]/10 rounded-lg flex items-center justify-center text-[#00F000] mb-4 group-hover:bg-[#00F000] group-hover:text-[#4A5565] transition-all duration-300">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-[#4A5565] text-lg mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Impact Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1728933102332-a4f1a281a621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzMDg4OTY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Team Collaboration"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#4A5565] via-[#4A5565]/70 to-transparent flex items-end">
              <div className="p-12 w-full">
                <h2 className="text-white mb-4">Built to Last, Designed to Scale</h2>
                <p className="text-white/90 text-lg max-w-3xl">
                  Our data foundation approach creates sustainable architecture that supports your organization's growth for years to come, eliminating the need for costly future re-platforming.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#4A5565] via-[#5A6575] to-[#4A5565] relative overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00F000]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00F000]/5 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white mb-6">Ready to Build Your Data Foundation?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can create a scalable, high-performance data platform that grows with your business and drives lasting value.
            </p>
            <motion.a
              href="/contact/"
              className="inline-block px-8 py-3 bg-[#00F000] text-[#4A5565] rounded-sm hover:bg-[#00F000]/90 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started Today
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
