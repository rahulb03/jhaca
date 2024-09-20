



// import { mainContent } from "@/data/case_study";
import { mainContent } from "@/data/case_study";
import CaseStudyArea from "@/components/case_study/CaseStudyArea";
import { WEBSITE_NAME } from "@/Config/config";
import Breadcrumb from "@/components/Breadcrumb";

// Generate dynamic metadata
export async function generateMetadata({ params }) {
  const { slug } = params; // Get slug from the dynamic route
  const legalService = mainContent.find((s) => s.id === slug); // Find legal service by slug

  // If legal service is found, return metadata (title and description)
  if (legalService) {
    return {
      title: `${legalService.name} - ${WEBSITE_NAME}`,
      description: legalService.description,
    };
  }

  // Default metadata if legal service is not found
  return {
    title: 'Service Not Found - My Website',
    description: 'The legal service you are looking for is not available.',
  };
}

// Main page component
const LegalDetailPage = ({ params }) => {
  const { slug } = params;
  const legalService = mainContent.find((s) => s.id === slug); // Find legal service by slug


 
  if (!legalService) {
    return <p>Service not found.</p>;
  }

  // console.log(mainContent)

  return (
    <>
      <Breadcrumb title={legalService.name || "Legal services"} />
      <div>
        {/* Render legal service details */}
        <CaseStudyArea legal_service={legalService} />
      </div>
    </>
  );
};

export default LegalDetailPage;
