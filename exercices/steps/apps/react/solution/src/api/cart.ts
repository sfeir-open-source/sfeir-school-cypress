import { BookDTO } from './book';

const API = process.env.NX_API_URL_CART || 'http://localhost:3333/api';

export interface CartItemDTO {
  book: BookDTO;
  quantity: number;
}

export type CartDTO = CartItemDTO[];

export interface UserPaymentDTO {
  creditCart: string;
  address: string;
}

export function getCart(): Promise<CartDTO> {
  return fetch(`${API}/cart`).then(res => res.json());
}

export function addToCart(book: BookDTO): Promise<CartDTO> {
  return fetch(`${API}/cart`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      bookId: book.id,
      quantity: 1,
      price: 0,
    }),
  }).then(res => res.json());
}

export function removeFromCart(book: BookDTO): Promise<CartDTO> {
  return fetch(`${API}/cart/${book.id}`, {
    method: 'DELETE',
  }).then(res => res.json());
}

export function payCart(userPayment: UserPaymentDTO): Promise<void> {
  return (
    fetch(`${API}/cart`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        mode: 'cors',
      },
      body: JSON.stringify(userPayment),
    })
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .then(() => {})
  );
}
