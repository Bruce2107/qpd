// import Head from 'next/head';
import Page1 from '../components/Page1';
import Page2 from '../components/Page2';
import { Tab, TabPanel } from '../components/Tabs';


export default function Home() {
  return (
    <Tab>
      <TabPanel panelKey="racist" text="Racismo">
        <Page1 />
      </TabPanel>
      <TabPanel panelKey="representativeness" text="Representatividade">
        <Page2 />
      </TabPanel>
      <TabPanel panelKey="marxism" text="Marxismo e a questão racial">
        tres
      </TabPanel>
    </Tab>
  );
}
