import Head from 'next/head'
import { useEffect } from 'react'

import '../styles/globals.css'
import "govuk-frontend/govuk/all.scss";

const TITLE = "?";

function MyApp({ Component, pageProps }) {
  // By default NextJS performs server rednering thus initAll() would have error since document is not existed yet
  // temporary solution would be wait until the page has loaded on the client side then call initAll()
  useEffect(() => {
    const GOVUKFrontend = require('govuk-frontend');
    GOVUKFrontend.initAll();
  });

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <link rel="shortcut icon" href="/assets/images/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
