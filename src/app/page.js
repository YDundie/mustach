"use client";

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
      <footer>
        <div className={styles.footer}>
          <h2>legal</h2>
          <div className={styles.column}>
            <div className={styles.row}>
              <div className={styles.rowEntry}>
                <h3>HQ</h3>
                <p>Ivana Zbulja 44, 40326 Sveta Marija</p>
              </div>

              <div className={styles.rowEntry}>
                <h3>Country</h3>
                <p>Croatia</p>
              </div>
              <div className={styles.rowEntry}>
                <h3>County</h3>
                <p>Međimurje</p>
              </div>
              <div className={styles.rowEntry}>
                <h3>CEO</h3>
                <p>Marko Mustac</p>
              </div>
              <div className={styles.rowEntry}>
                <h3>IBAN</h3>
                <p>HR6423400091111230010</p>
              </div>
              <div className={styles.rowEntry}>
                <h3>OIB</h3>
                <p>HR02178567982</p>
              </div>
              <div className={styles.rowEntry}>
                <h3>MBS</h3>
                <p>070199431</p>
              </div>
              <div className={styles.rowEntry}>
                <h3>BANK</h3>
                <p>Privredna banka Zagreb d. d</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
