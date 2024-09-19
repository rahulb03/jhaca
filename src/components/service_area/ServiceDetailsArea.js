// import Link from 'next/link';
// import React from 'react';
// import { FaAngleDoubleRight, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
// import { servicesData , contentData ,  } from '@/data/services';
// // Data object for services, company details, and downloads


// const ServiceDetailsArea = () => {
//   return (
//     <div className="service-area pd-top-120 pd-bottom-90">
//       <div className="container">
//         <div className="row">
//           {/* Sidebar */}
          // <div className="col-lg-4 col-12">
          //   <div className="td-sidebar service-sidebar">
          //     {/* Services List */}
          //     <div className="widget widget_catagory">
          //       <h5 className="widget-title">
          //         <FaArrowRight /> All Service lists
          //       </h5>
          //       <ul className="catagory-items">
          //         {servicesData.servicesList.map((service, index) => (
          //           <li key={index}>
          //             <Link href={service.link}>{service.name}</Link>
          //           </li>
          //         ))}
          //       </ul>
          //     </div>

          //     {/* Company Details */}
          //     <div className="widget widget_author text-center">
          //       <div className="thumb">
          //         <img src={servicesData.companyDetails.imageSrc} alt="Company" />
          //       </div>
          //       <div className="details">
          //         <Link className="btn btn-base border-radius-5" href={servicesData.companyDetails.buttonLink}>
          //           {servicesData.companyDetails.buttonText}
          //         </Link>
          //       </div>
          //     </div>

          //     {/* Downloads */}
          //     <div className="widget widget_download">
          //       <h5 className="widget-title">
          //         <FaArrowRight /> Download
          //       </h5>
          //       <ul>
          //         {servicesData.downloads.map((download, index) => (
          //           <li key={index}>
          //             <Link href={download.link}>
          //               {download.name} <FaAngleDoubleRight />
          //             </Link>
          //           </li>
          //         ))}
          //       </ul>
          //     </div>
          //   </div>
          // </div>

//           {/* Main Content */}
//           <div className="col-lg-8">
//             <div className="blog-details-page-content">
//               <div className="single-blog-inner mb-0">
//                 {/* Blog Content Based on Selected Service */}
//                 <div className="details">
//                   {contentData.services.map((service, index) => (
//                     <div key={index} id={service.id}>
//                       <h4>{service.title}</h4>
//                       <p>{service.description}</p>
//                       {/* Service Image */}
//                       <div className="thumb">
//                         <img src={service.imageSrc} alt={service.title} />
//                       </div>
//                       {service.content.map((paragraph, idx) => (
//                         <p key={idx}>{paragraph}</p>
//                       ))}

//                       <h4>FAQs</h4>
//                       <div className="accordion accordion-inner accordion-icon-left mt-3 mb-4" id="accordionExample">
//                         {service.questions.map((faq, idx) => (
//                           <div className="accordion-item" key={idx}>
//                             <h2 className="accordion-header" id={`heading${service.id}-${idx}`}>
//                               <button
//                                 className="accordion-button"
//                                 type="button"
//                                 data-bs-toggle="collapse"
//                                 data-bs-target={`#collapse${service.id}-${idx}`}
//                                 aria-expanded={idx === 0 ? 'true' : 'false'}
//                                 aria-controls={`collapse${service.id}-${idx}`}
//                               >
//                                 {faq.question}
//                               </button>
//                             </h2>
//                             <div
//                               id={`collapse${service.id}-${idx}`}
//                               className={`accordion-collapse collapse ${idx === 0 ? 'show' : ''}`}
//                               aria-labelledby={`heading${service.id}-${idx}`}
//                               data-bs-parent="#accordionExample"
//                             >
//                               <div className="accordion-body">{faq.answer}</div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>

//                       <h4>Service Highlights</h4>
//                       <div className="row">
//                         {service.highlights.map((column, colIndex) => (
//                           <div className="col-md-6" key={colIndex}>
//                             <ul className="single-list-inner style-check style-check mb-3">
//                               {column.map((highlight, idx) => (
//                                 <li key={idx}>
//                                   <FaCheckCircle /> {highlight.text}
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceDetailsArea;





// /components/ServiceDetailsArea.jsx
import Link from 'next/link';
import React from 'react';
import { FaAngleDoubleRight, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { servicesData } from '@/data/services';


const ServiceDetailsArea = ({ service }) => {
  return (
    <div className="service-area pd-top-120 pd-bottom-90">
      <div className="container">
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-4 col-12">
            <div className="td-sidebar service-sidebar">
              {/* Services List */}
              <div className="widget widget_catagory">
                <h5 className="widget-title">
                  <FaArrowRight /> All Service lists
                </h5>
                <ul className="catagory-items">
                  {servicesData.servicesList.map((service, index) => (
                    <li key={index}>
                      <Link href={service.link}>{service.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Details */}
              <div className="widget widget_author text-center">
                <div className="thumb">
                  <img src={servicesData.companyDetails.imageSrc} alt="Company" />
                </div>
                <div className="details">
                  <Link className="btn btn-base border-radius-5" href={servicesData.companyDetails.buttonLink}>
                    {servicesData.companyDetails.buttonText}
                  </Link>
                </div>
              </div>

              {/* Downloads */}
              <div className="widget widget_download">
                <h5 className="widget-title">
                  <FaArrowRight /> Download
                </h5>
                <ul>
                  {servicesData.downloads.map((download, index) => (
                    <li key={index}>
                      <Link href={download.link}>
                        {download.name} <FaAngleDoubleRight />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-lg-8">
            <div className="blog-details-page-content">
              <div className="single-blog-inner mb-0">
                <div className="details">
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                  <div className="thumb">
                    <img src={service.imageSrc} alt={service.title} />
                  </div>
                  {service.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}

                  <h4>FAQs</h4>
                  <div className="accordion accordion-inner accordion-icon-left mt-3 mb-4">
                    {service.questions.map((faq, idx) => (
                      <div className="accordion-item" key={idx}>
                        <h2 className="accordion-header" id={`heading${service.id}-${idx}`}>
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${service.id}-${idx}`}
                            aria-expanded={idx === 0 ? 'true' : 'false'}
                            aria-controls={`collapse${service.id}-${idx}`}
                          >
                            {faq.question}
                          </button>
                        </h2>
                        <div
                          id={`collapse${service.id}-${idx}`}
                          className={`accordion-collapse collapse ${idx === 0 ? 'show' : ''}`}
                          aria-labelledby={`heading${service.id}-${idx}`}
                        >
                          <div className="accordion-body">{faq.answer}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h4>Service Highlights</h4>
                  <div className="row">
                    {service.highlights.map((column, colIndex) => (
                      <div className="col-md-6" key={colIndex}>
                        <ul className="single-list-inner style-check style-check mb-3">
                          {column.map((highlight, idx) => (
                            <li key={idx}>
                              <FaCheckCircle /> {highlight.text}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsArea;
