import { useState } from "react";
import { motion } from "motion/react";
import { ChevronRight, MessageSquare, Network, Lightbulb, TrendingUp, Clock, TrendingDown, Target, Link, Bell, Check, User, ArrowRight } from "lucide-react";
import comparisonImage from "figma:asset/ae06f7468ab722377f7094ff5d9ab3ad8e3a1196.png";
import timeBackImage from "figma:asset/16ee014dabfcb5d15debd5f9a7b9f6a749c4c483.png";
// import ctaFormImage from "figma:asset/150b8ead2a07e3e393770290be25d4ce4db4c56a.png";

const topFeatures = [
  {
    icon: MessageSquare,
    title: "Natural Language Queries",
    description: "Ask business questions in plain English, no SQL required",
  },
  {
    icon: Network,
    title: "Correlation Analysis",
    description: "Discover hidden patterns and relationships in your data",
  },
  {
    icon: Lightbulb,
    title: "Actionable Insights",
    description: "Get recommended actions based on data-driven findings",
  },
];

const trustStats = [
  {
    icon: TrendingUp,
    percentage: "51%",
    description: "Cite improving data quality as the #1 barrier to scaling AI",
  },
  {
    icon: Clock,
    percentage: "40%",
    description: "Of data engineering time wasted on manual firefighting",
  },
  {
    icon: TrendingDown,
    percentage: "28%",
    description: "Of professionals trust AI output (the 'Trust Gap')",
  },
];

const pillars = [
  {
    number: "01",
    icon: Target,
    title: "AI-Driven Observability",
    subtitle: "Detect the 'Unknown Unknowns'",
    description: "Autonomous monitoring of freshness, volume, schema, and distribution. AI explainability shows why each anomaly matters.",
    features: [
      "24/7 autonomous monitoring",
      "AI explainability",
      "Predictive alerting",
    ],
  },
  {
    number: "02",
    icon: Link,
    title: "Active Metadata Integration",
    subtitle: "Add the 'So What?' Business Context",
    description: "Enriches every alert with business context: affected dashboards, ownership, downstream impact.",
    features: [
      "Built-in glossary",
      "Atlan/Collibra sync",
      "Impact analysis",
    ],
  },
  {
    number: "03",
    icon: Bell,
    title: "Automated Incident Resolution",
    subtitle: "Drive the 'What's Next?' Workflow",
    description: "Auto-creates Jira tickets pre-filled with lineage, impact, and ownership. Routes to the right teams instantly.",
    features: [
      "Smart routing",
      "Auto-ticketing",
      "Central command center",
    ],
  },
];



