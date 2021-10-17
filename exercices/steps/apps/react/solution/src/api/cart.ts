import { BookDTO } from './book'

const API = process.env.NX_API_URL_CART || 'http://localhost:8080'

export interface CartDTO {
    books: BookDTO[],
    total: number
}

export function getCart (): Promise<CartDTO> {
  return fetch(`${API}/cart`).then(res => res.json())
}

export function addToCart (book: BookDTO): Promise<CartDTO> {
  return fetch(`${API}/cart/${book.id}`, {
    method: 'PUT'
  }).then(res => res.json())
}

export function removeFromCart (book: BookDTO): Promise<CartDTO> {
  return fetch(`${API}/cart/${book.id}`, {
    method: 'DELETE'
  }).then(res => res.json())
}
