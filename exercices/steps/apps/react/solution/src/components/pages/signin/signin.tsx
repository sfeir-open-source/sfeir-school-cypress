import css from './signin.module.scss'
import { useCallback, useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { UserContext } from '../../../contexts/user-context'
/* eslint-disable-next-line */
export interface SigninProps {}

export function Signin (props: SigninProps) {
  const history = useHistory()

  const { signIn, loading, errorLabel } = useContext(UserContext)

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSignIn = useCallback(() => {
    signIn(username, password).then(() => history.replace('/'))
  }, [username, password, signIn, history])

  return (
    <div className="h-screen bg-gray-200" style={{ paddingTop: '120px' }}>
      <div className="flex flex-col p-16 m-auto bg-white border rounded-lg shadow-lg gap-8 max-w-screen-sm">
        <h2 className={css.signIn}>Signin:</h2>

        <div className={css['input-wrapper']}>
          <label htmlFor="username">Username:</label>
          <input
            data-cy="username-input"
            type="text"
            name="username"
            value={username}
            className={css.input}
            onChange={e => setUsername(e.currentTarget.value)}/>
        </div>

        <div className={css['input-wrapper']}>
          <label htmlFor="password">Password:</label>
          <input
            data-cy="password-input"
            type="password"
            name="password"
            value={password}
            className={css.input}
            onChange={e => setPassword(e.currentTarget.value)}/>
        </div>

        <div>
          {
            errorLabel &&
            <div
              data-cy="login-error-label"
              className="text-red-500"
            >
              {errorLabel}
            </div>
          }
        </div>

        <button
          data-cy="login-button"
          className="w-full p-4 text-white bg-blue-600 border rounded-md hover:bg-blue-500"
          disabled={loading}
          onClick={handleSignIn}>
            Signin
        </button>
      </div>
    </div>
  )
}

export default Signin
