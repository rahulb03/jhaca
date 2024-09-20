import React from "react";
import { FaPlus } from "react-icons/fa";
import serviceList from "../../scripts/serviceList";
import Link from "next/link";

const ServiceAreaOne = () => {
  return (
    <>
      {/*=================== service area start ===================*/}
      <div className='service-area bg-relative pd-top-100'>
        <img
          className='position-bottom-left top_image_bounce'
          src='assets/img/icon/4.png'
          alt='img'
        />
        <div className='container'>
          <div className='section-title text-center'>
            <h6 className='sub-title'>CREATIVE SERVICES</h6>
            <h2 className='title'>
              Your Partner In <span>Digital</span> Success
            </h2>
          </div>
          <div className='row'>
            {serviceList.slice(0, 3).map((service, index) => (
              <div key={index} className='col-lg-4 col-md-6'>
                <div className='single-service-inner style-3'>
                  <div className='thumb'>
                    <img src={service.imgSrc} alt={service.title} />
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

export default ServiceAreaOne;
