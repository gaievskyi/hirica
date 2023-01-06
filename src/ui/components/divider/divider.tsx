type DividerProps = {
  size?: 'sm' | 'md' | 'xl'
}

export const Divider: React.FC<DividerProps> = ({ size = 'md' }) => (
  <div className="hidden sm:block" aria-hidden="true">
    <div className={`${size === 'sm' ? 'py-2' : 'py-5'}`}>
      <div className="border-t border-gray-200" />
    </div>
  </div>
)
