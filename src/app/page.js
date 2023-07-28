import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <img src="./mustach2.png" alt="Mustach" style={{ width: "100%" }} />
        <h1 className={styles.title}>Embrace challanges, empower solutions</h1>
        <span className={styles.paragraph}>In progress...</span>
      </div>
    </main>
  );
}
