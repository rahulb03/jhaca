import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
import { FaCheckCircle, FaPlus } from "react-icons/fa";
import { aboutData } from "@/data/about";

const AboutAreaThree = () => {
  const leftListItems = aboutData.listItems.slice(0, 2);
  const rightListItems = aboutData.listItems.slice(2, 4);

  return (
    <div className='about-area bg-gradient-gray pd-top-120 pd-bottom-100'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6' data-aos='fade-right' data-aos-delay='100' data-aos-duration='1500'>
            <div className='about-thumb-inner mb-4 mb-lg-0'>
              <img className='main-img' src={aboutData.imageSrc} alt='img' />
            </div>
          </div>
          <div className='col-lg-6 wow animated fadeInRight' data-aos='fade-left' data-aos-delay='100' data-aos-duration='1500'>
            <div className='section-title mb-0'>
              <h6 className='sub-title'>{aboutData.subtitle}</h6>
              <h2 className='title'>
                {aboutData.title.split(' ')[0]} <span>{aboutData.title.split(' ')[1]}</span> {aboutData.title.split(' ')[2]} {aboutData.title.split(' ')[3]}
              </h2>
              <p className='content mb-4'>{aboutData.content.description}</p>
              <div className='row'>
                <div className='col-md-6'>
                  <ul className='single-list-inner style-check style-heading style-check mb-3'>
                    {leftListItems.map((item, index) => (
                      <li key={index}>
                        <FaCheckCircle /> {item.title}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='col-md-6'>
                  <ul className='single-list-inner style-check style-heading style-check mb-3'>
                    {rightListItems.map((item, index) => (
                      <li key={index}>
                        <FaCheckCircle /> {item.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className='content'>{aboutData.content.additionalInfo}</p>
              <Link className='btn btn-border-base' href={aboutData.button.link}>
                {aboutData.button.text} <FaPlus />
              </Link>
            </div>
          </div>
        </div>
        <div className='bg-base client-border-radius p-xl-5 p-3 mt-5'>
          <div className='client-slider'>
            <Marquee gradient={false}>
              {aboutData.clients.map((client, index) => (
                <div className='thumb' key={index}>
                  <img src={client.imgSrc} alt={client.alt} />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAreaThree;
