import Router from "next/router"
import { Suspense } from "react"

import { render } from "@testing-library/react"
import { SessionProvider } from "next-auth/react"
import { RouterContext } from "next/dist/shared/lib/router-context"

import type { NextRouter } from "next/router"
import { type RenderOptions } from "@testing-library/react"
import { type Session } from "next-auth"
import { type FC, type PropsWithChildren, type ReactElement } from "react"

type MockProps = PropsWithChildren & unknown

export const createMockRouter = (router: NextRouter): NextRouter => ({
  ...router,
  basePath: "",
  pathname: "/",
  route: "/",
  query: {},
  asPath: "/",
  back: jest.fn(),
  beforePopState: jest.fn(),
  prefetch: jest.fn(),
  push: jest.fn(),
  reload: jest.fn(),
  replace: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
  isLocaleDomain: false,
  isReady: true,
  defaultLocale: "en",
  domainLocales: [],
  isPreview: false,
})

const mockSession: Session = {
  user: {
    id: crypto.randomUUID(),
  },
  expires: `${Date.now() * 100}`,
}

const mockRouter = createMockRouter(Router)

const MockApp: FC<MockProps> = ({ children }) => (
  <Suspense>
    <RouterContext.Provider value={mockRouter}>
      <SessionProvider session={mockSession}>{children}</SessionProvider>
    </RouterContext.Provider>
  </Suspense>
)

const mockRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: MockApp, ...options })

export * from "@testing-library/react"
export { mockRender as render, mockRouter as router, mockSession as session }
