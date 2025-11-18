import { CaseStudyTemplate } from "../../components/CaseStudyTemplate";

export function DevSecOpsSFDC() {
  return (
    <CaseStudyTemplate
      title="DevSecOps for SFDC CRM APIs"
      subtitle="60% faster deployments with embedded security testing"
      industry="Financial Services"
      backLink="/services/accelerate-operate/"
      backLinkText="Services"
      heroImage="https://images.unsplash.com/photo-1599949104055-2d04026aee1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwRGV2T3BzfGVufDF8fHx8MTc2Mjg4NDczOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      overview={[
        { label: "Client", value: "Financial Services / Insurance" },
        { label: "Industry", value: "Financial Services / Insurance" },
        { label: "Platform", value: "AWS Cloud-Native DevSecOps Platform" },
        { label: "Target System", value: "Salesforce CRM Integration APIs" },
        { label: "Mandate", value: "Automate deployment and security for Salesforce integrations" },
      ]}
      challenge={{
        title: "The Challenge",
        description: "Security and deployment automation for Salesforce integrations. Please fill in detailed content from Case Study #10.",
        keyPoints: []
      }}
      solution={{
        title: "The Solution",
        description: "DevSecOps pipeline with SAST integration. Please add detailed solution from Case Study #10.",
        phases: []
      }}
      results={{
        title: "Results and Business Impact",
        description: "Please add results from Case Study #10.",
        metrics: []
      }}
    />
  );
}
