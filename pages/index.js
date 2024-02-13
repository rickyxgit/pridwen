import Header from "@/components/Header";
import React from "react";
import styles from "../styles/Index.module.css";

import ProjectItem from "@/components/projectItem";
import Footer from "@/components/Footer";
import Image from 'next/image';
const projects = [
  {
    image: "/images/test1.jpg",
    name: "Villa Aurora 5231 Burnaby, 2023",
  },
  {
    image: "/images/test2.jpg",
    name: "Majestic Manor 2198 Surrey, 2023",
  },
  {
    image: "/images/test3.jpg",
    name: "Elysian Estate 1882 Vancouver, 2024",
  },
  // Add more projects as needed
];

export default function Home() {
  return (
    <div>
      <Header />

      <div className={styles.bigImage}>
        <div className={styles.overlay}></div>
        <div className={styles.wrapper}>
          <div>
            <h2 className={styles.slogan}>
              Crafting Spaces, Building Memories
            </h2>

            <h2 className={styles.slogan2}>Where Vision Meets Reality</h2>
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
            Welcome to Pridwen Construction, your premier choice for residential
            construction services in Vancouver, British Columbia, Canada. At
            Pridwen Construction, we specialize in crafting exquisite homes that
            reflect our clients' vision and lifestyle. With a dedication to
            superior craftsmanship and attention to detail, our experienced team
            ensures that every project is completed to the highest standards of
            quality and excellence. Whether you're seeking a custom-built home,
            a renovation, or an addition, Pridwen Construction is committed to
            exceeding your expectations and bringing your dream home to life.
            Choose Pridwen Construction for your residential construction needs
            and experience the difference of working with a trusted partner
            dedicated to your satisfaction.
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
      <div>
        <h2 className={styles.projectHeader}> Recent Projects</h2>

        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <ProjectItem
              key={project.name}
              image={project.image}
              name={project.name}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
