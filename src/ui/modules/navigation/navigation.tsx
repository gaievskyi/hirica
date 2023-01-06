import { useEffect, useState } from 'react'
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
  const [minimized, setMinimized] = useState(false)
  const [showBanner, setShowBanner] = useState(true)

  const closeBanner = () => {
    setShowBanner(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setMinimized(true)
      } else {
        setMinimized(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [setMinimized])

  return (
    <>
      {showBanner && <NavigationBanner action={closeBanner} />}
      <nav className="sticky top-0 left-0 z-[100] mb-10 flex select-none justify-center gap-2 py-2 px-24">
        <NavigationLogo minimized={minimized} />
        {!minimized && sessionData && <NavigationSession />}
        {!minimized && <NavigationLinks />}
        {!minimized && <NavigationSearch />}
      </nav>
    </>
  )
}
