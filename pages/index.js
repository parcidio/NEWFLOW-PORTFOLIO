import styles from "../styles/Home.module.css";
import {
  Header,
  About,
  Social,
  Experience,
  Tools,
} from "../components/ExportComponent";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <About />
      <Social />
      <Experience />
      <Tools />
    </div>
  );
}
