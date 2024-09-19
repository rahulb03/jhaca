import AboutAreaThree from "@/components/About/AboutAreaThree";
import BannerThree from "@/components/Banner/BannerThree";
import BlogAreaThree from "@/components/Blog_area/BlogAreaThree";
import ContactAreaThree from "@/components/contact_area/ContactAreaThree";
import CounterAreaThree from "@/components/contact_area/CounterAreaThree";
import FooterTwo from "@/components/footer/FooterTwo";
import NavBar from "@/components/Header/NavBar";
import PricingAreaThree from "@/components/pricing_area/PricingAreaThree";
import ServiceAreaThree from "@/components/service_area/ServiceAreaThree";
import TestimonialTwo from "@/components/testimonial/TestimonialTwo";
import WorkProcessThree from "@/components/work_Process/WorkProcessThree";




export const metadata = {
  title: "JHA CONSULTANCY",
  description:
" consultancy services"
    ,
};


const page = () => {
  return (
    <>

      {/* Navigation Bar*/}
      <NavBar />

      {/* Banner Three*/}
      <BannerThree />

      {/* Service Area Three */}
      <ServiceAreaThree />

      {/* About Area Three */}
      <AboutAreaThree />

      {/* Pricing Area Three */}
      <PricingAreaThree />

      {/* Contact Area Three */}
      <ContactAreaThree />

      {/* Testimonial Two */}
      <TestimonialTwo />

      {/* WorkProcess Three */}
      <WorkProcessThree />

      {/* Counter Area Three */}
      <CounterAreaThree />

      {/* Blog Area Three */}
      <BlogAreaThree />

      {/* Footer Two */}
      <FooterTwo />

    </>
  );
};

export default page;
