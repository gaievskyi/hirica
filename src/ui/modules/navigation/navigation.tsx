import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"

import {
  // NavigationBanner,
  NavigationLinks,
  NavigationLogo,
  NavigationSearch,
  NavigationSession,
} from "./components"

export const Navigation: React.FC = () => {
  const { data: session } = useSession()
  const [minimized, setMinimized] = useState(false)
  // const [showBanner, setShowBanner] = useState(true)

  // const closeBanner = () => {
  //   setShowBanner(false)
  // }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 1) {
        setMinimized(true)
        // setShowBanner(false)
      } else {
        setMinimized(false)
        // setShowBanner(true)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      {/* {showBanner && <NavigationBanner action={closeBanner} />} */}
      <nav className="sticky left-0 top-0 z-[100] flex select-none justify-center gap-2 px-8 py-2">
        <NavigationLogo minimized={minimized} />
        <div className="flex flex-wrap gap-3">
          {!minimized && session && <NavigationSession />}
          {!minimized && <NavigationLinks />}
          {!minimized && <NavigationSearch />}
        </div>
      </nav>
    </>
  )
}
