import AboutAreaEight from "@/components/About/AboutAreaEight";
import BannerSeven from "@/components/Banner/BannerSeven";
import BlogAreaSeven from "@/components/Blog_area/BlogAreaSeven";
import CategoryBrowserOne from "@/components/CategoryBrowserOne";
import CollectiblesOne from "@/components/CollectiblesOne";
import CreatorOne from "@/components/CreatorOne";
import FaqAreaThree from "@/components/faq/FaqAreaThree";
import FooterSix from "@/components/footer/FooterSix";
import NavbarSix from "@/components/Header/NavbarSix";
import ProjectAreaTwo from "@/components/project/ProjectAreaTwo";
import SellerOne from "@/components/SellerOne";
import TestimonialSix from "@/components/testimonial/TestimonialSix";
import WorkProcessSix from "@/components/work_Process/WorkProcessSix";



export const metadata = {
  title: "Home || AglieTech - IT Solutions & Technology NEXT JS Template",
  description:
    "Agiletech provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};


const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      {/* <NavbarSix /> */}

      {/* Banner Seven */}
      <BannerSeven />

      {/* About Area Eight */}
      <AboutAreaEight />

      {/* Category Browser One */}
      <CategoryBrowserOne />

      {/* Collectibles One */}
      <CollectiblesOne />

      {/* Project Area Two */}
      <ProjectAreaTwo />

      {/* Seller One */}
      <SellerOne />

      {/* Faq Area Three */}
      <FaqAreaThree />

      {/* Work Process Six */}
      <WorkProcessSix />

      {/* Testimonial Six */}
      <TestimonialSix />

      {/* Creator One */}
      <CreatorOne />

      {/* Blog Area Seven */}
      <BlogAreaSeven />

      {/* Footer Six */}
      {/* <FooterSix /> */}

    </>
  );
};

export default page;
