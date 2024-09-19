
// // "use client"
// // import { useRouter } from 'next/navigation';

// // import ServiceDetailsArea from '@/components/service_area/ServiceDetailsArea';
// // import { contentData } from '@/data/services';

// // const ServiceDetailPage = () => {
// //   const router = useRouter();
// //   const slug = router.query.slug;

// //   const service = contentData.services.find((s) => s.id === slug);

// //   if (!service) {
// //     return <p>Service not found.</p>;
// //   }

// //   return (
// //     <div>
// //       <ServiceDetailsArea service={service} />
// //     </div>
// //   );
// // };

// // export default ServiceDetailPage;



// // // // // /app/services/[slug]/page.jsx
// // // // import { useRouter } from 'next/router';
// // // // import { contentData } from '@/data/services';
// // // // import ServiceDetailsArea from '@/components/ServiceDetailsArea';

// // // // const ServiceDetailPage = () => {
// // // //   const router = useRouter();
// // // //   const { slug } = router.query; // Get the slug from the URL

// // // //   // Find the service by slug
// // // //   const service = contentData.services.find((s) => s.id === slug);

// // // //   if (!service) {
// // // //     return <p>Service not found.</p>; // Handle the case where the service is not found
// // // //   }

// // // //   return <ServiceDetailsArea service={service} />; // Pass the service data to the component
// // // // };

// // // // export default ServiceDetailPage;
// // // "use client"


// // // // // /app/services/[slug]/page.jsx
// // // // import { useRouter } from 'next/navigation';
// // // // import { contentData } from '@/data/services';
// // // // // import ServiceDetailsArea from '@/components/ServiceDetailsArea';
// // // // import ServiceDetailsArea from '@/components/service_area/ServiceDetailsArea';

// // // // const ServiceDetailPage = () => {
// // // //   const router = useRouter();
// // // //   const { slug } = router.query;

// // // //   // Check if slug is defined
// // // //   if (!slug) return <p>Loading...</p>;

// // // //   // Find the service based on the slug
// // // //   const service = contentData.services.find((s) => s.id === slug);

// // // //   // Check if service exists
// // // //   if (!service) {
// // // //     return <p>Service not found.</p>;
// // // //   }

// // // //   // Pass the service data as a prop
// // // //   return <ServiceDetailsArea service={service} />;
// // // // };

// // // // export default ServiceDetailPage;


// // // // /app/services/[slug]/page.jsx
// // // import { useRouter } from 'next/navigation';
// // // import { contentData } from '@/data/services';
// // // // import ServiceDetailsArea from '@/components/ServiceDetailsArea';
// // // import ServiceDetailsArea from '@/components/service_area/ServiceDetailsArea';

// // // const ServiceDetailPage = () => {
// // //   const router = useRouter();
// // //   const { slug } = router.query;

// // //   console.log(slug);

// // //   // Ensure slug is defined before trying to access it
// // //   if (!slug) {
// // //     return <div>Loading...</div>; // Optional loading state
// // //   }

// // //   // Find the service details by slug
// // //   const service = contentData.services.find(service => service.id === slug);

// // //   if (!service) {
// // //     return <div>Service not found</div>; // Handle case where service is not found
// // //   }

// // //   return (
// // //     <ServiceDetailsArea service={service} />
// // //   );
// // // };

// // // export default ServiceDetailPage;
// // // "use client"

// // // import { useEffect, useState } from 'react';
// // // import { useRouter } from 'next/navigation';
// // // import { contentData } from '@/data/services';
// // // // import ServiceDetailsArea from '@/components/ServiceDetailsArea';

// // // import ServiceDetailsArea from '@/components/service_area/ServiceDetailsArea';

// // // const ServiceDetailPage = () => {
// // //   const router = useRouter();
// // //   const { slug } = router.query; // Get the slug from the URL

// // //   const [service, setService] = useState(null);

// // //   useEffect(() => {
// // //     if (slug) {
// // //       const foundService = contentData.services.find(s => s.id === slug);
// // //       setService(foundService || null);
// // //     }
// // //   }, [slug]);

// // //   if (!slug) {
// // //     return <div>Loading...</div>; // Show loading while slug is not available
// // //   }

// // //   if (!service) {
// // //     return <div>Service not found.</div>; // Show message if service is not found
// // //   }

// // //   return (
// // //     <ServiceDetailsArea service={service} />
// // //   );
// // // };

// // // export default ServiceDetailPage;



// // app/services/[slug]/page.js

// import ServiceDetailsArea from '@/components/service_area/ServiceDetailsArea';
// import { contentData } from '@/data/services';
// import Head from 'next/head';
// // Dynamic route page
// export default function ServiceDetailPage({ params }) {
//   const { slug } = params; // Get slug from dynamic route
//   const service = contentData.services.find((s) => s.id === slug); // Find service by slug

//   // Handle case where service is not found
//   if (!service) {
//     return <p>Service not found.</p>;
//   }

//   // Render the service details component with the found service data
//   return (
//    <>
//     <Head>
//     <title>{service.title} - My Website</title>
//     <meta name="description" content={service.description} />
//   </Head>

//     <div>
//       <ServiceDetailsArea service={service} />
//     </div>

//     </>
//   );
// }



// app/services/[slug]/page.js

import { contentData } from '@/data/services';
import ServiceDetailsArea from '@/components/service_area/ServiceDetailsArea';
import { WEBSITE_NAME } from '@/Config/config';
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
    <div>
      {/* Render service details */}
      <ServiceDetailsArea service={service} />
    </div>
  );
};

export default ServiceDetailPage;
