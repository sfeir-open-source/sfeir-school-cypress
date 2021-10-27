import { AddressDTO } from '../components/user/address/address'

const API = process.env.NX_API_URL_USER || 'http://localhost:8080'

export interface UserDTO {
  id: string;
  username: string,
  address: AddressDTO,
  cardNumber?: string
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
    : res.json().then(r => r.message)
  )
}
