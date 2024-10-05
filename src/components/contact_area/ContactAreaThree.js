import React from "react";
import { contactData } from "@/data/contact";
import Image from "next/image";
// import about from "@/assets/img/site_images/Untitled design ().svg";

import about from '../../../public/assets/img/site_images/Untitled design (3).svg'

const ContactAreaThree = () => {
  return (
    <>
      {/* ========================= contact Area Three start =========================*/}
      <div className='price-process-area pd-top-120'>
        <div className='contact-inner-1 contact-inner-2'>
          <div className='row'>
            <div
              className='col-lg-6'
              data-aos='fade-right'
              data-aos-delay='200'
              data-aos-duration='1500'
            >
              <Image className='w-100' src={about} alt='img' priority  />
            </div>
            <div
              className='col-lg-4'
              data-aos='fade-left'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='section-title mb-0'>
                {/* <h6 className='sub-title'>GET IN TOUCH</h6>
                <h2 className='title mb-4'>
                  Smarter Applications For The <span>Smarter</span> Individuals
                </h2> */}
                <h6 className='sub-title'>CONTACT US</h6>
<h2 className='title mb-4'>
  We're Here to Help! Reach Out for <span>Assistance</span>
</h2>

                {contactData.map((item, index) => (
                  <div className='media mb-3' key={index}>
                    <div className='media-left me-3'>
                      <img src={item.icon} alt='img' />
                    </div>
                    <div className='media-body'>
                      <h5>{item.title}</h5>
                      <p className='mb-0'>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*========================= contact-inner Three end =========================*/}
    </>
  );
};

export default ContactAreaThree;
