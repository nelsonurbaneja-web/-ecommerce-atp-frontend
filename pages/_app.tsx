import Footer from 'components/Organisms/Footer/Footer'
import Header from 'components/Organisms/Header/Header'
import { CartProvider } from 'context/CartProvider'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '/styles/styles.scss'

const App = ({ Component, pageProps } : AppProps) => {
  return (
    <>
      <Head>
        <title>ATP Store. C.A</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <CartProvider>
        <div className="main-app">
          <Header />
          <div className="page-body">
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </CartProvider>
    </>
  )
}

export default App
