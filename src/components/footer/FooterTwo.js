import Link from 'next/link';
import React from 'react';
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
import footer_logo from '../../../public/assets/img/logo.png';
import { payLinks , services , socialMedia  , Address , Phone_number , Email_id} from '@/Config/config';

// Separate data objects for services, payLinks, and socialMedia

const FooterTwo = () => {
  return (
    <>
      {/* ================== Footer Two Start ==================*/} 
      <footer className="footer-area footer-area-2 bg-gray mt-0 pd-top-120">
        <div className="container">
          <div className="row">
            {/* About Section */}
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_about">
                <div className="thumb">
                  <Image src={footer_logo} alt="img" width={200} height={50} />
                </div>
                <div className="details">
                  <p>Melbourne is simply is dumiomy is text Lorem Ipsum is simply</p>
                  <div className="subscribe mt-4">
                    <input type="text" placeholder="E-mail" />
                    <button>
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
                <h4 className="widget-title">Pay Links</h4>
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
                <p>© AglieTech 2024 | All Rights Reserved</p>
              </div>
              <div className="col-md-6 text-lg-end">
                <Link href="#">Trams &amp; Condition</Link>
                <Link href="#">Privacy Policy</Link>
                <Link href="#">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* ================== Footer Two End ==================*/} 
    </>
  );
};

export default FooterTwo;
