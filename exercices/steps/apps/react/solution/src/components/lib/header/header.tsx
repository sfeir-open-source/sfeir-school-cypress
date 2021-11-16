import './header.module.scss'

export interface HeaderProps {
  label: string,
  className?: string
}

export function Header ({ className = '', label }: HeaderProps) {
  return (
    <h2 className={`p-4 text-lg bold ${className}`}>{label}</h2>
  )
}

export default Header
