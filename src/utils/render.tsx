import Router from 'next/router'
import { Suspense } from 'react'

import { render } from '@testing-library/react'
import { SessionProvider } from 'next-auth/react'
import { RouterContext } from 'next/dist/shared/lib/router-context'

import type { RenderOptions } from '@testing-library/react'
import type { Session } from 'next-auth'
import type { FC, PropsWithChildren, ReactElement } from 'react'

import { createMockRouter } from './test-utils'

type MockProps = PropsWithChildren & unknown

const mockSession: Session = {
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
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: MockApp, ...options })

export * from '@testing-library/react'
export { mockRender as render, mockRouter as router, mockSession as session }
