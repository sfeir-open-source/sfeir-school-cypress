import { LoginIcon, UserCircleIcon } from '@heroicons/react/solid'
import { useCallback, useState, useEffect } from 'react'

import './login-status.module.scss'

/* eslint-disable-next-line */
export interface LoginStatusProps {}

export interface User {
  id: string,
  name: string
}

interface UserCookie {
  user: User,
  logout: () => void
}
export function useLogin ():UserCookie|null {
  const [user, setUser] = useState<User|null>(null)

  useEffect(() => {
    const handleStorage = () => {
      const stringUser = window.localStorage.getItem('user')
      setUser(stringUser ? JSON.parse(stringUser) : null)
    }

    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [])

  const logout = useCallback(() => {
    window.localStorage.removeItem('user')
    setUser(null)
  }, [])

  return user
    ? {
        user,
        logout
      }
    : null
}

const buttonClassName = 'flex items-center text-white'
const iconClassname = 'w-8 h-8 mr-2'

export function LoginStatus (props: LoginStatusProps) {
  const login = useLogin()

  return (
    login
      ? <button className={buttonClassName} data-cy="user-button" onClick={login?.logout}>
          <UserCircleIcon className={iconClassname}/>
          <span>{login.user.name}</span>
        </button>
      : <a href="/signin" className={buttonClassName} data-cy="login-button">
          <LoginIcon className={iconClassname}/>
          <span>Login</span>
        </a>
  )
}

export default LoginStatus
