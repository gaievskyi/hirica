import Head from "next/head";

import { type NextPage } from "next";

const Jobs: NextPage = () => (
  <>
    <Head>
      <title>Hirica jobs</title>
      <meta
        name="description"
        content="Hirica is a pretty job search platform."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="flex flex-col items-center justify-center bg-[#FDFBF6] text-left ">
      <h1>Jobs (building)</h1>

      <p className="text-lg">Find your dream job in the IT industry.</p>

      <p className="text-lg">
        <a
          href="
https://www.linkedin.com/jobs/search/?f_C=160&f_E=2&f_I=1&keywords=it%20jobs&location=Worldwide&sortBy=R"
          className="text-blue-600 hover:underline"
        >
          LinkedIn
        </a>
      </p>

      <p className="text-lg">
        <a
          href="https://www.indeed.com/jobs?q=it%20jobs&l=Worldwide"
          className="text-blue-600 hover:underline"
        >
          Indeed
        </a>
      </p>

      <p className="text-lg">
        <a
          href="https://www.monster.com/jobs/search/?q=it-jobs&where=Worldwide"
          className="text-blue-600 hover:underline"
        >
          Monster
        </a>
      </p>
    </main>
  </>
);

export default Jobs;
