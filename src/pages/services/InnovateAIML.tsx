import { motion } from "motion/react";
import { ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { CustomerStoriesSection } from "../../components/CustomerStoriesSection";

const offerings = [
  {
    title: "Intelligent Data Science",
    oneLiner: "Activate your data to forecast, predict, and automate mission-critical decisions.",
    detailedContent: [
      "We deploy advanced data science to find the signals in your noise. Our expertise covers the full model lifecycle: from data engineering and feature extraction to building, scaling, and governing predictive and generative models.",
      "We operationalize your data, creating an end-to-end pipeline from ingestion to insights. This moves your organization from historical reporting to a state of forward-looking, automated decision-making, turning your data from a static asset into an active, value-generating engine."
    ]
  },
  {
    title: "AI Engineering & MLOps",
    oneLiner: "Architecting robust, multi-modal AI platforms built for enterprise scale and governance.",
    detailedContent: [
      "Harness the power of all your data. We engineer scalable, production-grade AI solutions to process and understand unstructured, multi-modal data—spanning text, speech, images, and video.",
      "Our end-to-end MLOps and DataOps platforms provide the foundational stack to govern, deploy, monitor, and scale your AI initiatives. We move you from isolated prototypes to a factory-like ability to deliver and manage AI across the enterprise."
    ]
  },
  {
    title: "Autonomous & Agentic AI",
    oneLiner: "Deploy AI agents and cognitive systems for real-time, augmented, and autonomous operations.",
    detailedContent: [
      "We build intelligent systems that act. Our AI decisioning engines are engineered to understand deep business context, train on live data streams, and learn from human-in-the-loop feedback.",
      "We deliver a spectrum of solutions, from predictive intelligence that augments your team's capabilities to fully autonomous agents that drive real-time operations, optimize processes, and interact with your customers."
    ]
  },
  {
    title: "Your End-to-End AI Partner",
    oneLiner: "Our proven, end-to-end methodology de-risks your AI journey from strategy to scalable impact.",
    detailedContent: [
      "Differentiate your business with a pragmatic, proven approach to applied AI. We partner with you to architect and deploy sophisticated, scalable, and secure ML systems that are built to last.",
      "Our focus is on unlocking the full, tangible potential of AI, turning your data ecosystem into a powerful engine for long-term growth and innovation."
    ]
  }
];

const customerStories = [
  {
    title: "e-Commerce Giant Transforms Self-Service Analytics with Databricks AI/BI Genie",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZhbmNlZCUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjI4NjUxMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "/case-studies/call-center-ai/"
  },
  {
    title: "Enterprise AI DataOps Platform for Financial Services",
    image: "https://images.unsplash.com/photo-1615358589317-78332cb21a22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkYXRhJTIwb3BlcmF0aW9uc3xlbnwxfHx8fDE3NjI4NjU4NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "/case-studies/data-analytics-sales/"
  },
  {
    title: "Accelerating Lakehouse Modernization with an AI-Driven Development Lifecycle",
    image: "https://images.unsplash.com/photo-1762330465857-07e4c81c0dfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGRldmVsb3BtZW50JTIwY29kaW5nfGVufDF8fHx8MTc2Mjg3MDc3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "/case-studies/home-finance-lakehouse/"
  }
];

export function InnovateAIML() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

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
            <span className="text-[#00F000]">Innovate with AI & ML</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#4A5565] to-[#4A5565]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Go AI-Native: Supercharge Your{" "}
                <span className="text-[#00F000]">Enterprise Application Engineering</span>
              </h1>
              <p className="text-white/80 text-lg">
                Supercharge your enterprise with bespoke AI and ML. We don't just build solutions; we architect intelligent systems that embed into your core workflows, unlocking transformative efficiency, generative innovation, and a sustainable competitive advantage.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1737505599159-5ffc1dcbc08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbmV1cmFsJTIwbmV0d29ya3xlbnwxfHx8fDE3NjI4Mzk0NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="AI and Machine Learning"
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.title}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#00F000] transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => toggleCard(index)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-[#111111] mb-3">{offering.title}</h3>
                    <p className="text-gray-700 mb-4">{offering.oneLiner}</p>
                  </div>
                  {expandedCard === index ? (
                    <ChevronUp className="w-5 h-5 text-[#00F000] flex-shrink-0 mt-1" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                  )}
                </div>
                
                {expandedCard === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-gray-200 space-y-4"
                  >
                    {offering.detailedContent.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-600 text-sm leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Stories Section */}
      <CustomerStoriesSection />
    </div>
  );
}