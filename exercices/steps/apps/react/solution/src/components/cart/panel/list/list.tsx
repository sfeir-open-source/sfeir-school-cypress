import { BookDTO } from '../../../../api/book'
import Item from '../item/item'

import './list.module.scss'

/* eslint-disable-next-line */
export interface ListProps {
  items: BookDTO[],
  className?: string
}

export function List ({ items, className }: ListProps) {
  return (
    <div className={className}>
      {
        items.map(item => <Item {...item} />)
      }
    </div>
  )
}

export default List
