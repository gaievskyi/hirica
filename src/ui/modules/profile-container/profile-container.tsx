import type { PropsWithChildren } from 'react'

export const ProfileContainer: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="px-[5vw] lg:px-[20vw]">{children}</div>
)
