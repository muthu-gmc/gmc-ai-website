import { motion } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const customerStories = [
  // InnovateAIML specific stories (first 3)
  {
    id: 1,
    title: "e-Commerce Giant Transforms Self-Service Analytics with Databricks AI/BI Genie",
    industry: "E-Commerce & Retail",
    challenge: "Complex data analysis requiring technical expertise limiting business user adoption",
    outcome: "Self-service analytics platform enabling natural language queries",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZhbmNlZCUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjI4NjUxMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    detailLink: "/case-studies/ecommerce-databricks-genie",
  },
  {
    id: 2,
    title: "Enterprise AI DataOps Platform for Financial Services",
    industry: "Financial Services",
    challenge: "Fragmented AI/ML workflows and lack of operational governance",
    outcome: "Unified MLOps platform with automated model deployment and monitoring",
    image: "https://images.unsplash.com/photo-1615358589317-78332cb21a22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkYXRhJTIwb3BlcmF0aW9uc3xlbnwxfHx8fDE3NjI4NjU4NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    detailLink: "/case-studies/enterprise-ai-dataops",
  },
  {
    id: 3,
    title: "Accelerating Lakehouse Modernization with AI-Driven Development Lifecycle",
    industry: "Financial Services - Home Loan/Mortgage",
    challenge: "Legacy data warehouse limiting real-time analytics and AI capabilities",
    outcome: "Modern lakehouse architecture with AI-accelerated development",
    image: "https://images.unsplash.com/photo-1762330465857-07e4c81c0dfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGRldmVsb3BtZW50JTIwY29kaW5nfGVufDF8fHx8MTc2Mjg3MDc3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    detailLink: "/case-studies/lakehouse-modernization",
  },
  // General customer stories
  {
    id: 4,
    title: "CKYC Implementation for MeraSuraksha Product",
    industry: "Financial Services",
    challenge: "KYC streamlining process pending for years",
    outcome: "Full solution delivered in one month",
    image: "https://images.unsplash.com/photo-1758519289594-8e0444825b04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBzZXJ2aWNlcyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYyNzc4NjE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    detailLink: "/case-studies/ckyc-implementation",
  },
  // {
  //   id: 5,
  //   title: "API Development for HDFC & ICICI Providers",
  //   industry: "Financial Services",
  //   challenge: "Integration complexity with multiple banking providers",
  //   outcome: "Seamless multi-provider API ecosystem",
  //   image: "https://images.unsplash.com/photo-1760952851538-17a59f691efe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBUEklMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjI4ODQ3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  //   detailLink: "/case-studies/api-development-hdfc-icici",
  // },
  // {
  //   id: 6,
  //   title: "Mobile App Facelift",
  //   industry: "Financial Services",
  //   challenge: "Outdated user interface affecting customer engagement",
  //   outcome: "Modern, intuitive mobile experience",
  //   image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYyNzk1OTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  //   detailLink: "/case-studies/mobile-app-facelift",
  // },
  // {
  //   id: 7,
  //   title: "DevSecOps Implementation",
  //   industry: "Multi-Industry",
  //   challenge: "Manual deployment processes and security gaps",
  //   outcome: "Automated CI/CD with embedded security",
  //   image: "https://images.unsplash.com/photo-1599949104055-2d04026aee1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwRGV2T3BzfGVufDF8fHx8MTc2Mjg4NDczOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  //   detailLink: "/case-studies/devsecops-implementation",
  // },
  {
    id: 8,
    title: "Performance Engineering for Digital Lending",
    industry: "Financial Services",
    challenge: "API latency and system instability affecting customer experience",
    outcome: "78% reduction in P95 response time, 192% increase in throughput",
    image: "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhYmFzZSUyMHBlcmZvcm1hbmNlJTIwc2VydmVyfGVufDF8fHx8MTc2Mjg4NDczOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    detailLink: "/case-studies/performance-engineering",
  },
  {
    id: 9,
    title: "SQL Server Upgrades - Data Core Modernization",
    industry: "Financial Services",
    challenge: "Legacy database limiting scalability and performance",
    outcome: "76% reduction in query time, 173% increase in throughput",
    image: "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhYmFzZSUyMHBlcmZvcm1hbmNlJTIwc2VydmVyfGVufDF8fHx8MTc2Mjg4NDczOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    detailLink: "/case-studies/sql-server-upgrade",
  },
  // {
  //   id: 10,
  //   title: "Data Modernisation - Salesforce Integration",
  //   industry: "Financial Services",
  //   challenge: "Manual data migration across multiple systems",
  //   outcome: "100% automation, 70% faster migration cycles",
  //   image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwbWlncmF0aW9uJTIwY2xvdWR8ZW58MXx8fHwxNzYyODg0NzM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  //   detailLink: "/case-studies/data-modernisation",
  // },
  // {
  //   id: 11,
  //   title: "API Modernisation - BizTalk to AWS Migration",
  //   industry: "Financial Services",
  //   challenge: "Legacy on-premises integration platform",
  //   outcome: "75% improvement in deployment velocity, near real-time processing",
  //   image: "https://images.unsplash.com/photo-1660480339300-68c174b6c34f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGV3YXJlJTIwaW50ZWdyYXRpb258ZW58MXx8fHwxNzYyODg0NzQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  //   detailLink: "/case-studies/api-modernisation",
  // },
  // {
  //   id: 12,
  //   title: "DevSecOps for SFDC CRM APIs",
  //   industry: "Financial Services",
  //   challenge: "Security and deployment automation for Salesforce integrations",
  //   outcome: "60% faster deployments with embedded security testing",
  //   image: "https://images.unsplash.com/photo-1599949104055-2d04026aee1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwRGV2T3BzfGVufDF8fHx8MTc2Mjg4NDczOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  //   detailLink: "/case-studies/devsecops-sfdc",
  // },
  // {
  //   id: 13,
  //   title: "Middleware Implementation - IBM ACE",
  //   industry: "Urban Transport & Infrastructure",
  //   challenge: "Manual time & attendance synchronization between TAMS and SAP",
  //   outcome: "80% reduction in manual effort, 100% data consistency",
  //   image: "https://images.unsplash.com/photo-1660480339300-68c174b6c34f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGV3YXJlJTIwaW50ZWdyYXRpb258ZW58MXx8fHwxNzYyODg0NzQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  //   detailLink: "/case-studies/ibm-ace-middleware",
  // },
  // {
  //   id: 14,
  //   title: "Datalakehouse - Data Modernisation",
  //   industry: "Financial Services - Home Loan/Mortgage",
  //   challenge: "Fragmented data architecture limiting analytics capabilities",
  //   outcome: "Unified data platform enabling real-time insights",
  //   image: "https://images.unsplash.com/photo-1506399309177-3b43e99fead2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwd2FyZWhvdXNlJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2Mjg4NDc0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  //   detailLink: "/case-studies/datalakehouse",
  // },
  // {
  //   id: 15,
  //   title: "Data Observability with AI",
  //   industry: "Financial Services",
  //   challenge: "Reactive data quality monitoring and issue detection",
  //   outcome: "Proactive AI-driven data quality monitoring",
  //   image: "https://images.unsplash.com/photo-1506399309177-3b43e99fead2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwd2FyZWhvdXNlJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2Mjg4NDc0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  //   detailLink: "/case-studies/data-observability-ai",
  // },
];

