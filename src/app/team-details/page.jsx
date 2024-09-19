import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/footer/FooterOne";
import NavBar from "@/components/Header/NavBar";
import TeamDetailsGroup from "@/components/team_area/TeamDetailsGroup";



export const metadata = {
  title: "Team Details || AglieTech - IT Solutions & Technology NEXT JS Template",
  description:
    "Agiletech provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};


const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      {/* <NavBar /> */}

      {/* Breadcrumb */}
      <Breadcrumb title={"Team Details"} />

      {/* Team Details Group */}
      <TeamDetailsGroup />

      {/* Footer One */}
      {/* <FooterOne /> */}

    </>
  );
};

export default page;
