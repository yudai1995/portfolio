import styles from "../styles/ContentLayout.module.scss";

interface ContentLayoutProp {
  children: React.ReactNode;
  title: string;
}

// コンテンツタイトルのレイアウト
const ContentLayout: React.FC<ContentLayoutProp> = ({ children, title }) => {
  return (
    <section className={styles.contentSection}>
      <h2 className={styles.contentTitle}>{title}</h2>
      {children}
    </section>
  );
};

export default ContentLayout;
