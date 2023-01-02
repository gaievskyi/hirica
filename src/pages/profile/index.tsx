import Head from "next/head";
import { useSession } from "next-auth/react";

import { trpc } from "../../utils/trpc";

import { type NextPage } from "next";

const Profile: NextPage = () => {
  const { data: sessionData } = useSession();

  const { data } = trpc.auth.getProfile.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <>
      <Head>
        <title>Hirica @user profile</title>
        <meta
          name="description"
          content="Hirica is a pretty job search platform."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p className="text-center">You are not signed in to view this page.</p>
      )}
    </>
  );
};

export default Profile;
