import { cn } from "~/utils/helpers"

type Size = "sm" | "md" | "lg"

type DividerProps = {
  size?: Size
}

const sizes: Record<Size, string> = {
  sm: "py-2",
  md: "py-5",
  lg: "py-10",
}

export const Divider = ({ size = "md" }: DividerProps) => (
  <div aria-hidden="true" className={sizes[size]}>
    <hr className={cn("h-full w-full border-t border-gray-200")} />
  </div>
)
