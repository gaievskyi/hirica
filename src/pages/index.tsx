import Head from 'next/head'

import { Banner, Features, Hero, Offer, Statistics } from 'ui'

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
    <Statistics />
    <Offer />
  </>
)

export default Home
