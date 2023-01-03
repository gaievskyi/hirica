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
        <div className="flex max-w-md flex-col gap-3 px-16">
          <div className="flex min-w-full flex-col gap-2">
            <label htmlFor="email">E-mail</label>
            <input
              name="email"
              type="email"
              className="min-w-full rounded-xl border-2 border-black bg-white p-5"
              defaultValue={sessionData?.user?.email || ""}
            />
          </div>
          <div className="flex min-w-full flex-col gap-2">
            <label htmlFor="fullName">Full name</label>
            <input
              name="fullName"
              type="text"
              className="min-w-full rounded-xl border-2 border-black bg-white p-5"
              disabled={sessionData?.user?.name !== undefined}
              defaultValue={sessionData?.user?.name || ""}
            />
          </div>
        </div>
      ) : (
        <p className="text-center">You are not signed in to view this page.</p>
      )}
    </>
  );
};

export default Profile;
