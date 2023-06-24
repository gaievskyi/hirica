import type { PropsWithChildren } from "react"

type ShowProps = PropsWithChildren & {
  when: boolean
  fallback?: JSX.Element
}

export const Show = ({ children, when, fallback = <></> }: ShowProps) => (
  <>{when ? <>{children}</> : fallback}</>
)
