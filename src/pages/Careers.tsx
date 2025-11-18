import { motion } from "motion/react";
import { ChevronRight, Briefcase, TrendingUp, Heart, Users } from "lucide-react";

export function Careers() {
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
            <span className="text-[#00F000]">Careers</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#111111] to-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <h1 className="text-white mb-6">
                Join the{" "}
                <span className="text-[#00F000]">GreenMen Consulting</span> Team
              </h1>
              <p className="text-white/80 mb-8">
                Be part of a team that's shaping the future of data, AI, and analytics. We're looking for talented individuals who are passionate about innovation and excellence.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1758520144417-e1c432042dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBvcHBvcnR1bml0eXxlbnwxfHx8fDE3NjI3NDc2ODl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Career Opportunities"
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#111111] mb-12 text-center">Why Join Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Briefcase,
                title: "Challenging Work",
                description: "Work on cutting-edge projects that push the boundaries of technology.",
              },
              {
                icon: TrendingUp,
                title: "Career Growth",
                description: "Continuous learning opportunities and clear career progression paths.",
              },
              {
                icon: Heart,
                title: "Work-Life Balance",
                description: "We value your well-being and promote a healthy work-life balance.",
              },
              {
                icon: Users,
                title: "Collaborative Culture",
                description: "Join a supportive team that values collaboration and innovation.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-[#00F000]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[#00F000]" />
                  </div>
                  <h3 className="text-[#111111] mb-3">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#111111] mb-8 text-center">Open Positions</h2>
          <p className="text-gray-700 text-center mb-12 max-w-2xl mx-auto">
            We're always looking for talented individuals. Check back regularly for new opportunities or send us your resume.
          </p>
          <div className="text-center">
            <motion.a
              href="mailto:careers@greenmenconsulting.com"
              className="inline-block px-8 py-3 bg-[#00F000] text-[#111111] rounded-sm hover:bg-[#00F000]/90 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Your Resume
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
}
