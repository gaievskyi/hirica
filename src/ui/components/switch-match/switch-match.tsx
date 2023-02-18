import { createContext, useContext, Children, isValidElement } from 'react'

type MatchProps = {
  when: boolean
  children: JSX.Element
}

type SwitchProps = {
  fallback: React.ReactNode
  children: React.ReactNode
}

const IsMatchInSwitchCtx = createContext<boolean>(false)
const useIsMatchInSwitch = () => useContext(IsMatchInSwitchCtx)

const SwitchMatchGuard = ({ children }) => (
  <IsMatchInSwitchCtx.Provider value={true}>
    {children}
  </IsMatchInSwitchCtx.Provider>
)

const Switch: React.FC<SwitchProps> = ({ fallback, children }) => {
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

const Match: React.FC<MatchProps> = ({ when, children }) => {
  const isInsideSwitch = useIsMatchInSwitch()

  if (!isInsideSwitch) {
    throw new Error('Match components must be used inside a Switch component')
  }

  return when ? <>{children}</> : null
}

export { Switch, Match }
