import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { BiAward, BiCertification, BiNotification } from 'react-icons/bi'

export const NavigationSession: React.FC = () => {
  const { data: sessionData } = useSession()
  const { pathname } = useRouter()

  return (
    <>
      <Link
        href="/profile"
        className={`flex items-center justify-between gap-4 rounded-full  border-white bg-black px-5 py-2 text-xs uppercase text-white transition-all duration-500 ease-in-out hover:mx-2 hover:scale-105
              ${
                pathname === '/profile' &&
                'bg-gradient-to-r from-blue-300 via-rose-200 to-orange-500'
              } `}
      >
        {sessionData?.user?.name && (
          <p className="text-xs uppercase">{sessionData.user.name}</p>
        )}
        <button
          className=" text-white underline-offset-4 hover:underline"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </Link>
      <div className="flex cursor-not-allowed items-center justify-between gap-4 rounded-full border-white bg-black/20 px-5 py-2 text-xs text-white transition-all duration-500 ease-in-out hover:mx-2 hover:scale-105">
        <BiNotification />
        <BiAward />
        <BiCertification />
      </div>
    </>
  )
}
