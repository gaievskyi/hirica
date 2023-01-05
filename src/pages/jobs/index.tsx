import Head from 'next/head'

import { type NextPage } from 'next'
import { JobFilters } from '../../ui'

const Jobs: NextPage = () => (
  <>
    <Head>
      <title>Hirica jobs</title>
      <meta
        name="description"
        content="Hirica is a pretty job search platform."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <JobFilters />
  </>
)

export default Jobs
