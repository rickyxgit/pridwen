import Footer from "@/components/Footer";
import Header from "@/components/Header";

import styled from "styled-components";
import projects from "@/public/projects";
import ProjectItem from "@/components/projectItem";

import styles from "../styles/Project.module.css";

const Body = styled.div`
  min-height: 100vh;
`;

export default function Projects() {
  return (
    <div >
      <Header />
      <div className={styles.body}>
     
        <div className={styles.Wrapper}>
          <h2 className={styles.projectHeader}>Projects</h2>

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
