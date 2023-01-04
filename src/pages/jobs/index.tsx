import Head from 'next/head'

import { type NextPage } from 'next'
import { CategoryFilters } from '../../ui'

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
    <CategoryFilters />
  </>
)

export default Jobs
