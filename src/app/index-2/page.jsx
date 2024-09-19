import AboutAreaTwo from "@/components/About/AboutAreaTwo";
import BannerTwo from "@/components/Banner/BannerTwo";
import BlogAreaTwo from "@/components/Blog_area/BlogAreaTwo";
import ContactAreaTwo from "@/components/contact_area/ContactAreaTwo";
import CounterAreaTwo from "@/components/contact_area/CounterAreaTwo";
import FooterTwo from "@/components/footer/FooterTwo";
import NavbarTwo from "@/components/Header/NavbarTwo";
import PricingAreaTwo from "@/components/pricing_area/PricingAreaTwo";
import ServiceAreaTwo from "@/components/service_area/ServiceAreaTwo";
import TestimonialOne from "@/components/testimonial/TestimonialOne";
import WorkProcessTwo from "@/components/work_Process/WorkProcessTwo";



export const metadata = {
  title: "Home || AglieTech - IT Solutions & Technology NEXT JS Template",
  description:
    "Agiletech provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};


const page = () => {
  return (
    <>
      {/* Navigation Bar Two*/}
      {/* <NavbarTwo /> */}

      {/* Banner Two */}
      <BannerTwo />

      {/* About Area Two */}
      <AboutAreaTwo />

      {/* About Area Two */}
      <ServiceAreaTwo />

      {/* Pricing Area Two */}
      <PricingAreaTwo />

      {/* Counter Area Two */}
      <CounterAreaTwo />

      {/* Contact Area Two */}
      <ContactAreaTwo />

      {/* Work Process Two */}
      <WorkProcessTwo />

      {/* Testimonial One */}
      <TestimonialOne />

      {/* Blog Area Two */}
      <BlogAreaTwo />

      {/* Footer Two */}
      {/* <FooterTwo /> */}


    </>
  );
};

export default page;
