import Link from 'next/link'

export const Offer: React.FC = () => (
  <section className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      <span className="block">Ready to dive in?</span>
      <span className="block text-indigo-700">
        Check out people you need right now
      </span>
    </h2>
    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
      <div className="inline-flex rounded-md shadow">
        <Link
          href="/candidates"
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-black px-5 py-3 text-base font-medium text-white hover:bg-black/80"
        >
          Explore candidates
        </Link>
      </div>
      <div className="ml-3 inline-flex rounded-md shadow">
        <Link
          href="/jobs"
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-50"
        >
          Explore jobs
        </Link>
      </div>
    </div>
  </section>
)