import { type AppType } from 'next/app'
import { type Session } from 'next-auth'

import { SessionProvider } from 'next-auth/react'

import { trpc } from 'utils/trpc'

import 'styles/globals.css'

type AppProps = { session: Session | null }

const Hirica: AppType<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => (
  <SessionProvider session={session}>
    <Component {...pageProps} />
  </SessionProvider>
)

export default trpc.withTRPC(Hirica)
