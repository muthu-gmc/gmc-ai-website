import { CaseStudyTemplate } from "../../components/CaseStudyTemplate";

export function DataObservabilityAI() {
  return (
    <CaseStudyTemplate
      title="Data Observability with AI"
      subtitle="Proactive AI-driven data quality monitoring"
      industry="Financial Services"
      backLink="/services/innovate-with-ai-ml/"
      backLinkText="Services"
      heroImage="https://images.unsplash.com/photo-1506399309177-3b43e99fead2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwd2FyZWhvdXNlJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2Mjg4NDc0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      overview={[
        { label: "Client", value: "Financial Services, Shared Services" },
        { label: "Industry", value: "Financial Services" },
        { label: "Platform", value: "AI-Powered Data Observability Platform" },
        { label: "Mandate", value: "Implement proactive data quality monitoring with AI" },
      ]}
      challenge={{
        title: "The Challenge",
        description: "Reactive data quality monitoring and issue detection. Please fill in detailed content from Case Study #15.",
        keyPoints: []
      }}
      solution={{
        title: "The Solution",
        description: "AI-driven proactive monitoring. Please add detailed solution.",
        phases: []
      }}
      results={{
        title: "Results and Business Impact",
        description: "Please add results.",
        metrics: []
      }}
    />
  );
}
