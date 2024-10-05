// import Link from 'next/link';
// import React from 'react';
// import {
//   FaChevronRight,
//   FaEnvelope,
//   FaFacebookF,
//   FaInstagram,
//   FaMapMarkedAlt,
//   FaPhoneAlt,
//   FaTwitter,
//   FaYoutube,
// } from 'react-icons/fa';
// import Image from 'next/image';
// import footer_logo from '../../../public/assets/img/logo.png';
// import { Address , Phone_number , Email_id} from '@/Config/config';
// import { services , payLinks , socialMedia } from '@/data/footer';
// // Separate data objects for services, payLinks, and socialMedia

// const FooterTwo = () => {
//   return (
//     <>
//       {/* ================== Footer Two Start ==================*/} 
//       <footer className="footer-area footer-area-2 bg-gray mt-0 pd-top-120">
//         <div className="container">
//           <div className="row">
//             {/* About Section */}
//             <div className="col-lg-3 col-md-6">
//               <div className="widget widget_about">
//                 <div className="thumb">
//                 <Link href="/home" >
//                   <Image src={footer_logo} alt="img" width={200} height={50} /> 
// </Link>
                  
//                 </div>
//                 <div className="details">
//                   <p>Mail Us to get more information </p>
//                   <div className="subscribe mt-4">
//                     <input type="text" placeholder="E-mail" />
//                     <button>
//                       <FaChevronRight />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Services Section */}
//             <div className="col-lg-3 col-md-6 ps-xl-5">
//               <div className="widget widget_nav_menu">
//                 <h4 className="widget-title">Our Services</h4>
//                 <ul>
//                   {services.map((service, index) => (
//                     <li key={index}>
//                       <Link href={service.link}>
//                         <FaChevronRight /> {service.name}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             {/* Pay Links Section */}
//             <div className="col-lg-3 col-md-6 ps-xl-5">
//               <div className="widget widget_nav_menu">
//                 <h4 className="widget-title">Legal Services</h4>
//                 <ul>
//                   {payLinks.map((link, index) => (
//                     <li key={index}>
//                       <Link href={link.href}>
//                         <FaChevronRight /> {link.name}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             {/* Contact Us Section */}
//             <div className="col-lg-3 col-md-6">
//               <div className="widget widget-recent-post">
//                 <h4 className="widget-title">Contact Us</h4>
//                 <div className="widget widget_contact">
//                   <ul className="details">
//                     <li>
//                       <FaMapMarkedAlt /> {Address}
//                     </li>
//                     <li className="mt-3">
//                       <FaPhoneAlt /> {Phone_number}
//                     </li>
//                     <li className="mt-2">
//                       <FaEnvelope /> {Email_id}
//                     </li>
//                   </ul>
//                   <ul className="social-media mt-4">
//                     {socialMedia.map((social, index) => (
//                       <li key={index}>
//                         <Link href={social.href}>
//                           {social.icon}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="footer-bottom">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-6 align-self-center">
//                 <p>© Tech Samrajya 2024 | All Rights Reserved</p>
//               </div>
//               <div className="col-md-6 text-lg-end">
//                 {/* <Link href="#">Trams &amp; Condition</Link>
//                 <Link href="#">Privacy Policy</Link> */}
//                 <Link href="/contact">Contact Us</Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//       {/* ================== Footer Two End ==================*/} 
//     </>
//   );
// };

// export default FooterTwo;

"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import {
  FaChevronRight,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import Image from 'next/image';
import footer_logo from '../../../public/assets/img/JHA_Consultancy_2.png';
import { Address, Phone_number, Email_id } from '@/Config/config';
import { services, payLinks, socialMedia } from '@/data/footer';

const FooterTwo = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = () => {
    if (email) {
      window.location.href = `mailto:${email}`;
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <>
      {/* ================== Footer Two Start ================== */}
      <footer className="footer-area footer-area-2 bg-gray mt-0 pd-top-120">
        <div className="container">
          <div className="row">
            {/* About Section */}
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_about">
                <div className="thumb d-flex justify-center">
                  <Link href="/home">
                    <Image src={footer_logo} alt="img" width={150} />
                  </Link>
                </div>
                <div className="details">
                  <p>Mail Us to get more information</p>
                  <div className="subscribe mt-4">
                    <input
                      type="text"
                      placeholder="E-mail"
                      value={email}
                      onChange={handleEmailChange}
                    />
                    <button onClick={handleEmailSubmit}>
                      <FaChevronRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div className="col-lg-3 col-md-6 ps-xl-5">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Our Services</h4>
                <ul>
                  {services.map((service, index) => (
                    <li key={index}>
                      <Link href={service.link}>
                        <FaChevronRight /> {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pay Links Section */}
            <div className="col-lg-3 col-md-6 ps-xl-5">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Legal Services</h4>
                <ul>
                  {payLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href}>
                        <FaChevronRight /> {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Us Section */}
            <div className="col-lg-3 col-md-6">
              <div className="widget widget-recent-post">
                <h4 className="widget-title">Contact Us</h4>
                <div className="widget widget_contact">
                  <ul className="details">
                    <li>
                      <FaMapMarkedAlt /> {Address}
                    </li>
                    <li className="mt-3">
                      <FaPhoneAlt /> {Phone_number}
                    </li>
                    <li className="mt-2">
                      <FaEnvelope /> {Email_id}
                    </li>
                  </ul>
                  <ul className="social-media mt-4">
                    {socialMedia.map((social, index) => (
                      <li key={index}>
                        <Link href={social.href}>
                          {social.icon}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-self-center">
                <a href='https://www.techsamrajya.com/'>© Tech Samrajya 2024 | All Rights Reserved</a>
              </div>
              <div className="col-md-6 text-lg-end">
                <Link href="/contact">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* ================== Footer Two End ================== */}
    </>
  );
};

export default FooterTwo;
