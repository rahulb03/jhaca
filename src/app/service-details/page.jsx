import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/footer/FooterOne";
import NavBar from "@/components/Header/NavBar";
import ServiceDetailsArea from "@/components/service_area/ServiceDetailsArea";
import { WEBSITE_NAME } from "@/Config/config";




export const metadata = {
  title: `Service  || ${WEBSITE_NAME} `,
  description:
    // "Agiletech provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
    " "
};


const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      {/* <NavBar /> */}

      {/* Navigation Bar */}
      {/* <Breadcrumb title={"Service Details"} /> */}

      {/* Service Details Area */}
      <ServiceDetailsArea />

      {/* Footer One */}
      {/* <FooterOne /> */}

    </>
  );
};

export default page;
