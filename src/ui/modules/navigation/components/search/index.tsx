import { BiSearch } from "react-icons/bi"
import { cn } from "~/utils/helpers"

export const Search = () => (
  <button
    className={cn(
      "flex",
      "cursor-not-allowed",
      "items-center",
      "justify-between",
      "gap-5",
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
    <BiSearch />
  </button>
)
