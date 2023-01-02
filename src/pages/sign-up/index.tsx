import Head from "next/head";

import { type NextPage } from "next";
import { SignUpForm } from "../../ui";

const SignUp: NextPage = () => (
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
      <SignUpForm />
    </main>
  </>
);

export default SignUp;
