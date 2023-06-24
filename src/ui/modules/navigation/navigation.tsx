import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { cn } from "~/utils/helpers"

import { Links, Logo, Search, Session } from "./components"

export const Navigation = () => {
  const { data: session } = useSession()
  const [minimized, setMinimized] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 2) {
        setMinimized(true)
      } else {
        setMinimized(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])


  return (
    <nav
      className={cn(
        "sticky",
        "left-0",
        "top-0",
        "z-[100]",
        "flex",
        "select-none",
        "justify-center",
        "gap-2",
        "px-8",
        "py-2"
      )}
    >
      <Logo showArrow={minimized} />
      <div className={cn("flex", "flex-wrap", "gap-3")}>
        {session && <Session />}
        <Links />
        <Search />
      </div>
    </nav>
  )
}
