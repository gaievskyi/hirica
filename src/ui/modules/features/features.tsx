import { GiCobweb, GiNinjaMask, GiAchievement } from 'react-icons/gi'
import { MdMoneyOff } from 'react-icons/md'
import { SiSuperuser } from 'react-icons/si'
import { AiOutlineSmile } from 'react-icons/ai'

import { Divider } from 'ui/components'

const features = [
  {
    name: 'No fees',
    description:
      'We do not collect commission from interaction with Hirica. We only charge one time if a person hired 25% of their expected salary to keep the lights on.',
    icon: <MdMoneyOff className="h-4 w-4" />,
  },
  {
    name: 'Anonymous',
    description:
      'Only you can choose who you want to reveal your contact information to and dive into the recruitment process. We do not share your information with anyone.',
    icon: <GiNinjaMask className="h-4 w-4" />,
  },
  {
    name: 'Web 3.0',
    description:
      'Hirica is a Web 3.0 job search platform. It is decentralized and anonymous, we use the latest technologies to make your experience better.',
    icon: <GiCobweb className="h-4 w-4" />,
  },
  {
    name: 'User friendly',
    description:
      'We are working constantly on making Hirica as user friendly as possible. We create tools for recruiters and candidates to make the process of hiring and finding a job easier for both sides.',
    icon: <SiSuperuser className="h-4 w-4" />,
  },
  {
    name: 'Truth',
    description:
      'We created an algorithm which moderates our content. We do not allow any fake information to be posted on our platform, so that you can be sure that you are talking to a real person.',
    icon: <AiOutlineSmile className="h-4 w-4" />,
  },
  {
    name: 'Achievements',
    description:
      'Consider your profile as a game. The more achievements you get, the more you will be noticed by recruiters. Both employees and employers can receive profile badges for their interactions with Hirica.',
    icon: <GiAchievement className="h-4 w-4" />,
  },
] as const

export const Features: React.FC = () => (
  <section className="lg:container">
    <div className="sm:text-center">
      <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        An easier way to hire and be hired
      </p>
      <p className="mx-auto mt-3 mb-4 max-w-2xl text-lg leading-8 text-gray-600">
        No fees, no middlemen. Just you and the person you need.
      </p>
    </div>
    <div className="mx-auto max-w-7xl rounded-xl bg-white px-12 py-16 lg:px-24">
      <div className="max-w-lg sm:mx-auto md:max-w-none">
        <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-white sm:shrink-0">
                {feature.icon}
              </div>
              <div className="sm:min-w-0 sm:flex-1">
                <p className="text-lg font-semibold leading-8 text-gray-900">
                  {feature.name}
                </p>
                <Divider size="sm" />
                <p className="text-sm leading-6 text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)
