import { motion } from "motion/react";
import { ChevronRight, Target, BarChart3, Cpu, GitBranch, Eye, Activity, Cog, CheckCircle2, Brain, Lightbulb } from "lucide-react";
import { ImageWithFallback } from "../../../components/figma/ImageWithFallback";

export function IntelligentSolutionDesign() {
  const deliverables = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "AI Use Case Value Mapping",
      description: "Translation of business challenges into specific, measurable AI use cases (predictive maintenance, churn reduction, NLP) with quantified impact.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Comprehensive Feasibility Analysis",
      description: "Rigorous assessment of data availability, technical complexity, and business impact for each identified use case to prioritize high-value initiatives.",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "End-to-End AI/ML Architecture Design",
      description: "Complete architectural blueprint covering data pipelines, feature engineering, model training workflows, and deployment infrastructure.",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Algorithm Selection & Model Design",
      description: "Expert guidance on choosing optimal machine learning or deep learning algorithms tailored to your specific problem and data characteristics.",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Explainable AI (XAI) Framework",
      description: "Implementation of model transparency and interpretability features ensuring AI solutions are trustworthy for regulatory and business acceptance.",
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "MLOps Implementation Blueprint",
      description: "Automated, repeatable processes for model development, testing, deployment, and monitoring in your cloud environment.",
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Model Monitoring & Performance Dashboards",
      description: "Real-time dashboards to track model drift, prediction accuracy, and performance metrics in production environments.",
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: "Seamless Business Integration Plan",
      description: "Strategy and technical implementation ensuring intelligent solutions integrate smoothly with existing business processes and applications.",
    },
  ];

  const outcomes = [
    {
      title: "High-Impact AI Solutions Delivered Faster",
      description: "Focused use case identification and feasibility analysis accelerates time-to-value for your AI investments.",
    },
    {
      title: "Trustworthy & Transparent AI",
      description: "Explainable AI frameworks ensure your models are interpretable, auditable, and acceptable to stakeholders and regulators.",
    },
    {
      title: "Scalable & Production-Ready Architecture",
      description: "Enterprise-grade MLOps infrastructure enables rapid deployment and seamless scaling of AI solutions.",
    },
    {
      title: "Reduced Model Development Risk",
      description: "Expert algorithm selection and architecture design minimize costly rework and failed AI initiatives.",
    },
    {
      title: "Sustained Model Performance",
      description: "Comprehensive monitoring and automated retraining ensure your AI solutions maintain accuracy over time.",
    },
    {
      title: "Measurable Business Impact",
      description: "Value-driven use case selection ensures every AI solution directly addresses critical business objectives and delivers ROI.",
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
            <span className="text-[#00F000]">Intelligent Solution Design</span>
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
              <h1 className="text-white mb-6">Designing and Deploying High-Impact AI/ML Solutions</h1>
              <p className="text-white/90 text-xl mb-8 leading-relaxed">
                Bridge the gap between strategic roadmaps and enabling technology with intelligent AI solutions that deliver measurable business value through expert design, architecture, and deployment.
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
                  src="https://images.unsplash.com/photo-1738003667850-a2fb736e31b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHNvbHV0aW9uJTIwZGVzaWdufGVufDF8fHx8MTc2MzQ0ODcxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Intelligent Solution Design"
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
                Our Intelligent Solution Design service delivers complete AI/ML solutions from concept to production, combining strategic use case identification with enterprise-grade architecture and deployment capabilities.
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
                src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjM0NDg3MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Machine Learning Development"
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
                src="https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjBmdXR1cmV8ZW58MXx8fHwxNzYzMDIwMjk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="AI Technology Future"
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
                Transform your organization with production-ready AI solutions that deliver tangible business value, built on robust architecture and sustainable MLOps practices.
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
              src="https://images.unsplash.com/photo-1728933102332-a4f1a281a621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNjMwODg5Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Team Collaboration"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#4A5565] via-[#4A5565]/70 to-transparent flex items-end">
              <div className="p-12 w-full">
                <h2 className="text-white mb-4">From Concept to Production, Seamlessly</h2>
                <p className="text-white/90 text-lg max-w-3xl">
                  Our intelligent solution design approach ensures your AI initiatives move smoothly from strategic use cases to production-ready solutions that drive real business outcomes.
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
            <h2 className="text-white mb-6">Ready to Build Intelligent Solutions?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can design and deploy AI/ML solutions that deliver measurable business impact and drive your organization forward.
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
