import { useState, useEffect } from "react";
import { GlobalHeader } from "./components/GlobalHeader";
import { GlobalFooter } from "./components/GlobalFooter";

// Pages
import { HomePage } from "./pages/HomePage";
import { OurStory } from "./pages/OurStory";
import { Careers } from "./pages/Careers";

// Service Pillar Pages
import { ArchitectAdvise } from "./pages/services/ArchitectAdvise";
import { BuildModernize } from "./pages/services/BuildModernize";
import { InnovateAIML } from "./pages/services/InnovateAIML";
import { AccelerateOperate } from "./pages/services/AccelerateOperate";

// Product Pages
import { SAFAI } from "./pages/products/SAFAI";

// Insights Pages
import { AIIntegration } from "././pages/insights/AIIntegration";

// Resources Pages
import Blogs from "./pages/resources/Blogs";
import BlogAgenticAI from "./pages/BlogAgenticAI";

// Service Detail Pages (samples - placeholder for others)
import { AIAnalyticsRoadmap } from "./pages/services/detail/AIAnalyticsRoadmap";
import { ModernDataStrategy } from "./pages/services/detail/ModernDataStrategy";
import { CloudPlatformStrategy } from "./pages/services/detail/CloudPlatformStrategy";
import { CloudAdvisory } from "./pages/services/detail/CloudAdvisory";
import { IntelligentSolutionDesign } from "./pages/services/detail/IntelligentSolutionDesign";
import { DataStackModernization } from "./pages/services/detail/DataStackModernization";
import { ScalableDataFoundations } from "./pages/services/detail/ScalableDataFoundations";
import { CloudPerformanceOptimization } from "./pages/services/detail/CloudPerformanceOptimization";
import { DataOpsMLOps } from "./pages/services/detail/DataOpsMLOps";
import { CloudNativeDevOps } from "./pages/services/detail/CloudNativeDevOps";
import { ApplicationEvolutionSupport } from "./pages/services/detail/ApplicationEvolutionSupport";
import { SalesforceAcceleration } from "./pages/services/detail/SalesforceAcceleration";

// Case Study Pages
import { CallCenterAI } from "./pages/case-studies/CallCenterAI";
import { DataAnalyticsSales } from "./pages/case-studies/DataAnalyticsSales";
import { ChipQualityAI } from "./pages/case-studies/ChipQualityAI";
import { HomeFinanceLakehouse } from "./pages/case-studies/HomeFinanceLakehouse";
import { PerformanceEngineering } from "./pages/case-studies/performance-engineering";
import { SQLServerUpgrade } from "./pages/case-studies/sql-server-upgrade";
import { CKYCImplementation } from "./pages/case-studies/ckyc-implementation";
import { EcommerceDatabricksGenie } from "./pages/case-studies/ecommerce-databricks-genie";
import { EnterpriseAIDataOps } from "./pages/case-studies/enterprise-ai-dataops";
import { LakehouseModernization } from "./pages/case-studies/lakehouse-modernization";
import { APIDevelopmentHDFCICICI } from "./pages/case-studies/api-development-hdfc-icici";
import { MobileAppFacelift } from "./pages/case-studies/mobile-app-facelift";
import { DevSecOpsImplementation } from "./pages/case-studies/devsecops-implementation";
import { DataModernisation } from "./pages/case-studies/data-modernisation";
import { APIModernisation } from "./pages/case-studies/api-modernisation";
import { DevSecOpsSFDC } from "./pages/case-studies/devsecops-sfdc";
import { IBMACEMiddleware } from "./pages/case-studies/ibm-ace-middleware";
import { Datalakehouse } from "./pages/case-studies/datalakehouse";
import { DataObservabilityAI } from "./pages/case-studies/data-observability-ai";

