import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Nathan Dunn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <body> */}
          <img src="under-construction-2408062_1280.png"/>
        {/* </body> */}
      </main>
    </div>
  );
};

export default Home;
