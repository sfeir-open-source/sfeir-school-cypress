import './header.module.scss';
import CartButton from '../cart/button/button';
import LoginStatus from './login-status/login-status';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <header
      data-cy="header"
      className="sticky top-0 z-10 flex items-center justify-between px-12 py-4 text-white bg-black center gap-8"
    >
      <Link to={'/'} className="flex-grow title" data-cy="header-title">Sfeir-school: Cypress</Link>
      <CartButton />
      <LoginStatus />
    </header>
  );
}

export default Header;
