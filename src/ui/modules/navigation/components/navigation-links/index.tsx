import Link from 'next/link'
import { useRouter } from 'next/router'

export const NavigationLinks: React.FC = () => {
  const { pathname } = useRouter()

  return (
    <div
      className={`flex items-center justify-between gap-4 rounded-full  border-white bg-black px-5 py-2 text-xs uppercase text-white transition-all duration-500 ease-in-out hover:mx-2 hover:scale-105
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
  )
}
