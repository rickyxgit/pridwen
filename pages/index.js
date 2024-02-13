import Header from "@/components/Header";
import React from "react";
import styles from "../styles/Index.module.css";

import ProjectItem from "@/components/projectItem";
import Footer from "@/components/Footer";

const projects = [
  {
    image: "/images/test1.jpg",
    name: "Villa Aurora",
  },
  {
    image: "/images/test2.jpg",
    name: "Majestic-Manor",
  },
  {
    image: "/images/test3.jpg",
    name: "Elysian-Estate",
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
          <h2 className={styles.slogan}>Crafting Spaces, Building Memories</h2>

          <h2 className={styles.slogan2}>Where Vision Meets Reality</h2>
        </div>
      </div>
      <div>
        <h2 className={styles.projectHeader}> Explore our Projects</h2>

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
