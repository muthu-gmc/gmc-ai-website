import { CaseStudyTemplate } from "../../components/CaseStudyTemplate";

export function APIDevelopmentHDFCICICI() {
  return (
    <CaseStudyTemplate
      title="API Development for HDFC & ICICI Providers for MeraSuraksha Product"
      subtitle="Seamless multi-provider API ecosystem"
      industry="Financial Services"
      backLink="/services/build-modernize/"
      backLinkText="Services"
      heroImage="https://images.unsplash.com/photo-1760952851538-17a59f691efe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBUEklMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjI4ODQ3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      overview={[
        { label: "Client", value: "Financial Services" },
        { label: "Industry", value: "Financial Services - Insurance" },
        { label: "Product", value: "MeraSuraksha" },
        { label: "Banking Partners", value: "HDFC Bank, ICICI Bank" },
        { label: "Core Systems", value: "Multi-Provider API Integration Platform" },
        { label: "Mandate", value: "Build scalable API ecosystem for seamless bank integrations" },
      ]}
      challenge={{
        title: "The Challenge",
        description: "Integration complexity with multiple banking providers required a robust and scalable solution. Please fill in detailed challenge description.",
        keyPoints: [
          {
            title: "Challenge Point 1",
            description: "Description to be added"
          },
          {
            title: "Challenge Point 2",
            description: "Description to be added"
          }
        ]
      }}
      solution={{
        title: "The Solution",
        description: "Please add solution description here.",
        phases: [
          {
            title: "Phase 1",
            description: "Phase description to be added",
            points: [
              "Point 1 to be added",
              "Point 2 to be added"
            ]
          }
        ]
      }}
      results={{
        title: "Results and Business Impact",
        description: "Please add results description here.",
        metrics: []
      }}
    />
  );
}
