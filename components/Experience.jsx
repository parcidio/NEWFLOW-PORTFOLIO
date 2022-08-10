import Line from "./Line";
import experienceStyle from "../styles/Experience.module.css";
const Experience = () => {
  return (
    <div className={experienceStyle.experience}>
      <h1>Experience</h1>
      <div className={experienceStyle.experience_container}>
        <ul className={experienceStyle.experience_container_role}>
          <li>Project Manager and Developer</li>
          <li>Junior Developer</li>
          <li>ICT Officer Inter</li>
        </ul>
        <ul className={experienceStyle.experience_container_institution}>
          <li>Personal Projects</li>
          <li>IUM</li>
          <li>NIPAM</li>
        </ul>
        <ul className={experienceStyle.experience_container_period}>
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
