// import Head from 'next/head';
import Page1 from '../components/Page1';
import { Tab, TabPanel } from '../components/Tabs';
import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    <Tab>
      <TabPanel panelKey="racist" text="Racismo">
        <Page1 />
      </TabPanel>
      <TabPanel panelKey="dois" text="dois">
        dois
      </TabPanel>
      <TabPanel panelKey="tres" text="tres">
        tres
      </TabPanel>
    </Tab>
  );
}
