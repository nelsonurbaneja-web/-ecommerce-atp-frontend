import Footer from 'components/Organisms/Footer/Footer'
import Header from 'components/Organisms/Header/Header'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '/styles/styles.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ATP MOTOR SPORT STORE</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="main-app">
        <Header />
        <div className="page-body">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default MyApp
