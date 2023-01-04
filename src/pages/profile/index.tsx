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
        <title>Hirica - {sessionData?.user?.name} profile</title>
        <meta
          name="description"
          content="Hirica is a pretty job search platform."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {data ? (
        <div className="flex w-full justify-center gap-12">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <label htmlFor="email">E-mail</label>
              <input
                name="email"
                type="email"
                className="border-b-2 border-black bg-transparent py-2"
                defaultValue={sessionData?.user?.email || ""}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="fullName">Full name</label>
              <input
                name="fullName"
                type="text"
                className="border-b-2 border-black bg-transparent py-2"
                disabled={sessionData?.user?.name !== undefined}
                defaultValue={sessionData?.user?.name || ""}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="fullName">Resume</label>
              <input
                name="resume"
                type="file"
                className="border-b-2 border-black bg-transparent py-2"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <label htmlFor="expectedRole">Expected role</label>
              <input
                name="expectedRole"
                type="text"
                className="border-b-2 border-black bg-transparent py-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="expectedSalary">Expected salary</label>
              <input
                name="expectedSalary"
                type="number"
                className="border-b-2 border-black bg-transparent py-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="profile">Profile</label>
              <textarea
                name="profile"
                className="min-h-[200px] rounded-sm border-2 border-black bg-white p-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="skills">Skills</label>
              <textarea
                name="skills"
                className="rounded-sm border-2 border-black bg-white p-2"
              />
              <input
                type="text"
                className="border-b-2 border-black bg-transparent py-2"
              />
            </div>
          </div>
          <button
            className="max-h-[50px] rounded-full bg-black px-5 py-3 text-white hover:bg-black/80"
            onClick={() => null}
          >
            Save
          </button>
        </div>
      ) : (
        <p className="text-center">You are not signed in to view this page.</p>
      )}
    </>
  );
};

export default Profile;
