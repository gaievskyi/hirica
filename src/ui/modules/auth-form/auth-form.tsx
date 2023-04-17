import Link from "next/link"
import { signIn } from "next-auth/react"

import { FcGoogle } from "react-icons/fc"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export const AuthForm: React.FC = () => {
  return (
    <form className="flex max-w-xs flex-col gap-12">
      <Link
        href="/"
        className="text-3xl font-semibold"
      >
        Hirica • Hire and find job anonymously
      </Link>
      <div className="flex flex-col gap-3">
        <span className="text-center">Continue with</span>
        <button
          onClick={() => void signIn("google")}
          type="button"
          className="flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white hover:bg-black/80"
        >
          <FcGoogle /> Google
        </button>
        <button
          onClick={() => void signIn("github")}
          type="button"
          className="flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white hover:bg-black/80"
        >
          <FaGithub /> GitHub
        </button>
        <button
          disabled
          onClick={() => void signIn("linkedin")}
          type="button"
          className="flex cursor-not-allowed items-center gap-2 rounded-full bg-black px-6 py-3 text-white opacity-50"
        >
          <FaLinkedin
            color="0A66C2"
            className="rounded-sm bg-white"
          />{" "}
          LinkedIn
        </button>
      </div>
    </form>
  )
}
