import Footer from "@/components/Footer";
import Header from "@/components/Header";

import imageLeft from "../public/images/3276 w 22nd ave Vancouver/image1.jpg";
import styles from "../styles/Contact.module.css";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div>
      <Header />

      <div className={styles.body}>
        <div className={styles.formWrapper}>
          <ContactForm />
        </div>
      </div>

      <Footer />
    </div>
  );
}
