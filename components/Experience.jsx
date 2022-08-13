import Line from "./Line";
import experienceStyle from "../styles/Experience.module.css";
import Link from "next/link";
const Experience = () => {
  return (
    <div className={experienceStyle.experience}>
      <h1>Experience</h1>
      <div className={experienceStyle.experience__container}>
        <ul className={experienceStyle.experience__container__role}>
          <li>Project Manager and Developer</li>
          <li>Junior Developer</li>
          <li>ICT Officer Inter</li>
        </ul>
        <ul className={experienceStyle.experience__container__institution}>
          <li>Personal Projects</li>
          <li>
            <Link href="http://www.ium.edu.na/">IUM</Link>
          </li>
          <li>
            <Link href="https://www.nipam.na/">NIPAM</Link>
          </li>
        </ul>
        <ul className={experienceStyle.experience__container__period}>
          <li>Current</li>
          <li>2022</li>
          <li>2021-2022</li>
        </ul>
      </div>
      <Line />
    </div>
  );
};

export default Experience;
