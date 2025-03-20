import Head from 'next/dist/shared/lib/head';
import Header from '../Header';
import GlobalNavi from '../GlobalNavi';
import Footer from '../Footer';
import styles from '../styles/Layout.module.scss';
import Background from '../three/Background';

interface LayoutProps {
    children: React.ReactNode;
    home?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, home }) => {
    return (
        <>
            <Head>
                <link rel='icon' href='/favicon.ico' />
                <meta name='description' content='Yudai Yamamoto' />
                <meta property='og:image' content='Yudai Yamamoto' />
                <meta name='og:title' content='Yudai Yamamoto' />
                <meta name='twitter:card' content='summary_large_image' />
            </Head>
            <Background />
            {home ? (
                <header className={`${styles.homeHeader}`}>
                    <div className={`${styles.headerWrapper} inner`}>
                        <GlobalNavi />
                    </div>
                </header>
            ) : (
                <Header />
            )}
            <main className='inner'>
                <div className={styles.contents}>{children}</div>
            </main>
            <Footer />
        </>
    );
};

export default Layout;
