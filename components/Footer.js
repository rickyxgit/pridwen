import Link from "next/link";
import styles from "../styles/components/Footer.module.css";

export default function Footer() {
  return (


    <div className={styles.background}>
        <div className={styles.wrapper}>

            <p className={styles.contact}>pridwen@gmail.com  | 604-111-1111</p>
            <p className={styles.info}>&copy; 2024 PRIDWEN CONSTRUCTION ALL RIGHTS RESERVED</p>
            
        </div>
      
       
    </div>
  );
}
