import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/footer/FooterOne";
import NavBar from "@/components/Header/NavBar";
import PricingAreaOne from "@/components/pricing_area/PricingAreaOne";
import ServiceAreaGroupTwo from "@/components/service_area/ServiceAreaGroupTwo";





export const metadata = {
  title: "Service || AglieTech - IT Solutions & Technology NEXT JS Template",
  description:
    "Agiletech provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};


const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={'Service 02'} />

      {/* Service Area One */}
      <ServiceAreaGroupTwo />

      {/* Pricing Area One */}
      <PricingAreaOne />

      {/* Footer One */}
      <FooterOne />

    </>
  );
};

export default page;
