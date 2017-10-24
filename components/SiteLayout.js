import Head from 'next/head'
import Header from './Header'

export default (props) =>
  <div>
    <Head>
      <title>{props.title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <style global jsx>{`
      body {
        margin: 0;
        padding: 0;
      }
    `}</style>
  </div>