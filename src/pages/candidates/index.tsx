import { type NextPage } from "next"

import Head from "next/head"
import Link from "next/link"

import { Layout } from "~/ui"

const CandidatesPage: NextPage = () => (
  <>
    <Head>
      <title>Hirica candidates</title>
      <meta
        name="description"
        content="Explore Hirica candidates. Find your next IT job. +199000 active candidates."
      />
      <link
        rel="icon"
        href="/favicon.ico"
      />
    </Head>
    <Layout>
      <div className="flex flex-col gap-5">
        <main className="flex flex-col items-center justify-center gap-8 bg-[#FDFBF6] px-64 pb-10">
          <h2 className="text-2xl">
            +199000 active candidates. Find your next IT job.
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="flex flex-col gap-5 rounded-xl bg-white p-5">
              <h1 className="text-xl">Hot candidates</h1>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="#">
                    1. Frontend Developer, $5600, 5 years{" "}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    2. Cloud Engineer, $7200, 8 years{" "}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    3. QA Tech Lead, $6500, 11 years{" "}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-5 rounded-xl bg-white p-5">
              <h1 className="text-xl">Candidates of the month</h1>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="#">
                    1. Frontend Developer, $5600, 5 years{" "}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    2. Cloud Engineer, $7200, 8 years{" "}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    3. QA Tech Lead, $6500, 11 years{" "}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-5 rounded-xl bg-white p-5">
              <h1 className="text-xl">Candidates of the year</h1>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="#">
                    1. Frontend Developer, $5600, 5 years{" "}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    2. Cloud Engineer, $7200, 8 years{" "}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    3. QA Tech Lead, $6500, 11 years{" "}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="min-h-screen w-full rounded-xl bg-white p-5"></div>
        </main>
      </div>
    </Layout>
  </>
)

export default CandidatesPage
