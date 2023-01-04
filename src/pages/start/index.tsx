import Head from "next/head";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";

import { useEffect } from "react";

import { AuthForm } from "../../ui";

import { type NextPage } from "next";

const Start: NextPage = () => {
  const { data: sessionData } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (sessionData) {
      router.push("/profile");
    }
  }, [router, sessionData]);

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
        <AuthForm
          action={() => {
            signIn();
          }}
        />
      </main>
    </>
  );
};

export default Start;
