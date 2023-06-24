import { signOut, useSession } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/router"
import { type MouseEventHandler } from "react"

import { BiAward, BiCertification, BiNotification } from "react-icons/bi"
import { cn } from "~/utils/helpers"

export const Session = () => {
  const { data: session } = useSession()

  const router = useRouter()

  const isProfile = router.pathname === "/profile"

  const logout: MouseEventHandler<HTMLButtonElement> = () => {
    signOut({
      callbackUrl: "/sign-out",
    }).catch((e) => console.error(e))
  }

  return (
    <>
      <Link
        href="/profile"
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
          isProfile &&
            cn(
              "bg-gradient-to-r",
              "from-blue-300",
              "via-rose-200",
              "to-orange-500"
            )
        )}
      >
        {session?.user?.name && (
          <p className={cn("text-xs", "uppercase")}>{session.user.name}</p>
        )}
        <button
          className={cn("text-white", "underline-offset-4", "hover:underline")}
          onClick={logout}
        >
          Sign out
        </button>
      </Link>
      <div
        className={cn(
          "flex",
          "cursor-not-allowed",
          "items-center",
          "justify-between",
          "gap-4",
          "rounded-full",
          "border-white",
          "bg-black/20",
          "px-5",
          "py-2",
          "text-xs",
          "text-white",
          "transition-all",
          "duration-500",
          "ease-in-out",
          "hover:mx-2",
          "hover:scale-105"
        )}
      >
        <BiNotification />
        <BiAward />
        <BiCertification />
      </div>
    </>
  )
}
