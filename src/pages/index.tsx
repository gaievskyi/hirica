import Head from 'next/head'

import { trpc } from '../utils/trpc'
import { Welcome, Details, Banner, Features, AreYouReady } from '../ui'

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
        <Welcome greeting={hello?.data?.greeting} />
      </section>
      <section className="bg-white">
        <Details />
      </section>
      <section>
        <Banner />
      </section>
      <section>
        <Features />
      </section>
      <section>
        <AreYouReady />
      </section>
      <footer className="flex h-96 w-full items-center justify-center bg-black text-white">
        &copy; {new Date().getFullYear()}
        <a href="mailto:hirica@proton.me" className="ml-2 ">
          hirica@proton.me
        </a>
      </footer>
    </>
  )
}

export default Home
