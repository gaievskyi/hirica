import Link from "next/link";

type AuthFormProps = {
  action: () => void;
};

export const AuthForm: React.FC<AuthFormProps> = ({ action }) => (
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
        className="rounded-xl border-2 border-black p-4 text-sm"
        placeholder="john.doe@email.com"
      />
    </div>
    <div className="flex items-center justify-center gap-3">
      <button
        onClick={action}
        type="submit"
        className="rounded-full bg-black px-6 py-3 text-white hover:bg-black/80 "
      >
        Next
      </button>
      <span>or continue with</span>
      <button
        type="submit"
        className="rounded-full bg-black px-6 py-3 text-white hover:bg-black/80"
      >
        Web 3.0
      </button>
      <button
        type="submit"
        className="rounded-full bg-black px-6 py-3 text-white hover:bg-black/80"
      >
        LinkedIn
      </button>
      <button
        type="submit"
        className="rounded-full bg-black px-6 py-3 text-white hover:bg-black/80"
      >
        GitHub
      </button>
    </div>
  </form>
);
