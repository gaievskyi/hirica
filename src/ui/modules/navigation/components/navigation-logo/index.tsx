import Link from 'next/link'
import { useRouter } from 'next/router'

import { RiArrowUpFill } from 'react-icons/ri'

type NavigationLogoProps = {
  minimized?: boolean
}

export const NavigationLogo: React.FC<NavigationLogoProps> = ({
  minimized,
}) => {
  const { pathname } = useRouter()

  return (
    <Link
      onClick={(e) => {
        if (minimized) {
          e.preventDefault()
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }}
      href="/"
      className={`flex items-center justify-between gap-4 rounded-full  border-white bg-black px-5 py-2 text-xs uppercase text-white transition-all duration-500 ease-in-out hover:mx-3 hover:scale-110
          ${
            pathname === '/' &&
            'bg-gradient-to-r from-blue-300 via-rose-200 to-orange-500'
          } `}
    >
      Hirica
      {minimized && <RiArrowUpFill />}
    </Link>
  )
}
