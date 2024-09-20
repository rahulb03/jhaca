

import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { payLinks } from "@/data/footer";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

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
            <div className='col-lg-8 col-12'>
              <div className='blog-details-page-content'>
                <div className='single-blog-inner mb-0'>
                  <h2>{legal_service.name}</h2>
                  <div className='thumb'>
                    {legal_service.image && (
                      <Image src={legal_service.image} alt={legal_service.name} />
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
                  
                  {/* Service Highlights - Place Highlights after Service Content */}
                  <div className="service-highlights mt-4">
                    <h4>Service Highlights</h4>
                    <div className="row">
                      {legal_service.highlights.map((column, colIndex) => (
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
      {/* ====================  Case Study Area End ==================== */}
    </>
  );
};

export default CaseStudyArea;
