import Link from "next/link";
import styles from "../styles/components/Header.module.css";
import Image from "next/image";

import LanguageSwitch from "./Switch";




export default function Header() {
  

  return (
    <div className={styles.StyledHeader}>
      <div className={styles.center}>
        <div className={styles.Wrapper}>
          <Link  href={"/"}>
            <Image
              src="/images/main/Logo.png" // Specify the path to your image
              alt="Description of the image" // Provide alternative text
              width={300}
              height={300}
              className={styles.logo}
            />
          </Link>
          

          <div className={styles.centerNav}>
            <Link className={styles.NavLink} href={"/"}>
              Home
            </Link>
            <Link className={styles.NavLink} href={"/projects"}>
              Projects
            </Link>

            <LanguageSwitch />

            
          </div>
        </div>
      </div>
    </div>
  );
}
