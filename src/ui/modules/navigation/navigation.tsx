import { useState } from 'react'
import { useSession } from 'next-auth/react'

import {
  NavigationBanner,
  NavigationLinks,
  NavigationLogo,
  NavigationSearch,
  NavigationSession,
} from './components'

export const Navigation: React.FC = () => {
  const { data: sessionData } = useSession()
  const [showBanner, setShowBanner] = useState(true)

  const closeBanner = () => {
    setShowBanner(false)
  }

  return (
    <>
      {showBanner && <NavigationBanner action={closeBanner} />}
      <nav className="sticky top-0 left-0 z-[100] mb-10 flex select-none justify-center gap-2 py-2">
        <NavigationLogo />
        {sessionData && <NavigationSession />}
        <NavigationLinks />
        <NavigationSearch />
      </nav>
    </>
  )
}
