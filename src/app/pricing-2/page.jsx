import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/footer/FooterOne";
import NavBar from "@/components/Header/NavBar";
import PriceAreaThree from "@/components/pricing_area/PriceAreaThree";



export const metadata = {
  title: "Price || AglieTech - IT Solutions & Technology NEXT JS Template",
  description:
    "Agiletech provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};


const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      {/* <NavBar /> */}

      {/* Breadcrumb */}
      <Breadcrumb title={'Price 02'} />

      {/* PriceAreaThree */}
      <PriceAreaThree />

      {/* Footer One */}
      {/* <FooterOne /> */}

    </>
  );
};

export default page;
