import { useRouter } from "next/router"

export const AuthGate = () => {
  const router = useRouter()

  return (
    <div className="flex h-screen flex-1 flex-col items-center justify-center gap-5">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Sorry!
      </h1>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-medium tracking-tight transition-colors first:mt-0">
        You are not authenticated to view this page.
      </h2>
      <button
        className="inline-flex justify-center rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        onClick={() => void router.push("/")}
      >
        Back
      </button>
    </div>
  )
}
