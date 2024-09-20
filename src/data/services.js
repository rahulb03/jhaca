//home page services

import image from '../../public/assets/img/service/7.png'

export const services = [
  {
    title: "Personal Loan",
    description: "You can access SaaS applications through a web browser or mobile app, as long as you have",
    imgSrc: "assets/img/service-icon/1.png",
    slug: "personal-loan"  // New slug for dynamic route
  },
  {
    title: "Business Loan",
    description: "SaaS can benefit your business by reducing costs associated with software installation and",
    imgSrc: "assets/img/service-icon/2.png",
    slug: "business-loan"
  },
  {
    title: "Home Loan",
    description: "Lorem is Ipsum is simply is design iomyi is text Lorem Ipsum is simply is our busi Lorem is Ipsum is",
    imgSrc: "assets/img/service-icon/3.png",
    slug: "home-loan"
  },
  {
    title: "Education Loan",
    description: "Finance your education with flexible repayment options and competitive interest rates.",
    imgSrc: "assets/img/service-icon/1.png",
    slug: "education-loan"
  },
  {
    title: "Mortgage Loan",
    description: "Secure a mortgage loan with favorable terms to buy your dream home.",
    imgSrc: "assets/img/service-icon/1.png",
    slug: "mortgage-loan"
  },
  {
    title: "Vehicle Loan",
    description: "Get on the road with a vehicle loan tailored to your needs and budget.",
    imgSrc: "assets/img/service-icon/1.png",
    slug: "vehicle-loan"
  }
];


//service-details pages link


import company_image from '../../public/assets/img/about/9.png'

  
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
