import Link from "next/link"
import { useRouter } from "next/router"
import { cn } from "~/utils/helpers"

const routes = ["/candidates", "/jobs", "/statistics"]

export const NavigationLinks: React.FC = () => {
  const { pathname } = useRouter()

  const isAnySelected = routes.includes(pathname)
  const isCandidates = pathname === "/candidates"
  const isJobs = pathname === "/jobs"
  const isStatistics = pathname === "/statistics"

  return (
    <div className={cn(container, isAnySelected && bgGradient)}>
      <div className={links}>
        <Link href="/candidates" className={cn(isCandidates && activeLink)}>
          Candidates
        </Link>
        <Link href="/jobs" className={cn(isJobs && activeLink)}>
          Jobs
        </Link>
        <Link href="/statistics" className={cn(isStatistics && activeLink)}>
          Statistics
        </Link>
      </div>
    </div>
  )
}

const bgGradient = cn(
  "bg-gradient-to-r",
  "from-blue-300",
  "via-rose-200",
  "to-orange-500"
)

const container = cn(
  "flex",
  "items-center",
  "justify-between",
  "gap-4",
  "rounded-full",
  "border-white",
  "bg-black",
  "text-white",
  "px-5",
  "py-2",
  "text-xs",
  "uppercase",
  "transition-all",
  "duration-500",
  "ease-in-out",
  "hover:mx-2",
  "hover:scale-105"
)

const links = cn("flex", "gap-16", "text-xs", "uppercase")
const activeLink = cn("text-black")
