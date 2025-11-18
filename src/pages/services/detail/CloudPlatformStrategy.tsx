import { motion } from "motion/react";
import { ChevronRight, Cloud, GitBranch, DollarSign, ShieldCheck, Boxes, Zap, Users, CheckCircle2, Layers, Lock, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../../../components/figma/ImageWithFallback";

export function CloudPlatformStrategy() {
  const deliverables = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Data-Driven Cloud Architecture Blueprint",
      description: "A comprehensive architectural design establishing scalable, secure, and cost-effective cloud infrastructure (Data Mesh, Data Fabric, or Lakehouse) tailored to your needs.",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Comprehensive Cloud Assessment Report",
      description: "In-depth evaluation of your current workloads and data assets to determine optimal cloud approach (Public, Private, Hybrid, or Multi-Cloud).",
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "Platform Modernization Roadmap",
      description: "A detailed migration strategy defining sequence and methodology (Lift & Shift, Replatforming, Re-architecting) for your legacy systems.",
    },
    {
      icon: <Boxes className="w-6 h-6" />,
      title: "Technology Stack Recommendations",
      description: "Expert guidance on selecting optimal cloud services including Serverless Computing, Managed Kubernetes, Data Lake technologies, and specialized AI/ML services.",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "FinOps Framework & Cost Optimization Strategy",
      description: "Comprehensive cloud cost management strategies including budgeting frameworks, usage monitoring, and optimization tactics to maximize ROI.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Cloud Governance & Compliance Blueprint",
      description: "Robust governance framework with security guardrails, compliance protocols (GDPR, HIPAA), and identity/access management (IAM) policies.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance & Scalability Plan",
      description: "Strategic approach to ensure your cloud platform can scale efficiently while maintaining optimal performance under varying workloads.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Operating Model & Organizational Design",
      description: "A practical framework defining team structures, roles, responsibilities, and operational processes for long-term cloud platform success.",
    },
  ];

  const outcomes = [
    {
      title: "Accelerated Innovation & Time-to-Market",
      description: "Leverage modern cloud services to rapidly deploy new capabilities and bring data-driven solutions to market faster.",
    },
    {
      title: "Optimized Cloud Spend & ROI",
      description: "Eliminate waste, right-size resources, and maximize return on your cloud investments through strategic FinOps practices.",
    },
    {
      title: "Enterprise-Grade Security & Compliance",
      description: "Meet regulatory requirements and protect sensitive data with robust security frameworks and governance controls.",
    },
    {
      title: "Seamless Scalability & Flexibility",
      description: "Build a cloud platform that grows with your business, adapting to changing demands without costly re-architecture.",
    },
    {
      title: "Reduced Technical Debt & Legacy Constraints",
      description: "Modernize infrastructure systematically, freeing your teams from legacy limitations and enabling future innovation.",
    },
    {
      title: "Foundation for AI & Advanced Analytics",
      description: "Create the scalable, high-performance infrastructure required to power your most ambitious data and AI initiatives.",
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
            <span className="text-[#00F000]">Cloud & Platform Strategy</span>
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
              <h1 className="text-white mb-6">Accelerate Innovation with a Future-Ready Cloud & Data Platform</h1>
              <p className="text-white/90 text-xl mb-8 leading-relaxed">
                Design the optimal cloud architecture, technology stack, and operating model to host and scale your Modern Data Strategy and AI initiatives with confidence.
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
                  src="https://images.unsplash.com/photo-1644316902396-9bd0558cd771?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjM0NDgxOTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Cloud & Platform Strategy"
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
              <h2 className="text-4xl text-[#4A5565] mb-6">What You Get <span className="text-gray-500">(The Deliverables)</span></h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our Cloud & Platform Strategy service delivers a complete strategic blueprint to modernize your infrastructure, optimize cloud investments, and create a scalable foundation for your data and AI ambitions.
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
                src="https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMHBsYXRmb3JtJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjM0NDgxOTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Cloud Platform Technology"
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
                src="https://images.unsplash.com/photo-1683669446069-ab17a5453296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGluZnJhc3RydWN0dXJlfGVufDF8fHx8MTc2MzM2OTg0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Cloud Infrastructure"
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
              <h2 className="text-4xl text-[#4A5565] mb-6">What You Gain <span className="text-gray-500">(The Business Outcomes)</span></h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Transform your organization with measurable business outcomes that drive competitive advantage, operational efficiency, and the agility to adapt to changing market demands.
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
                <h2 className="text-white mb-4">Built for Scale, Designed for Agility</h2>
                <p className="text-white/90 text-lg max-w-3xl">
                  Our cloud platform strategies are designed to support your organization's growth trajectory, enabling rapid innovation while maintaining security, governance, and cost efficiency at every stage.
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
            <h2 className="text-white mb-6">Ready to Transform Your Cloud Strategy?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you build a future-ready cloud platform that accelerates innovation and drives measurable business value.
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
