import { CaseStudyTemplate } from "../../components/CaseStudyTemplate";

export function MobileAppFacelift() {
  return (
    <CaseStudyTemplate
      title="Mobile App Facelift"
      subtitle="Modern, intuitive mobile experience"
      industry="Financial Services"
      backLink="/services/build-modernize/"
      backLinkText="Services"
      heroImage="https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYyNzk1OTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      overview={[
        { label: "Client", value: "Financial Services" },
        { label: "Industry", value: "Financial Services" },
        { label: "Platform", value: "Mobile Application (iOS & Android)" },
        { label: "Mandate", value: "Redesign and modernize mobile application for improved user experience" },
      ]}
      challenge={{
        title: "The Challenge",
        description: "Outdated user interface affecting customer engagement. Please fill in detailed challenge description.",
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
