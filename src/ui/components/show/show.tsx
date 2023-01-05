import type { FC, PropsWithChildren, ReactNode } from 'react'

type Props = PropsWithChildren & {
  when: boolean
  fallback?: ReactNode
}

export const Show: FC<Props> = ({ children, when: ready, fallback }) => (
  <>{ready ? children : fallback ?? <></>}</>
)
