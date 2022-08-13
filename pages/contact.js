import Social from "../components/Social";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contact__container}>
        <div className={styles.contact__information}>
          <h1>Get in touch</h1>
          <p>
            You can follow along with my work, personal projects and occasional
            insights into my life by following any of the links below. In case,
            you would like to collaborate with me in any project or idea, please
            feel free to reach out to me through the contact section. I will be
            sure to get back to you.
          </p>
          <Social />

          <form className={styles.contact__form} onSubmit="">
            <input
              className={styles.contact__form__inputs}
              type="text"
              placeholder="your email goes here. . ."
            />
            <textarea
              className={styles.contact__form__inputs}
              placeholder="your message goes here. . ."
            />
            <button className={styles.contact__form__inputs} type="submit">
              send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
