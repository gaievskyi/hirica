import Head from 'next/head'

import { AuthForm } from 'ui'

import { type NextPage } from 'next'

const Start: NextPage = () => (
  <>
    <Head>
      <title>Authorize your Hirica</title>
      <meta
        name="description"
        content="Hirica is a web 3.0 IT job search platform"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="flex min-h-[80vh] w-full items-center justify-center bg-[#FDFBF6]">
      <AuthForm />
    </main>
  </>
)

export default Start
