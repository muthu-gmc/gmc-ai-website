import { motion } from "motion/react";
import { ChevronRight, Search, Shield, Award, Users, RefreshCw, Link2, Activity, AlertCircle, CheckCircle2, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../../../components/figma/ImageWithFallback";

export function ApplicationEvolutionSupport() {
  const deliverables = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Comprehensive System Audits",
      description: "Regular code and architecture reviews identifying technical debt, performance bottlenecks, and optimization opportunities.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Resilience & Disaster Recovery Planning",
      description: "High-availability architecture, disaster recovery strategies, and automated backup solutions ensuring business continuity.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "SLO/SLA Definition & Monitoring",
      description: "Clear Service Level Objectives and Agreements with continuous monitoring to measure and ensure operational excellence.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User-Driven Feature Enhancement",
      description: "Translation of user and business needs into prioritized backlogs of features and improvements delivering maximum value.",
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Strategic Technology Refresh",
      description: "Expert guidance on refactoring, modernizing libraries/frameworks, and adopting new technologies to keep applications current.",
    },
    {
      icon: <Link2 className="w-6 h-6" />,
      title: "Robust API Strategy & Development",
      description: "Comprehensive API layer for seamless integration with internal systems and external services, enabling ecosystem growth.",
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "24/7 Proactive Monitoring",
      description: "Continuous vigilance over application performance, stability, and user experience with intelligent alerting.",
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Rapid Incident Management & Patch Updates",
      description: "Swift response to critical outages, performance issues, and security vulnerabilities with regular patch management.",
    },
  ];

  const outcomes = [
    {
      title: "99.9% Application Uptime",
      description: "Proactive monitoring and resilience engineering ensure your mission-critical applications are always available.",
    },
    {
      title: "Enhanced User Satisfaction",
      description: "Feature enhancements driven by user feedback deliver continuous improvements that users actually want.",
    },
    {
      title: "Reduced Technical Debt",
      description: "Regular audits and strategic refactoring keep applications maintainable, performant, and cost-effective.",
    },
    {
      title: "Faster Incident Resolution",
      description: "24/7 monitoring and expert support minimize downtime with rapid identification and resolution of issues.",
    },
    {
      title: "Future-Proof Technology Stack",
      description: "Strategic technology refresh ensures applications leverage modern frameworks and avoid obsolescence.",
    },
    {
      title: "Seamless Integration Ecosystem",
      description: "Robust APIs enable smooth connections with internal and external systems, unlocking new business capabilities.",
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
            <a href="/services/accelerate-operate/" className="hover:text-[#00F000] transition-colors">Services</a>
            <ChevronRight className="w-4 h-4" />
            <a href="/services/accelerate-operate/" className="hover:text-[#00F000] transition-colors">Accelerate & Operate</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#00F000]">Application Evolution & Support</span>
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
              <h1 className="text-white mb-6">Enhance and Maintain Applications for Peak Performance and Reliability</h1>
              <p className="text-white/90 text-xl mb-8 leading-relaxed">
                Dedicated to the long-term health, performance, and strategic enhancement of your mission-critical business applications with continuous improvement and proactive support.
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
                  src="https://images.unsplash.com/photo-1744230673231-865d54a0aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsaWNhdGlvbiUyMG1vbml0b3Jpbmd8ZW58MXx8fHwxNzYzNDUxMjMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Application Evolution & Support"
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
                Our Application Evolution & Support service delivers comprehensive maintenance, enhancement, and monitoring that keeps your business-critical applications running at peak performance.
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
                src="https://images.unsplash.com/photo-1762340915398-000c216e7cd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMG1haW50ZW5hbmNlfGVufDF8fHx8MTc2MzQ1MTIzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Software Maintenance"
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
                Transform your application portfolio with measurable outcomes that ensure reliability, enhance user satisfaction, and position your systems for long-term success.
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
                <h2 className="text-white mb-4">Your Strategic Application Partner</h2>
                <p className="text-white/90 text-lg max-w-3xl">
                  We don't just maintain applications—we evolve them. Our proactive approach ensures your business-critical systems continuously improve while maintaining the reliability your users depend on.
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
            <h2 className="text-white mb-6">Ready to Enhance Your Applications?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can ensure your mission-critical applications run at peak performance while continuously evolving to meet your business needs.
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
