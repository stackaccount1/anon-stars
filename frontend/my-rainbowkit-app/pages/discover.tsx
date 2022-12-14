import type { NextPage } from 'next';
import Discover from "../components/discover";
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anon Stars</title>
        <meta
          name="description"
          content="Generated by @rainbow-me/create-rainbowkit"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Discover />
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
};

export default Home;