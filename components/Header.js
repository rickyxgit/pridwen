import Link from "next/link";
import styles from './Header.module.css';

export default function Header() {
  return (


    <div className= {styles.StyledHeader}>
     <div className={styles.center}>
        <div className={styles.Wrapper}>
          <div className={styles.Logo} href={"/"}> Pridwen </div>
          <div className={styles.StyledNav}>
            <Link className={styles.NavLink} href={"/"}>Home</Link>
            <Link className={styles.NavLink} href={"/projects"}>Projects</Link>
           
          </div>
        </div>
        </div>

    </div>
  );
}
