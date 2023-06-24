import Link from "next/link"
import { useRouter } from "next/router"
import { cn } from "~/utils/helpers"

const routes = ["/candidates", "/jobs", "/statistics"]

export const Links = () => {
  const { pathname } = useRouter()

  const isAnySelected = routes.includes(pathname)
  const isCandidates = pathname === "/candidates"
  const isJobs = pathname === "/jobs"
  const isStatistics = pathname === "/statistics"

  return (
    <div
      className={cn(
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
        "hover:scale-105",
        isAnySelected &&
          "bg-gradient-to-r from-blue-300 via-rose-200 to-orange-500"
      )}
    >
      <div className={cn("flex", "gap-16", "text-xs", "uppercase")}>
        <Link href="/candidates" className={cn(isCandidates && "text-black")}>
          Candidates
        </Link>
        <Link href="/jobs" className={cn(isJobs && "text-black")}>
          Jobs
        </Link>
        <Link href="/statistics" className={cn(isStatistics && "text-black")}>
          Statistics
        </Link>
      </div>
    </div>
  )
}
