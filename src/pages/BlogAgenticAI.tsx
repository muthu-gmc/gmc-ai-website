import { motion } from "motion/react";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { GlobalHeader } from "../components/GlobalHeader";
import { GlobalFooter } from "../components/GlobalFooter";

export default function BlogAgenticAI() {
  return (
    <div className="min-h-screen bg-white">
      <GlobalHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
        
        <div className="max-w-4xl mx-auto relative">
          {/* Back Link */}
          <motion.a
            href="/resources/blogs/"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-8 group"
            whileHover={{ x: -4 }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all posts
          </motion.a>

          {/* Meta Information */}
          <div className="flex items-center gap-6 mb-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Nov 10, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>EDIA2 Team</span>
            </div>
          </div>

          {/* Title */}
          <motion.h1 
            className="mb-8 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Is Your Organization Ready for Agentic AI?
          </motion.h1>

          {/* Introduction */}
          <motion.div
            className="p-8 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl border border-gray-200 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-gray-700 leading-relaxed mb-4">
              While 95% of AI projects fail, the technology itself works. Agentic AI, which is autonomous software that handles specific tasks independently, is like having 24/7 specialists on your team. However, this technology is only 3 years old, compared to 30 years of traditional software maturity. 
            </p>
            <p className="text-gray-700 leading-relaxed">
              The reality is that two-thirds of Enterprise employees do not use AI daily, and the gap between AI's capability and its actual implementation is massive.
            </p>
          </motion.div>

          {/* Share Button */}
          <motion.button
            className="mb-12 inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Share2 className="w-4 h-4" />
            Share this article
          </motion.button>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            
            {/* Section 1 */}
            <div className="mb-16">
              <h2 className="flex items-baseline gap-3 mb-6">
                <span className="text-[#00F000]">01</span>
                <span>The 5 Technical Hurdles You Must Clear</span>
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                While the main barriers are organizational, several technical hurdles still exist:
              </p>

              <div className="space-y-6">
                <div className="pl-6 border-l-2 border-[#00F000]">
                  <h3 className="mb-3">Evaluation Takes Forever</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Building evaluations often takes longer than building the agent itself. There is a need for systematic testing frameworks that do not exist yet.
                  </p>
                </div>

                <div className="pl-6 border-l-2 border-gray-200">
                  <h3 className="mb-3">Non-Deterministic Chaos</h3>
                  <p className="text-gray-700 leading-relaxed">
                    You can ask the same question twice and get different answers, just like with humans. This breaks traditional software reliability expectations.
                  </p>
                </div>

                <div className="pl-6 border-l-2 border-gray-200">
                  <h3 className="mb-3">Infrastructure Desert</h3>
                  <p className="text-gray-700 leading-relaxed">
                    There are no established DevOps for AI, such as Jenkins or Puppet. Teams are often building the plane while flying it.
                  </p>
                </div>

                <div className="pl-6 border-l-2 border-gray-200">
                  <h3 className="mb-3">Black Box Mystery</h3>
                  <p className="text-gray-700 leading-relaxed">
                    What happens inside AI models remains opaque. This makes debugging feel more like guesswork than science.
                  </p>
                </div>

                <div className="pl-6 border-l-2 border-gray-200">
                  <h3 className="mb-3">Memory Problem Unsolved</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The challenges of long-term context and learning across sessions are still being researched.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-16">
              <h2 className="flex items-baseline gap-3 mb-6">
                <span className="text-[#00F000]">02</span>
                <span>The Real Barriers: Risk, Politics, and Process</span>
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-8">
                The biggest challenges are not technical. They are about people and established structures.
              </p>

              <div className="bg-gradient-to-br from-[#00F000]/5 to-transparent p-8 rounded-2xl border border-[#00F000]/20 mb-8">
                <h3 className="mb-4">Risk Management: The Make-or-Break Decision</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You must define your organization's risk appetite first, as tolerance varies by industry, regulation, and culture. Risk management is not about avoiding risk; it's about systematic mitigation. For example, Flow Health successfully deployed medical advice agents in a high-risk domain.
                </p>
                
                <div className="mt-6 space-y-3">
                  <p className="text-gray-700">Key factors to define include:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Regulatory Requirements:</strong> What industry-specific compliance frameworks apply?</li>
                    <li><strong>Organizational Culture:</strong> How much uncertainty can your organization tolerate?</li>
                    <li><strong>Domain Sensitivity:</strong> The stakes for healthcare are very different from marketing.</li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="mb-4">The Organizational Immune Response</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  An Essec Study found that "80% of organizational tasks are just working around politics". High-performing AI teams often face internal resistance, not technical barriers. Your AI agent might work perfectly, but it still needs to survive your organization's "antibodies".
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-4">This resistance appears in several ways:</p>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Automating Bad Processes:</strong> Organizations will automate a 127-step workflow instead of redesigning it to 3 steps. AI, in this case, only amplifies dysfunction.</li>
                  <li><strong>Political Overhead:</strong> Most work is not the actual work, but rather navigating organizational politics and legacy systems.</li>
                  <li><strong>Success Triggers Pushback:</strong> Paradoxically, the most high-performing AI teams often face the most organizational resistance.</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4">The AI Enablement Gap</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Organizations obsess over AI usage metrics while ignoring what truly matters: quality and actual productivity gains. Generic "AI 101" training fails because finance, HR, and engineering all need completely different approaches.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This requires a new management paradigm. This isn't "change management"; it's "changing how we manage". Traditional hierarchies will collapse when individuals begin to manage fleets of agents, and leadership must evolve or become irrelevant.
                </p>
              </div>
            </div>

            {/* Section 3 - Success Story */}
            <div className="mb-16">
              <h2 className="flex items-baseline gap-3 mb-6">
                <span className="text-[#00F000]">03</span>
                <span>Real Success: 28 Days to Production</span>
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                It is possible to succeed. A supply chain optimization project provides a clear example.
              </p>

              <div className="bg-gray-900 text-white p-8 rounded-2xl mb-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-[#00F000] mb-2">The Team</div>
                    <p className="text-sm text-gray-300">Just 3 people (2 AI engineers + Dale).</p>
                  </div>
                  <div>
                    <div className="text-[#00F000] mb-2">The Timeline</div>
                    <p className="text-sm text-gray-300 mb-2">Days 1-20: Reproduced an MIT research paper with CPG companies.</p>
                    <p className="text-sm text-gray-300">Days 21-28: Added 5 reasoning agents for advanced analysis.</p>
                  </div>
                  <div>
                    <div className="text-[#00F000] mb-2">The Result</div>
                    <p className="text-sm text-gray-300">A production system that runs complex network analysis in 38 minutes for under $1.</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Why did it work?</strong> Technical excellence met organizational readiness. They mapped historical processes first, built comprehensive evals aligned with company values, and brought business stakeholders along from day one.
              </p>
            </div>

            {/* Section 4 - Playbook */}
            <div className="mb-16">
              <h2 className="flex items-baseline gap-3 mb-6">
                <span className="text-[#00F000]">04</span>
                <span>Your Implementation Playbook</span>
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Here is a playbook for successful implementation.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="mb-4">For Building Agents</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>Map Historical Processes:</strong> Understand what actually happens before you automate it.</li>
                    <li><strong>Focus on Personas:</strong> Capture institutional knowledge by role.</li>
                    <li><strong>Build Comprehensive Evals:</strong> Align these evaluations with company values and regulations.</li>
                    <li><strong>Mix Deterministic + Reasoning:</strong> Use stable, traditional tools alongside AI agents.</li>
                    <li><strong>Implement Tracing:</strong> Ensure you have robust monitoring from day one.</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-[#00F000]/5 to-transparent p-6 rounded-xl border border-[#00F000]/20">
                  <h3 className="mb-4">For Organizations</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>Roles Evolve, Don't Disappear:</strong> Do not fear displacement; prepare for transformation.</li>
                    <li><strong>Create Innovation Space:</strong> You need environments that tolerate controlled failure.</li>
                    <li><strong>Include Stakeholders Early:</strong> Business involvement is necessary from the beginning.</li>
                    <li><strong>Task-Level Understanding:</strong> You need granular process knowledge, not just high-level summaries.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 5 - Future */}
            <div className="mb-16">
              <h2 className="flex items-baseline gap-3 mb-6">
                <span className="text-[#00F000]">05</span>
                <span>The Future Is Already Here</span>
              </h2>

              <div className="space-y-6">
                <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-[#00F000] transition-colors">
                  <h3 className="mb-3">New Hybrid Roles</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Data engineers are becoming major users of agent frameworks, creating a hybrid persona that bridges data and AI engineering.
                  </p>
                </div>

                <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-[#00F000] transition-colors">
                  <h3 className="mb-3">Models Design Better Processes</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Just as Alpha Zero discovered strategies humans never imagined, your agents might redesign your business better than consultants.
                  </p>
                </div>

                <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-[#00F000] transition-colors">
                  <h3 className="mb-3">Pattern Design Frontier</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Agentic patterns are emerging as the new foundational knowledge, much like software design patterns in the 1990s.
                  </p>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-10 rounded-2xl">
              <h2 className="text-white mb-6">
                Conclusion: The Technology Works. Do You?
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Agentic AI can deliver remarkable results in weeks, not years. The barrier isn't technical capability; it's the organizational, process, and people challenges.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Success requires balancing innovation with risk management while fundamentally rethinking how work gets done. The question isn't whether AI agents will transform your organization.
              </p>
              <p className="text-gray-300 leading-relaxed">
                It's whether you'll transform your organization fast enough to leverage them.
              </p>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <h3 className="mb-4">Ready to explore Agentic AI for your organization?</h3>
              <motion.a
                href="#contact"
                className="inline-block px-8 py-3 bg-[#00F000] text-gray-900 rounded-lg hover:bg-[#00F000]/90 transition-all shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch
              </motion.a>
            </div>

          </article>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}