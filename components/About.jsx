import aboutStyle from "../styles/About.module.css";
import { useState } from "react";

const About = () => {
  const [readMore, setReadMore] = useState(true);
  return (
    <div className={aboutStyle.about__container}>
      <p>
        {" "}
        I’m{" "}
        <span className={aboutStyle.about__pargraph__bolded}>
          Parcidio Andre
        </span>
        , a Namibia based{" "}
        <span className={aboutStyle.about__pargraph__bolded}>
          software developer & designer
        </span>{" "}
        with over 2 years of experience. I specialise in fullstack development
        for mobile and web-based applications with a focus on simplicity &
        usability.
      </p>
      <p>
        {" "}
        I’m passionate about{" "}
        <span className={aboutStyle.about__pargraph__bolded}>
          design, research and technology{" "}
        </span>
        and how they can converge to create experiences that solve problems. I’m
        currently looking to expand my reach on web development through
        <span className={aboutStyle.about__pargraph__bolded}>
          {" "}
          collaboration with other professionals{" "}
        </span>
        in the industry.
      </p>
      <p>
        {" "}
        I have worked on{" "}
        <span className={aboutStyle.about__pargraph__underlined}>
          personal projects{" "}
        </span>
        which have helped me to improve my project management skills. Before
        that, I was awarded a{" "}
        <span className={aboutStyle.about__pargraph__bolded}>
          bachelor honours degree in software development{" "}
        </span>
        by the{" "}
        <span className={aboutStyle.about__pargraph__underlined}>
          International University of Management (IUM)
        </span>
        , which at a later stage, I ended up working for as a Junior developer,
        for a little period, as part of a team, to create their bespoke School
        MIS.
      </p>
      <p>
        {" "}
        Before working at IUM, I spent some time working as an IT officer itern
        at the{" "}
        <span className={aboutStyle.about__pargraph__underlined}>
          Namibia Institute of Public Administration and Management (NIPAM)
        </span>
        , where I helped with the maintenance of the company ICT insfructure
        (network, servers, workstations, web administration, helpdesk).
      </p>
      <div className={readMore ? aboutStyle.about__pargraph__readmore : ""}>
        <p>
          {" "}
          Currently, you can also find me working on my own projects: Cabula, an
          online notes documentation, collaboration, sharing webapp for
          students.
        </p>
        <p>
          {" "}
          Outside of work, my hobbies include exploring new business/design
          ideas, playing video games, watching movies, playing basketball or
          guitar, and reading about the business and technology world.
        </p>
        <p>
          {" "}
          You can follow along with my work, personal projects and occasional
          insights into my life by following any of the links below. In case,
          you would like to collaborate with me in any project or idea, please
          feel free to reach out to me through the contact section. I will be
          sure to get back to you.
        </p>
      </div>
      <div
        className={aboutStyle.about__readMoreButton}
        onClick={() =>
          setReadMore((previousReadmoreState) => !previousReadmoreState)
        }
      >
        {readMore ? "read more . . ." : ". . . read less"}
      </div>
    </div>
  );
};

export default About;
