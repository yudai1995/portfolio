import Head from "next/dist/shared/lib/head";
//import styles from "../styles/about.module.scss";
import styles from "../styles/Home.module.scss";
import Layout from "../components/Layout/Layout";
import LogoNameLayout from "../components/Layout/LogoNameLayout";
import ContentLayout from "../components/Layout/ContentLayout";

const content = [
  { title: "名前", description: "山本 祐大" },
  { title: "生年月日", description: "1995年11月12日" },
  { title: "出身地", description: "千葉県柏市" },
  { title: "趣味", description: "映画、音楽鑑賞、旅行" },
];
const About = () => {
  return (
    <>
      <Head>
        <title>About | Yudai Yamamoto</title>
        <meta name="description" content="概要です" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <ContentLayout title="About">
          <section className={styles.aboutSection}>
            <h2 className={styles.aboutName}>
              <LogoNameLayout />
            </h2>
            <dl className={styles.contentList}>
              {content.map((item, index) => (
                <div key={index} className={styles.contentWrapper}>
                  <dt className={styles.title}>{item.title}</dt>
                  <dd className={styles.description}>{item.description}</dd>
                </div>
              ))}
            </dl>
            <div className={styles.profile}>
              <p>法政大学情報科学部 2019年卒業。</p>
              <p>
                大学卒業後、WEBサイト構築を行う会社へ入社。ネット証券会社のWebサイト担当として2年勤務。
                <br />
                企業サイトのデザイン、HTML, CSS,
                JavaScript(jQuery)を用いての作成や
                CMSを用いた更新運用を担当いたしました。
              </p>
              <p>
                大学時より学んできたJavaScriptやReact.js、Vue.jsを用いて
                <br />
                Webアプリやサービスを生み出したいと思い、転職活動をしております。
              </p>
            </div>
          </section>
        </ContentLayout>
      </Layout>
    </>
  );
};

export default About;
