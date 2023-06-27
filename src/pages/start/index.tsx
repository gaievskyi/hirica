import { type NextPage } from "next"
import Head from "next/head"

import { AuthForm, Navigation } from "~/ui"
import { Switch } from "@headlessui/react"
import { cn } from "~/utils/helpers"
import { useState } from "react"

const StartPage: NextPage = () => {
  const [isCandidate, setIsCandidate] = useState(false)
  return (
    <>
      <Head>
        <title>Authorize your Hirica</title>
        <meta
          name="description"
          content="Hirica is a web 3.0 IT job search platform"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <main
        className={cn(
          "flex",
          "flex-col",
          "gap-5",
          "w-full",
          "items-center",
          "justify-center",
          "bg-[#FDFBF6]",
          "p-6"
        )}
      >
        <AuthForm />
        <div className="flex items-center gap-4">
          <small>Candidate</small>
          <Switch
            checked={isCandidate}
            onChange={setIsCandidate}
            className={cn(
              "relative",
              "inline-flex",
              "h-[28px]",
              "w-[52px]",
              "shrink-0",
              "cursor-pointer",
              "rounded-full",
              "border-2",
              "border-transparent",
              "bg-black",
              "transition-colors",
              "duration-200",
              "ease-in-out",
              "focus:outline-none",
              isCandidate &&
                "focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            )}
          >
            <span className="sr-only">Role</span>
            <span
              aria-hidden="true"
              className={cn(
                "pointer-events-none",
                "inline-block",
                "h-[24px]",
                "w-[24px]",
                "transform",
                "rounded-full",
                "bg-white",
                "shadow-lg",
                "ring-0",
                "transition",
                "duration-200",
                "ease-in-out",
                isCandidate ? "translate-x-6" : "translate-x-0"
              )}
            />
          </Switch>
          <small>Recruiter</small>
        </div>
      </main>
    </>
  )
}

export default StartPage
