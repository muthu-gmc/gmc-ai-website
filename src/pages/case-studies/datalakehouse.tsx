import { CaseStudyTemplate } from "../../components/CaseStudyTemplate";

export function Datalakehouse() {
  return (
    <CaseStudyTemplate
      title="Datalakehouse - Data Modernisation"
      subtitle="Unified data platform enabling real-time insights"
      industry="Financial Services - Home Loan/Mortgage"
      backLink="/services/build-modernize/"
      backLinkText="Services"
      heroImage="https://images.unsplash.com/photo-1506399309177-3b43e99fead2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwd2FyZWhvdXNlJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2Mjg4NDc0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      overview={[
        { label: "Client", value: "Financial Services, Home Loan/Mortgage Lending" },
        { label: "Industry", value: "Financial Services, Home Loan/Mortgage Lending" },
        { label: "Core Systems Migrated", value: "Legacy MySQL OLTP Database, Legacy PostgreSQL Data Mart" },
        { label: "New Data Platform", value: "Databricks Lakehouse Platform" },
        { label: "Key Databricks Tools", value: "Delta Live Tables (DLT), Unity Catalog, Databricks SQL Endpoints" },
        { label: "Mandate", value: "Migrate legacy data to scalable lakehouse platform" },
      ]}
      challenge={{
        title: "The Challenge",
        description: "Fragmented data architecture limiting analytics capabilities. Please fill in detailed content from Case Study #15.",
        keyPoints: []
      }}
      solution={{
        title: "The Solution",
        description: "Databricks Lakehouse with data quality framework. Please add detailed solution from Case Study #15.",
        phases: []
      }}
      results={{
        title: "Results and Business Impact",
        description: "Please add results from Case Study #15.",
        metrics: []
      }}
    />
  );
}
