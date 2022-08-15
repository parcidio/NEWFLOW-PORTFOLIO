// IMPORTS
import Image from "next/image"; // importing next image component
import headerStyle from "../styles/Header.module.css"; //Header style

const Header = () => {
  return (
    <div className={headerStyle.header__container}>
      <div className={headerStyle.header__text}>
        <h1>Software Developer,</h1>
        <small>creating clean and intuitive applications. </small>
      </div>
      <div className={headerStyle.header__container__line}></div>
      <div className={headerStyle.header__imageContainer}>
        <Image
          className={headerStyle.header__image}
          src="/profile_picture.jpeg"
          alt="Profile picture"
          layout="fill"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default Header;
