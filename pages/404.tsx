import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import styles from "../styles/NotFound.module.scss";

const Custom404: React.ReactNode = () => {
  return (
    <>
      <Head>
        <title>Not Found.</title>
      </Head>
      <Layout>
        <main className={styles.notfound}>
          <section>
            <h1>
              <span>404</span>Sorry, This page is Not Found
            </h1>
            <Link href="/">
              <span className={styles.returnBtn}>ホームに戻ります</span>
            </Link>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Custom404;
