// 'use client'
// import Link from 'next/link';
// import React, { useState } from 'react';
// import { FaPlus } from 'react-icons/fa';
// import ModalVideo from 'react-modal-video';
// import image from '../../../public/assets/img/banner-3/5.png';
// import banner1 from '../../../public/assets/img/home/Untitled (660 x 665 px) (1).svg';
// import banner2 from '../../../public/assets/img/home/Untitled (660 x 665 px) (2).svg';
// import banner3 from '../../../public/assets/img/home/Untitled (660 x 665 px) (3).svg';
// import banner from '../../../public/assets/img/home/Untitled (660 x 665 px).svg';
// import Image from 'next/image';

// const BannerThree = () => {
//   const [isOpen, setOpen] = useState(false);
//   return (
//     <>
//       {/* ================== BannerThree Start ==================*/}
//       <div
//         className="banner-area bg-relative banner-area-2 bg-cover"
//         style={{ backgroundImage: `url(${image.src})` }}
//       >
//         <img className="bg-img-2" src="assets/img/banner-3/4.png" alt="img" />
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-6 align-self-center">
//               <div className="banner-inner pe-xl-5">
//                 <h6
//                   className="subtitle "
//                   data-aos="fade-right"
//                   data-aos-delay="100"
//                   data-aos-duration="1500"
//                 >
//                   DESIGNING FOR THE FUTURE
//                 </h6>
//                 <h2
//                   className="title"
//                   data-aos="fade-right"
//                   data-aos-delay="200"
//                   data-aos-duration="1500"
//                 >
//                   Empowering Your <span>Financial</span> Freedom
//                 </h2>
//                 <p
//                   className="content pe-xl-5"
//                   data-aos="fade-right"
//                   data-aos-delay="250"
//                   data-aos-duration="1500"
//                 >
//                   And In Order To Make A Business, Brand Advertising And
//                   Marketing Plays An Important Role. Similarly, In Making
//                   Cultivation Business Are Necessary.
//                 </p>
//                 <Link
//                   className="btn btn-border-base "
//                   data-aos="fade-right"
//                   data-aos-delay="300"
//                   data-aos-duration="1500"
//                   href="/about"
//                 >
//                   Discover More <FaPlus />
//                 </Link>
//                 <div
//                   className="d-inline-block align-self-center wow animated fadeInLeft mt-4 mt-md-0"
//                   data-aos="fade-right"
//                   data-aos-delay="300"
//                   data-aos-duration="1500"
//                 >
//                   <span
//                     onClick={() => setOpen(true)}
//                     className="video-play-btn-hover"
//                   >
//                     <img src="assets/img/video.svg" alt="img" />{' '}
//                     <h6 className="d-inline-block">how we work</h6>
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-6 col-md-10">
//               <div
//                 className="banner-thumb-3"
//                 data-aos="fade-left"
//                 data-aos-delay="100"
//                 data-aos-duration="1500"
//               >
//                 <div className="main-img-wrap">
//                   <img
//                     className="banner-animate-img banner-animate-img-1 left_image_bounce"
//                     src="assets/img/banner-3/2.svg"
//                     alt="img"
//                   />
//                   <img
//                     className="banner-animate-img banner-animate-img-2 left_image_bounce"
//                     src="assets/img/banner-3/3.svg"
//                     alt="img"
//                   />
//                   <Image
//                     className="main-img"
//                     src={banner}
//                     alt="img"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ================== BannerThree End ==================*/}
//       <ModalVideo
//         channel="youtube"
//         autoplay
//         isOpen={isOpen}
//         videoId="XM6kTQPzzpQ"
//         onClose={() => setOpen(false)}
//       />
//     </>
//   );
// };

// export default BannerThree;



'use client'
import React, { useState, useEffect } from 'react';
import ModalVideo from 'react-modal-video';
import Image from 'next/image';
import { FaPlus } from 'react-icons/fa';
import Link from 'next/link';
import image from '../../../public/assets/img/banner-3/5.png';
import banner1 from '../../../public/assets/img/home/Untitled (660 x 665 px) (1).svg';
import banner2 from '../../../public/assets/img/home/Untitled (660 x 665 px) (2).svg';
import banner3 from '../../../public/assets/img/home/Untitled (660 x 665 px) (3).svg';
import banner from '../../../public/assets/img/home/Untitled (660 x 665 px).svg';

const images = [banner, banner1, banner2, banner3]; // Array of images

const BannerThree = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setOpen] = useState(false);

  // Automatically slide images every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    // Clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div
        className="banner-area bg-relative banner-area-2 bg-cover"
        style={{ backgroundImage: `url(${image.src})` }}
      >
        <img className="bg-img-2" src="assets/img/banner-3/4.png" alt="img" />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="banner-inner pe-xl-5">
                <h6
                  className="subtitle "
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-duration="1500"
                >
                  DESIGNING FOR THE FUTURE
                </h6>
                <h2
                  className="title"
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="1500"
                >
                  Empowering Your <span>Financial</span> Freedom
                </h2>
                <p
                  className="content pe-xl-5"
                  data-aos="fade-right"
                  data-aos-delay="250"
                  data-aos-duration="1500"
                >
                  And In Order To Make A Business, Brand Advertising And
                  Marketing Plays An Important Role. Similarly, In Making
                  Cultivation Business Are Necessary.
                </p>
                <Link
                  className="btn btn-border-base "
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="1500"
                  href="/about"
                >
                  Discover More <FaPlus />
                </Link>
                <div
                  className="d-inline-block align-self-center wow animated fadeInLeft mt-4 mt-md-0"
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="1500"
                >
                  {/* <span
                    onClick={() => setOpen(true)}
                    className="video-play-btn-hover"
                  >
                    <img src="assets/img/video.svg" alt="img" />{' '}
                    <h6 className="d-inline-block">how we work</h6>
                  </span> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-10">
              <div
                className="banner-thumb-3"
                data-aos="fade-left"
                data-aos-delay="100"
                data-aos-duration="1500"
              >
                <div className="main-img-wrap">
                  <img
                    className="banner-animate-img banner-animate-img-1 left_image_bounce"
                    src="assets/img/banner-3/2.svg"
                    alt="img"
                  />
                  <img
                    className="banner-animate-img banner-animate-img-2 left_image_bounce"
                    src="assets/img/banner-3/3.svg"
                    alt="img"
                  />
                  <Image
                    className="main-img"
                    src={images[currentIndex]} // Automatically slide images
                    alt={`banner-${currentIndex + 1}`}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================== BannerThree End ==================*/}  
      {/*  */}

      <style jsx>{`
        .banner-area {
          position: relative;
          overflow: hidden;
        }
        .main-img-wrap {
          position: relative;
        }
        .image-slider {
          display: flex;
          transition: transform 0.5s ease-in-out;
        }
        .image-slider img {
          width: 100%;
          height: auto;
        }
        .slider-controls {
          margin-top: 20px;
          display: flex;
          justify-content: space-between;
        }
        .prev-btn, .next-btn {
          background-color: rgba(0, 0, 0, 0.5);
          border: none;
          color: white;
          padding: 10px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default BannerThree;
