import { type NextPage } from "next"

import Head from "next/head"
import Link from "next/link"
import { toast } from "react-hot-toast"
import { BiSolidContact } from "react-icons/bi"

import { Layout } from "~/ui"
import { api } from "~/utils/api"

const CandidatesPage: NextPage = () => {
  const { data: candidates } = api.candidates.all.useQuery()
  return (
    <>
      <Head>
        <title>Hirica candidates</title>
        <meta
          name="description"
          content="Explore Hirica candidates. Find your next IT job. +199000 active candidates."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {/* <div className="m-auto max-w-[50%]">
          <pre>{JSON.stringify(candidates, null, 2)}</pre>
        </div> */}
        <div className="flex flex-col gap-5">
          <main className="flex flex-col items-center justify-center gap-4 bg-[#FDFBF6]">
            <div className="flex items-center justify-center gap-3">
              <div className="flex flex-col gap-2 rounded-xl bg-white p-5">
                <h1 className="font-bold">Hot candidates</h1>
                <ul className="flex flex-col gap-2 text-sm">
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
              <div className="flex flex-col gap-2 rounded-xl bg-white p-5">
                <h1 className="font-bold">Candidates of the month</h1>
                <ul className="flex flex-col gap-2 text-sm">
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
              <div className="flex flex-col gap-2 rounded-xl bg-white p-5">
                <h1 className="font-bold">Candidates of the year</h1>
                <ul className="flex flex-col gap-2 text-sm">
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
            <div className="flex w-full flex-col flex-wrap items-center gap-2 rounded-xl bg-white p-7">
              {!candidates && <h1>No candidates found.</h1>}
              {candidates?.map((candidate) => (
                <>
                  <div
                    key={candidate.id}
                    className="m-auto flex w-full flex-wrap items-center justify-between gap-8"
                  >
                    <div>
                      <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                        Anonymous Frontend Developer
                      </h1>
                      <span>
                        {candidate.profileData?.currency === "USD" && "$"}
                        {candidate.profileData?.expectedSalary}{" "}
                      </span>
                    </div>
                    <div className="flex min-w-[50%] max-w-[75%] gap-2 text-sm">
                      <span className="font-bold">Skills</span>
                      <p>{candidate.profileData?.skills}</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Link href={`/candidates/${candidate.id}`}>
                        <button className="inline-flex min-w-[170px] items-center justify-center gap-2 rounded-md border border-black bg-transparent px-4 py-2 text-sm font-medium text-black shadow-sm transition-all hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:cursor-not-allowed">
                          Explore profile &rarr;
                        </button>
                      </Link>
                      <button
                        onClick={() =>
                          toast.success("Request to share contact sent.")
                        }
                        className="inline-flex min-w-[170px] items-center justify-center gap-2 rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:cursor-not-allowed"
                      >
                        <BiSolidContact /> Request contact
                      </button>
                    </div>
                  </div>
                  <hr className="flex h-4 w-full rounded-full bg-black px-2" />
                </>
              ))}
            </div>
          </main>
        </div>
      </Layout>
    </>
  )
}

export default CandidatesPage
