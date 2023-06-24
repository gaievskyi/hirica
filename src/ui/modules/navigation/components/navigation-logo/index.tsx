import Link from "next/link"
import { useRouter } from "next/router"

import { RiArrowUpFill } from "react-icons/ri"
import { cn } from "~/utils/helpers"

type NavigationLogoProps = {
  minimized?: boolean
}

export const NavigationLogo: React.FC<NavigationLogoProps> = ({
  minimized,
}) => {
  const { pathname } = useRouter()
  const isHome = pathname === "/"

  return (
    <Link
      data-testid="navigation-logo"
      onClick={(event) => {
        if (minimized) {
          event.preventDefault()
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
      }}
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
      {minimized && <RiArrowUpFill />}
    </Link>
  )
}
