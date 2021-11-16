import './button.module.scss'
import { ShoppingCartIcon } from '@heroicons/react/solid'
import { CartContext } from '../../../contexts/cart-provider'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
/* eslint-disable-next-line */
export interface ButtonProps {}

export function Button (props: ButtonProps) {
  const { cart } = useContext(CartContext)
  return (
    <Link data-cy='cart-button' to="/cart" className="text-center">
      <div className="flex items-center">
        <div className="relative">
          <ShoppingCartIcon className="w-8 h-8 mr-2 text-white"/>
          {cart?.length
            ? (
            <div
              data-cy="cart-button-counter"
              className="absolute w-4 h-4 text-xs text-white bg-blue-500 rounded-full bottom-5 right-1">
              {cart.length}
              </div>
              )
            : ''}
        </div>
      <span>Cart</span>
      </div>
    </Link>
  )
}

export default Button
