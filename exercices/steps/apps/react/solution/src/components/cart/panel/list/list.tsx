import { CartItemDTO } from '../../../../api/cart'
import Item from '../item/item'

import './list.module.scss'

export interface ListProps {
  items: CartItemDTO[],
  className?: string
}

export function List ({ items, className = '' }: ListProps) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {
        items.map(item => <Item key={item.book.id} {...item.book} />)
      }
    </div>
  )
}

export default List
