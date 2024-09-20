


// // import React from "react";
// // import { FaArrowRight } from "react-icons/fa";
// // import { projectInfo, mainContent } from "@/data/case_study";
// // import Image from "next/image";

// // const CaseStudyArea = () => {
// //   const info = projectInfo[0]; // Access the first element of projectInfo

// //   // Map over the mainContent array
// //   const caseStudies = mainContent.map((caseStudy) => (
// //     <div key={caseStudy.id}>
// //       <h2>{caseStudy.name}</h2>
// //       <div className='thumb'>
// //         <Image src={caseStudy.image} alt={caseStudy.name} />
// //       </div>
// //       {caseStudy.content.map((section, index) => (
// //         <div key={index}>
// //           <h4>{section.title}</h4>
// //           {section.paragraphs.map((paragraph, idx) => (
// //             <p key={idx}>{paragraph}</p>
// //           ))}
// //         </div>
// //       ))}
// //     </div>
// //   ));


// //   return (
// //     <>
// //       {/* ====================  Case Study Area start ====================*/}
// //       <div className='service-area pd-top-120 pd-bottom-90'>
// //         <div className='container'>
// //           <div className='row'>
// //             <div className='col-lg-4 col-12'>
// //               <div className='td-sidebar service-sidebar'>
// //                 <div className='widget widget_info'>
// //                   <h5 className='widget-title'>
// //                     <FaArrowRight /> {info.title}
// //                   </h5>
// //                   <div className='widget-info-inner'>
// //                     <h6>Clients</h6>
// //                     <p>{info.clients}</p>
// //                     <h6>Category</h6>
// //                     <p>{info.category}</p>
// //                     <h6>Date</h6>
// //                     <p>{info.date}</p>
// //                     <h6>Location</h6>
// //                     <p>{info.location}</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className='col-lg-8'>
// //               <div className='blog-details-page-content'>
// //                 <div className='single-blog-inner mb-0'>
// //                   {caseStudies}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       {/* ====================  Case Study Area End ====================*/}
// //     </>
// //   );
// // };

// // export default CaseStudyArea;



// import React from "react";
// import { FaArrowRight } from "react-icons/fa";
// import Image from "next/image";

// const CaseStudyArea = ({ legal_service }) => {
//   // If `legal_service` is empty or undefined, you might want to handle that case
//   if (!legal_service) {
//     return <p>No service details available.</p>;
//   }

//   return (
//     <>
//       {/* ====================  Case Study Area start ==================== */}
//       <div className='service-area pd-top-120 pd-bottom-90'>
//         <div className='container'>
//           <div className='row'>
//             <div className='col-lg-4 col-12'>
//               <div className='td-sidebar service-sidebar'>
//                 <div className='widget widget_info'>
//                   <h5 className='widget-title'>
//                     <FaArrowRight /> {legal_service.name}
//                   </h5>
//                   <div className='widget-info-inner'>
//                     {/* Include additional details if available */}
//                     <h6>Description</h6>
//                     <p>{legal_service.description || "No description available."}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className='col-lg-8'>
//               <div className='blog-details-page-content'>
//                 <div className='single-blog-inner mb-0'>
//                   <h2>{legal_service.name}</h2>
//                   <div className='thumb'>
//                     <Image src={legal_service.image} alt={legal_service.name} />
//                   </div>
//                   {legal_service.content.map((section, index) => (
//                     <div key={index}>
//                       <h4>{section.title}</h4>
//                       {section.paragraphs.map((paragraph, idx) => (
//                         <p key={idx}>{paragraph}</p>
//                       ))}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* ====================  Case Study Area End ==================== */}
//     </>
//   );
// };

// export default CaseStudyArea;



import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { payLinks } from "@/data/footer";
import Link from "next/link";

const CaseStudyArea = ({ legal_service }) => {
  // If `legal_service` is empty or undefined, handle the case
  if (!legal_service) {
    return <p>No service details available.</p>;
  }

  return (
    <>
      {/* ====================  Case Study Area start ==================== */}
      <div className='service-area pd-top-120 pd-bottom-90'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-12'>
              <div className='td-sidebar service-sidebar'>
             
                <div className="td-sidebar service-sidebar">
              {/* Services List */}
              <div className="widget widget_catagory">
                <h5 className="widget-title">
                  <FaArrowRight /> All Service lists
                </h5>
                <ul className="catagory-items">
                  {payLinks.map((service, index) => (
                    <li key={index}>
                      <Link href={service.href}>{service.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Details */}
             

            </div>
              </div>
            </div>
            <div className='col-lg-8'>
              <div className='blog-details-page-content'>
                <div className='single-blog-inner mb-0'>
                  <h2>{legal_service.name}</h2>
                  <div className='thumb'>
                    {legal_service.image && (
                      <Image src={legal_service.image} alt={legal_service.name} width={600} height={400} />
                    )}
                  </div>
                  {legal_service.content.map((section, index) => (
                    <div key={index}>
                      <h4>{section.title}</h4>
                      {section.paragraphs.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ====================  Case Study Area End ==================== */}
    </>
  );
};

export default CaseStudyArea;
