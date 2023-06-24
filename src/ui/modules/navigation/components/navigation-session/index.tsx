import { signOut, useSession } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/router"

import { BiAward, BiCertification, BiNotification } from "react-icons/bi"
import { cn } from "~/utils/helpers"

export const NavigationSession: React.FC = () => {
  const { data: session } = useSession()
  const router = useRouter()

  const isProfile = router.pathname === "/profile"

  return (
    <>
      <Link
        href="/profile"
        className={cn(profileLink, isProfile && bgGradient)}
      >
        {session?.user?.name && <p className={userName}>{session.user.name}</p>}
        <button
          className={signOutButton}
          onClick={() => void signOut().then(() => router.push("/sign-out"))}
        >
          Sign out
        </button>
      </Link>
      <div className={sessionBlock}>
        <BiNotification />
        <BiAward />
        <BiCertification />
      </div>
    </>
  )
}

const profileLink = cn(
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
  "hover:scale-105"
)

const sessionBlock = cn(
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
)

const bgGradient = cn(
  "bg-gradient-to-r",
  "from-blue-300",
  "via-rose-200",
  "to-orange-500"
)

const signOutButton = cn("text-white", "underline-offset-4", "hover:underline")
const userName = cn("text-xs", "uppercase")
