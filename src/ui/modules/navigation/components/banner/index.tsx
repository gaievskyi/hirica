import { IoCloseOutline } from "react-icons/io5"
import { cn } from "~/utils/helpers"

type BannerProps = {
  action: () => void
}

export const Banner = ({ action }: BannerProps) => (
  <div
    className={cn(
      "flex",
      "items-center",
      "justify-center",
      "bg-gradient-to-r",
      "from-blue-300",
      "via-rose-200",
      "to-orange-500",
      "py-7",
      "text-center",
      "text-xs"
    )}
  >
    <h1>Hirica is a job share platform. Anonymous and free.</h1>
    <IoCloseOutline
      fontSize={24}
      className={cn("absolute", "right-5", "cursor-pointer")}
      onClick={action}
    />
  </div>
)
