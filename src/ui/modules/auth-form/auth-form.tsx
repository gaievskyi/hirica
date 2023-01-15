import { useEffect } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/react'

import { FcGoogle } from 'react-icons/fc'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiApple } from 'react-icons/si'

export const AuthForm: React.FC = () => {
  const { data: sessionData } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (sessionData) {
      router.push('/profile')
    }
  }, [router, sessionData])

  return (
    <form className="flex flex-col gap-12">
      <Link href="/" className="text-3xl font-semibold">
        Hirica • Hire and find job anonymously
      </Link>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">E-mail</label>
        <input
          required
          type="email"
          name="email"
          className="border-0 border-b-2 border-black bg-transparent py-3 px-0 text-sm"
          placeholder="Enter your e-mail address here."
        />
      </div>
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => signIn('email')}
          type="submit"
          className="flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white hover:bg-black/80"
        >
          Login
        </button>
        <span>or continue with</span>
        <button
          onClick={() => signIn('google')}
          type="submit"
          className="flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white hover:bg-black/80"
        >
          <FcGoogle /> Google
        </button>
        <button
          disabled
          onClick={() => signIn('linkedin')}
          type="submit"
          className="flex cursor-not-allowed items-center gap-2 rounded-full bg-black px-6 py-3 text-white opacity-50"
        >
          <FaLinkedin color="0A66C2" className="rounded-sm bg-white" /> LinkedIn
        </button>
        <button
          onClick={() => signIn('github')}
          type="submit"
          className="flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white hover:bg-black/80"
        >
          <FaGithub /> GitHub
        </button>
        <button
          disabled
          onClick={() => signIn('apple')}
          type="submit"
          className="flex cursor-not-allowed items-center gap-2 rounded-full bg-black px-6 py-3 text-white opacity-50"
        >
          <SiApple /> Apple
        </button>
      </div>
    </form>
  )
}
