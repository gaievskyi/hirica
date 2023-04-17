import { type AppType } from "next/app"
import { type Session } from "next-auth"
import { SessionProvider } from "next-auth/react"

import { api } from "~/utils/api"

import "~/styles/globals.css"

type AppProps = {
  session: Session | null
}

const Hirica: AppType<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => (
  <SessionProvider session={session}>
    <Component {...pageProps} />
  </SessionProvider>
)

export default api.withTRPC(Hirica)
