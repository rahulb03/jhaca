import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/footer/FooterOne";
import NavBar from "@/components/Header/NavBar";
import PricingAreaOne from "@/components/pricing_area/PricingAreaOne";
import ServiceAreaGroupThree from "@/components/service_area/ServiceAreaGroupThree";
import { WEBSITE_NAME } from "@/Config/config";





export const metadata = {
  title: `service || ${""}`,
  description:
    "Agiletech provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};


const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      {/* <NavBar /> */}

      {/* Navigation Bar */}
      <Breadcrumb title={'Service 03'} />

      {/* ServiceAreaGroupThree */}
      <ServiceAreaGroupThree />

      {/* Pricing Area One */}
      <PricingAreaOne />

      {/* Footer One */}
      {/* <FooterOne /> */}

    </>
  );
};

export default page;
