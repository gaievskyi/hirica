import Link from 'next/link'

export const Banner: React.FC = () => (
  <div className="flex flex-col items-center justify-center py-16 ">
    <h1 className="p-5 text-center text-5xl">Pay for hires only</h1>
    <h2>We charge once 25% of candidate’s one-month salary.</h2>
    <div className="m-10">
      <Link
        className="flex rounded-lg border-2 border-white bg-black px-6 py-4 text-white hover:bg-black/80"
        href="/start"
      >
        <div className="flex items-center justify-center gap-2 text-lg">
          Find developers
        </div>
      </Link>
    </div>
  </div>
)
