import Link from "next/link"
import { signIn } from "next-auth/react"

import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"

import { cn } from "~/utils/helpers"
import { type BuiltInProviderType } from "next-auth/providers"
import { type PropsWithChildren } from "react"
import { useRouter } from "next/router"

export const AuthForm = () => (
  <form className={cn("flex", "max-w-xs", "flex-col", "gap-12")}>
    <Link href="/" className={cn("text-3xl", "font-semibold")}>
      Hirica • Hire and find job anonymously
    </Link>
    <div className="flex flex-col gap-3">
      <span className="text-center">Continue with</span>
      <SocialButton provider="google">
        <FcGoogle /> Google
      </SocialButton>
      <SocialButton provider="github">
        <FaGithub /> GitHub
      </SocialButton>
    </div>
  </form>
)

type SocialButtonProps = PropsWithChildren & {
  provider: BuiltInProviderType
}

const SocialButton = ({ children, provider }: SocialButtonProps) => {
  const login = () => {
    signIn(provider, { callbackUrl: "/profile" }).catch((e) => console.error(e))
  }
  return (
    <button
      onClick={login}
      type="button"
      className={cn(
        "flex",
        "items-center",
        "gap-2",
        "rounded-full",
        "bg-black",
        "px-6",
        "py-3",
        "text-white",
        "hover:bg-black/80"
      )}
    >
      {children}
    </button>
  )
}
