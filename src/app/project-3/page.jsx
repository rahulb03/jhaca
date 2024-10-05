import Breadcrumb from "@/components/Breadcrumb";
import CaseStudyAreaGroupOne from "@/components/case_study/CaseStudyAreaGroupOne";
import ContactAreaOne from "@/components/contact_area/ContactAreaOne";
import CounterAreaOne from "@/components/contact_area/CounterAreaOne";
import FooterOne from "@/components/footer/FooterOne";
import NavBar from "@/components/Header/NavBar";
import TeamAreaOne from "@/components/team_area/TeamAreaOne";



export const metadata = {
  title: "Project || AglieTech - IT Solutions & Technology NEXT JS Template",
  description:
    "Agiletech provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};


const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      {/* <NavBar /> */}

      {/* Breadcrumb */}
      <Breadcrumb title={'Project 03'} />

      {/* CaseStudyAreaGroupOne */}
      <CaseStudyAreaGroupOne />

      {/* TeamAreaOne */}
      <TeamAreaOne />

      {/* Counter Area One */}
      <CounterAreaOne />

      {/* Contact Area One */}
      <div className="pd-bottom-120">
        <ContactAreaOne />
      </div>

      {/* Footer One */}
      <FooterOne />

    </>
  );
};

export default page;
