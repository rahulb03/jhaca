import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/footer/FooterOne";
import NavBar from "@/components/Header/NavBar";
import PricingAreaTwo from "@/components/pricing_area/PricingAreaTwo";
import ServiceAreaGroupFour from "@/components/service_area/ServiceAreaGroupFour";
import { WEBSITE_NAME } from "@/Config/config";





export const metadata = {
  title: `service || ${WEBSITE_NAME}`,
  description:
    "Agiletech provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};


const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      {/* <NavBar /> */}

      {/* Navigation Bar */}
      <Breadcrumb title={'Service 04'} />

      {/* ServiceAreaGroupFour */}
      <ServiceAreaGroupFour />

      {/* PricingAreaTwo */}
      <PricingAreaTwo />

      {/* Footer One */}
      {/* <FooterOne /> */}

    </>
  );
};

export default page;
