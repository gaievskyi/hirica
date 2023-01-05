import Head from 'next/head'
import { signIn } from 'next-auth/react'

import { AuthForm } from 'ui'

import { type NextPage } from 'next'

const Start: NextPage = () => (
  <>
    <Head>
      <title>Sign up Hirica</title>
      <meta
        name="description"
        content="Hirica is a web 3.0 IT job search platform"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="flex flex-col items-center justify-center bg-[#FDFBF6] text-left">
      <AuthForm action={() => signIn()} />
    </main>
  </>
)

export default Start