export function SAFAI() {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData();
    formData.append("entry.1444566559", fullName);
    formData.append("entry.1789569696", email);
    formData.append("entry.1586949769", message);

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSd0BYDuEunZK3KUOLY3NMHG-ctO9MycvKcjd75uPpUjNLengA/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        }
      );

      setSuccess(true);
      setFullName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
    }

    setSubmitting(false);
  };

  return (
    <div className="mt-16">
      {/* Breadcrumbs */}
      <section className="bg-gray-50 py-4 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="/" className="hover:text-[#00F000] transition-colors">
              Home
            </a>
            <ChevronRight className="w-4 h-4" />
            <a href="/products/" className="hover:text-[#00F000] transition-colors">
              Products
            </a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#00F000]">SAF AI</span>
          </div>
        </div>
      </section>

      {/* Top Badge + Title Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 bg-[#00F000]/10 text-[#00F000] rounded-full text-sm mb-6"
          >
            Enterprise DataOps Platform
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            AI-Powered Analytics
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-700 max-w-3xl mx-auto mb-12"
          >
            Go Beyond Incidents. Get AI-Driven Business Answers.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 max-w-3xl mx-auto mb-12"
          >
            SAF is more than an incident platform. It's your AI data analyst. Ask a business question in plain English, and SAF will analyze your trusted data to find the "why".
          </motion.p>

          {/* Top 3 Features */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {topFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-lg p-6 text-left hover:border-[#00F000] hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-[#00F000]/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#00F000]" />
                  </div>
                  <h3 className="text-[#111111] mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Analyst Demo Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 shadow-sm"
          >
            {/* Chat Header */}
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-200">
              <div className="w-10 h-10 bg-[#00F000] rounded-full flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-[#111111]" />
              </div>
              <div>
                <div className="text-[#111111]">SAF AI Analyst</div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-500">Online</span>
                </div>
              </div>
            </div>

            {/* User Question */}
            <div className="mb-6">
              <div className="inline-block bg-[#00F000]/10 border border-[#00F000]/20 rounded-2xl rounded-br-sm px-6 py-4 max-w-2xl">
                <p className="text-[#111111]">
                  Why did our renewal opportunities drop 15% last quarter?
                </p>
              </div>
            </div>

            {/* AI Response */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="animate-pulse">Analyzing 5 data sources...</div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-sm p-6">
                <p className="text-[#111111] mb-4">
                  I found a 15% drop in renewals. This strongly correlates (85%) with customers in the 'Pro Tier' who experienced {'>'}2 high-priority support tickets 90 days before renewal.
                </p>

                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Regional:</span> Concentrated in EMEA (72%)
                  </p>
                </div>

                <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-green-900 mb-2">Recommended Actions:</div>
                      <ul className="text-sm text-green-800 space-y-1">
                        <li>• Review EMEA Pro Tier support workflow</li>
                        <li>• Implement proactive outreach 120 days before renewal</li>
                        <li>• Assign dedicated success manager to at-risk accounts</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Value Proposition Hero */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#111111] to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-white mb-6">
                Transform Data Incidents into{" "}
                <span className="text-[#00F000]">Proactive Solutions</span>
              </h1>
              <p className="text-white/80 mb-8">
                Move from 3-day data firefights to 30-minute automated fixes. SAF delivers AI-powered DataOps that ensures data quality, builds trust, and accelerates AI adoption.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#RequestDemo"
                  className="px-8 py-3 bg-[#00F000] text-[#111111] rounded-sm hover:bg-[#00F000]/90 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Request a Demo →
                </motion.a>
                <motion.a
                  href="#features"
                  className="px-8 py-3 border border-white/20 text-white rounded-sm hover:bg-white/5 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Platform
                </motion.a>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <div className="w-5 h-5 bg-[#00F000]/20 rounded flex items-center justify-center">
                    <svg className="w-3 h-3 text-[#00F000]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  SOC 2 Compliant
                </div>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <div className="w-5 h-5 bg-[#00F000]/20 rounded flex items-center justify-center">
                    <svg className="w-3 h-3 text-[#00F000]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Enterprise-Grade
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    <div>
                      <div className="text-2xl">70%</div>
                      <div className="text-xs opacity-90">Faster Resolution</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <div className="text-white/60 text-sm mb-2">Before SAF</div>
                    <div className="text-white text-2xl">3 days</div>
                    <div className="text-white/60 text-sm">Average incident resolution</div>
                  </div>
                  <div className="bg-[#00F000]/10 border border-[#00F000]/20 rounded-lg p-4">
                    <div className="text-[#00F000] text-sm mb-2">With SAF</div>
                    <div className="text-white text-2xl">30 minutes</div>
                    <div className="text-white/60 text-sm">Automated resolution</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Crisis Statistics */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-[#111111] mb-4">
              The Data Trust Crisis Blocking AI Adoption
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              According to the 2025/26 Data & AI Monitor, organizations face critical barriers to scaling AI
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {trustStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.percentage}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#00F000]/10 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-[#00F000]" />
                  </div>
                  <div className="text-4xl text-[#111111] mb-4">{stat.percentage}</div>
                  <p className="text-gray-700">{stat.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[#111111] mb-4">The Three Pillars of Data Trust</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              SAF combines AI-driven observability, active metadata, and automated workflows to transform your data operations
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative bg-white border border-gray-200 rounded-xl p-8 hover:border-[#00F000] hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Number Badge */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#00F000] to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl text-[#111111]">{pillar.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-[#00F000]/10 rounded-lg flex items-center justify-center mb-6 mt-4 group-hover:bg-[#00F000]/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#00F000]" />
                  </div>

                  {/* Content */}
                  <h3 className="text-[#111111] mb-2">{pillar.title}</h3>
                  <p className="text-[#00F000] text-sm mb-4">{pillar.subtitle}</p>
                  <p className="text-gray-700 mb-6">{pillar.description}</p>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {pillar.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-5 h-5 bg-[#00F000]/10 rounded flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-[#00F000]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Beyond Monitoring - Comparison Table */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-[#111111] mb-4">Beyond Monitoring: We Deliver Resolution</h2>
            <p className="text-gray-600">See how SAF compares to traditional observability tools</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={comparisonImage}
              alt="SAF Platform vs Traditional Tools Comparison"
              className="w-full h-auto rounded-xl shadow-lg border-2 border-[#00F000] shadow-[0_0_30px_rgba(0,240,0,0.3)]"
            />
          </motion.div>
        </div>
      </section>

      {/* Give Your Team Time Back */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-[#111111] mb-6">Give Your Team 40% of Their Time Back</h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-4">
              SAF doesn't replace data engineers—<span className="text-[#00F000]">it frees them from firefighting</span>. We augment your team, making them heroes who fix problems before anyone even knows they exist. Give your best people their time back to innovate.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={timeBackImage}
              alt="Works with your entire stack - Snowflake, Databricks, Atlan, Jira, Slack, dbt"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Stop Drowning - Demo Form */}
      <section id="RequestDemo" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-[#111111] mb-4"
          >
            Stop Drowning in Data Incidents
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-700 max-w-2xl mx-auto mb-8"
          >
            Power the future of your AI with data you can actually trust. Move from
            3-day firefights to 30-minute fixes.
          </motion.p>

          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 max-w-xl mx-auto"
            >
              <div className="flex items-center justify-center gap-2 text-lg">
                <Check className="w-5 h-5" />
                Your demo request has been submitted!
              </div>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid gap-4 max-w-xl mx-auto"
            >
              <input
                type="text"
                required
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#00F000] w-full"
              />

              <input
                type="email"
                required
                placeholder="Work Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#00F000] w-full"
              />

              <input
                type="text"
                required
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#00F000] w-full"
              />

              <button
                type="submit"
                disabled={submitting}
                className="bg-[#00F000] text-[#111111] py-3 rounded-lg font-medium hover:bg-[#00F000]/80 transition disabled:opacity-50"
              >
                {submitting ? "Submitting..." : "Request a Demo"}
              </button>
            </motion.form>
          )}

          <p className="text-sm text-gray-500 mt-6">
            Your data never leaves your environment. SOC 2 compliant.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#111111] to-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white mb-6">Ready to transform your data operations?</h2>
            <p className="text-white/80 mb-8">
              Discover how SAF AI can help you achieve data reliability and quality at scale.
            </p>
            {/* <motion.a
              href="#contact"
              className="inline-block px-8 py-3 bg-[#00F000] text-[#111111] rounded-sm hover:bg-[#00F000]/90 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Request a Demo
            </motion.a> */}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
