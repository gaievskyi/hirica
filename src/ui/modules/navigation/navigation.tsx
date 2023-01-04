import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useSession, signOut } from 'next-auth/react'

import {
  BiNotification,
  BiSearch,
  BiAward,
  BiCertification,
} from 'react-icons/bi'
import { IoCloseOutline } from 'react-icons/io5'

export const Navigation: React.FC = () => {
  const { data: sessionData } = useSession()
  const { pathname } = useRouter()
  const [showBanner, setShowBanner] = useState(true)

  return (
    <>
      {showBanner && (
        <div className="flex items-center justify-center bg-gradient-to-r from-blue-300 via-rose-200 to-orange-500 py-5 text-center text-xs">
          <h1>Hirica is a Web 3.0 job share platform. Anonymous and free.</h1>
          <IoCloseOutline
            fontSize={24}
            className="absolute right-5 cursor-pointer"
            onClick={() => {
              setShowBanner(false)
            }}
          />
        </div>
      )}
      <nav
        data-testid="navigation"
        className="sticky top-0 left-0 z-[100] mb-10 flex select-none justify-center gap-2 p-1"
      >
        <Link
          href="/"
          className={`flex items-center justify-between gap-4 rounded-full border-2 border-white bg-black px-5 py-2 text-xs uppercase text-white transition-all duration-500 ease-in-out hover:mx-3 hover:scale-110
          ${
            pathname === '/' &&
            'bg-gradient-to-r from-blue-300 via-rose-200 to-orange-500'
          } `}
        >
          Hirica
        </Link>
        {sessionData && (
          <>
            <Link
              href="/profile"
              className={`flex items-center justify-between gap-4 rounded-full border-2 border-white bg-black px-5 py-2 text-xs uppercase text-white transition-all duration-500 ease-in-out hover:mx-3 hover:scale-110
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
            <div className="flex items-center justify-between gap-4 rounded-full border-2 border-white bg-black/20 px-5 py-2 text-white transition-all duration-500 ease-in-out hover:mx-3 hover:scale-110">
              <BiNotification />
              <BiAward />
              <BiCertification />
            </div>
          </>
        )}

        <div
          className={`flex items-center justify-between gap-4 rounded-full border-2 border-white bg-black px-5 py-2 text-xs uppercase text-white transition-all duration-500 ease-in-out hover:mx-3 hover:scale-110
          ${
            (pathname === '/candidates' ||
              pathname === '/jobs' ||
              pathname === '/statistics') &&
            'bg-gradient-to-r from-blue-300 via-rose-200 to-orange-500'
          }`}
        >
          <div className="flex gap-16 text-xs uppercase">
            <Link
              href="/candidates"
              className={`${pathname === '/candidates' && 'text-black'}`}
            >
              Candidates
            </Link>
            <Link
              href="/jobs"
              className={`${pathname === '/jobs' && 'text-black'}`}
            >
              Jobs
            </Link>
            <Link
              href="/statistics"
              className={`${pathname === '/statistics' && 'text-black'}`}
            >
              Statistics
            </Link>
          </div>
        </div>
        <button className="flex items-center justify-between gap-5 rounded-full border-2 border-white bg-black px-5 py-2 text-xs text-white transition-all duration-500 ease-in-out hover:mx-3 hover:scale-110">
          <BiSearch />
        </button>
      </nav>
    </>
  )
}
