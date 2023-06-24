import { Footer, Navigation } from "~/ui/modules"
import { type PropsWithChildren } from "react"
import { useRouter } from "next/router"

export const Layout = ({ children }: PropsWithChildren) => {
  const router = useRouter()
  const isSignOut = router.pathname === "/sign-out"
  return (
    <>
      <Navigation />
      <div className="my-5">{children}</div>
      {!isSignOut && <Footer />}
    </>
  )
}
