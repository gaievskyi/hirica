import Link from 'next/link'

export const Banner: React.FC = () => (
  <section className="my-16 flex flex-col items-center justify-center bg-black py-16 text-white">
    <h1 className="p-5 text-center text-5xl">Pay for hires only</h1>
    <h2>We charge once 25% of candidate’s one-month salary.</h2>
    <div className="m-10">
      <Link
        className="e flex rounded-lg bg-white px-6 py-4 text-black hover:bg-white/80"
        href="/start"
      >
        <div className="flex items-center justify-center gap-2 text-lg">
          Find developers
        </div>
      </Link>
    </div>
  </section>
)
