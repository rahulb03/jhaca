import BannerEight from "@/components/Banner/BannerEight";
import BlogAreaEight from "@/components/Blog_area/BlogAreaEight";
import ContactAreaSix from "@/components/contact_area/ContactAreaSix";
import FooterSeven from "@/components/footer/FooterSeven";
import NavbarSeven from "@/components/Header/NavbarSeven";
import ProjectAreaThree from "@/components/project/ProjectAreaThree";
import ServiceAreaSeven from "@/components/service_area/ServiceAreaSeven";
import SolutionOne from "@/components/SolutionOne";
import TeamAreaFive from "@/components/team_area/TeamAreaFive";
import TestimonialSeven from "@/components/testimonial/TestimonialSeven";
import WhyChoose from "@/components/WhyChoose";
import WorkProcessSeven from "@/components/work_Process/WorkProcessSeven";





export const metadata = {
  title: "Home || AglieTech - IT Solutions & Technology NEXT JS Template",
  description:
    "Agiletech provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};


const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      {/* <NavbarSeven /> */}

      {/* Banner Eight */}
      <BannerEight />

      {/* Service Area Seven */}
      <ServiceAreaSeven />

      {/* Why Choose */}
      <WhyChoose />

      {/* Project Area Three */}
      <ProjectAreaThree />

      {/* Work Process Seven */}
      <WorkProcessSeven />

      {/* SolutionOne */}
      <SolutionOne />

      {/* TeamAreaFive */}
      <TeamAreaFive />

      {/* ContactAreaSix */}
      <ContactAreaSix />

      {/* TestimonialSeven */}
      <TestimonialSeven />


      {/* BlogAreaEight */}
      <BlogAreaEight />

      {/* FooterSeven */}
      {/* <FooterSeven /> */}

    </>
  );
};

export default page;
