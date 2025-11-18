import { motion } from "motion/react";
import { ChevronRight, Linkedin, Twitter } from "lucide-react";

export function ChipQualityAI() {
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
                <p className="text-sm text-gray-500 mb-2">CASE STUDY | May 8, 2022</p>
                <h1 className="text-4xl md:text-5xl text-[#111111] mb-8">
                  Fortune 100 F&B boosts chip quality, cuts effort by 75% with AI vision
                </h1>

                {/* Hero Image */}
                <div className="mb-8">
                  <img
                    src="https://images.unsplash.com/photo-1599583863916-e06c29087f51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwcXVhbGl0eSUyMGNvbnRyb2x8ZW58MXx8fHwxNzYyNzkzNTMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Manufacturing Quality Control"
                    className="w-full h-auto rounded-lg"
                  />
                </div>

                {/* Tags */}
                <div className="mb-8">
                  <p className="text-sm text-[#00F000] mb-2">TAGS:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Computer Vision</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Manufacturing</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Quality Control</span>
                  </div>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-6">
                    GreenMen Consulting deployed an AI-powered computer vision system that revolutionized quality control for a Fortune 100 food and beverage manufacturer, dramatically improving chip quality while reducing manual inspection effort.
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
                    A leading snack food manufacturer faced significant challenges with quality control in their chip production lines. Manual visual inspection was time-consuming, inconsistent, and unable to catch all defects at high production speeds. The company needed a solution that could maintain quality standards while keeping pace with production demands.
                  </p>

                  <h2 className="text-2xl text-[#111111] mt-8 mb-4">Our Solution</h2>
                  <p className="text-gray-700 mb-6">
                    We developed an advanced AI vision system using deep learning and computer vision to automatically inspect chips in real-time on the production line. The system detects defects including discoloration, irregular shapes, foreign objects, and size variations with superhuman accuracy. It integrates seamlessly with existing manufacturing equipment and provides actionable insights to production teams.
                  </p>

                  <h2 className="text-2xl text-[#111111] mt-8 mb-4">Results</h2>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                    <li>75% reduction in manual inspection effort</li>
                    <li>99.2% defect detection accuracy</li>
                    <li>30% decrease in customer quality complaints</li>
                    <li>15% reduction in waste and rework costs</li>
                    <li>Scalable deployment across multiple production facilities</li>
                  </ul>
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
