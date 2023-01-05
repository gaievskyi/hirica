import type { PropsWithChildren } from 'react'

export const ProfileContainer: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="px-96 py-8">{children}</div>
)
