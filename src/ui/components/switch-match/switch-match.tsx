import {
  createContext,
  useContext,
  Children,
  isValidElement,
  type PropsWithChildren,
  type FC,
  type ReactNode,
} from "react"

type MatchProps = PropsWithChildren<{
  when: boolean
}>

type SwitchProps = PropsWithChildren<{
  fallback: ReactNode
}>

const IsMatchInSwitchCtx = createContext<boolean>(false)
const useIsMatchInSwitch = () => useContext(IsMatchInSwitchCtx)

type SwitchMatchGuardProps = PropsWithChildren

const SwitchMatchGuard: FC<SwitchMatchGuardProps> = ({ children }) => (
  <IsMatchInSwitchCtx.Provider value={true}>
    {children}
  </IsMatchInSwitchCtx.Provider>
)

const Switch: FC<SwitchProps> = ({ fallback, children }) => {
  let matchFound = false

  const matchedChild = Children.toArray(children).find((child) => {
    if (matchFound) {
      return false
    }

    if (isValidElement<MatchProps>(child)) {
      const { when } = child.props
      if (when) {
        matchFound = true
        return true
      }
    }

    return false
  })

  return (
    <SwitchMatchGuard>{matchFound ? matchedChild : fallback}</SwitchMatchGuard>
  )
}

const Match: FC<MatchProps> = ({ when, children }) => {
  const isInsideSwitch = useIsMatchInSwitch()

  if (!isInsideSwitch) {
    throw new Error("Match components must be used inside a Switch component")
  }

  return when ? <>{children}</> : null
}

export { Switch, Match }
