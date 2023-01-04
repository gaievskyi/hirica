import { SiSuperuser } from 'react-icons/si'
import { GiCobweb, GiNinjaMask } from 'react-icons/gi'
import { MdMoneyOff } from 'react-icons/md'

const features = [
  {
    name: 'No fees',
    description:
      'We do not collect commission from interaction with Hirica. We only charge one time if a person hired 25% of their expected salary to keep the lights on.',
    icon: <MdMoneyOff className="h-5 w-5" />,
  },
  {
    name: 'Anonymous',
    description:
      'Only you can choose who you want to reveal your contact information to and dive into recruitment process. We do not share your information with anyone.',
    icon: <GiNinjaMask className="h-5 w-5" />,
  },
  {
    name: 'Web 3.0',
    description:
      'Hirica is a Web 3.0 job search platform. We use the latest technologies to make your experience better. Hirica is decentralized and anonymous.',
    icon: <GiCobweb className="h-5 w-5" />,
  },
  {
    name: 'User friendly',
    description:
      'We are working constantly on making Hirica as user friendly as possible. We create tools for recruiters and candidates to make the process of hiring and finding a job easier for both sides.',
    icon: <SiSuperuser className="h-5 w-5" />,
  },
]

export const Features: React.FC = () => (
  <div className="bg-white py-24 sm:py-32 lg:py-40">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="sm:text-center">
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          An easier way to hire and be hired
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          No fees, no middlemen. Just you and the person you need.
        </p>
      </div>

      <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
        <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-black text-white sm:shrink-0">
                {feature.icon}
              </div>
              <div className="sm:min-w-0 sm:flex-1">
                <p className="text-lg font-semibold leading-8 text-gray-900">
                  {feature.name}
                </p>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)
