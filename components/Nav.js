import navStyle from "../styles/Nav.module.css";
import { useState } from "react";
import { BsFillBrightnessHighFill, BsMoonFill } from "react-icons/bs";

const Nav = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <nav className={navStyle.nav}>
      <div className={navStyle.nav__logo}>NF</div>
      <div className={navStyle.nav__links}>
        <ul>
          <li
            className={`Nav_nav__link__zSE_b ${
              activeLink === "home" ? navStyle.nav__link_active : ""
            }`}
            onClick={() => setActiveLink("home")}
          >
            Home
          </li>
          <li
            className={`Nav_nav__link__zSE_b ${
              activeLink === "projects" ? navStyle.nav__link_active : ""
            }`}
            onClick={() => setActiveLink("projects")}
          >
            Projects
          </li>
          <li
            className={`Nav_nav__link__zSE_b ${
              activeLink === "contact" ? navStyle.nav__link_active : ""
            }`}
            onClick={() => setActiveLink("contact")}
          >
            Contact
          </li>
          <li
            className={`Nav_nav__link__zSE_b ${navStyle.nav__link_active}`}
            onClick={() => setDarkTheme((previousTheme) => !previousTheme)}
          >
            {darkTheme ? <BsFillBrightnessHighFill a /> : <BsMoonFill />}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
