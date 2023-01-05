import { IoCloseOutline } from 'react-icons/io5'

type NavigationBannerProps = {
  action: () => void
}

export const NavigationBanner: React.FC<NavigationBannerProps> = ({
  action,
}) => (
  <div className="flex items-center justify-center bg-gradient-to-r from-blue-300 via-rose-200 to-orange-500 py-5 text-center text-xs">
    <h1>Hirica is a Web 3.0 job share platform. Anonymous and free.</h1>
    <IoCloseOutline
      fontSize={24}
      className="absolute right-5 cursor-pointer"
      onClick={action}
    />
  </div>
)
