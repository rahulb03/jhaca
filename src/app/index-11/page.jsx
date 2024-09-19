import BannerTen from "@/components/Banner/BannerTen";
import BlogAreaENine from "@/components/Blog_area/BlogAreaENine";
import FooterNine from "@/components/footer/FooterNine";
import NavbarTwo from "@/components/Header/NavbarTwo";
import ServiceAreaNine from "@/components/service_area/ServiceAreaNine";
import TestimonialNine from "@/components/testimonial/TestimonialNine";
import WhyChooseTwo from "@/components/WhyChooseTwo";
import WorkProcessEight from "@/components/work_Process/WorkProcessEight";



export const metadata = {
  title: "Home || AglieTech - IT Solutions & Technology NEXT JS Template",
  description:
    "Agiletech provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};


const page = () => {
  return (
    <>
      {/* NavbarEight */}
      <NavbarTwo />

      {/* BannerTen */}
      <BannerTen />

      {/* WhyChooseTwo */}
      <WhyChooseTwo />

      {/* ServiceAreaNine */}
      <ServiceAreaNine />

      {/* WorkProcessEight */}
      <WorkProcessEight />

      {/* TestimonialNine */}
      <TestimonialNine />

      {/* BlogAreaENine */}
      <BlogAreaENine />

      {/* FooterNine */}
      <FooterNine />

    </>
  );
};

export default page;
