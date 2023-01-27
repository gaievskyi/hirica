import { type NextPage } from 'next'

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

import { useRouter } from 'next/router'
import { useEffect } from 'react'

const ProfilePage: NextPage = () => {
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
        <ResponseSettings {...profileData} />
        <Divider />
        <NotificationSettings />
      </ProfileContainer>
    </>
  )
}

export default ProfilePage
