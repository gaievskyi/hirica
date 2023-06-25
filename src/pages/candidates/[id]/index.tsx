import { type NextPage } from "next"

import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import toast from "react-hot-toast"
import { BiSolidContact } from "react-icons/bi"
import { FcLike, FcLikePlaceholder } from "react-icons/fc"
import { Layout } from "~/ui"
import { api } from "~/utils/api"

import { cn } from "~/utils/helpers"

const CandidatePage: NextPage = () => {
  const router = useRouter()
  const id = router.query.id
  const [isLiked, setIsLiked] = useState(false)

  if (!id || Array.isArray(id)) return <>Something went wrong</>

  const { data: candidate } = api.candidates.one.useQuery(id)

  const like = () => {
    setIsLiked((prevIsLiked) => {
      if (prevIsLiked) {
        toast.error("Disliked!")
      } else {
        toast.success("Liked!")
      }
      return !prevIsLiked
    })
  }

  return (
    <>
      <Head>
        <title>Signed out</title>
        <meta
          name="description"
          content="Hirica is a pretty job search platform."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="flex flex-col gap-12 px-4 md:container md:mx-auto">
          <Link href="/candidates">
            <button className="inline-flex min-w-[170px] items-center justify-center gap-2 rounded-md border border-black bg-transparent px-4 py-2 text-sm font-medium text-black shadow-sm transition-all hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:cursor-not-allowed">
              &larr; To all candidates
            </button>
          </Link>
          <div className="flex flex-col gap-3">
            <span className="mb-5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Anonymous Frontend Developer
            </span>
            <h1 className="font-bold">Expected salary</h1>
            <h2>
              {candidate?.profileData?.currency === "USD" && "$"}{" "}
              {candidate?.profileData?.expectedSalary}
            </h2>
            <h3 className="font-bold">Skills</h3>
            <h4>{candidate?.profileData?.skills}</h4>
            <h5 className="font-bold">About</h5>
            <p className="max-w-[75%]">{candidate?.profileData?.about}</p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => toast.success("Request to share contact sent.")}
              className="inline-flex min-w-[170px] items-center justify-center gap-2 rounded-md border border-transparent bg-black p-4 text-sm font-medium text-white shadow-sm transition-all hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:cursor-not-allowed md:max-w-[200px]"
            >
              <BiSolidContact /> Request contact
            </button>
            <div
              onClick={like}
              className="flex h-[50px] cursor-pointer items-center justify-center gap-2 rounded-lg border border-[#e1e1e1] bg-white px-2 transition-all hover:border-black"
            >
              {isLiked ? <FcLike size={28} /> : <FcLikePlaceholder size={28} />}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default CandidatePage
