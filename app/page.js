import Image from "next/image";
import styles from "./page.module.css";
import heroStyles from "./componants/hero/hero.module.css";
import Navbar from "./componants/navbar/Navbar";

export default function Home() {
  return (
    <div className={styles.Home}>
      <Navbar />
      <div className={heroStyles.heroSection}>
        <h1 className={heroStyles.heroTitle}>Welcome to My Portfolio</h1>
        <p className={heroStyles.heroSubtitle}>A glimpse into my projects and skills.</p>
        <button className={heroStyles.heroButton}>View Projects</button>
      </div>
      <div className={heroStyles.heroBackground}></div>
    </div>
  );
}
