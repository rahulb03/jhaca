// import React from "react";

// const AboutAreaOne = () => {
//   return (
//     <>
//       {/* ================== AboutAreaOne start  ==================*/}
//       <div className='about-area pd-top-120'>
//         <div className='container'>
//           <div className='row'>
//             <div className='col-lg-6'>
//               <div
//                 className='about-thumb-inner pe-xl-5 me-xl-5 '
//                 data-aos='fade-right'
//                 data-aos-delay='100'
//                 data-aos-duration='1500'
//               >
//                 <img
//                   className='animate-img-1 top_image_bounce'
//                   src='assets/img/about/2.png'
//                   alt='img'
//                 />
//                 <img
//                   className='animate-img-2 left_image_bounce'
//                   src='assets/img/about/3.png'
//                   alt='img'
//                 />
//                 <img
//                   className='animate-img-3 top_image_bounce'
//                   src='assets/img/banner/5.svg'
//                   alt='img'
//                 />
//                 <img
//                   className='main-img'
//                   src='assets/img/about/1.png'
//                   alt='img'
//                 />
//               </div>
//             </div>
//             <div
//               className='col-lg-6 '
//               data-aos='fade-left'
//               data-aos-delay='100'
//               data-aos-duration='1500'
//             >
//               <div className='section-title mt-5 mt-lg-0'>
//                 <h6 className='sub-title'>ABOUT US</h6>
//                 <h2 className='title'>
//                   It Is A Critical Component Of <span>Modern</span> Businesses
//                 </h2>
//                 <p className='content mb-4 mb-xl-5'>
//                   Lorem Ipsum is simply dummy text of the printing and
//                   typesetting industry Loreaim Ipsum has been the industry's
//                   standard dummy
//                 </p>
//                 <div className='row'>
//                   <div className='col-md-6'>
//                     <div className='single-about-inner'>
//                       <div className='thumb mb-3'>
//                         <img src='assets/img/icon/2.png' alt='img' />
//                       </div>
//                       <div className='details'>
//                         <h5>Our Ambition</h5>
//                         <p>
//                           Lorem is Ipsum is simply is design iomyi is text Lorem
//                           Ipsum is simply is our busi designer is our country.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className='col-md-6'>
//                     <div className='single-about-inner'>
//                       <div className='thumb mb-3'>
//                         <img src='assets/img/icon/3.png' alt='img' />
//                       </div>
//                       <div className='details'>
//                         <h5>Our Ambition</h5>
//                         <p>
//                           Lorem is Ipsum is simply is design iomyi is text Lorem
//                           Ipsum is simply is our busi designer is our country.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* ================== AboutAreaOne End  ==================*/}
//     </>
//   );
// };

// export default AboutAreaOne;


import React from "react";
import { aboutItems , aboutUsContent } from "@/data/about";
import image1 from '../../../public/assets/img/site_images/Untitled design (1).svg'
import Image from "next/image";
const AboutAreaOne = () => {

  return (
    <>
      {/* ================== AboutAreaOne start  ==================*/}
      <div className='about-area pd-top-120'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div
                className='about-thumb-inner pe-xl-5 me-xl-5'
                data-aos='fade-right'
                data-aos-delay='100'
                data-aos-duration='1500'
              >
                <img
                  className='animate-img-1 top_image_bounce'
                  src='assets/img/about/2.png'
                  alt='Chartered Accountant Services'
                />
                <img
                  className='animate-img-2 left_image_bounce'
                  src='assets/img/about/3.png'
                  alt='Financial Consulting'
                />
                <img
                  className='animate-img-3 top_image_bounce'
                  src='assets/img/banner/5.svg'
                  alt='Accounting Solutions'
                />
                <Image
                  className='main-img'
                  src={image1}
                  alt='Professional Accountants'
                  priority
                />
              </div>
            </div>
            <div
              className='col-lg-6'
              data-aos='fade-left'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='section-title mt-5 mt-lg-0'>
                <h6 className='sub-title'>{aboutUsContent.subTitle}</h6>
                <h2 className='title'>
                  {aboutUsContent.mainTitle.split(" ").map((word, index) => (
                    <span key={index}>{word} </span>
                  ))}
                </h2>
                <p className='content mb-4 mb-xl-5'>
                  {aboutUsContent.description}
                </p>
                <div className='row'>
                  {aboutItems.map((item, index) => (
                    <div className='col-md-6' key={index}>
                      <div className='single-about-inner'>
                        <div className='thumb mb-3'>
                          <img src={item.icon} alt='icon' />
                        </div>
                        <div className='details'>
                          <h5>{item.title}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================== AboutAreaOne End  ==================*/}
    </>
  );
};

export default AboutAreaOne;
