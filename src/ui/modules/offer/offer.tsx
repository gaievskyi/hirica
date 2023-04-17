import Link from 'next/link'

import { Divider } from '~/ui/components'

export const Offer: React.FC = () => (
  <section className="mx-auto my-5 max-w-7xl rounded-2xl bg-white py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-16">
    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      <span className="block">Ready to dive in?</span>
      <span className="block text-indigo-700">
        Check out people who need you right now
      </span>
    </h2>
    <div className="mt-8 flex h-full flex-col items-center gap-5 p-12 font-semibold capitalize lg:mt-0 lg:flex-shrink-0">
      <Link href="/candidates">Candidates</Link>
      <Divider size="sm" />
      <Link href="/jobs">Jobs</Link>
    </div>
  </section>
)
