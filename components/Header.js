import Link from "next/link";
import styles from "../styles/components/Header.module.css";
import Image from "next/image";

import LanguageSwitch from "./Switch";
import english from "/locales/en.json";
import chinese from "/locales/cn.json";
import { useLanguage } from "./LanguageContext";
import { useEffect, useState } from "react";

export default function Header() {
  const { language } = useLanguage();

  const [translations, setTranslations] = useState(english);

  useEffect(() => {
    if (language === "EN") {
      setTranslations(english);
    } else if (language === "CN") {
      setTranslations(chinese);
    }
  }, [language]);

  return (
    <div className={styles.StyledHeader}>
      <div className={styles.center}>
        <div className={styles.Wrapper}>
          <Link href={"/"}>
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
              {translations.header.home}
            </Link>
         
            <Link className={styles.NavLink} href={"/projects"}>
            {translations.header.projects}
            </Link>

            <LanguageSwitch />
          </div>
        </div>
      </div>
    </div>
  );
}
