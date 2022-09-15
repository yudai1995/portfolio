import Head from "next/dist/shared/lib/head";
import styles from "../styles/About.module.scss";
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
              <p>現在はAngularを用いたWebアプリ製品の開発をしております。<br />画面設計・フロントエンド開発に携わらせていただいております。</p>
              <p>
                大学卒業後、Webサイト構築を行う会社へ入社。インターネット証券会社のWeb制作を2年担当させて頂きました。
                <br />
                コーポレートサイトのデザインとHTML, CSS,
                JavaScript,jQueryを用いてのWebページ作成や<br />
                CMSを用いた更新運用を担当させていただきました。
              </p>
            </div>
          </section>
        </ContentLayout>
      </Layout>
    </>
  );
};

export default About;
