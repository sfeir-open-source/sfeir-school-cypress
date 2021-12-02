import { LoginIcon, UserCircleIcon } from '@heroicons/react/solid';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../contexts/user-provider';

import './login-status.module.scss';

/* eslint-disable-next-line */
export interface LoginStatusProps {}

export interface User {
  id: string;
  name: string;
}

const buttonClassName = 'flex items-center text-white';
const iconClassname = 'w-8 h-8 mr-2';

export function LoginStatus(props: LoginStatusProps) {
  const login = useContext(UserContext);

  return login.user ? (
    <button className={buttonClassName} data-cy="user-button" onClick={login?.logout}>
      <UserCircleIcon className={iconClassname} />
      <span>{login.user?.username}</span>
    </button>
  ) : (
    <Link to="/signin" id="login-button" className={buttonClassName} data-cy="login-button">
      <LoginIcon className={iconClassname} />
      <span>Login</span>
    </Link>
  );
}

export default LoginStatus;
