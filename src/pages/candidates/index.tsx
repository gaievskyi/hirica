import Head from 'next/head'

import { type NextPage } from 'next'
// import { FcLike, FcLikePlaceholder } from 'react-icons/fc'

const Candidates: NextPage = () => (
  <>
    <Head>
      <title>Hirica candidates</title>
      <meta
        name="description"
        content="Explore Hirica candidates. Find your next IT job. +199000 active candidates."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="flex flex-col gap-5">
      <main className="flex flex-col items-center justify-center bg-[#FDFBF6] px-64 pb-10">
        <h2 className="text-2xl">
          +199000 active candidates. Find your next IT job.
        </h2>

        <div></div>
      </main>
    </div>
  </>
)

export default Candidates
