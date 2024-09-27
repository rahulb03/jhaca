//home page services

import home from '../../public/assets/img/service/home.png'
import business from '../../public/assets/img/service/signing.png'
import personal from '../../public/assets/img/service/personal.png'
import mortage from '../../public/assets/img/service/loan.png'
import education from '../../public/assets/img/service/mortarboard.png'
import vehicle from '../../public/assets/img/service/new-car.png'

export const services = [
  {
    title: "Personal Loan",
    description: "Access funds for personal expenses like medical bills, vacations, or debt consolidation.",
    // imgSrc: "assets/img/service-icon/1.png",
    imgSrc: personal,
    slug: "personal-loan"
  },
  {
    title: "Business Loan",
    description: "Obtain financing to start or grow your business, covering expenses like inventory and equipment.",
    // imgSrc: "assets/img/service-icon/2.png",
    imgSrc: business,
    slug: "business-loan"
  },
  {
    title: "Home Loan",
    description: "Finance the purchase of your new home with competitive interest rates ,  flexible terms and policies .",
    // imgSrc: "assets/img/service-icon/3.png",
    imgSrc: home,
    slug: "home-loan"
  },
  {
    title: "Education Loan",
    description: "Fund your education with low-interest loans designed for students with flexible repayment options.",
    // imgSrc: "assets/img/service-icon/1.png",
    imgSrc: education,
    slug: "education-loan"
  },
  {
    title: "Mortgage Loan",
    description: "Get a mortgage to purchase your dream home with favorable terms and long repayment periods.",
    // imgSrc: "assets/img/service-icon/1.png",
    imgSrc: mortage,
    
    slug: "mortgage-loan"
  },
  {
    title: "Vehicle Loan",
    description: "Finance your new or used vehicle with tailored loan options to fit your budget and needs.",
    // imgSrc: "assets/img/service-icon/1.png",
    imgSrc: vehicle,
    slug: "vehicle-loan"
  }
];


//service-details pages link


import company_image from '../../public/assets/img/about/9.png'
import { images } from '../../next.config'

  
export const servicesData = {
  servicesList: [
    { name: 'Home Loan', link: '/service-details/home-loan', id: 'home' },
    { name: 'Education Loan', link: '/service-details/education-loan', id: 'education' },
    { name: 'Business Loan', link: '/service-details/business-loan', id: 'business' },
    { name: 'Mortgage Loan', link: '/service-details/mortgage-loan', id: 'mortgage' },
    { name: 'Vehicle Loan', link: '/service-details/vehicle-loan', id: 'vehicle' },
    { name: 'Personal Loan', link: '/service-details/personal-loan', id: 'personal' }
  ],
  companyDetails: {
    imageSrc: company_image,
    buttonText: 'Discover our company +',
    buttonLink: '#'
  },
  downloads: [
    { name: 'Company Profile', link: '#', icon: 'FaAngleDoubleRight' },
    { name: 'Zip File Download', link: '#', icon: 'FaAngleDoubleRight' }
  ]
};
