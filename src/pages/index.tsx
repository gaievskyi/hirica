import Head from 'next/head'

import { trpc } from '../utils/trpc'
import {
  Welcome,
  Banner,
  Features,
  LandingOffer,
  LandingHero,
  Footer,
} from '../ui'

import { type NextPage } from 'next'

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: 'from tRPC' })

  return (
    <>
      <Head>
        <title>Hirica</title>
        <meta
          name="description"
          content="Hirica is a pretty job search platform."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <LandingHero />
      </section>
      <section>
        <Features />
      </section>
      <section>
        <Banner />
      </section>
      <section>
        <Features />
      </section>
      <section>
        <LandingOffer />
      </section>
      <Footer />
    </>
  )
}

export default Home
