import styles from "./styles/Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className="inner">
        <small className={styles.copyRight}>&copy; 2021 YUDAI1995</small>
      </div>
    </footer>
  );
};

export default Footer;
