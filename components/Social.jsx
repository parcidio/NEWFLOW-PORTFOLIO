import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { TiSocialTwitter } from "react-icons/ti";
import socialStyle from "../styles/Social.module.css";
import Line from "./Line";
import { linkedin, instagram, github, email, twitter } from "./link";

const Social = () => {
  return (
    <>
      <div className={socialStyle.social_container}>
        <ul className={socialStyle.social_links}>
          <a href={instagram}>
            <li>
              <BsInstagram size={25} />
            </li>
          </a>
          <a href={github}>
            <li>
              <BsGithub size={25} />
            </li>
          </a>
          <a href={linkedin}>
            <li>
              <BsLinkedin size={25} />
            </li>
          </a>
          <a href={twitter}>
            <li>
              <TiSocialTwitter size={25} />
            </li>
          </a>
          <a href={email}>
            <div className={socialStyle.social_contacts}>
              <li>Email me</li>
            </div>
          </a>
        </ul>
        <a target="_blank" href="./Parcidio+Andre-CV.pdf">
          <ul className={socialStyle.social_contacts}>
            <li>My CV</li>
          </ul>
        </a>
      </div>
      <Line />
    </>
  );
};

export default Social;
