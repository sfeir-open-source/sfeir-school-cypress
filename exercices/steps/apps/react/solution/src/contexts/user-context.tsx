
import { createContext, useCallback, useEffect, useState, PropsWithChildren } from 'react'
import { signin as signInUser, UserDTO } from '../api/user'

type User = UserDTO|null

interface UserContextProps {
    user: User,
    signIn: (username: string, password: string) => Promise<void>,
    logout: () => void,
    loading: boolean
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps)

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UserProps {
}

const LOCAL_STORAGE_USER_KEY = 'user'
const STORAGE_EVENT_KEY = 'storage'
function useUser ():UserContextProps {
  const [user, setUser] = useState<User>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const signIn = useCallback((username: string, password: string) => {
    setLoading(true)
    return signInUser(username, password)
      .then((response) => {
        window.localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response))
      }).finally(() => {
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    const handleStorage = () => {
      const stringUser = window.localStorage.getItem(LOCAL_STORAGE_USER_KEY)
      setUser(stringUser ? JSON.parse(stringUser) : null)
    }

    window.addEventListener(STORAGE_EVENT_KEY, handleStorage)
    return () => window.removeEventListener(STORAGE_EVENT_KEY, handleStorage)
  }, [])

  const logout = useCallback(() => {
    window.localStorage.removeItem(LOCAL_STORAGE_USER_KEY)
    setUser(null)
  }, [])

  return {
    user,
    logout,
    signIn,
    loading
  }
}

export function UserProvider ({ children }: PropsWithChildren<UserProps>) {
  const user = useUser()

  return (
    <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider
