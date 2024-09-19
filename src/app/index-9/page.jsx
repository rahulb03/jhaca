import AboutAreaNine from "@/components/About/AboutAreaNine";
import BannerNine from "@/components/Banner/BannerNine";
import BlogAreaNine from "@/components/Blog_area/BlogAreaNine";
import CounterAreaSix from "@/components/contact_area/CounterAreaSix";
import FooterEight from "@/components/footer/FooterEight";
import GalleryOne from "@/components/GalleryOne";
import NavbarEight from "@/components/Header/NavbarEight";
import ProgressOne from "@/components/ProgressOne";
import RoadmapOne from "@/components/RoadmapOne";
import ServiceAreaEight from "@/components/service_area/ServiceAreaEight";
import TeamAreaSix from "@/components/team_area/TeamAreaSix";
import TestimonialEight from "@/components/testimonial/TestimonialEight";


export const metadata = {
  title: "Home || AglieTech - IT Solutions & Technology NEXT JS Template",
  description:
    "Agiletech provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};


const page = () => {
  return (
    <>
      {/* NavbarEight */}
      <NavbarEight />

      {/* BannerNine */}
      <BannerNine />

      {/* AboutAreaNine */}
      <AboutAreaNine />

      {/* ServiceAreaEight */}
      <ServiceAreaEight />

      {/* RoadmapOne */}
      <RoadmapOne />

      {/* ContactAreaSeven */}
      <CounterAreaSix />

      {/* TestimonialEight */}
      <TestimonialEight />

      {/* GalleryOne */}
      <GalleryOne />

      {/* ProgressOne */}
      <ProgressOne />

      {/* TeamAreaSix */}
      <TeamAreaSix />

      {/* BlogAreaNine */}
      <BlogAreaNine />

      {/* FooterEight */}
      <FooterEight />

    </>
  );
};

export default page;
