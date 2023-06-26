import { type NextPage } from "next"

import Head from "next/head"
import { useSession } from "next-auth/react"

import { Layout, AuthGate } from "~/ui"

import { cn } from "~/utils/helpers"
import toast from "react-hot-toast"
import { BiSolidContact } from "react-icons/bi"
import { api } from "~/utils/api"

const NotificationsPage: NextPage = () => {
  const utils = api.useContext()
  const { data: session } = useSession()

  const userName = session?.user.name ?? ""
  const email = session?.user.email ?? ""
  const title = `Hirica | ${userName} notifications`

  const { data: candidate } = api.candidates.one.useQuery(
    session?.user.id ?? ""
  )

  const notifications = candidate?.notifications

  const { mutate } = api.notifications.delete.useMutation({
    onSuccess: async () => {
      toast.success("Removed!")
      await utils.candidates.invalidate()
    },
    onError: () => {
      toast.error("Something went wrong during remove")
    },
  })

  if (!session) return <AuthGate />

  const remove = (id: string) => {
    mutate(id)
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Hirica is a pretty job search platform."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div
          className={cn(
            "px-[5vw]",
            "lg:px-[20vw]",
            "flex",
            "flex-col",
            "gap-2"
          )}
        >
          <h1 className="scroll-m-20 border-b pb-2 text-center text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Your notifications {notifications && `(${notifications.length})`}
          </h1>
          <>{!notifications && <h2>No notifications yet!</h2>}</>
          {notifications?.map((notification) => (
            <div
              key={notification.id}
              className="flex items-center justify-around rounded-lg border border-black bg-white p-6"
            >
              <div className="flex flex-col gap-2">
                <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  {notification.senderName}
                </h1>
                <h2>{notification.senderRole || "Candidate"}</h2>
              </div>
              <span className="px-12 text-sm">{notification.message}</span>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => toast.success("Contacts revealed!")}
                  className="inline-flex min-w-[100px] items-center justify-center gap-2 rounded-lg bg-black p-3 text-sm font-medium text-white shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-opacity-50"
                >
                  <BiSolidContact /> Share
                </button>
                <button
                  onClick={() => remove(notification.id)}
                  className="inline-flex min-w-[100px] items-center justify-center gap-2 rounded-lg border border-black p-3 text-sm font-medium text-black transition-all hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-opacity-50"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </>
  )
}

export default NotificationsPage
