import Head from "next/head";

import { trpc } from "../utils/trpc";
import { Welcome, Details, Banner } from "../ui";

import { type NextPage } from "next";

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
      <section>
        <Welcome greeting={hello?.data?.greeting} />
      </section>
      <section className="bg-white">
        <Details />
      </section>
      <section>
        <Banner />
      </section>
      {/* <footer className="h-96 w-full bg-black">Footer</footer> */}
    </>
  );
};

export default Home;
