import Header from "@/components/Header";
import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/Index.module.css";
import ProjectItem from "@/components/projectItem";
import Footer from "@/components/Footer";
import Image from "next/image";
import projects from "@/public/projects";


import chinese from "/locales/cn.json";
import english from "/locales/en.json";
import {  useLanguage} from "@/components/LanguageContext";

export default function Home() {

  const {language} = useLanguage();

  const [translations, setTranslations] = useState(english);


  console.log("CURRENT LANGUAGE IS ", language);

  
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

      <div className={styles.bigImage}>
        <div className={styles.overlay}></div>
        <div className={styles.wrapper}>
          <div>
            <div>{message}</div>
          
            
            <h2 className={styles.slogan}>To Build A Piece Of Art</h2>

            <div className={styles.buttonCenter}>
              <button className={styles.buildButton}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -2 24 24"
                  fill="currentColor"
                  className={styles.houseIcon}
                >
                  <path d="M19.006 3.705a.75.75 0 1 0-.512-1.41L6 6.838V3a.75.75 0 0 0-.75-.75h-1.5A.75.75 0 0 0 3 3v4.93l-1.006.365a.75.75 0 0 0 .512 1.41l16.5-6Z" />
                  <path
                    fillRule="evenodd"
                    d="M3.019 11.114 18 5.667v3.421l4.006 1.457a.75.75 0 1 1-.512 1.41l-.494-.18v8.475h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3v-9.129l.019-.007ZM18 20.25v-9.566l1.5.546v9.02H18Zm-9-6a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75H9Z"
                    clipRule="evenodd"
                  />
                </svg>
                Let start building
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.aboutUs}>
        <div className={styles.aboutLeft}>
          <h2 className={styles.aboutLeftTitle}> A Bit About Us </h2>
          <p className={styles.aboutUsText}>
            {translations.aboutUs.text}
          </p>
        </div>

        <div className={styles.center}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/temp1.jpeg" // Specify the path to your image
              alt="Description of the image" // Provide alternative text
              width={300}
              height={300}
              className={styles.InfoImage}
            />
          </div>
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
          <p>
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
          <p>
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
          <h2 className={styles.titleTC}>MODEST PRICE</h2>
          <p>
          {translations.TC.price}
          </p>
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

      <Footer />
    </div>
  );
}
