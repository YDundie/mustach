import styles from "./page.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Design Point</title>
        <meta
          name="description"
          content="Mustach custom web development and design"
        />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <img src="./mustach2.png" alt="Mustach" className={styles.image} />
          <h1 className={styles.title}>
            Embrace challanges, empower solutions
          </h1>
          <span className={styles.paragraph}>In progress...</span>
        </div>
      </main>
    </div>
  );
}
