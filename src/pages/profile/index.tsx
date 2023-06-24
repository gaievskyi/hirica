import { type NextPage } from "next"

import Head from "next/head"
import { useSession } from "next-auth/react"

import {
  Layout,
  Divider,
  Profile,
  NotificationSettings,
  PublicData,
  ResponseSettings,
  AuthGate,
} from "~/ui"

import { cn } from "~/utils/helpers"

const ProfilePage: NextPage = () => {
  const { data: session } = useSession()

  const userName = session?.user.name ?? ""
  const email = session?.user.email ?? ""
  const title = `Hirica | ${userName} profile`

  if (!session) return <AuthGate />

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Hirica is a pretty job search platform."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={cn("px-[5vw]", "py-10", "lg:px-[20vw]")}>
          <Profile />
          <PublicData />
          <Divider />
          <ResponseSettings fullName={userName} email={email} />
          <Divider />
          <NotificationSettings />
        </div>
      </Layout>
    </>
  )
}

export default ProfilePage
