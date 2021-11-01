import Head from "next/head";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yudai Yamamoto</title>
        <meta
          name="description"
          content="Yudai Yamamoto - はじめまして、取り組みについて掲載しております"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout home={true}>
        <section className={styles.homeWrapper}>
          <h2 className={`${styles.homeName} logoName`}>Yudai Yamamoto</h2>
          <p className={styles.text}>Hello, Welcome!</p>
        </section>
      </Layout>
    </div>
  );
}
