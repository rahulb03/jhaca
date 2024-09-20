

import { contentData } from '@/data/service-details';
import ServiceDetailsArea from '@/components/service_area/ServiceDetailsArea';
import { WEBSITE_NAME } from '@/Config/config';
import Breadcrumb from '@/components/Breadcrumb';
// Generate dynamic metadata
export async function generateMetadata({ params }) {
  const { slug } = params; // Get slug from the dynamic route
  const service = contentData.services.find((s) => s.id === slug); // Find service by slug

  // If service is found, return metadata (title and description)
  if (service) {
    return {
        title: `${service.title} - ${WEBSITE_NAME}`,
      description: service.description,
    };
  }

  // Default metadata if service is not found
  return {
    title: 'Service Not Found - My Website',
    description: 'The service you are looking for is not available.',
  };
}

// Main page component
const ServiceDetailPage = ({ params }) => {
  const { slug } = params;
  const service = contentData.services.find((s) => s.id === slug);

  // Handle case where service is not found
  if (!service) {
    return <p>Service not found.</p>;
  }

  return (
    <>
    <Breadcrumb title={service.title || "Service Details"} />

    <div>

    
      {/* Render service details */}
      <ServiceDetailsArea service={service} />
    </div>

    </>
  );
};

export default ServiceDetailPage;
