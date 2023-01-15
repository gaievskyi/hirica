type DividerProps = {
  size?: 'sm' | 'md' | 'xl'
}

export const Divider: React.FC<DividerProps> = ({ size = 'md' }) => (
  <div aria-hidden="true" className={`${size === 'sm' ? 'py-2' : 'py-5'}`}>
    <hr className="h-full w-full border-t border-gray-200" />
  </div>
)
