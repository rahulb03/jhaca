// 
import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa";


import { services } from "@/data/services";
import Image from "next/image";


const ServiceAreaThree = () => {
// console.log(services);S
  return (
    <>
      {/*=================== service area start ===================*/}
      <div className='service-area bg-relative pd-top-120 pd-bottom-90'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-xl-8 col-lg-10'>
              <div className='section-title text-center'>
                <h6 className='sub-title'>OUR SERVICES</h6>
                <h2 className='title'>
                  Best Destination To Get Your Own <span>Complete</span> Developed
                </h2>
              </div>
            </div>
          </div>
          <div className='row'>
            {services.map((service, index) => (
              <div key={index} className='col-lg-4 col-md-6'>
                <div className='single-service-inner style-3'>
                  <div className='thumb'>
                    <Image src={service.imgSrc} alt={service.title} />
                  </div>
                  <div className='details'>

                          <h5>
                      <Link href={`/service-details/${service.slug}`}>{service.title}</Link>
                            </h5>
                            <p>{service.description}</p>

                      <Link className='read-more-text' href={`/service-details/${service.slug}`}>
                        Touch More <FaPlus />
                      </Link>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* =================== service area end ===================*/}
    </>
  );
};

export default ServiceAreaThree;
