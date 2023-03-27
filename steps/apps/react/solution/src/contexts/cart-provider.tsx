import { createContext, PropsWithChildren } from 'react';
import useCart, { Cart } from '../hooks/cart';

export const CartContext = createContext<Cart>({} as Cart);

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CartProps {}

export function CartProvider({ children }: PropsWithChildren<CartProps>) {
  const cart = useCart();

  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
}

export default CartProvider;
