
"use client"
// /app/services/[slug]/page.jsx
import { useRouter } from 'next/navigation';
// import { contentData } from '@/data/services';
// import ServiceDetailsArea from '@/components/ServiceDetailsArea';
import ServiceDetailsArea from '@/components/service_area/ServiceDetailsArea';
import { contentData } from '@/data/services';

const ServiceDetailPage = () => {
  const router = useRouter();
  const slug = router.query.slug;

  const service = contentData.services.find((s) => s.id === slug);

  if (!service) {
    return <p>Service not found.</p>;
  }

  return (
    <div>
      <ServiceDetailsArea service={service} />
    </div>
  );
};

export default ServiceDetailPage;



// // // /app/services/[slug]/page.jsx
// // import { useRouter } from 'next/router';
// // import { contentData } from '@/data/services';
// // import ServiceDetailsArea from '@/components/ServiceDetailsArea';

// // const ServiceDetailPage = () => {
// //   const router = useRouter();
// //   const { slug } = router.query; // Get the slug from the URL

// //   // Find the service by slug
// //   const service = contentData.services.find((s) => s.id === slug);

// //   if (!service) {
// //     return <p>Service not found.</p>; // Handle the case where the service is not found
// //   }

// //   return <ServiceDetailsArea service={service} />; // Pass the service data to the component
// // };

// // export default ServiceDetailPage;
// "use client"


// // // /app/services/[slug]/page.jsx
// // import { useRouter } from 'next/navigation';
// // import { contentData } from '@/data/services';
// // // import ServiceDetailsArea from '@/components/ServiceDetailsArea';
// // import ServiceDetailsArea from '@/components/service_area/ServiceDetailsArea';

// // const ServiceDetailPage = () => {
// //   const router = useRouter();
// //   const { slug } = router.query;

// //   // Check if slug is defined
// //   if (!slug) return <p>Loading...</p>;

// //   // Find the service based on the slug
// //   const service = contentData.services.find((s) => s.id === slug);

// //   // Check if service exists
// //   if (!service) {
// //     return <p>Service not found.</p>;
// //   }

// //   // Pass the service data as a prop
// //   return <ServiceDetailsArea service={service} />;
// // };

// // export default ServiceDetailPage;


// // /app/services/[slug]/page.jsx
// import { useRouter } from 'next/navigation';
// import { contentData } from '@/data/services';
// // import ServiceDetailsArea from '@/components/ServiceDetailsArea';
// import ServiceDetailsArea from '@/components/service_area/ServiceDetailsArea';

// const ServiceDetailPage = () => {
//   const router = useRouter();
//   const { slug } = router.query;

//   console.log(slug);

//   // Ensure slug is defined before trying to access it
//   if (!slug) {
//     return <div>Loading...</div>; // Optional loading state
//   }

//   // Find the service details by slug
//   const service = contentData.services.find(service => service.id === slug);

//   if (!service) {
//     return <div>Service not found</div>; // Handle case where service is not found
//   }

//   return (
//     <ServiceDetailsArea service={service} />
//   );
// };

// export default ServiceDetailPage;
// "use client"

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { contentData } from '@/data/services';
// // import ServiceDetailsArea from '@/components/ServiceDetailsArea';

// import ServiceDetailsArea from '@/components/service_area/ServiceDetailsArea';

// const ServiceDetailPage = () => {
//   const router = useRouter();
//   const { slug } = router.query; // Get the slug from the URL

//   const [service, setService] = useState(null);

//   useEffect(() => {
//     if (slug) {
//       const foundService = contentData.services.find(s => s.id === slug);
//       setService(foundService || null);
//     }
//   }, [slug]);

//   if (!slug) {
//     return <div>Loading...</div>; // Show loading while slug is not available
//   }

//   if (!service) {
//     return <div>Service not found.</div>; // Show message if service is not found
//   }

//   return (
//     <ServiceDetailsArea service={service} />
//   );
// };

// export default ServiceDetailPage;
