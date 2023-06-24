import { type NextPage } from "next"

import Head from "next/head"

import { Layout } from "~/ui"

const SignOutPage: NextPage = () => (
  <>
    <Head>
      <title>Signed out</title>
      <meta
        name="description"
        content="Hirica is a pretty job search platform."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>SignOutPage</Layout>
  </>
)

export default SignOutPage
