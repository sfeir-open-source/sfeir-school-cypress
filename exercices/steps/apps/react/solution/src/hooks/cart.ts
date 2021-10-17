import { useCallback, useEffect, useState } from 'react'
import { BookDTO } from '../api/book'
import { CartDTO, getCart, addToCart as add, removeFromCart as remove } from '../api/cart'

export interface Cart {
    cart: CartDTO | undefined,
    addToCart: (book: BookDTO) => void
    removeFromCart: (book: BookDTO) => void
}

export default function useCart (): Cart {
  const [cart, setCart] = useState<CartDTO>()

  useEffect(() => {
    getCart().then(setCart)
  }, [])

  const addToCart = useCallback((book: BookDTO) => {
    add(book).then(setCart)
  }, [])

  const removeFromCart = useCallback((book: BookDTO) => {
    remove(book).then(setCart)
  }, [])

  return {
    cart,
    addToCart,
    removeFromCart
  }
}
