import { CaseStudyTemplate } from "../../components/CaseStudyTemplate";

export function DataModernisation() {
  return (
    <CaseStudyTemplate
      title="Data Modernisation - Salesforce Integration"
      subtitle="100% automation, 70% faster migration cycles"
      industry="Financial Services"
      backLink="/services/build-modernize/"
      backLinkText="Services"
      heroImage="https://images.unsplash.com/photo-1633412802994-5c058f151b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwbWlncmF0aW9uJTIwY2xvdWR8ZW58MXx8fHwxNzYyODg0NzM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      overview={[
        { label: "Client", value: "Financial Services / Shared Services" },
        { label: "Industry", value: "Financial Services" },
        { label: "Platform", value: "AWS Cloud Platform" },
        { label: "Target System", value: "Salesforce (CRM)" },
        { label: "Mandate", value: "Automate data migration from enterprise systems to Salesforce" },
      ]}
      challenge={{
        title: "The Challenge",
        description: "Manual data migration across multiple systems. Please fill in detailed content from Case Study #7.",
        keyPoints: []
      }}
      solution={{
        title: "The Solution",
        description: "AWS-based automated data migration pipeline. Please add detailed solution from Case Study #7.",
        phases: []
      }}
      results={{
        title: "Results and Business Impact",
        description: "Please add results from Case Study #7.",
        metrics: []
      }}
    />
  );
}
