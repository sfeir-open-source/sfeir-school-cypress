import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BookDTO } from '../../../api/book'
import { CartContext } from '../../../contexts/cart-provider'
import CartList from './list/list'
import './panel.module.scss'

export interface PanelProps {
  className?: string
  books: BookDTO[],
  total : number
}

export function Panel ({ className }: PanelProps) {
  const { cart } = useContext(CartContext)
  return (
    <div className={className} data-cy='cart-panel'>
      <Link to="/cart"><h2 className="pb-4 text-lg font-semibold">Cart</h2></Link>

      {cart?.books.length
        ? <CartList items={cart.books} />
        : <div data-cy="cart-panel-empty">Your cart is empty</div>}

    </div>
  )
}

export default Panel
