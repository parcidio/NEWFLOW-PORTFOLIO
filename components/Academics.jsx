import Line from "./Line";
import experienceStyle from "../styles/Academics.module.css";
import Link from "next/link";
const Academics = () => {
  return (
    <div className={experienceStyle.experience}>
      <h1>Academics</h1>
      <div className={experienceStyle.experience_container}>
        <ul className={experienceStyle.experience_container_role}>
          <li>Postgraduate Degree Project Management</li>
          <li>Bachelor Honors Degree in Software Development</li>
        </ul>
        <ul className={experienceStyle.experience_container_institution}>
          <li>
            <Link href="https://www.triumphant.edu.na/home/">
              Triumphant College
            </Link>
          </li>
          <li>
            <Link href="http://www.ium.edu.na/">IUM </Link>
          </li>
        </ul>
        <ul className={experienceStyle.experience_container_period}>
          <li>Current</li>
          <li>2017-2021</li>
        </ul>
      </div>
      <Line />
    </div>
  );
};

export default Academics;
