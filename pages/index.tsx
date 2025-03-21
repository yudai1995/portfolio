import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import styles from '../styles/Home.module.scss';
import Background from '../components/three/Background';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Yudai Yamamoto</title>
                <meta
                    name='description'
                    content='Yudai Yamamoto - はじめまして、取り組みについて掲載しております'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Layout home={true}>
                <div
                    style={{
                        position: 'relative',
                        zIndex: 0,
                    }}
                >
                    <Background />
                    <section className={styles.homeWrapper}>
                        <div className={styles.introduction}>
                            <h2 className={`${styles.homeName} logoName`}>
                                Yudai Yamamoto
                            </h2>
                            <p className={styles.text}>Hello, Welcome!</p>
                        </div>
                    </section>
                </div>
            </Layout>
        </div>
    );
}
