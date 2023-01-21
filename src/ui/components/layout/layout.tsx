import { Footer, Navigation } from '@ui/modules'
import type { PropsWithChildren } from 'react'

export const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <>
    <Navigation />
    <main>{children}</main>
    <Footer />
  </>
)
