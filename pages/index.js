import Header from "@/components/Header";
import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/Index.module.css";
import ProjectItem from "@/components/projectItem";
import Footer from "@/components/Footer";
import Image from "next/image";
import projects from "@/public/projects";



import chinese from "/locales/cn.json";
import english from "/locales/en.json";
import { useLanguage } from "@/components/LanguageContext";

export default function Home() {
  const { language } = useLanguage();

  const [translations, setTranslations] = useState(english);

  const [message, setMessage] = useState("");
  // Fetch message based on the selected language
  useEffect(() => {
    if (language === "EN") {
      setTranslations(english);
    } else if (language === "CN") {
      setTranslations(chinese);
    }
  }, [language]);

  return (
    <div>
      <Header />

      <div className={styles.body}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/7660 malahat ave/image14.jpg" // Specify the path to your image
            alt="Description of the image" // Provide alternative text
            width={500}
            height={450}
            className={styles.infoImage}
          />

          <Image
            src="/images/7660 malahat ave/image9.jpg" // Specify the path to your image
            alt="Description of the image" // Provide alternative text
            width={500}
            height={450}
            className={styles.infoImage2}
          />
        </div>

        <h2 className={styles.titleCenter}> A Bit About Us </h2>
        <p className={styles.textCenter}>{translations.aboutUs.text}</p>

        <div className={styles.parentContainer}>
          <div className={styles.container}>
            <div className={styles.imageWrapper}></div>
          </div>

          <div className={styles.container2}>
            <div className={styles.imageWrapper2}></div>
          </div>

          <div className={styles.container3}>
            <div className={styles.imageWrapper3}></div>
          </div>
        </div>

        <div className={styles.wrapperTC}>
          <div>
            <div className={styles.center}>
              <Image
                src="/images/award.png" // Specify the path to your image
                alt="award image" // Provide alternative text
                width={50}
                height={50}
                className={styles.iconTC}
              />
            </div>
            <h2 className={styles.titleTC}>FINEST QUALITY</h2>
            <p className={styles.smallerTextCenter}>
              {translations.TC.quality}
            </p>
          </div>

          <div>
            <div className={styles.center}>
              <Image
                src="/images/worker.png" // Specify the path to your image
                alt="worker image" // Provide alternative text
                width={50}
                height={50}
                className={styles.iconTC}
              />
            </div>
            <h2 className={styles.titleTC}>TOP SERVICE</h2>
            <p className={styles.smallerTextCenter}>
              {translations.TC.service}
            </p>
          </div>

          <div>
            <div className={styles.center}>
              <Image
                src="/images/money.png" // Specify the path to your image
                alt="money image" // Provide alternative text
                width={50}
                height={50}
                className={styles.iconTC}
              />
            </div>
            <h2 className={styles.titleTC}>EXCEPTIONAL PRICE</h2>
            <p className={styles.smallerTextCenter}>{translations.TC.price}</p>
          </div>
        </div>

        <div className={styles.recentProjectWrapper}>
          <h2 className={styles.projectHeader}> Recent Projects</h2>

          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <ProjectItem
                key={project.name}
                image={`/images/${project.id}/image1.jpg`}
                name={project.name}
                id={project.id}
              />
            ))}
          </div>
        </div>
      </div>
          
      <Footer />
    </div>
  );
}
