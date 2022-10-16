import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import styles from '../styles/Home.module.scss';
import WorkList from '../components/WorkList';
import { MutableRefObject, useRef } from 'react';
import { useScroll } from '../Custom/useScroll';

export default function Home() {
  const [refAnker, onScroll] = useScroll();

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
        <section className={styles.homeWrapper}>
          <div className={styles.introduction}>
            <h2 className={`${styles.homeName} logoName`}>Yudai Yamamoto</h2>
            <p className={styles.text}>Hello, Welcome!</p>
          </div>
          <div onClick={onScroll} className={styles.scroll}>
            <button className={styles.scrollButton}>
              Please scroll
            </button>
          </div>
        </section>
        <span ref={refAnker}></span>
        <WorkList />
      </Layout>
    </div>
  );
}
