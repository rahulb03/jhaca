// import Breadcrumb from "@/components/Breadcrumb";
// import FooterOne from "@/components/footer/FooterOne";
// import NavBar from "@/components/Header/NavBar";
// import ServiceDetailsArea from "@/components/service_area/ServiceDetailsArea";
// import { WEBSITE_NAME } from "@/Config/config";




// export const metadata = {
//   title: ` `,
//   description:
//     // "Agiletech provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
//     " "
// };


// const page = () => {
//   return (
//     <>
//       {/* Navigation Bar */}
//       {/* <NavBar /> */}

//       {/* Navigation Bar */}
//       {/* <Breadcrumb title={"Service Details"} /> */}

//       {/* Service Details Area */}
//       <ServiceDetailsArea />

//       {/* Footer One */}
//       {/* <FooterOne /> */}

//     </>
//   );
// };

// export default page;



// Import components and constants
import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/footer/FooterOne";
import NavBar from "@/components/Header/NavBar";
import ServiceDetailsArea from "@/components/service_area/ServiceDetailsArea";
import { WEBSITE_NAME } from "@/Config/config";
import { contentData } from '@/data/services'; // Adjust import path as needed

// Function to generate dynamic metadata
export async function generateMetadata({ params }) {
  const { slug } = params;
  const service = contentData.services.find((s) => s.id === slug);

  // Ensure service exists before setting metadata
  if (service) {
    return {
      title: `${service.title} - ${WEBSITE_NAME}`,
      description: service.description || 'Default description for the service.',
    };
  }

  // Return default metadata if service is not found
  return {
    title: `Service Not Found - ${WEBSITE_NAME}`,
    description: 'The service you are looking for is not available.',
  };
}

const Page = ({ params }) => {
  const { slug } = params;
  const service = contentData.services.find((s) => s.id === slug);

  // Handle case where service is not found
  if (!service) {
    return <p>Service not found.</p>;
  }

  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Breadcrumb */}
      <Breadcrumb title={service.title || "Service Details"} />

      {/* Service Details Area */}
      <ServiceDetailsArea service={service} />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default Page;
