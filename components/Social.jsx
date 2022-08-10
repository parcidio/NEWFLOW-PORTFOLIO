import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { TiSocialTwitter } from "react-icons/ti";
import socialStyle from "../styles/Social.module.css";
import Line from "./Line";

const Social = () => {
  return (
    <>
      <div className={socialStyle.social_container}>
        <ul className={socialStyle.social_links}>
          <li>
            <BsInstagram size={25} />
          </li>
          <li>
            <BsGithub size={25} />
          </li>
          <li>
            <BsLinkedin size={25} />
          </li>
          <li>
            <TiSocialTwitter size={25} />
          </li>
          <div className={socialStyle.social_contacts}>
            <li>Email me</li>
          </div>
        </ul>
        <ul className={socialStyle.social_contacts}>
          <li>My CV</li>
        </ul>
      </div>
      <Line />
    </>
  );
};

export default Social;
