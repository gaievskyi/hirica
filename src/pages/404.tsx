import { Layout, NotFound } from 'ui'

import type { NextPage } from 'next'

const NotFoundPage: NextPage = () => (
  <Layout>
    <div className="grid h-[50vh] place-content-center px-4">
      <div className="text-center">
        <NotFound />
        <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </h1>
        <p className="mt-4 text-gray-500">We can&apos;t find that page.</p>
      </div>
    </div>
  </Layout>
)
export default NotFoundPage
