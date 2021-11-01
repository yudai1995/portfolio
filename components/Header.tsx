import GlobalNavi from "./GlobalNavi";
import Link from "next/dist/client/link";
import LogoNameLayout from "./Layout/LogoNameLayout";
import styles from "./styles/Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.headerWrapper} inner`}>
        <h1 className={styles.headerTitle}>
          <Link href="/" passHref>
            <a className="logoName">Yudai Yamamoto</a>
          </Link>
        </h1>
        <GlobalNavi />
      </div>
    </header>
  );
};

export default Header;
