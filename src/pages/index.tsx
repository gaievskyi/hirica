import Head from "next/head";
import { ParallaxProvider } from "react-scroll-parallax";

import { trpc } from "../utils/trpc";
import { Navigation, Welcome, Details, Banner } from "../ui";

import { type NextPage } from "next";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <ParallaxProvider>
      <Head>
        <title>Hirica</title>
        <meta
          name="description"
          content="Hirica is a pretty job search platform."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
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
    </ParallaxProvider>
  );
};

export default Home;
