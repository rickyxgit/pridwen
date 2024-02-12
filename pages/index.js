import Header from "@/components/Header";
import React from "react";
import Image from 'next/image';
import styles from "../styles/Index.module.css";
import Slider from "@/components/Slider";


const images = [
  '/test4.jpg',
  '/images/test3.jpg'
  
];
export default function Home() {
  return (
    <div>
      <Header />

      <div className={styles.bigImage}>
        <div className={styles.overlay}></div>
        <div className={styles.wrapper}>
          <h2 className={styles.slogan}>
            Crafting Spaces, Building Memories 
          </h2>

          <h2 className={styles.slogan2}>
            Where Vision Meets Reality
          </h2>


        </div>
        <Slider images={images} />
      </div>
    </div>
  );
}
