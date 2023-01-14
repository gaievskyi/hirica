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
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Profile: NextPage = () => {
  const { data: sessionData } = useSession()
  const router = useRouter()

  const { data: profileData } = trpc.auth.getProfile.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  )

  useEffect(() => {
    if (!sessionData) {
      router.push('/start')
    }
  }, [router, sessionData])

  return (
    <>
      <Head>
        <title>
          {sessionData
            ? `Hirica ${sessionData?.user?.name ?? ''} profile`
            : 'Hirica profile'}
        </title>
        <meta
          name="description"
          content="Hirica is a pretty job search platform."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProfileContainer>
        <ProfileHead />
        <ProfilePublic />
        <Divider />
        <ResponseSettings
          name={profileData?.name}
          email={profileData?.email}
          image={profileData?.image}
        />
        <Divider />
        <NotificationSettings />
      </ProfileContainer>
    </>
  )
}

export default Profile
