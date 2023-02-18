type Size = 'sm' | 'md' | 'lg'

type DividerProps = {
  size?: Size
}

const sizes: Record<Size, string> = {
  sm: 'py-2',
  md: 'py-5',
  lg: 'py-10',
}

export const Divider: React.FC<DividerProps> = ({ size = 'md' }) => (
  <div aria-hidden="true" className={sizes[size]}>
    <hr className="h-full w-full border-t border-gray-200" />
  </div>
)
