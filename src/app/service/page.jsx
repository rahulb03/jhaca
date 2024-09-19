import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/footer/FooterOne";
import NavBar from "@/components/Header/NavBar";
import PricingAreaOne from "@/components/pricing_area/PricingAreaOne";
import ServiceAreaGroup from "@/components/service_area/ServiceAreaGroup";
import { WEBSITE_NAME } from "@/Config/config";





export const metadata = {
  title: `Service || ${WEBSITE_NAME}`,
  description:
    // "Agiletech provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
    ""
  };



const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      {/* <NavBar /> */}

      {/* Navigation Bar */}
      <Breadcrumb title={'Service'} />

      {/* Service Area One */}
      <ServiceAreaGroup />

      {/* Pricing Area One */}
      <PricingAreaOne />

      {/* Footer One */}
      {/* <FooterOne /> */}

    </>
  );
};

export default page;
