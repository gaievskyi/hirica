import { type NextPage } from "next";
import Head from "next/head";

const SignIn: NextPage = () => {
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
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#FDFBF6] text-left">
        <form className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="email">E-mail</label>
            <input
              required
              type="email"
              name="email"
              className="rounded-xl border-2 border-black p-4"
              placeholder="john.doe@email.com"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              required
              type="password"
              name="password"
              className="rounded-xl border-2  border-black p-4"
              placeholder="***"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Repeat password</label>
            <input
              required
              type="password"
              name="password"
              className="rounded-xl border-2  border-black p-4"
              placeholder="***"
            />
          </div>
          <button
            type="submit"
            className="m-10 rounded-xl bg-black p-4 text-white hover:bg-black/80"
          >
            Next
          </button>
        </form>
      </main>
    </>
  );
};

export default SignIn;
