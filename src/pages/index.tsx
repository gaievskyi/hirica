import Head from 'next/head'

import { Banner, Features, Offer, Hero, Footer } from 'ui'

import { type NextPage } from 'next'

const Home: NextPage = () => (
  <>
    <Head>
      <title>Hirica</title>
      <meta
        name="description"
        content="Hirica is a pretty job search platform."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Hero />
    <Features />
    <Banner />
    <Features />
    <Offer />
    <Footer />
  </>
)

export default Home
