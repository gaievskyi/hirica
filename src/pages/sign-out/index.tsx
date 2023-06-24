import { type NextPage } from "next"

import Head from "next/head"
import { Layout } from "~/ui"

import { cn } from "~/utils/helpers"

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
    <Layout>
      <div className={cn("flex", "items-center", "justify-center")}>
        <h1>You&apos;ve been signed out.</h1>
      </div>
    </Layout>
  </>
)

export default SignOutPage
