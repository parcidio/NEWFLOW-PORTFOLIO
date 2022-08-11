// IMPORTS
import navStyle from "../styles/Nav.module.css"; //Navigation bar style
import Link from "next/link";
import { useState } from "react"; // React state
import { BsFillBrightnessHighFill, BsMoonFill } from "react-icons/bs"; //React icons - theme

const Nav = () => {
  const [activeLink, setActiveLink] = useState("home"); //this state has the role of determining if a link is active or not
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <nav className={navStyle.nav}>
      <div className={navStyle.nav__logo}>NF</div>
      <div className={navStyle.nav__links}>
        {/* this holds all the links of the navbar */}
        <ul>
          <Link href="/">
            <li
              className={`Nav_nav__link__zSE_b ${
                activeLink === "home" ? navStyle.nav__link_active : ""
              }`}
              onClick={() => setActiveLink("home")}
            >
              Home
            </li>
          </Link>
          <Link href="/projects">
            <li
              className={`Nav_nav__link__zSE_b ${
                activeLink === "projects" ? navStyle.nav__link_active : ""
              }`}
              onClick={() => setActiveLink("projects")}
            >
              Projects
            </li>
          </Link>
          <Link href="/contact">
            <li
              className={`Nav_nav__link__zSE_b ${
                activeLink === "contact" ? navStyle.nav__link_active : ""
              }`}
              onClick={() => setActiveLink("contact")}
            >
              Contact
            </li>
          </Link>
          <li
            className={`Nav_nav__link__zSE_b ${navStyle.nav__link_active}`}
            onClick={() => setDarkTheme((previousTheme) => !previousTheme)}
          >
            {/* defining the icon of the theme button */}
            {darkTheme ? <BsFillBrightnessHighFill /> : <BsMoonFill />}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
