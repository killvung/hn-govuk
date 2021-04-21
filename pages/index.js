import { useEffect } from 'react'
import Head from 'next/head'

import Layout from '../components/layout'
import NewsRow from '../components/NewsRow';
import styles from '../styles/Home.module.css'
import Footer from '../components/footer'

import mockDataNews from '../components/tests/mockDataNews.json';

const TITLE = "?";

export default function Home() {
  // By default NextJS performs server rednering thus initAll() would have error since document is not existed yet
  // temporary solution would be wait until the page has loaded on the client side then call initAll()
  useEffect(() => {
    const GOVUKFrontend = require('govuk-frontend');
    GOVUKFrontend.initAll();
  });

  const data = [mockDataNews, mockDataNews, mockDataNews, mockDataNews, mockDataNews];

  return (
    <Layout>
      <Head>
        <title>{TITLE}</title>
      </Head>
      <main className={styles.main}>
        <div className="js-enabled">
          <ul>
            {data.map(({ descendants, score, time, title, url }, id) => (
              <li key={id}>
                <NewsRow
                  descendants={descendants}
                  score={score}
                  timestamp={time}
                  title={title}
                  url={url}
                  rootId={descendants}
                />
              </li>
            ))}
          </ul>
        </div>
      </main >
      <Footer />
    </Layout>
  )
}
