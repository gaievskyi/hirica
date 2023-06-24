import Head from "next/head"

import { AuthForm, Navigation } from "~/ui"

import { type NextPage } from "next"

const StartPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Authorize your Hirica</title>
        <meta
          name="description"
          content="Hirica is a web 3.0 IT job search platform"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <main className="flex w-full items-center justify-center bg-[#FDFBF6] p-6">
        <AuthForm />
      </main>
    </>
  )
}

export default StartPage
