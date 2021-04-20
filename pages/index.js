import { useEffect } from 'react'
import Head from 'next/head'

import Layout from '../components/layout'
import Accordion from '../components/Accordion'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer'

const TITLE = "?";

export default function Home() {
  // By default NextJS performs server rednering thus initAll() would have error since document is not existed yet
  // temporary solution would be wait until the page has loaded on the client side then call initAll()
  useEffect(() => {
    const GOVUKFrontend = require('govuk-frontend');
    GOVUKFrontend.initAll();
  });

  return (
    <Layout>
      <Head>
        <title>{TITLE}</title>
      </Head>
      <main className={styles.main}>
        {/* Enable Govuk JS interaction anything below this element */}
        <div className="js-enabled">
          <Accordion />
        </div>
      </main >
      <Footer />
    </Layout>
  )
}
