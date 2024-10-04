import BootstrapInit from "@/helper/BootstrapInit";
import "react-modal-video/scss/modal-video.scss";
import "./font.css";
import "./globals.scss";
import '../../public/styles/global.css';
import NavBar from "@/components/Header/NavBar";
import FooterTwo from "@/components/footer/FooterTwo";
import { WEBSITE_NAME } from "@/Config/config";
import WhatsAppIcon from "@/helper/whatsapp";

export const metadata = {
  title: `service || ${WEBSITE_NAME}`,
  description:
""
  // "Agiletech provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <BootstrapInit /> */}
      <body suppressHydrationWarning={true}>
      
      <NavBar />
      
      <main>
      {children}
      </main>

      <FooterTwo />
      <WhatsAppIcon />
      
      </body>

    </html>
  );
}
