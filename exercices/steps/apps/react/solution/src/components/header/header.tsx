import './header.module.scss'
import CartButton from '../cart/button/button'
import LoginStatus from './login-status/login-status'

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header (props: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between px-12 py-4 text-white bg-black center gap-8">
      <h1 className="flex-grow title">Sfeir-school: Cypress</h1>
      <CartButton />
      <LoginStatus />
    </header>
  )
}

export default Header
