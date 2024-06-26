import { type NextPage } from "next"

import Head from "next/head"

import { Layout } from "~/ui"
import { JobFilters } from "~/ui/modules/hero/components"

const JobsPage: NextPage = () => (
  <>
    <Head>
      <title>Hirica jobs</title>
      <meta
        name="description"
        content="Hirica is a pretty job search platform."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <JobFilters />
    </Layout>
  </>
)

export default JobsPage
