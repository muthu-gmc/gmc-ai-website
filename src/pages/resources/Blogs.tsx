import { motion } from "motion/react";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import { GlobalHeader } from "../../components/GlobalHeader";
import { GlobalFooter } from "../../components/GlobalFooter";

const blogPosts = [
  {
    id: 1,
    title: "Is Your Organization Ready for Agentic AI?",
    excerpt: "While 95% of AI projects fail, the technology itself works. Explore the technical hurdles, organizational barriers, and implementation strategies that separate successful AI adoption from failure.",
    date: "Nov 10, 2025",
    author: "EDIA2 Team",
    readTime: "12 min read",
    category: "AI Strategy",
    href: "/resources/blogs/agentic-ai/",
    featured: true
  },
  // Placeholder for future blog posts
];

export default function Blogs() {
  return (
    <div className="min-h-screen bg-white">
      <GlobalHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#00F000]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-900/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="inline-block px-4 py-1.5 bg-[#00F000]/10 text-[#00F000] rounded-full text-sm mb-6">
              Resources
            </div>
            <p className="text-xl text-gray-600">
              Blogs on AI, Data Analytics, and transformation from the GreenMen Consulting team.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00F000] focus:border-transparent transition-all"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Featured Post */}
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
            >
              <a 
                href={post.href}
                className="group block bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#00F000] transition-all duration-300 hover:shadow-xl"
              >
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-[#00F000]/10 text-[#00F000] rounded-full text-sm">
                      Featured
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {post.category}
                    </span>
                  </div>
                  
                  <h2 className="mb-4 group-hover:text-[#00F000] transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-[#00F000] group-hover:gap-3 transition-all">
                      <span>Read article</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}

          {/* Regular Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
              >
                <a 
                  href={post.href}
                  className="group block h-full bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-[#00F000] transition-all duration-300 hover:shadow-lg"
                >
                  <div className="p-6">
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="mb-3 group-hover:text-[#00F000] transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-[#00F000] text-sm group-hover:gap-3 transition-all">
                      <span>Read more</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>

          {/* Empty State for Future Posts */}
          {blogPosts.filter(post => !post.featured).length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="mb-2 text-gray-900">More articles coming soon</h3>
              <p className="text-gray-600">
                Stay tuned for more insights and perspectives from our team.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white mb-4">
              Want to discuss these insights?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team is ready to help you navigate your AI and data transformation journey.
            </p>
            <motion.a
              href="#contact"
              className="inline-block px-8 py-4 bg-[#00F000] text-gray-900 rounded-lg hover:bg-[#00F000]/90 transition-all shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}