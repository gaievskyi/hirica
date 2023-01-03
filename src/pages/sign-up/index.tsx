import Head from "next/head";
import { useSession, signOut, signIn } from "next-auth/react";

import { SignUpForm } from "../../ui";

import { type NextPage } from "next";

const SignUp: NextPage = () => {
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
      <main className="flex flex-col items-center justify-center bg-[#FDFBF6] text-left ">
        <SignUpForm action={sessionData ? () => signOut() : () => signIn()} />
      </main>
    </>
  );
};

export default SignUp;
