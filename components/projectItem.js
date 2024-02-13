import React from "react";
import Link from "next/link";

import styles from "../styles/components/ProjectItem.module.css";

const ProjectItem = ({ image, name }) => {
  return (
    <Link href={`/projects/${name}`} className={styles.wrapper}>
      <img className={styles.projectImage} src={image} alt="Project" />
     
        <h3 className={styles.projectName}>{name}</h3>
      
    </Link>
  );
};

export default ProjectItem;
