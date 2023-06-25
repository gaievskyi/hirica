import { type NextPage } from "next"

import Head from "next/head"
import { useRouter } from "next/router"
import { Layout } from "~/ui"

import { cn } from "~/utils/helpers"

const CandidatePage: NextPage = () => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Signed out</title>
        <meta
          name="description"
          content="Hirica is a pretty job search platform."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div>Candidate #{router.query.id} page</div>
      </Layout>
    </>
  )
}

export default CandidatePage
