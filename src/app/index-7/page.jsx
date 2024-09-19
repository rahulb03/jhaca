import AboutAreaSeven from "@/components/About/AboutAreaSeven";
import BannerSix from "@/components/Banner/BannerSix";
import BlogAreaSix from "@/components/Blog_area/BlogAreaSix";
// import CaseStudyAreaThree from "@/components/CaseStudyAreaThree";
import CaseStudyAreaThree from "@/components/case_study/CaseStudyAreaThree";
import ContactAreaFive from "@/components/contact_area/ContactAreaFive";
import CounterAreaFive from "@/components/contact_area/CounterAreaFive";
import FooterFive from "@/components/footer/FooterFive";
import NavbarFive from "@/components/Header/NavbarFive";
import ServiceAreaSix from "@/components/service_area/ServiceAreaSix";
import TeamAreaFour from "@/components/team_area/TeamAreaFour";
import WorkProcessFive from "@/components/work_Process/WorkProcessFive";




export const metadata = {
  title: "Home || AglieTech - IT Solutions & Technology NEXT JS Template",
  description:
    "Agiletech provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};


const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      {/* <NavbarFive /> */}

      {/* Banner Six */}
      <BannerSix />

      {/* About Seven */}
      <AboutAreaSeven />

      {/* Service Area Six */}
      <ServiceAreaSix />


      {/* CaseStudy Area Three */}
      <CaseStudyAreaThree />

      {/* Counter Area Five */}
      <CounterAreaFive />


      {/* Contact Area Five */}
      <ContactAreaFive />

      {/* Work Process Five */}
      <WorkProcessFive />

      {/* Team Area Four */}
      <TeamAreaFour />

      {/* Blog Area Six */}
      <BlogAreaSix />

      {/* Footer Five */}
      {/* <FooterFive /> */}

    </>
  );
};

export default page;
