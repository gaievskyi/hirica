import Link from 'next/link'
import { useRouter } from 'next/router'

export const NavigationLogo: React.FC = () => {
  const { pathname } = useRouter()

  return (
    <Link
      href="/"
      className={`flex items-center justify-between gap-4 rounded-full  border-white bg-black px-5 py-2 text-xs uppercase text-white transition-all duration-500 ease-in-out hover:mx-3 hover:scale-110
          ${
            pathname === '/' &&
            'bg-gradient-to-r from-blue-300 via-rose-200 to-orange-500'
          } `}
    >
      Hirica
    </Link>
  )
}
