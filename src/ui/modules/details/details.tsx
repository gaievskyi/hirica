export const Details: React.FC = () => (
  <div className="flex min-h-screen flex-row items-center justify-center gap-5">
    <h1 className="p-10 text-center text-5xl">As easy as pie</h1>
    <div className="flex flex-col gap-5">
      <div className="min-h-fit max-w-md rounded-full bg-[#FDFBF6] p-16">
        <p className="text-left">
          Sign up <span className="underline">for free</span>. Fill your profile
          and set your expected compensation. Don&apos;t share your data
          directly. It&apos;s a rule.
        </p>
      </div>
      <div className="max-w-md rounded-full bg-[#FDFBF6] p-16">
        <p className="text-left">
          Choose those recruiters, whom you want to reveal yourself. Recruiters
          compensate Hirica 25% of your expected salary for shared talent. You
          never pay anything.
        </p>
      </div>
    </div>
  </div>
)
