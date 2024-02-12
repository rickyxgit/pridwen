import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";
import styles from './Header.module.css';
/** 
const StyledHeader = styled.header`
  background-color: #222;
  padding: 0;
`;

const Logo = styled(Link)`
  color: var(--primary-color);
  text-decoration: none;
  position: relative;
  z-index: 3;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const StyledNav = styled.nav`
  ${(props) => (props.mobileNavActive ? `display: block;` : `display: none;`)}

  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: #222;

  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;

const NavLink = styled(Link)`
  display: block;
  color: var(--primary-color);
  text-decoration: none;
  padding: 10px 0;

  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

*/
export default function Header() {
  return (
    <div className= {styles.StyledHeader}>
      <Center>
        <div className={styles.Wrapper}>
          <div className={styles.Logo} href={"/"}> Pridwen </div>
          <div className={styles.StyledNav}>
            <Link className={styles.NavLink} href={"/"}>Home</Link>
            <Link className={styles.NavLink} href={"/projects"}>Projects</Link>
           
          </div>
        </div>
      </Center>
    </div>
  );
}