// Simple placeholder for remaining service detail pages
function ServiceDetailPlaceholder({ title }: { title: string }) {
  return (
    <div className="mt-16 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="mb-6">{title}</h1>
        <p className="text-gray-700">
          This page is under construction. Please check back soon for detailed information about {title}.
        </p>
      </div>
    </div>
  );
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // Simple client-side routing
    const handleNavigate = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      
      if (link && link.href.startsWith(window.location.origin)) {
        const url = new URL(link.href);
        // Don't prevent default for hash links
        if (!url.hash || url.pathname !== window.location.pathname) {
          e.preventDefault();
          window.history.pushState({}, "", url.pathname + url.hash);
          setCurrentPath(url.pathname);
          
          // Handle hash navigation
          if (url.hash) {
            setTimeout(() => {
              const element = document.querySelector(url.hash);
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }, 100);
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }
      }
    };

    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    document.addEventListener("click", handleNavigate);
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("click", handleNavigate);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const renderPage = () => {
    // Normalize path - remove trailing slash for comparison
    const path = currentPath.replace(/\/$/, '') || '/';

    // Home
    if (path === '' || path === '/') {
      return <HomePage />;
    }

    // Our Story
    if (path === '/our-story') {
      return <OurStory />;
    }

    // Careers
    if (path === '/careers') {
      return <Careers />;
    }

    // Insights
    if (path === '/insights/ai-integration') {
      return <AIIntegration />;
    }

    // Resources
    if (path === '/resources/blogs') {
      return <Blogs />;
    }
    if (path === '/resources/blogs/agentic-ai') {
      return <BlogAgenticAI />;
    }

    // Products
    if (path === '/products/saf-ai') {
      return <SAFAI />;
    }
    if (path === '/products') {
      return <SAFAI />; // Redirect products to SAF AI for now
    }

    // Service Pillars (L2)
    if (path === '/services/architect-advise') {
      return <ArchitectAdvise />;
    }
    if (path === '/services/build-modernize') {
      return <BuildModernize />;
    }
    if (path === '/services/innovate-with-ai-ml') {
      return <InnovateAIML />;
    }
    if (path === '/services/accelerate-operate') {
      return <AccelerateOperate />;
    }

    // Service Detail Pages (L3) - Architect & Advise
    if (path === '/services/architect-advise/ai-analytics-roadmap') {
      return <AIAnalyticsRoadmap />;
    }
    if (path === '/services/architect-advise/modern-data-strategy') {
      return <ModernDataStrategy />;
    }
    if (path === '/services/architect-advise/cloud-platform-strategy') {
      return <CloudPlatformStrategy />;
    }
    if (path === '/services/architect-advise/cloud-advisory') {
      return <CloudAdvisory />;
    }
    if (path === '/services/architect-advise/intelligent-solution-design') {
      return <IntelligentSolutionDesign />;
    }

    // Service Detail Pages (L3) - Build & Modernize
    if (path === '/services/build-modernize/data-stack-modernization') {
      return <DataStackModernization />;
    }
    if (path === '/services/build-modernize/scalable-data-foundations') {
      return <ScalableDataFoundations />;
    }
    if (path === '/services/build-modernize/cloud-performance-optimization') {
      return <CloudPerformanceOptimization />;
    }

    // Service Detail Pages (L3) - Innovate with AI & ML
    if (path === '/services/innovate-with-ai-ml/applied-data-science') {
      return <ServiceDetailPlaceholder title="Applied Data Science" />;
    }
    if (path === '/services/innovate-with-ai-ml/generative-ai-engineering') {
      return <ServiceDetailPlaceholder title="Generative AI & AI Engineering" />;
    }

    // Service Detail Pages (L3) - Accelerate & Operate
    if (path === '/services/accelerate-operate/dataops-mlops') {
      return <DataOpsMLOps />;
    }
    if (path === '/services/accelerate-operate/cloud-native-devops') {
      return <CloudNativeDevOps />;
    }
    if (path === '/services/accelerate-operate/application-evolution') {
      return <ApplicationEvolutionSupport />;
    }
    if (path === '/services/accelerate-operate/salesforce-acceleration') {
      return <SalesforceAcceleration />;
    }

    // Case Studies
    if (path === '/case-studies/call-center-ai') {
      return <CallCenterAI />;
    }
    if (path === '/case-studies/data-analytics-sales') {
      return <DataAnalyticsSales />;
    }
    if (path === '/case-studies/chip-quality-ai') {
      return <ChipQualityAI />;
    }
    if (path === '/case-studies/home-finance-lakehouse') {
      return <HomeFinanceLakehouse />;
    }
    if (path === '/case-studies/performance-engineering') {
      return <PerformanceEngineering />;
    }
    if (path === '/case-studies/sql-server-upgrade') {
      return <SQLServerUpgrade />;
    }
    if (path === '/case-studies/ckyc-implementation') {
      return <CKYCImplementation />;
    }
    if (path === '/case-studies/ecommerce-databricks-genie') {
      return <EcommerceDatabricksGenie />;
    }
    if (path === '/case-studies/enterprise-ai-dataops') {
      return <EnterpriseAIDataOps />;
    }
    if (path === '/case-studies/lakehouse-modernization') {
      return <LakehouseModernization />;
    }
    // if (path === '/case-studies/api-development-hdfc-icici') {
    //   return <APIDevelopmentHDFCICICI />;
    // }
    // if (path === '/case-studies/mobile-app-facelift') {
    //   return <MobileAppFacelift />;
    // }
    // if (path === '/case-studies/devsecops-implementation') {
    //   return <DevSecOpsImplementation />;
    // }
    // if (path === '/case-studies/data-modernisation') {
    //   return <DataModernisation />;
    // }
    // if (path === '/case-studies/api-modernisation') {
    //   return <APIModernisation />;
    // }
    // if (path === '/case-studies/devsecops-sfdc') {
    //   return <DevSecOpsSFDC />;
    // }
    // if (path === '/case-studies/ibm-ace-middleware') {
    //   return <IBMACEMiddleware />;
    // }
    // if (path === '/case-studies/datalakehouse') {
    //   return <Datalakehouse />;
    // }
    // if (path === '/case-studies/data-observability-ai') {
    //   return <DataObservabilityAI />;
    // }

    // Default to home
    return <HomePage />;
  };

  return (
    <div className="min-h-screen">
      <GlobalHeader />
      {renderPage()}
      <GlobalFooter />
    </div>
  );
}