import Breadcrumb from "@/components/Breadcrumb";
import ContactMain from "@/components/contact_area/ContactMain";
import FooterOne from "@/components/footer/FooterOne";
import NavBar from "@/components/Header/NavBar";
import { WEBSITE_NAME } from "@/Config/config";




export const metadata = {
  title: `Contact || ${WEBSITE_NAME}`,
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
      <Breadcrumb title={"Contact"} />

      {/* Contact Main */}
      <ContactMain />

      {/* Footer One */}
      {/* <FooterOne /> */}

    </>
  );
};

export default page;
