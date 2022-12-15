import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Hirica</title>
        <meta
          name="description"
          content="Hirica is a pretty job search platform."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#FDFBF6]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[3rem]">
            Find your dream job with{" "}
            <span className="text-[hsl(280,100%,70%)]">Hirica</span>
          </h1>
          <h2>Discover 999+ open positions</h2>
          <div className="flex w-1/6 flex-col gap-3">
            <h3 className="text-sm">Are you looking for: </h3>
            <div className="rounded-full bg-[#D7D0FE]">
              <Link
                className="flex p-5 hover:bg-white/20"
                href="https://create.t3.gg/en/usage/first-steps"
              >
                <div className="text-lg">A job</div>
              </Link>
            </div>
            <div className="rounded-full bg-[#D7D0FE]">
              <Link
                className="flex p-5 hover:bg-white/20"
                href="https://create.t3.gg/en/introduction"
              >
                <div className="text-lg">A talent</div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
