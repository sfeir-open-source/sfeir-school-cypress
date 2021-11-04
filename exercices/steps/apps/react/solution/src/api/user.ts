import { AddressDTO } from '../components/user/address/address'

const API = process.env.NX_API_URL_USER || 'http://localhost:3333/api'

export interface UserDTO {
  id: string;
  username: string,
  address: AddressDTO,
  cardNumber?: string
}

export class CredentialsError extends Error {
  constructor (msg: string) {
    super(msg)
    Object.setPrototypeOf(this, CredentialsError.prototype)
  }
}

export type SignInErrorDTO = string
export type SigninDTO = UserDTO | SignInErrorDTO

export async function signin (username: string, password: string): Promise<SigninDTO> {
  return fetch(`${API}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  }).then(res => res.ok
    ? res.json()
    : res.json().then(({ message }) => {
      throw new CredentialsError(message)
    })
  )
}
