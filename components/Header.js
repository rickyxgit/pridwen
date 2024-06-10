import Link from "next/link";
import styles from "../styles/components/Header.module.css";
import Image from "next/image";

import { useState, useEffect, useRef } from "react";

import LanguageSwitch from "./Switch";
import english from "/locales/en.json";
import chinese from "/locales/cn.json";
import { useLanguage } from "./LanguageContext";


import ReorderIcon from "@mui/icons-material/Reorder";


import Select from "react-select";

export default function Header() {
   /** for setting languages */
  const { language } = useLanguage();
  const [translations, setTranslations] = useState(english);

  useEffect(() => {
    if (language === "EN") {
      setTranslations(english);
    } else if (language === "CN") {
      setTranslations(chinese);
    }
  }, [language]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  /** drop down menu */
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);








  const options = [
    { value: "/", label: translations.header.home },
    { value: "/projects", label: translations.header.projects },
    { value: "/contact", label: translations.header.contact },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: 200,
      backgroundColor: "black", // Set the background color of the control to black
      color: "white", // Set the font color of the control to white
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "black", // Set the background color of the dropdown menu to black
    }),
    option: (provided, state) => ({
      ...provided,
      color: "grey", // Set the font color of the options to white
      backgroundColor: state.isSelected ? "blue" : "black", // If an option is selected, set its background color to blue, otherwise black
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "white", // Set the font color of the selected option to white
    }),
  };

  return (
    <div className={styles.StyledHeader}>
      <div className={styles.center}>
        <div className={styles.Wrapper}>
          <Link href={"/"}>
            <Image
              src="/images/main/Logo.png" // Specify the path to your image
              alt="Description of the image" // Provide alternative text
              width={300}
              height={300}
              className={styles.logo}
            />
          </Link>

          <div className={styles.centerNav}>
            <div className={styles.desktopNav}>
              <Link className={styles.NavLink} href={"/"}>
                {translations.header.home}
              </Link>

              <Link className={styles.NavLink} href={"/projects"}>
                {translations.header.projects}
              </Link>

              <Link className={styles.NavLink} href={"/contact"}>
                {translations.header.contact}
              </Link>
            </div>

            <LanguageSwitch className={styles.switch}/>

            <div className={styles.mobileNav}>
              <button onClick={toggleDropdown} className={styles.HamburgerMenu}>
               <    ReorderIcon  className={styles.reorder}/>
              </button>
              {isDropdownOpen && (
                <div className={styles.dropdownMenu} ref={dropdownRef}>
                  <Select
                    options={options}
                    onChange={(selectedOption) => {
                      window.location.href = selectedOption.value;
                    }}
                    styles={customStyles} // Apply custom styles here
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}