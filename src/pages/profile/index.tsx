import { type NextPage } from "next"

import Head from "next/head"
import { useSession } from "next-auth/react"

import {
  Layout,
  Divider,
  ProfileContainer,
  ProfileHead,
  NotificationSettings,
  ProfilePublic,
  ResponseSettings,
} from "~/ui"

const ProfilePage: NextPage = () => {
  const { data: session } = useSession()

  return (
    <>
      <Head>
        <title>
          {session
            ? `Hirica ${session?.user?.name ?? ""} profile`
            : "Hirica profile"}
        </title>
        <meta
          name="description"
          content="Hirica is a pretty job search platform."
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Layout>
        <ProfileContainer>
          <ProfileHead />
          <ProfilePublic />
          <Divider />
          <ResponseSettings />
          <Divider />
          <NotificationSettings />
        </ProfileContainer>
      </Layout>
    </>
  )
}

export default ProfilePage
