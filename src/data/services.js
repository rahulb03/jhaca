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

export const contentData = {
    services: [
      {
        id: 'home-loan',
        title: 'Home Loan Services',
        description: `Get the best home loan solutions to build your dream home. Our flexible payment plans ensure you can manage your finances easily.`,
        // imageSrc: 'assets/img/service/home-loan.png',
        imageSrc: image,
  
        content: [
          `We offer competitive interest rates and flexible repayment options for home loans. Whether you're building or buying, we can assist.`,
          `Enjoy peace of mind with our expert advisors who will guide you through the entire process, ensuring you make the best decision.`
        ],
        questions: [
          { question: 'What is the interest rate?', answer: 'Our home loan interest rates start as low as 3.5% per annum.' },
          { question: 'What documents are required?', answer: 'You need proof of income, identity, and property documentation.' }
        ],
        highlights: [
          [
            { text: 'Flexible Payment Plans', icon: 'FaCheckCircle' },
            { text: 'Low Interest Rates', icon: 'FaCheckCircle' },
            { text: 'Expert Guidance', icon: 'FaCheckCircle' }
          ],
          [
            { text: 'Affordable Loan Terms', icon: 'FaCheckCircle' },
            { text: 'No Hidden Fees', icon: 'FaCheckCircle' },
            { text: 'Fast Processing', icon: 'FaCheckCircle' }
          ]
        ]
      },
      {
        id: 'education-loan',
        title: 'Education Loan Services',
        description: `Invest in your future with our education loans. We offer financial support to help you achieve academic excellence.`,
        // imageSrc: 'assets/img/service/education-loan.png',
        imageSrc:image,
  
        content: [
          `Our education loans come with low-interest rates, flexible repayment terms, and minimal documentation.`,
          `From tuition fees to living expenses, we cover all aspects of education-related financial needs.`
        ],
        questions: [
          { question: 'What is the maximum loan amount?', answer: 'You can borrow up to $50,000 for education-related expenses.' },
          { question: 'Do you offer loan extensions?', answer: 'Yes, we offer loan extensions based on academic performance.' }
        ],
        highlights: [
          [
            { text: 'Low-Interest Rates', icon: 'FaCheckCircle' },
            { text: 'Flexible Repayment Terms', icon: 'FaCheckCircle' },
            { text: 'Comprehensive Coverage', icon: 'FaCheckCircle' }
          ],
          [
            { text: 'Fast Approval', icon: 'FaCheckCircle' },
            { text: 'Easy Application Process', icon: 'FaCheckCircle' },
            { text: 'No Hidden Charges', icon: 'FaCheckCircle' }
          ]
        ]
      },
      {
        id: 'business-loan',
        title: 'Business Loan Services',
        description: `Expand your business with our tailor-made business loan solutions. Get financial backing to achieve your goals.`,
        // imageSrc: 'assets/img/service/business-loan.png',
        imageSrc:image,
        content: [
          `Our business loans are designed for small and medium-sized enterprises, offering quick approval and minimal paperwork.`,
          `Grow your business without financial constraints by leveraging our competitive interest rates and flexible terms.`
        ],
        questions: [
          { question: 'What is the approval time?', answer: 'Our business loans are approved within 48 hours for eligible applicants.' },
          { question: 'Are there any hidden fees?', answer: 'No, our business loans come with transparent terms and no hidden fees.' }
        ],
        highlights: [
          [
            { text: 'Quick Approvals', icon: 'FaCheckCircle' },
            { text: 'No Hidden Fees', icon: 'FaCheckCircle' },
            { text: 'Flexible Terms', icon: 'FaCheckCircle' }
          ],
          [
            { text: 'Low Interest Rates', icon: 'FaCheckCircle' },
            { text: 'High Loan Limits', icon: 'FaCheckCircle' },
            { text: 'Personalized Service', icon: 'FaCheckCircle' }
          ]
        ]
      },
      {
        id: 'mortgage-loan',
        title: 'Mortgage Loan Services',
        description: `Secure your property with our mortgage loans. Benefit from low-interest rates and flexible repayment schedules.`,
        // imageSrc: 'assets/img/service/mortgage-loan.png',
        imageSrc:image,
  
  
        content: [
          `Our mortgage loans offer the financial support you need to acquire or refinance your property.`,
          `Get a mortgage plan that suits your income and lifestyle with our customized repayment solutions.`
        ],
        questions: [
          { question: 'Can I refinance an existing loan?', answer: 'Yes, we offer refinancing options for existing mortgages at competitive rates.' },
          { question: 'What is the repayment period?', answer: 'Our repayment periods range from 5 to 30 years.' }
        ],
        highlights: [
          [
            { text: 'Low-Interest Mortgages', icon: 'FaCheckCircle' },
            { text: 'Flexible Repayment Plans', icon: 'FaCheckCircle' },
            { text: 'Refinancing Options', icon: 'FaCheckCircle' }
          ],
          [
            { text: 'Affordable Monthly Payments', icon: 'FaCheckCircle' },
            { text: 'No Prepayment Penalty', icon: 'FaCheckCircle' },
            { text: 'Fast Approval Process', icon: 'FaCheckCircle' }
          ]
        ]
      },
      {
        id: 'vehicle-loan',
        title: 'Vehicle Loan Services',
        description: `Drive your dream vehicle with our easy and affordable vehicle loans. Choose the right plan to suit your budget.`,
        // imageSrc: 'assets/img/service/vehicle-loan.png',
        imageSrc:image,
  
        content: [
          `We offer financing for a wide range of vehicles, from personal cars to commercial fleets, with quick approval processes.`,
          `Our vehicle loans come with flexible repayment options and minimal documentation requirements.`
        ],
        questions: [
          { question: 'What vehicles are eligible?', answer: 'We finance both new and used vehicles, as well as commercial vehicles.' },
          { question: 'What is the loan tenure?', answer: 'Our vehicle loans offer a tenure of up to 7 years.' }
        ],
        highlights: [
          [
            { text: 'New and Used Vehicles', icon: 'FaCheckCircle' },
            { text: 'Quick Approvals', icon: 'FaCheckCircle' },
            { text: 'Flexible Repayment Options', icon: 'FaCheckCircle' }
          ],
          [
            { text: 'No Hidden Fees', icon: 'FaCheckCircle' },
            { text: 'Low Interest Rates', icon: 'FaCheckCircle' },
            { text: 'High Loan Amounts', icon: 'FaCheckCircle' }
          ]
        ]
      },
      {
        id: 'personal-loan',
        title: 'Personal Loan Services',
        description: `Get financial support for your personal needs with our flexible personal loan plans. No collateral required.`,
        // imageSrc: 'assets/img/service/personal-loan.png',
        imageSrc:image,
  
        content: [
          `Whether it's for medical emergencies, travel, or home renovation, our personal loans provide fast access to funds.`,
          `Benefit from our minimal documentation process and no-collateral-required loans.`
        ],
        questions: [
          { question: 'What is the maximum loan amount?', answer: 'You can borrow up to $30,000 with no collateral required.' },
          { question: 'What is the interest rate?', answer: 'Our personal loans start at an interest rate of 5% per annum.' }
        ],
        highlights: [
          [
            { text: 'No Collateral Required', icon: 'FaCheckCircle' },
            { text: 'Fast Processing', icon: 'FaCheckCircle' },
            { text: 'Low Interest Rates', icon: 'FaCheckCircle' }
          ],
          [
            { text: 'Flexible Repayment Terms', icon: 'FaCheckCircle' },
            { text: 'High Loan Limits', icon: 'FaCheckCircle' },
            { text: 'Easy Application', icon: 'FaCheckCircle' }
          ]
        ]
      }
    ]
  };
  





  
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
    imageSrc: 'assets/img/about/9.png',
    buttonText: 'Discover our company +',
    buttonLink: '#'
  },
  downloads: [
    { name: 'Company Profile', link: '#', icon: 'FaAngleDoubleRight' },
    { name: 'Zip File Download', link: '#', icon: 'FaAngleDoubleRight' }
  ]
};
