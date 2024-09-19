import AboutAreaOne from "@/components/About/AboutAreaOne";
import Breadcrumb from "@/components/Breadcrumb";
import ContactAreaOne from "@/components/contact_area/ContactAreaOne";
import CounterAreaOne from "@/components/contact_area/CounterAreaOne";
import FaqAreaOne from "@/components/faq/FaqAreaOne";
import FooterOne from "@/components/footer/FooterOne";
import NavBar from "@/components/Header/NavBar";
import ServiceAreaOne from "@/components/service_area/ServiceAreaOne";
import TeamAreaOne from "@/components/team_area/TeamAreaOne";
import WorkProcessOne from "@/components/work_Process/WorkProcessOne";
import  Title  from "@/Config/config";
import { WEBSITE_NAME } from "@/Config/config";


export const metadata = {
  title: `About || ${WEBSITE_NAME}`,
  description:
    "Agiletech provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};


const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      {/* <NavBar /> */}

      {/* Navigation Bar */}
      <Breadcrumb title={'About Us'} />

      {/* About Area One */}
      <AboutAreaOne />

      {/* ServiceAreaOne */}
      <ServiceAreaOne />

      {/* FAQ Area One */}
      <FaqAreaOne />

      {/* Team Area One */}
      <TeamAreaOne />

      {/* Counter Area One */}
      <CounterAreaOne />

      {/* Contact Area One */}
      <ContactAreaOne />

      {/* Work Process One */}
      <WorkProcessOne />

      {/* Footer One */}
      {/* <FooterOne /> */}

    </>
  );
};

export default page;