export function CustomerStoriesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const storiesPerPage = 3;
  const totalPages = Math.ceil(customerStories.length / storiesPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentStories = customerStories.slice(
    currentIndex * storiesPerPage,
    (currentIndex + 1) * storiesPerPage
  );

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full mb-6">
            <span className="text-sm font-medium text-[#4A5565]">Success Stories</span>
          </div>
          <h2 className="text-5xl font-bold text-[#4A5565] mb-6 tracking-tight">
            Proven Results Across{" "}
            <span className="bg-gradient-to-r from-[#00F000] to-emerald-600 bg-clip-text text-transparent">
              Industries
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped organizations transform their data infrastructure and achieve measurable business outcomes
          </p>
        </motion.div>

        {/* Stories Grid with Carousel */}
        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {currentStories.map((story, index) => (
              <motion.div
                key={story.id}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-[#00F000] hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-[#00F000] text-[#4A5565] text-xs font-medium rounded-full">
                    {story.industry}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#4A5565] mb-3 group-hover:text-[#00F000] transition-colors">
                    {story.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Challenge:</span> {story.challenge}
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00F000] mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Outcome:</span> {story.outcome}
                      </p>
                    </div>
                  </div>
                  <a
                    href={story.detailLink}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#4A5565] group-hover:gap-3 transition-all"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Carousel Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={prevSlide}
                className="p-2 rounded-lg bg-white border border-gray-200 hover:border-[#00F000] hover:bg-gray-50 transition-all disabled:opacity-50"
                disabled={currentIndex === 0}
              >
                <ChevronLeft className="w-5 h-5 text-[#4A5565]" />
              </button>

              {/* Pagination Dots */}
              <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-[#00F000] w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-2 rounded-lg bg-white border border-gray-200 hover:border-[#00F000] hover:bg-gray-50 transition-all disabled:opacity-50"
                disabled={currentIndex === totalPages - 1}
              >
                <ChevronRight className="w-5 h-5 text-[#4A5565]" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}