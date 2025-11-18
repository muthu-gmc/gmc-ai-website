import { motion } from "motion/react";
import { ChevronRight, DollarSign, Award, ShieldCheck, Code, Workflow, Users, TrendingUp, CheckCircle2, CloudCog, Building2 } from "lucide-react";
import { ImageWithFallback } from "../../../components/figma/ImageWithFallback";

export function CloudAdvisory() {
  const deliverables = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Comprehensive Business Case & ROI Analysis",
      description: "Quantified financial benefits, ROI projections, and complete Total Cost of Ownership (TCO) analysis for your cloud adoption journey.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Objective Cloud Vendor Selection Framework",
      description: "Independent assessment and selection guidance for cloud providers (AWS, Azure, GCP) and third-party tools based on your unique requirements.",
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Cloud Readiness Assessment Report",
      description: "In-depth analysis of organizational skills, processes, technology debt, and capability gaps to ensure successful cloud adoption.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Security-by-Design Framework",
      description: "Comprehensive security architecture and compliance protocols ensuring your cloud environment adheres to industry regulations from day one.",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Infrastructure-as-Code (IaC) Implementation",
      description: "Best practices and templates for automated provisioning and environment management using Terraform, CloudFormation, or similar tools.",
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "End-to-End Migration Project Management",
      description: "Expert oversight of the entire migration lifecycle to minimize business disruption and ensure on-time, on-budget delivery.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Post-Migration Optimization Strategy",
      description: "Ongoing review and optimization of resource utilization, performance, and costs to maintain efficiency aligned with your data strategy.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Enablement & Knowledge Transfer",
      description: "Comprehensive training and documentation to empower your teams to manage and optimize the cloud platform independently.",
    },
  ];

  const outcomes = [
    {
      title: "Maximized Cloud ROI from Day One",
      description: "Clear financial justification and optimized cloud spend ensures you get the most value from your investment.",
    },
    {
      title: "Reduced Migration Risk & Downtime",
      description: "Expert project management and proven methodologies minimize business disruption during your cloud transition.",
    },
    {
      title: "Enterprise-Grade Security & Compliance",
      description: "Built-in security controls and compliance frameworks protect your data and meet regulatory requirements.",
    },
    {
      title: "Future-Proof Technology Choices",
      description: "Objective vendor selection ensures you choose the right cloud platform and tools for long-term success.",
    },
    {
      title: "Accelerated Time-to-Value",
      description: "Streamlined migration processes and IaC implementation get your cloud environment operational faster.",
    },
    {
      title: "Sustainable Cloud Operations",
      description: "Post-migration optimization and team enablement create a foundation for long-term efficiency and innovation.",
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
            <a href="/services/architect-advise/" className="hover:text-[#00F000] transition-colors">Services</a>
            <ChevronRight className="w-4 h-4" />
            <a href="/services/architect-advise/" className="hover:text-[#00F000] transition-colors">Architect & Advise</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#00F000]">Cloud Advisory Services</span>
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
              <h1 className="text-white mb-6">Expert Guidance to Optimize Cloud Adoption and Maximize ROI</h1>
              <p className="text-white/90 text-xl mb-8 leading-relaxed">
                Strategic guidance, hands-on support, and execution services that turn your platform strategy into reality with minimal risk and maximum business value.
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
                  src="https://images.unsplash.com/photo-1758905024964-4b4818821a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbnN1bHRpbmclMjBzZXJ2aWNlc3xlbnwxfHx8fDE3NjM0NDg3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Cloud Advisory Services"
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
                Our Cloud Advisory Services provide end-to-end guidance from initial assessment through migration and ongoing optimization, ensuring your cloud journey delivers maximum value with minimal risk.
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
                src="https://images.unsplash.com/photo-1747065343742-6eaaedd6240e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMG1pZ3JhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzNDQ3OTA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Cloud Migration"
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
                src="https://images.unsplash.com/photo-1636352656650-4baea3fd60e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMG9wdGltaXphdGlvbnxlbnwxfHx8fDE3NjM0NDg3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Cloud Optimization"
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
                Transform your organization with measurable business outcomes that reduce costs, accelerate innovation, and build a foundation for sustainable cloud operations.
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
                <h2 className="text-white mb-4">Your Trusted Cloud Migration Partner</h2>
                <p className="text-white/90 text-lg max-w-3xl">
                  Our cloud advisory services combine deep technical expertise with proven methodologies to guide your organization through every phase of cloud adoption, from strategy to ongoing optimization.
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
            <h2 className="text-white mb-6">Ready to Accelerate Your Cloud Journey?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our cloud advisory services can help you optimize your cloud adoption and deliver measurable business value.
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
