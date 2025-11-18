import { motion } from "motion/react";
import { ChevronRight, Coffee, Target, Users, Handshake, Award } from "lucide-react";

export function OurStory() {
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
            <span className="text-[#00F000]">Our Story</span>
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
              className="text-center md:text-left"
            >
              <h1 className="text-white mb-6">
                Innovation with{" "}
                <span className="text-[#00F000]">Accountability</span>
              </h1>
              <p className="text-white/80">
                From a coffee shop conversation to enterprise transformation. This is the GreenMen story.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1633114129669-78b1ff09902b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwbWVldGluZyUyMGJ1c2luZXNzfGVufDF8fHx8MTc2Mjg3MjY5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Coffee Shop Meeting"
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="w-16 h-16 bg-[#00F000]/10 rounded-full flex items-center justify-center mb-6">
                  <Coffee className="w-8 h-8 text-[#00F000]" />
                </div>
                <h2 className="text-[#111111] mb-6">
                  Born from a <span className="text-[#00F000]">Different Question</span>
                </h2>
                <p className="text-gray-700 mb-6">
                  GreenMen Consulting wasn't born in a boardroom. It began in a coffee shop, with a financial services CEO frustrated by a problem we see every day: his in house teams were stalled, and his existing vendors simply couldn't scale.
                </p>
                <p className="text-gray-700">
                  We asked a different question: What if a partner could deliver a cost effective, high value solution <strong>and</strong> empower the in house team to take over, actively reducing vendor dependency? We called it <strong>Innovation with Accountability</strong>.
                </p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1646831652614-d340c68dbda3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGl0ZSUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2Mjg3MjY5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Team Collaboration"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img
                  src="https://images.unsplash.com/photo-1759752394243-9a1592d13f14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwcGxhdGZvcm0lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2Mjg3MjY5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Data Platform"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="w-16 h-16 bg-[#00F000]/10 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-[#00F000]" />
                </div>
                <h2 className="text-[#111111] mb-6">
                  Our First <span className="text-[#00F000]">Win</span>
                </h2>
                <p className="text-gray-700 mb-6">
                  They gave us our first shot: a complex KYC streamlining problem that had been pending for years. Our team delivered the full solution in one month.
                </p>
                <p className="text-gray-700">
                  That first win led to a bigger challenge: a critical data platform build where a "Big Four" firm had failed, costing the client significant time and money. Data is our core. We jumped in, took on the complexity, and built the enterprise data ecosystem they were promised.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Model Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-[#00F000]/10 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-[#00F000]" />
              </div>
              <h2 className="text-[#111111] mb-6">
                Our Model <span className="text-[#00F000]">Today</span>
              </h2>
              <p className="text-gray-700 mb-6">
                This is still our model today. We deploy elite, "Navy SEAL" teams to solve your toughest problems, and then we hand the keys back to you.
              </p>
              <p className="text-gray-700 mb-6">
                Our entire business philosophy is built to eliminate the traditional vendor dependency that holds companies back. We are engineers at heart, not just consultants.
              </p>
              <p className="text-gray-700">
                We thrive on collaborating with people who are as passionate about acceleration and innovation as we are.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1759884247144-53d52c31f859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwZW5naW5lZXJpbmclMjB0ZWFtfGVufDF8fHx8MTc2Mjg3MjY5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Engineering Team"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#111111] mb-12 text-center">Our Core Principles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Elite Teams",
                description: "We deploy specialized, high caliber teams that act like Navy SEALs: focused, agile, and built to tackle your toughest challenges.",
              },
              {
                icon: Handshake,
                title: "Zero Dependency",
                description: "We don't create vendor lock in. We build, we train, we transfer, and we empower your team to own the solution.",
              },
              {
                icon: Users,
                title: "Engineers First",
                description: "We're engineers at heart, not just consultants. We thrive on collaboration with teams who share our passion for innovation.",
              },
            ].map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={principle.title}
                  className="text-center bg-white border border-gray-200 rounded-lg p-8 hover:border-[#00F000] transition-all"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-[#00F000]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[#00F000]" />
                  </div>
                  <h3 className="text-[#111111] mb-3">{principle.title}</h3>
                  <p className="text-gray-700">{principle.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1545177251-f6c000451799?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kc2hha2UlMjBwYXJ0bmVyc2hpcCUyMHRydXN0JTIwY29tbWl0bWVudHxlbnwxfHx8fDE3NjI4NzMxMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Commitment to Success"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-[#00F000]/10 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-[#00F000]" />
              </div>
              <h2 className="text-[#111111] mb-6">
                Our Unwavering <span className="text-[#00F000]">Commitment</span>
              </h2>
              <p className="text-gray-700 mb-6">
                To this day, by God's grace, we have never failed a project. Win or loss, we see it through to completion and make sure the business is running.
              </p>
              <p className="text-gray-700">
                This commitment isn't just about delivering code or systems—it's about ensuring your business thrives. We stand by our work and our word.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}