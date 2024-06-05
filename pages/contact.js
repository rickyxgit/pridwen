import Footer from "@/components/Footer";
import Header from "@/components/Header";


import styles from "../styles/Contact.module.css";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div >
      <Header />
      <div className={styles.body}>
        CONTACT TEST
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
}
