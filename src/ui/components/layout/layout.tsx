import { Footer, Navigation } from "~/ui/modules"
import { type PropsWithChildren } from "react"

export const Layout = ({ children }: PropsWithChildren) => (
  <>
    <Navigation />
    <div className="my-5">{children}</div>
    <Footer />
  </>
)
