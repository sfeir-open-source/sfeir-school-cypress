import { LoginIcon, UserCircleIcon } from '@heroicons/react/solid';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/user-provider';
import { useAuth0 } from "@auth0/auth0-react";

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
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <button className={buttonClassName} data-cy="logout-button" onClick={() => logout({ returnTo: window.location.origin })}>
      <UserCircleIcon className={iconClassname} />
      <span>Log out</span>
    </button>
  ) : (
    <button id="login-button" className={buttonClassName} data-cy="login-button" onClick={() => loginWithRedirect()}>
      <LoginIcon className={iconClassname} />
      <span>Login</span>
    </button>
  );
}

export default LoginStatus;
