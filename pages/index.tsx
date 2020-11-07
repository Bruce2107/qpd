// import Head from 'next/head';
import Page1 from '../components/Page1';
import Page2 from '../components/Page2';
import Page3 from '../components/Page3';
import Page4 from '../components/Page4';
import Page5 from '../components/Page5';
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
        <Page3 />
      </TabPanel>
      <TabPanel panelKey="videos" text="Vídeos">
        <Page4 />
      </TabPanel>
      <TabPanel panelKey="people" text="George Floyd e João Pedro">
        <Page5 />
      </TabPanel>
    </Tab>
  );
}
