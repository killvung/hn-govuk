import { useEffect } from 'react'

import Layout from '../components/layout'
import NewsManager from '../components/NewsManager'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer'

export default function Home() {
  // By default NextJS performs server rednering thus initAll() would have error since document is not existed yet
  // temporary solution would be wait until the page has loaded on the client side then call initAll()
  useEffect(() => {
    const GOVUKFrontend = require('govuk-frontend');
    GOVUKFrontend.initAll();
  });

  return (
    <Layout>
      <main className={styles.main}>
        <div className="js-enabled">
          <NewsManager />
        </div>
      </main >
      <Footer />
    </Layout>
  )
}
