import styles from "../styles/Projects.module.css";
import Line from "../components/Line";

const projects = () => {
  return (
    <div className={styles.container}>
      <h1>Projects</h1>
      <p>Here are some of the most relevant projects I have worked on.</p>
      <Line />
      <h1>About this site</h1>
      <p style={{ textTransform: "Uppercase" }}>Spoiler alert, this site is:</p>
      <ul>
        <li>Designed and built using Figma and Visual</li>
        <li>Studio Code Hosted by Heroku and GitHub</li>
        <li>Powered by NextJs and Sanity</li>
        <li>CMS Font family is set to space mono google font</li>
      </ul>
      <Line />
      <h1>Testimonials</h1>
      <Line />
    </div>
  );
};

export default projects;
