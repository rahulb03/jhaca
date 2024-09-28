// 'use client';
// import React from 'react';
// import { FaStar } from 'react-icons/fa';
// import Slider from 'react-slick';
// import { testimonials } from '@/Config/config';

// const TestimonialTwo = () => {

//   const settings = {
//     dots: true,
//     arrows: false,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 2,
//     slidesToScroll: 2,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 992,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           arrows: false,
//         },
//       },
//     ],
//   };

//   return (
//     <>
//       {/* =================== Testimonial Two Start ===================*/}
//       <div className="testimonial-area pd-top-120">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-xl-7 col-lg-9">
//               <div className="section-title text-center">
//                 <h6 className="sub-title">CLIENT TALK</h6>
//                 <h2 className="title">
//                   Our Only Aim Is To Create The <span>Best</span> For You
//                 </h2>
//               </div>
//             </div>
//           </div>
//           <div className="testimonial-slider-2 slider-control-dots">
//             <Slider {...settings}>
//               {testimonials.map((testimonial, index) => (
//                 <div className="item" key={index}>
//                   <div className="single-testimonial-inner style-2">
//                     <div className="row">
//                       <div className="col-12">
//                         <div className="icon mb-2">
//                           <img src={testimonial.icon} alt="img" />
//                         </div>
//                       </div>
//                       <div className="col-sm-8">
//                         <p className="designation mb-0">{testimonial.testimonial}</p>
//                       </div>
//                       <div className="col-sm-4 align-self-center text-sm-end mt-4 mt-sm-0">
//                         <div className="thumb d-inline-block">
//                           <img src={testimonial.photo} alt="img" />
//                         </div>
//                       </div>
//                       <div className="col-sm-8 mt-4">
//                         <h5 className="mb-0">{testimonial.name}</h5>
//                       </div>
//                       <div className="col-sm-4 mt-sm-4">
//                         <div className="ratting-inner">
//                           <span>Rating:</span>
//                           {Array.from({ length: testimonial.stars }, (_, i) => (
//                             <FaStar key={i} />
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </Slider>
//           </div>
//         </div>
//       </div>
//       {/* =================== Testimonial Two End ===================*/}
//     </>
//   );
// };

// export default TestimonialTwo;



'use client';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import Slider from 'react-slick';
import { testimonials } from '@/data/testimonial';

const TestimonialTwo = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    // speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    // autoplay: true, // Enable auto-scrolling
    // autoplaySpeed: 2000, // Time between transitions
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      {/* =================== Testimonial Two Start ===================*/}
      <div className="testimonial-area pd-top-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div className="section-title text-center">
                <h6 className="sub-title">CLIENT TALK</h6>
                <h2 className="title">
                  Our Only Aim Is To Create The <span>Best</span> For You
                </h2>
              </div>
            </div>
          </div>
          <div className="testimonial-slider-2 slider-control-dots">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div className="item" key={index}>
                  <div className="single-testimonial-inner style-2">
                    <div className="row">
                      <div className="col-12">
                        <div className="icon mb-2">
                          <img src={testimonial.icon} alt="img" />
                        </div>
                      </div>
                      <div className="col-sm-8">
                        <p className="designation mb-0">{testimonial.testimonial}</p>
                      </div>
                      <div className="col-sm-4 align-self-center text-sm-end mt-4 mt-sm-0">
                        <div className="thumb d-inline-block">
                          <img src={testimonial.photo} alt="img" />
                        </div>
                      </div>
                      <div className="col-sm-8 mt-4">
                        <h5 className="mb-0">{testimonial.name}</h5>
                      </div>
                      <div className="col-sm-4 mt-sm-4">
                        <div className="ratting-inner">
                          {/* <span>Rating:</span> */}
                          {Array.from({ length: testimonial.stars }, (_, i) => (
                            <FaStar key={i} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      {/* =================== Testimonial Two End ===================*/}
    </>
  );
};

export default TestimonialTwo;
