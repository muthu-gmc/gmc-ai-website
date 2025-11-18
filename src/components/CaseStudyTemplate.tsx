import { motion } from "motion/react";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CaseStudyTemplateProps {
  title: string;
  subtitle: string;
  industry: string;
  backLink: string;
  backLinkText: string;
  heroImage: string;
  overview: {
    label: string;
    value: string;
  }[];
  challenge: {
    title: string;
    description: string;
    keyPoints: {
      title: string;
      description: string;
    }[];
  };
  solution: {
    title: string;
    description: string;
    phases: {
      title: string;
      description: string;
      points: string[];
    }[];
  };
  results: {
    title: string;
    description: string;
    metrics: {
      metric: string;
      before: string;
      after: string;
      improvement: string;
    }[];
  };
}

export function CaseStudyTemplate(props: CaseStudyTemplateProps) {
  return (
    <div className="mt-16">
      {/* Breadcrumbs */}
      <section className="bg-gray-50 py-4 px-6 border-b border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="/" className="hover:text-[#00F000] transition-colors">
              Home
            </a>
            <ChevronRight className="w-4 h-4" />
            <a href={props.backLink} className="hover:text-[#00F000] transition-colors">
              {props.backLinkText}
            </a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#00F000]">{props.title}</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#4A5565] to-[#4A5565]">
        <div className="max-w-5xl mx-auto">
          <a href={props.backLink} className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to {props.backLinkText}</span>
          </a>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 bg-[#00F000] text-[#4A5565] rounded-full text-sm font-medium mb-4">
              Case Study
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {props.title}
            </h1>
            <p className="text-xl text-white/80">
              {props.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden">
            <ImageWithFallback
              src={props.heroImage}
              alt={props.title}
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#4A5565] mb-8">Project Overview</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {props.overview.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-[#4A5565] mb-2">{item.label}</h3>
                <p className="text-gray-600">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#4A5565] mb-6">{props.challenge.title}</h2>
          <p className="text-gray-600 mb-6">
            {props.challenge.description}
          </p>
          
          {props.challenge.keyPoints.length > 0 && (
            <>
              <h3 className="text-xl font-bold text-[#4A5565] mb-4">Key Challenges:</h3>
              <div className="space-y-4">
                {props.challenge.keyPoints.map((point, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#00F000] mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-bold text-[#4A5565]">{point.title}</p>
                      <p className="text-gray-600">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Solution */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#4A5565] mb-6">{props.solution.title}</h2>
          <p className="text-gray-600 mb-8">
            {props.solution.description}
          </p>

          <div className="space-y-8">
            {props.solution.phases.map((phase, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-[#4A5565] mb-4">{phase.title}</h3>
                <p className="text-gray-600 mb-4">{phase.description}</p>
                {phase.points.length > 0 && (
                  <ul className="space-y-2">
                    {phase.points.map((point, pIndex) => (
                      <li key={pIndex} className="flex gap-3">
                        <span className="text-[#00F000]">•</span>
                        <span className="text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#4A5565] mb-6">{props.results.title}</h2>
          {props.results.metrics.length > 0 && (
            <div className="overflow-x-auto mb-8">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold text-[#4A5565]">Metric</th>
                    <th className="px-4 py-3 text-left font-bold text-[#4A5565]">Before</th>
                    <th className="px-4 py-3 text-left font-bold text-[#4A5565]">After</th>
                    <th className="px-4 py-3 text-left font-bold text-[#4A5565]">Improvement</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {props.results.metrics.map((metric, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 text-gray-600">{metric.metric}</td>
                      <td className="px-4 py-3 text-gray-600">{metric.before}</td>
                      <td className="px-4 py-3 text-gray-600">{metric.after}</td>
                      <td className="px-4 py-3 text-[#00F000] font-bold">{metric.improvement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <p className="text-gray-600">
            {props.results.description}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#4A5565] to-[#4A5565]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-white/80 mb-8">
            Let's discuss how we can help you achieve similar results
          </p>
          <a
            href="/contact/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#00F000] text-[#4A5565] rounded-lg hover:bg-[#00D000] transition-all"
          >
            <span>Get Started</span>
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
