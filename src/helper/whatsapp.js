// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faWhatsapp } from "@fortawesome;
import { FaWhatsapp } from "react-icons/fa";
import styles from './whatsapp.module.css';

export default function WhatsAppSticky() {
  return (
    <a
      href="https://wa.me/your-number-here" // Add your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappButton}
    >
      {/* <FontAwesomeIcon icon={faWhatsapp} size="2x" /> */}
        <FaWhatsapp />
    </a>
  );
}
