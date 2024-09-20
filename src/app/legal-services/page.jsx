



import Breadcrumb from "@/components/Breadcrumb";
import CaseStudyArea from "@/components/case_study/CaseStudyArea";
import FooterOne from "@/components/footer/FooterOne";
import NavBar from "@/components/Header/NavBar";
import { WEBSITE_NAME } from "@/Config/config";
import { mainContent } from "@/data/case_study"; // Adjust import path as needed

// Function to generate dynamic metadata
export async function generateMetadata({ params }) {
  const { slug } = params; // Get slug from the dynamic route
  const legalService = mainContent.find((s) => s.id === slug);

  // Ensure legal service exists before setting metadata
  if (legalService) {
    return {
      title: `${legalService.title} - ${WEBSITE_NAME}`,
      description: legalService.description || 'Default description for the legal service.',
    };
  }

  
  // console.log(slug);
  // Return default metadata if legal service is not found
  return {
    title: `Service Not Found - ${WEBSITE_NAME}`,
    description: 'The legal service you are looking for is not available.',
  };
}

// Main Legal Services Page Component
const LegalServicesPage = ({ params }) => {
  const { slug } = params;
  const legalService = mainContent.find((s) => s.id === slug);
 
  
  if (!legalService) {
    return <p>Service not found.</p>;
  }

  return (
    <>
      {/* Navigation Bar */}
      {/* <NavBar /> */}

      {/* Breadcrumb */}
      <Breadcrumb title={legalService.name || 'Legal Services'} />

      {/* Case Study Area */}
      <CaseStudyArea legalService={legalService} />

      {/* Footer One */}
      {/* <FooterOne /> */}
    </>
  );
};

export default LegalServicesPage;
