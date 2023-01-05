import Head from 'next/head'
import { useSession } from 'next-auth/react'

import { trpc } from 'utils/trpc'

import {
  Divider,
  ProfileContainer,
  ProfileHead,
  NotificationSettings,
  ProfilePublic,
  ResponseSettings,
} from 'ui'

import { type NextPage } from 'next'

const Profile: NextPage = () => {
  const { data: sessionData } = useSession()

  const { data: profileData } = trpc.auth.getProfile.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  )

  return (
    <>
      <Head>
        <title>Hirica {sessionData?.user?.name ?? ''} profile</title>
        <meta
          name="description"
          content="Hirica is a pretty job search platform."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {profileData ? (
        <ProfileContainer>
          <ProfileHead />
          <ProfilePublic />
          <Divider />
          <ResponseSettings />
          <Divider />
          <NotificationSettings />
        </ProfileContainer>
      ) : (
        <p className="text-center">You are not signed in to view this page.</p>
      )}
    </>
  )
}

export default Profile
