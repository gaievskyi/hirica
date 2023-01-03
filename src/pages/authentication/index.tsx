import Head from "next/head";
import { useSession, signIn } from "next-auth/react";

import { AuthForm } from "../../ui";

import { type NextPage } from "next";

const Authentication: NextPage = () => {
  const { data: sessionData } = useSession();

  return (
    <>
      <Head>
        <title>Sign up Hirica</title>
        <meta
          name="description"
          content="Hirica is a web 3.0 IT job search platform"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center bg-[#FDFBF6] text-left">
        {sessionData ? (
          <div className="flex w-full flex-col items-center justify-center gap-5">
            <div className="flex min-w-[20%] flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="expectedRole">Expected role</label>
                <input
                  name="expectedRole"
                  type="text"
                  className="rounded-xl border-2 border-black bg-white p-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="expectedSalary">Expected salary</label>
                <input
                  name="expectedSalary"
                  type="number"
                  className="rounded-xl border-2 border-black bg-white p-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="profile">Profile</label>
                <textarea
                  name="profile"
                  className="min-h-[200px] rounded-xl border-2 border-black bg-white p-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="skills">Skills</label>
                <textarea
                  name="skills"
                  className="min-h-[200px] rounded-xl border-2 border-black bg-white p-2"
                />
              </div>
            </div>
            <button
              className="rounded-full bg-black p-3 text-white hover:bg-black/80"
              onClick={() => null}
            >
              Save
            </button>
          </div>
        ) : (
          <AuthForm action={() => signIn()} />
        )}
      </main>
    </>
  );
};

export default Authentication;
