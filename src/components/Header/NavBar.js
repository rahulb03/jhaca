'use client'
import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import header_logo from '../../../public/assets/img/logo.png'; 
import phone_icon from '../../../public/assets/img/icon/1.png'; 
import { Phone_number } from '@/Config/config';
import jha from '../../../public/assets/img/JHA_Consultancy.png'

const NavBar = () => {
  const [active, setActive] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
  
  // Toggle functions
  const menuActive = () => setActive(!active);
  const searchActive = () => setSearchShow(!searchShow);

  // Control sidebar navigation
  useEffect(() => {
    const items = document.querySelectorAll('.menu-item-has-children > a');

    const handleClick = (event) => {
      event.preventDefault(); // Prevent default link behavior
      const subMenu = event.currentTarget.parentElement.querySelector('.sub-menu');
      if (subMenu) {
        subMenu.classList.toggle('active');
        event.currentTarget.classList.toggle('open');
      }
    };

    items.forEach(item => {
      item.addEventListener('click', handleClick);
    });

    return () => {
      items.forEach(item => {
        item.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <>
      {/* search popup start */}
      <div
        className={searchShow ? 'td-search-popup active' : 'td-search-popup '}
        id="td-search-popup"
      >
        <form action="/" className="search-form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search....."
            />
          </div>
          <button type="submit" className="submit-btn">
            <FaSearch />
          </button>
        </form>
      </div>
      {/* search popup end */}
      <div
        onClick={searchActive}
        className={searchShow ? 'body-overlay active' : 'body-overlay'}
        id="body-overlay"
      ></div>
      {/* navbar start */}
      <nav className="navbar navbar-area navbar-area_1 navbar-expand-lg">
        <div className="container nav-container navbar-bg">
          <div className="responsive-mobile-menu">
            <button
              onClick={menuActive}
              className={
                active
                  ? 'menu toggle-btn d-block d-lg-none open'
                  : 'menu toggle-btn d-block d-lg-none'
              }
              data-target="#itech_main_menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-left" />
              <span className="icon-right" />
            </button>
          </div>
          <div className="logo col-lg-3">
            <Link href="/home">
              <Image src={jha} alt="img"  />
            </Link>
          </div>
          <div className="nav-right-part nav-right-part-mobile">
            <span className="search-bar-btn" onClick={searchActive}>
              <FaSearch />
            </span>
          </div>
          <div
            className={
              active
                ? 'collapse navbar-collapse sopen'
                : 'collapse navbar-collapse'
            }
            id="itech_main_menu"
          >
            <ul className="navbar-nav menu-open text-lg-end">
              {/* Home Link */}
              <li>
                <Link href="/home">Home</Link>
              </li>

              {/* Service Menu with New Submenu */}
              <li className="menu-item-has-children">
                <Link href="#">Loans</Link>
               
                <ul className="sub-menu">
                      
                <li>
                          <Link href="/service-details/home-loan">Home Loan</Link>
                        </li>
                   <li>
                          <Link href="/service-details/personal-loan">Personal Loan</Link>
                        </li>
                        <li>
                          <Link href="/service-details/business-loan">Business Loan</Link>
                        </li>
                        <li>
                          <Link href="/service-details/education-loan">Education Loan</Link>
                        </li>

                        
                        
                        <li>
                          <Link href="/service-details/mortgage-loan">Mortgage Loan</Link>
                        </li>
                       

                        <li>
                          <Link href="/service-details/vehicle-loan">vehicle Loan</Link>
                        </li>

                   
                 
                </ul>
              </li>

              <li className="menu-item-has-children">
                <Link href="#">Legal Services</Link>
               
                <ul className="sub-menu">
                      
                <li>
                          <Link href="/legal-services/income-tax-return">Income Tax Return</Link>
                        </li>
                        <li>
                          <Link href="/legal-services/audit-services">Audit </Link>
                        </li>
                        <li>
                          <Link href="/legal-services/company-registration">Company Registration</Link>
                        </li>
                        <li>
                          <Link href="/legal-services/gst-registration">GST Registration</Link>
                        </li>
                       
                        <li>
                          <Link href="/legal-services/trademark-registration">Trademark Registration</Link>
                        </li>

                        <li>
                          <Link href="/legal-services/gst-return-filing">GST Return</Link>
                        </li>
                        <li>
                          <Link href="/legal-services/account-management">Account management</Link>
                        </li>
                        <li>
                          <Link href="/legal-services/good-service-compliance">GST Compliances</Link>
                        </li>
                        <li>
                          <Link href="/legal-services/tds-return-filing"> TDS return</Link>
                        </li>
                        <li>
                          <Link href="/legal-services/tcs-return-filing">TCS return</Link>
                        </li>
                  
                   
                 
                </ul>
              </li>

              {/* Pages Menu */}
              {/* <li className="menu-item-has-children">
                <Link href="#">Pages</Link>
                <ul className="sub-menu">
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/team">Team 01</Link>
                  </li>
                  <li>
                    <Link href="/team-2">Team 02</Link>
                  </li>
                  <li>
                    <Link href="/team-3">Team 03</Link>
                  </li>
                  <li>
                    <Link href="/team-details">Team Details</Link>
                  </li>
                  <li>
                    <Link href="/pricing">Pricing 01</Link>
                  </li>
                  <li>
                    <Link href="/pricing-2">Pricing 02</Link>
                  </li>
                </ul>
              </li> */}

              {/* Mega Menu */}
              {/* <li className="menu-item-has-children mega-menu">
                <Link href="#">Mega Menu</Link>
                <div className="sub-menu">
                  <div className="row">
                    <div className="mb-lg-4 col-lg-4 col-xl-3">
                      <ul>
                        <li>
                          <Link href="/index-1">IT / Software Agency</Link>
                        </li>
                        <li>
                          <Link href="/index-2">SaaS App Landing</Link>
                        </li>
                        <li>
                          <Link href="/index-3">Payments Solution</Link>
                        </li>
                        <li>
                          <Link href="/index-4">Software Company</Link>
                        </li>
                        <li>
                          <Link href="/index-5">Artificial Intelligence</Link>
                        </li>
                        <li>
                          <Link href="/index-6">NFT Service</Link>
                        </li>
                        <li>
                          <Link href="/index-7">Cyber Security</Link>
                        </li>
                        <li>
                          <Link href="/index-8">Hardware Service</Link>
                        </li>
                        <li>
                          <Link href="/index-9">ICO Landing</Link>
                        </li>
                        <li>
                          <Link href="/index-10">Personal Portfolio</Link>
                        </li>
                        <li>
                          <Link href="/index-11">SEO Service</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="mb-lg-4 col-lg-4 col-xl-3">
                      <ul>
                        <li>
                          <Link href="/service">Service 01</Link>
                        </li>
                        <li>
                          <Link href="/service-2">Service 02</Link>
                        </li>
                        <li>
                          <Link href="/service-3">Service 03</Link>
                        </li>
                        <li>
                          <Link href="/service-4">Service 04</Link>
                        </li>
                        <li>
                          <Link href="/service-5">Service 05</Link>
                        </li>
                        <li>
                          <Link href="/service-details">Service Single</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="mb-lg-4 col-lg-4 col-xl-3">
                      <ul>
                        <li>
                          <Link href="/project">Project 01</Link>
                        </li>
                        <li>
                          <Link href="/project-2">Project 02</Link>
                        </li>
                        <li>
                          <Link href="/project-3">Project 03</Link>
                        </li>
                        <li>
                          <Link href="/project-details">Case Study Details</Link>
                        </li>
                        <li>
                          <Link href="/pricing">Pricing 01</Link>
                        </li>
                        <li>
                          <Link href="/pricing-2">Pricing 02</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="mb-lg-4 col-lg-4 col-xl-3">
                      <ul>
                        <li>
                          <Link href="/about">About Us</Link>
                        </li>
                        <li>
                          <Link href="/team">Team 01</Link>
                        </li>
                        <li>
                          <Link href="/team-2">Team 02</Link>
                        </li>
                        <li>
                          <Link href="/team-3">Team 03</Link>
                        </li>
                        <li>
                          <Link href="/team-details">Team Details</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li> */}

              {/* Loan Calculator Menu */}
              {/* <li className="menu-item-has-children"> */}
              {/* <li>
                <Link href="#">Loan Calculator</Link>
                 <ul className="sub-menu">
                  <li>
                    <Link href="/blog">Blog 01</Link>
                  </li>
                  <li>
                    <Link href="/blog-2">Blog 02</Link>
                  </li>
                  <li>
                    <Link href="/blog-3">Blog 03</Link>
                  </li>
                  <li>
                    <Link href="/blog-4">Blog 04</Link>
                  </li>
                  <li>
                    <Link href="/blog-details">Blog Details</Link>
                  </li>
                </ul> 
              </li> */}

              {/* About Us Link */}
              <li>
                <Link href="/about">About Us</Link>
              </li>

              {/* Contact Link */}
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          {/* <div className="nav-right-part nav-right-part-desktop align-self-center">
            <a className="navbar-phone" href={`tel:${Phone_number}`}>
              <span className="icon">
                <Image src={phone_icon} alt="img" />
              </span>
              <h5>{Phone_number}</h5>
            </a>
          </div> */}
        </div>
        <div className=" col-lg-3 nav-right-part nav-right-part-desktop align-self-center">
            {/* <a className="navbar-phone" href={`tel:${Phone_number}`}>
              <span className="icon">
                <Image src={phone_icon} alt="img" />
              </span>
              <h5>{Phone_number}</h5>
            </a> */}
          </div>
      </nav>
      {/* navbar end */}
    </>
  );
};

export default NavBar;

