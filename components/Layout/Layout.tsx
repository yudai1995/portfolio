import Head from "next/dist/shared/lib/head";
import Header from "../Header";
import GlobalNavi from "../GlobalNavi";
import Footer from "../Footer";
import styles from "../styles/Layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
  home?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, home }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Roboto:wght@300;700&family=Zen+Kaku+Gothic+New:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="Yudai Yamamoto" />
        <meta property="og:image" content="Yudai Yamamoto" />
        <meta name="og:title" content="Yudai Yamamoto" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {home ? (
        <header className={`${styles.homeHeader}`}>
          <div className={`${styles.headerWrapper} inner`}>
            <GlobalNavi />
          </div>
        </header>
      ) : (
        <Header />
      )}
      <main className="inner">
        <div className={styles.contents}>{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
