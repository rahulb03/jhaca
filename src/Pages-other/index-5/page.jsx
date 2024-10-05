import AboutAreaFive from "@/components/About/AboutAreaFive";
import AboutAreaSix from "@/components/About/AboutAreaSix";
import BannerFive from "@/components/Banner/BannerFive";
import BlogAreaFive from "@/components/Blog_area/BlogAreaFive";
// import CaseStudyAreaTwo from "@/components/CaseStudyAreaTwo";
import CaseStudyAreaTwo from "@/components/case_study/CaseStudyAreaTwo";
import FooterFour from "@/components/footer/FooterFour";
import NavbarFour from "@/components/Header/NavbarFour";
import ServiceAreaFive from "@/components/service_area/ServiceAreaFive";
import TeamAreaThree from "@/components/team_area/TeamAreaThree";
import TestimonialFive from "@/components/testimonial/TestimonialFive";
import WorkProcessFour from "@/components/work_Process/WorkProcessFour";






export const metadata = {
  title: "Home || AglieTech - IT Solutions & Technology NEXT JS Template",
  description:
    "Agiletech provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};


const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      {/* <NavbarFour /> */}

      {/* Banner Five */}
      <BannerFive />

      {/* About Area Five */}
      <AboutAreaFive />

      {/* Service Area Five */}
      <ServiceAreaFive />

      {/* Case Study Area Two */}
      <CaseStudyAreaTwo />

      {/* About Area Six */}
      <AboutAreaSix />

      {/* Team Area Three */}
      <TeamAreaThree />

      {/* Work Process Four */}
      <WorkProcessFour />


      {/* Testimonial Five */}
      <TestimonialFive />

      {/* Blog Area Five */}
      <BlogAreaFive />

      {/* Footer Four */}
      {/* <FooterFour /> */}


    </>
  );
};

export default page;
