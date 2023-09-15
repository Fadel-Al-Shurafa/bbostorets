import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Header from "./components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.mainBackground}>
          <div className={styles.mainContainer}>
            <div className={styles.mainFlex}>
              <h1> Welcome, </h1>
              <h2> Start your own business with us </h2>
            </div>

            <div className={styles.mainFlex}>
              <div className={styles.mainSBlink}>
                <Link href="/buildSection" className={styles.start}>
                  Build
                </Link>
                <Link href="/buySection" className={styles.buy}>
                  Buy
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.about}>
          <div className={styles.aboutFlex}>
            <h2>About us</h2>
          </div>
          <div className={styles.aboutFlex}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>

        <div className={styles.whatcanido}>
          <div className={styles.whatcanidoContainerFlex}>
            <div className={styles.whatcanidoFlex}>
              <h3>What can i build?</h3>
            </div>
            <div className={styles.whatcanidoFlex}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into{" "}
              </p>
            </div>
            <div className={styles.whatcanidoFlex}>
              <Link href="/buildSection" className={styles.start}>
                Build
              </Link>
            </div>
          </div>

          <div className={styles.whatcanidoContainerFlex}>
            <div className={styles.whatcanidoFlex}>
              <h3>What can i buy?</h3>
            </div>
            <div className={styles.whatcanidoFlex}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into{" "}
              </p>
            </div>
            <div className={styles.whatcanidoFlex}>
              <Link href="/buySection" className={styles.buy}>
                Buy
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
