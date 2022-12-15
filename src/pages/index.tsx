import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { MdOutlineWorkOutline } from "react-icons/md";

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
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#FDFBF6] text-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[3rem]">
            Find talents and jobs with{" "}
            <span className="rounded-xl bg-gradient-to-r from-blue-300 via-rose-200 to-orange-500 p-1 text-[#FDFBF5]">
              Hirica.
            </span>
          </h1>
          <h2 className="text-xl font-light text-gray-600">
            Discover 999+ open positions and candidates
          </h2>
          <div className="rounded-xl bg-black text-white">
            <Link className="flex p-5 hover:bg-white/20" href="/sign-in">
              <div className="flex items-center justify-center gap-2 text-lg">
                <MdOutlineWorkOutline /> Start
              </div>
            </Link>
          </div>
        </div>
      </main>
      <section className="flex min-h-screen flex-row items-center justify-center gap-5">
        <h1 className="p-10 text-center text-5xl">How it works?</h1>
        <div className="flex flex-col gap-5">
          <div className="min-h-fit max-w-md rounded-xl bg-[#FDFBF6] p-16">
            <p className="text-left">
              Sign up <span className="underline">for free</span>. Fill your
              profile and set your expected compensation. Don&apos;t share your
              data directly. It&apos;s a rule.
            </p>
          </div>
          <div className="max-w-md rounded-xl bg-[#FDFBF6] p-16">
            <p className="text-left">
              Choose those recruiters, whom you want to reveal yourself.
              Recruiters compensate Hirica 25% of your expected salary for
              shared talent. You never pay anything.
            </p>
          </div>
        </div>
      </section>
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
      <p className="text-center text-xl">
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
