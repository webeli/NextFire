import Head from 'next/head'
import Header from './Header'

export default ({ title, children }) =>
  <div>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    {children}
    <style global jsx>{`
      body {
        margin: 0;
        padding: 0;
      }
    `}</style>
  </div>