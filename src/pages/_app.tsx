import { type AppType } from "next/app"
import { type Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import { Toaster } from "react-hot-toast"

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
    <Toaster
      position="bottom-right"
      toastOptions={{
        duration: 3000,
      }}
    />
  </SessionProvider>
)

export default api.withTRPC(Hirica)
