import Head from "next/dist/shared/lib/head";
import Image from "next/image";
import Layout from "../components/Layout/Layout";
import ContentLayout from "../components/Layout/ContentLayout";
import LinkLayout from "../components/Layout/LinkLayout";
import styles from "../styles/Contact.module.scss";
const links = [
  {
    name: "GitHub",
    url: "https://github.com/YUDAI1995",
    img: "/images/github-icon01.png",
  },
  {
    name: "Wantedly",
    url: "https://www.wantedly.com/id/yyam1103",
    img: "/images/wantdly-icon01.png",
  },
];
const Contact = () => {
  return (
    <Layout>
      <Head>
        <title>Contact | Yudai Yamamoto</title>
        <meta name="description" content="連絡先について掲載しております" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentLayout title="Contact">
        <div className={styles.contentWrapper}>
          <p className={styles.text}>ご連絡はEmailよりお願いいたします。</p>

          <div className={styles.emailWrapper}>
            <span className={styles.emailIcon}>
              <Image
                src="/images/email-icon01.png"
                className={styles.icon}
                alt="E-mail"
                layout={"intrinsic"}
                width={64}
                height={48}
              />
            </span>
            <p className={styles.email}>
              <span>y.y.dizwpgar@gmail.com</span>
            </p>
          </div>

          <section className={styles.linkSection}>
            <h3 className={styles.subTitle}>Link</h3>
            <ul className={styles.linkList}>
              {links.map((link, index) => (
                <li className={`${styles.list} arrowIcon`} key={index}>
                  <LinkLayout
                    url={link.url}
                    name={link.name}
                    imgSrc={link.img}
                    imgWidth={64}
                    imgHeight={64}
                  />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </ContentLayout>
    </Layout>
  );
};

export default Contact;
