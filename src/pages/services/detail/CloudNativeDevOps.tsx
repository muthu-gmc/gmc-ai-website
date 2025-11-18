import { motion } from "motion/react";
import { ChevronRight, GitMerge, Code, Package, Wrench, Settings, ShieldCheck, Key, Activity, CheckCircle2, Zap } from "lucide-react";
import { ImageWithFallback } from "../../../components/figma/ImageWithFallback";

export function CloudNativeDevOps() {
  const deliverables = [
    {
      icon: <GitMerge className="w-6 h-6" />,
      title: "Robust CI/CD Pipeline Automation",
      description: "Enterprise-grade pipelines for automated code testing, building, and deployment ensuring rapid, reliable releases.",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "GitOps Implementation",
      description: "Git-centric approach for managing infrastructure and application configurations with complete version control and auditability.",
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Microservices Deployment Patterns",
      description: "Automated deployment strategies for containerized applications using Kubernetes, Docker, and orchestration best practices.",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Infrastructure as Code (IaC) Implementation",
      description: "Terraform, CloudFormation, or Pulumi-based infrastructure provisioning for repeatable, secure cloud resource management.",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Environment Parity & Consistency",
      description: "Identical configuration across development, staging, and production environments eliminating 'works on my machine' issues.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "DevSecOps Security Integration",
      description: "Automated vulnerability scanning, compliance checks, and security testing integrated early in the development lifecycle (Shift Left).",
    },
    {
      icon: <Key className="w-6 h-6" />,
      title: "Centralized Secrets Management",
      description: "Secure, centralized solutions for managing credentials, API keys, and sensitive data using HashiCorp Vault or cloud-native services.",
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Unified Monitoring & Logging Strategy",
      description: "Real-time visibility into application health, performance, and security posture with centralized logging and alerting.",
    },
  ];

  const outcomes = [
    {
      title: "10x Faster Release Cycles",
      description: "Automated CI/CD pipelines enable multiple deployments per day with reduced risk and increased confidence.",
    },
    {
      title: "99.9% Deployment Success Rate",
      description: "Comprehensive testing and automated rollback capabilities ensure reliable, safe deployments every time.",
    },
    {
      title: "Enhanced Application Security",
      description: "Shift-left security practices catch vulnerabilities early, reducing security incidents and compliance risks.",
    },
    {
      title: "Consistent, Repeatable Infrastructure",
      description: "IaC ensures every environment is configured identically, eliminating configuration drift and deployment surprises.",
    },
    {
      title: "Reduced Operational Overhead",
      description: "Automation of manual tasks frees teams to focus on innovation rather than routine maintenance activities.",
    },
    {
      title: "Improved Mean Time to Recovery (MTTR)",
      description: "Automated monitoring and rapid deployment capabilities minimize downtime and accelerate incident resolution.",
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
            <span className="text-[#00F000]">Cloud-Native DevOps</span>
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
              <h1 className="text-white mb-6">Implement Modern DevOps Practices for Cloud-Native Applications</h1>
              <p className="text-white/90 text-xl mb-8 leading-relaxed">
                Automate the entire software delivery lifecycle, enabling faster releases, greater reliability, and enhanced security for applications built in the cloud.
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
                  src="https://images.unsplash.com/photo-1683669446069-ab17a5453296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGluZnJhc3RydWN0dXJlfGVufDF8fHx8MTc2MzM2OTg0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Cloud-Native DevOps"
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
                Our Cloud-Native DevOps service delivers comprehensive automation and security practices that transform how your organization builds, deploys, and operates cloud applications.
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
                src="https://images.unsplash.com/photo-1675946581335-7ce800416a95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhb3BzJTIwYXV0b21hdGlvbnxlbnwxfHx8fDE3NjM0NTEyMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Automation Pipeline"
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
                alt="Modern Infrastructure"
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
                Transform your software delivery with measurable outcomes that accelerate innovation, improve reliability, and embed security throughout the development lifecycle.
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
                <h2 className="text-white mb-4">Secure, Automated, Cloud-Native</h2>
                <p className="text-white/90 text-lg max-w-3xl">
                  Our DevOps approach combines automation, security, and cloud-native best practices to create a software delivery pipeline that's both fast and reliable.
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
            <h2 className="text-white mb-6">Ready to Transform Your DevOps Practices?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can implement modern cloud-native DevOps practices to accelerate your software delivery while ensuring security and reliability.
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
