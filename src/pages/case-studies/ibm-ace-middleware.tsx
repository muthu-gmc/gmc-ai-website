import { CaseStudyTemplate } from "../../components/CaseStudyTemplate";

export function IBMACEMiddleware() {
  return (
    <CaseStudyTemplate
      title="Middleware Implementation - IBM ACE"
      subtitle="80% reduction in manual effort, 100% data consistency"
      industry="Urban Transport & Infrastructure"
      backLink="/services/build-modernize/"
      backLinkText="Services"
      heroImage="https://images.unsplash.com/photo-1660480339300-68c174b6c34f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGV3YXJlJTIwaW50ZWdyYXRpb258ZW58MXx8fHwxNzYyODg0NzQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      overview={[
        { label: "Client", value: "Urban Transport & Infrastructure" },
        { label: "Industry", value: "Urban Transport & Infrastructure" },
        { label: "Core Systems", value: "Time & Attendance Management System (TAMS), SAP HRMS" },
        { label: "Key Technologies", value: "SQL Server Stored Procedures, IBM App Connect Enterprise (ACE), RESTful SAP APIs" },
        { label: "Mandate", value: "Eliminate manual intervention and achieve real-time synchronization" },
      ]}
      challenge={{
        title: "The Challenge",
        description: "Manual time & attendance synchronization between TAMS and SAP. Please fill in detailed content from Case Study #13.",
        keyPoints: []
      }}
      solution={{
        title: "The Solution",
        description: "Automated integration using IBM ACE. Please add detailed solution from Case Study #13.",
        phases: []
      }}
      results={{
        title: "Results and Business Impact",
        description: "Please add results from Case Study #13.",
        metrics: []
      }}
    />
  );
}
