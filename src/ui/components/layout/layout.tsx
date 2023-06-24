import { Footer, Navigation } from "~/ui/modules"
import type { PropsWithChildren } from "react"

export const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <>
    <Navigation />
    <div className="my-5">{children}</div>
    <Footer />
  </>
)
