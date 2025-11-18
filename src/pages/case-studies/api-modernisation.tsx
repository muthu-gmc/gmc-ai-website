import { CaseStudyTemplate } from "../../components/CaseStudyTemplate";

export function APIModernisation() {
  return (
    <CaseStudyTemplate
      title="API Modernisation - BizTalk to AWS Migration"
      subtitle="75% improvement in deployment velocity, near real-time processing"
      industry="Financial Services"
      backLink="/services/build-modernize/"
      backLinkText="Services"
      heroImage="https://images.unsplash.com/photo-1660480339300-68c174b6c34f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGV3YXJlJTIwaW50ZWdyYXRpb258ZW58MXx8fHwxNzYyODg0NzQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      overview={[
        { label: "Client", value: "Financial Services / Insurance" },
        { label: "Industry", value: "Financial Services / Insurance" },
        { label: "Legacy Platform", value: "BizTalk Server 2016" },
        { label: "New Platform", value: "AWS Cloud-Native Integration Platform" },
        { label: "Mandate", value: "Modernize legacy integration platform for improved scalability" },
      ]}
      challenge={{
        title: "The Challenge",
        description: "Legacy on-premises integration platform. Please fill in detailed content from Case Study #8.",
        keyPoints: []
      }}
      solution={{
        title: "The Solution",
        description: "AWS cloud-native migration. Please add detailed solution from Case Study #8.",
        phases: []
      }}
      results={{
        title: "Results and Business Impact",
        description: "Please add results from Case Study #8.",
        metrics: []
      }}
    />
  );
}
