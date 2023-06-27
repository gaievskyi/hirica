import Link from "next/link"
import { cn } from "~/utils/helpers"

export const Banner = () => (
  <section
    className={cn(
      "my-16",
      "flex",
      "flex-col",
      "items-center",
      "justify-center",
      "bg-white",
      "py-16",
      "text-black"
    )}
  >
    <h1 className="p-5 text-center text-5xl">Pay for hires</h1>
    <h2>Only 25% of the candidate one-month salary*</h2>
    <div className="m-10">
      <Link
        className={cn(
          "flex",
          "rounded-lg",
          "bg-black",
          "px-6",
          "py-4",
          "text-white",
          "hover:bg-black/80"
        )}
        href="/start"
      >
        <div className="flex items-center justify-center gap-2 text-lg">
          Find developers
        </div>
      </Link>
    </div>
  </section>
)
