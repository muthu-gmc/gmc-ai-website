import { CaseStudyTemplate } from "../../components/CaseStudyTemplate";

export function EnterpriseAIDataOps() {
  return (
    <CaseStudyTemplate
      title="Enterprise AI DataOps Platform for Financial Services"
      subtitle="Unified MLOps platform with automated model deployment and monitoring"
      industry="Financial Services"
      backLink="/services/innovate-with-ai-ml/"
      backLinkText="Services"
      heroImage="https://images.unsplash.com/photo-1615358589317-78332cb21a22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkYXRhJTIwb3BlcmF0aW9uc3xlbnwxfHx8fDE3NjI4NjU4NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      overview={[
        { label: "Client", value: "Financial Services" },
        { label: "Industry", value: "Financial Services" },
        { label: "Platform", value: "Enterprise AI DataOps & MLOps" },
        { label: "Core Systems", value: "Multi-modal AI platform with DataOps automation" },
        { label: "Key Technologies", value: "MLOps, DataOps, Model Governance, Automated Deployment" },
        { label: "Mandate", value: "Build scalable MLOps platform for enterprise-wide AI/ML initiatives" },
      ]}
      challenge={{
        title: "The Challenge: Fragmented AI/ML Workflows",
        description: "The financial services organization faced significant challenges in scaling their AI/ML initiatives across the enterprise. Despite having talented data science teams, they struggled with operational inefficiencies that prevented models from reaching production.",
        keyPoints: [
          {
            title: "Isolated Prototypes",
            description: "Data science teams were building models in isolation, with no standardized path to production deployment."
          },
          {
            title: "Lack of Governance",
            description: "No centralized platform for model versioning, lineage tracking, or compliance management."
          },
          {
            title: "Manual Deployment",
            description: "Model deployment required extensive manual intervention from IT teams, creating bottlenecks."
          },
          {
            title: "No Monitoring",
            description: "Once deployed, models operated as black boxes with no automated monitoring for drift or performance degradation."
          },
          {
            title: "Data Pipeline Fragmentation",
            description: "Inconsistent data pipelines across projects led to quality issues and delays."
          }
        ]
      }}
      solution={{
        title: "The Solution: Enterprise AI DataOps Platform",
        description: "We designed and implemented a comprehensive, end-to-end AI DataOps and MLOps platform that standardized the entire machine learning lifecycle from data ingestion to model monitoring.",
        phases: [
          {
            title: "Phase 1: Platform Architecture & DataOps Foundation",
            description: "Established the foundational data infrastructure and automation layer.",
            points: [
              "Built automated data ingestion pipelines for multi-source data (structured, unstructured, streaming)",
              "Implemented data quality checks and validation frameworks",
              "Created feature store for consistent feature engineering across projects",
              "Established data lineage tracking and cataloging with enterprise governance"
            ]
          },
          {
            title: "Phase 2: MLOps Pipeline & Model Factory",
            description: "Implemented standardized ML development and deployment workflows.",
            points: [
              "Containerized model training and deployment pipelines",
              "Automated model versioning and experiment tracking",
              "Built CI/CD pipelines for model deployment to staging and production",
              "Implemented A/B testing framework for model evaluation",
              "Created model registry with governance and approval workflows"
            ]
          },
          {
            title: "Phase 3: Monitoring & Governance",
            description: "Established comprehensive monitoring and governance framework.",
            points: [
              "Real-time model performance monitoring dashboards",
              "Automated data drift and model drift detection",
              "Model explainability and fairness metrics tracking",
              "Compliance reporting and audit trail automation",
              "Automated alerting for performance degradation"
            ]
          },
          {
            title: "Phase 4: Multi-Modal AI Capabilities",
            description: "Extended platform to support advanced AI use cases.",
            points: [
              "Integrated computer vision pipelines for image/video processing",
              "NLP pipelines for text analysis and document processing",
              "Speech-to-text and audio processing capabilities",
              "Unified API layer for model serving across modalities"
            ]
          }
        ]
      }}
      results={{
        title: "Results and Business Impact",
        description: "The enterprise AI DataOps platform transformed the organization's ability to deliver and scale AI initiatives, moving from isolated experiments to a production-grade AI factory.",
        metrics: [
          {
            metric: "Model Deployment Time",
            before: "3-6 months",
            after: "1-2 weeks",
            improvement: "90% Reduction"
          },
          {
            metric: "Models in Production",
            before: "5-10 models",
            after: "50+ models",
            improvement: "500% Increase"
          },
          {
            metric: "Data Pipeline Reliability",
            before: "75% uptime",
            after: "99.5% uptime",
            improvement: "24% Improvement"
          },
          {
            metric: "Model Performance Monitoring",
            before: "Manual, monthly reviews",
            after: "Real-time, automated alerts",
            improvement: "100% Automation"
          },
          {
            metric: "Data Science Productivity",
            before: "60% time on infrastructure",
            after: "90% time on modeling",
            improvement: "50% Productivity Gain"
          },
          {
            metric: "Compliance Readiness",
            before: "Manual audit preparation",
            after: "Automated compliance reporting",
            improvement: "95% Effort Reduction"
          }
        ]
      }}
    />
  );
}
