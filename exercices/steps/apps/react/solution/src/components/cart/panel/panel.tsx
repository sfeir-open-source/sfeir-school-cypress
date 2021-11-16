import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BookDTO } from '../../../api/book'
import { CartContext } from '../../../contexts/cart-provider'
import Header from '../../lib/header/header'
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
      <Link to="/cart">
        <Header label="Cart" />
      </Link>

      {cart?.length
        ? <CartList items={cart} />
        : <div data-cy="cart-panel-empty">Your cart is empty</div>}

    </div>
  )
}

export default Panel
