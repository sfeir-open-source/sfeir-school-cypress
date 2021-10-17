import './header.module.scss'
import CartButton from '../cart/button/button'

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header (props: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between px-12 py-4 text-white bg-black center">
      <h1>Sfeir-school: Cypress</h1>
      <CartButton />
    </header>
  )
}

export default Header
