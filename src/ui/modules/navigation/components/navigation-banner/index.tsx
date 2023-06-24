import { IoCloseOutline } from "react-icons/io5"
import { cn } from '~/utils/helpers'

type NavigationBannerProps = {
  action: () => void
}

export const NavigationBanner: React.FC<NavigationBannerProps> = ({
  action,
}) => (
  <div className={banner}>
    <h1>Hirica is a Web 3.0 job share platform. Anonymous and free.</h1>
    <IoCloseOutline
      fontSize={24}
      className="absolute right-5 cursor-pointer"
      onClick={action}
    />
  </div>
)

// "flex items-center justify-center bg-gradient-to-r from-blue-300 via-rose-200 to-orange-500 py-7 text-center text-xs"
const banner = cn(

)
