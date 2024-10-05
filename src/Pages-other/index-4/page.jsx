import AboutAreaFour from "@/components/About/AboutAreaFour";
import BannerFour from "@/components/Banner/BannerFour";
import BlogAreaFour from "@/components/Blog_area/BlogAreaFour";
import BrandAreaOne from "@/components/BrandAreaOne";
import CareerAreaOne from "@/components/CareerAreaOne";
import ContactAreaFour from "@/components/contact_area/ContactAreaFour";
import CounterAreaFour from "@/components/contact_area/CounterAreaFour";
import FaqAreaTwo from "@/components/faq/FaqAreaTwo";
import FooterThree from "@/components/footer/FooterThree";
import NavbarThree from "@/components/Header/NavbarThree";
import ProjectAreaOne from "@/components/project/ProjectAreaOne";
import ServiceAreaFour from "@/components/service_area/ServiceAreaFour";
import TeamAreaTwo from "@/components/team_area/TeamAreaTwo";
import TestimonialThree from "@/components/testimonial/TestimonialThree";





export const metadata = {
  title: "Home || AglieTech - IT Solutions & Technology NEXT JS Template",
  description:
    "Agiletech provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};


const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      {/* <NavbarThree /> */}

      {/* Banner Four */}
      <BannerFour />

      {/* About Area Four */}
      <AboutAreaFour />

      {/* Service Area four */}
      <ServiceAreaFour />

      {/* FAQ Area Two */}
      <FaqAreaTwo />

      {/* Team Area Two */}
      <TeamAreaTwo />

      {/* Career Area One */}
      <CareerAreaOne />

      {/* Project Area One */}
      <ProjectAreaOne />


      {/* Contact Area Four */}
      <ContactAreaFour />

      {/* Testimonial Three */}
      <TestimonialThree />

      {/* Counter Area Four */}
      <CounterAreaFour />

      {/* Blog Area Four */}
      <BlogAreaFour />

      {/* Brand Area One */}
      <BrandAreaOne />

      {/* Footer Three */}
      {/* <FooterThree /> */}

    </>
  );
};

export default page;
