import type { PropsWithChildren } from "react"

type ShowProps = PropsWithChildren<{
  when: boolean
  fallback?: JSX.Element
}>

export const Show: React.FC<ShowProps> = ({
  children,
  when,
  fallback = null,
}) => <>{when ? <>{children}</> : fallback}</>
