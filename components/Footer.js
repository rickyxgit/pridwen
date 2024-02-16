import Link from "next/link";
import styles from "../styles/components/Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <div>
          <p className={styles.contact}>David Xian | 604-778-1812</p>
          <p className={styles.contact}>pridwen85@gmail.com</p>
          <p className={styles.info}>
            &copy; 2024 PRIDWEN CONSTRUCTION ALL RIGHTS RESERVED
          </p>
        </div>


      <div>
        <Image
          src="/images/main/pacific.png"
          alt="Description of the image"
          width={50}
          height={50}
          className={styles.iconTC}
        />

        <Image
          src="/images/main/warranty.png"
          alt="Description of the image"
          width={50}
          height={50}
          className={styles.iconTC}
        />

        <Image
          src="/images/main/homeowner.png"
          alt="Description of the image"
          width={130}
          height={50}
          className={styles.iconTC}
        />

        </div>
      </div>

      <div></div>
    </div>
  );
}
