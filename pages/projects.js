import styles from "../styles/Projects.module.css";
import Line from "../components/Line";
import Project from "../components/Project";
import Testimonials from "../components/Testimonials";

const projects = () => {
  const projects = [
    {
      id: 0,
      name: "Mini Voice",
      image: "/minivoice pic.jpeg",
      imageAlt: "Profile picture",
      description:
        "A sign language translator mobile app buit to ease the interaction between signlanguage user and non-signlanguage users . . .",
      tools: ["C#", "Unity"],
      inProgress: false,
    },
    {
      id: 1,
      name: "Cabula.",
      image: "/cabula.png",
      imageAlt: "Profile picture",
      description:
        "Cabula is an online notes documentation, collaboration, sharing webapp for students . . .",
      tools: ["React.js", "Node.js"],
      inProgress: true,
    },
    {
      id: 2,
      name: "University management system",
      image: "/university webapp pic.png",
      imageAlt: "Profile picture",
      description:
        "A web application helpful to automate university processes . . .",
      tools: ["Django"],
      inProgress: false,
    },
  ];
  return (
    <div className={styles.projects}>
      <h1>Projects</h1>
      <p>Here are some of the most relevant projects I have worked on.</p>
      <div className={styles.projects__container}>
        {projects.map((project) => (
          <Project
            key={project.id}
            name={project.name}
            image={project.image}
            imageAlt={project.imageAlt}
            description={project.description}
            tools={project.tools}
            inProgress={project.inProgress}
          />
        ))}
      </div>
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
      <Testimonials />
      <Line />
    </div>
  );
};

export default projects;
