import Head from 'next/head';
import { Tab, TabPanel } from '../components/Tabs';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Tab>
          <TabPanel panelKey="um" text="um">
            um
          </TabPanel>
          <TabPanel panelKey="dois" text="dois">
            dois
          </TabPanel>
          <TabPanel panelKey="tres" text="tres">
            tres
          </TabPanel>
        </Tab>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
