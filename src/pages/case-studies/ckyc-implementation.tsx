import { CaseStudyTemplate } from "../../components/CaseStudyTemplate";

export function CKYCImplementation() {
  return (
    <CaseStudyTemplate
      title="CKYC Implementation for MeraSuraksha Product"
      subtitle="Full solution delivered in one month"
      industry="Financial Services"
      backLink="/services/build-modernize/"
      backLinkText="Services"
      heroImage="https://images.unsplash.com/photo-1758519289594-8e0444825b04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBzZXJ2aWNlcyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYyNzc4NjE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      overview={[
        { label: "Client", value: "Financial Services" },
        { label: "Industry", value: "Financial Services - Insurance" },
        { label: "Product", value: "MeraSuraksha" },
        { label: "Timeline", value: "1 Month" },
        { label: "Core Systems", value: "Central KYC (CKYC) Integration" },
        { label: "Mandate", value: "Streamline KYC process for faster customer onboarding" },
      ]}
      challenge={{
        title: "The Challenge: KYC Streamlining Pending for Years",
        description: "The KYC (Know Your Customer) process had been a persistent bottleneck for years, causing significant delays in customer onboarding and impacting business growth. Manual verification processes led to inconsistencies, compliance risks, and poor customer experience.",
        keyPoints: [
          {
            title: "Manual Processing Delays",
            description: "KYC verification took several days due to manual document collection and verification processes."
          },
          {
            title: "Compliance Risks",
            description: "Lack of centralized KYC data led to potential compliance violations and audit issues."
          },
          {
            title: "Customer Friction",
            description: "Customers had to repeatedly submit KYC documents for different products, leading to poor experience."
          },
          {
            title: "Data Redundancy",
            description: "Multiple systems maintained separate KYC databases, leading to data inconsistencies."
          }
        ]
      }}
      solution={{
        title: "The Solution: Centralized CKYC Integration",
        description: "We implemented a comprehensive Central KYC (CKYC) integration for the MeraSuraksha product, enabling automated KYC verification and eliminating redundant data collection.",
        phases: [
          {
            title: "Phase 1: CKYC Registry Integration",
            description: "Integrated with the Central KYC Registry to enable real-time KYC data retrieval and verification.",
            points: [
              "API integration with CKYC registry for seamless data exchange",
              "Automated KYC lookup based on customer identifiers",
              "Real-time verification status updates"
            ]
          },
          {
            title: "Phase 2: Process Automation",
            description: "Automated the entire KYC workflow from data collection to verification and approval.",
            points: [
              "Automated document validation and verification",
              "Electronic signature integration for paperless processing",
              "Automated compliance checks and risk scoring"
            ]
          },
          {
            title: "Phase 3: System Integration",
            description: "Integrated CKYC system with existing policy management and customer onboarding systems.",
            points: [
              "Real-time data synchronization across systems",
              "Single customer view across all touchpoints",
              "Automated alerts for KYC expiry and renewal"
            ]
          }
        ]
      }}
      results={{
        title: "Results and Business Impact",
        description: "The CKYC implementation transformed the customer onboarding process, delivering measurable improvements in speed, compliance, and customer satisfaction. The solution was delivered in just one month, demonstrating our ability to execute complex integrations rapidly.",
        metrics: [
          {
            metric: "KYC Processing Time",
            before: "3-5 days",
            after: "Real-time (minutes)",
            improvement: "95% Reduction"
          },
          {
            metric: "Customer Onboarding Time",
            before: "7-10 days",
            after: "Same day",
            improvement: "90% Faster"
          },
          {
            metric: "Manual Processing Effort",
            before: "High (multiple teams involved)",
            after: "Minimal (automated)",
            improvement: "80% Reduction"
          },
          {
            metric: "Compliance Score",
            before: "Good",
            after: "Excellent",
            improvement: "100% Audit Ready"
          }
        ]
      }}
    />
  );
}
