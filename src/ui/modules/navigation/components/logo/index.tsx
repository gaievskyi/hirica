import Link from "next/link"
import { useRouter } from "next/router"
import { type MouseEventHandler } from "react"

import { RiArrowUpFill } from "react-icons/ri"
import { cn } from "~/utils/helpers"

type LogoProps = {
  showArrow?: boolean
}

export const Logo = ({ showArrow }: LogoProps) => {
  const { pathname } = useRouter()
  const isHome = pathname === "/"

  const scrollTop: MouseEventHandler<HTMLAnchorElement> = (event) => {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <Link
      data-testid="navigation-logo"
      onClick={showArrow ? scrollTop : undefined}
      href="/"
      className={cn(
        "flex",
        "items-center",
        "justify-between",
        "gap-4",
        "rounded-full",
        "border-white",
        "bg-black",
        "px-5",
        "py-2",
        "text-xs",
        "uppercase",
        "text-white",
        "transition-all",
        "duration-500",
        "ease-in-out",
        "hover:mx-2",
        "hover:scale-105",
        isHome && "bg-gradient-to-r from-blue-300 via-rose-200 to-orange-500"
      )}
    >
      Hirica
      {showArrow && <RiArrowUpFill />}
    </Link>
  )
}
