import Head from "next/head"

import { Banner, Features, Hero, Layout, Offer } from "~/ui"

import { type NextPage } from "next"

const HomePage: NextPage = () => (
  <>
    <Head>
      <title>Hirica</title>
      <meta
        name="description"
        content="Hirica is a pretty job search platform."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <Hero />
      <Features />
      <Banner />
      <Offer />
    </Layout>
  </>
)

export default HomePage
