import { useCallback, useEffect, useState } from 'react';
import { BookDTO } from '../api/book';
import {
  CartDTO,
  getCart,
  addToCart as add,
  removeFromCart as remove,
  payCart as pay,
  UserPaymentDTO,
} from '../api/cart';

export interface Cart {
  cart: CartDTO | undefined;
  addToCart: (book: BookDTO) => Promise<void>;
  removeFromCart: (book: BookDTO) => Promise<void>;
  payCart: (userPaymentDTO: UserPaymentDTO) => Promise<void>;
}

const DEFAULT_CART: CartDTO = [];

export default function useCart(): Cart {
  const [cart, setCart] = useState<CartDTO>(DEFAULT_CART);

  useEffect(() => {
    getCart().then(setCart);
  }, []);

  const addToCart = useCallback((book: BookDTO) => {
    return add(book).then(setCart);
  }, []);

  const removeFromCart = useCallback((book: BookDTO) => {
    return remove(book).then(setCart);
  }, []);

  const payCart = useCallback((userPaymentDTO: UserPaymentDTO) => {
    return pay(userPaymentDTO).then(() => setCart(DEFAULT_CART));
  }, []);

  return {
    cart,
    addToCart,
    removeFromCart,
    payCart,
  };
}
