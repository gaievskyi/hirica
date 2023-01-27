import { HiricaLogo } from 'ui/components'

export const Statistics: React.FC = () => (
  <div className="flex gap-3 px-12">
    <div className="flex flex-col gap-5 rounded-xl bg-white p-24 lg:container">
      <h1 className="text-xl">Explore statistics</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        corrupti veritatis, fugiat provident impedit facilis quae, inventore
        consectetur, dignissimos laborum blanditiis maxime! Velit non ipsa
        voluptates iure? Perspiciatis, eius error. Rem libero alias, blanditiis
        dolores voluptas exercitationem assumenda fuga ipsa asperiores omnis
        quisquam molestiae deserunt eius, aliquid in. Id earum adipisci nobis
        corrupti autem eligendi in sapiente iure cumque quas? Pariatur ipsum
        quisquam ea sequi velit recusandae, itaque qui incidunt enim placeat.
      </p>
    </div>
    <div className="flex flex-col gap-5 rounded-xl bg-gradient-to-r from-blue-300 via-rose-200 to-orange-500 p-24 lg:container">
      <div className="flex max-w-lg flex-col items-center justify-center">
        <HiricaLogo />
      </div>
    </div>
  </div>
)
