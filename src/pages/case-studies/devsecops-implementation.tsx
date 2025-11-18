import { CaseStudyTemplate } from "../../components/CaseStudyTemplate";

export function DevSecOpsImplementation() {
  return (
    <CaseStudyTemplate
      title="DevSecOps Implementation"
      subtitle="Automated CI/CD with embedded security"
      industry="Multi-Industry"
      backLink="/services/accelerate-operate/"
      backLinkText="Services"
      heroImage="https://images.unsplash.com/photo-1599949104055-2d04026aee1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwRGV2T3BzfGVufDF8fHx8MTc2Mjg4NDczOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      overview={[
        { label: "Client", value: "Multi-Industry" },
        { label: "Platform", value: "DevSecOps Platform" },
        { label: "Core Systems", value: "CI/CD Pipeline with Security Integration" },
        { label: "Mandate", value: "Implement automated deployment with embedded security checks" },
      ]}
      challenge={{
        title: "The Challenge",
        description: "Manual deployment processes and security gaps. Please fill in detailed challenge description.",
        keyPoints: []
      }}
      solution={{
        title: "The Solution",
        description: "Please add solution description here.",
        phases: []
      }}
      results={{
        title: "Results and Business Impact",
        description: "Please add results description here.",
        metrics: []
      }}
    />
  );
}
