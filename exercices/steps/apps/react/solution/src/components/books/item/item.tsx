import { useContext } from 'react'
import { BookDTO } from '../../../api/book'
import { CartContext } from '../../../contexts/cart-provider'
import './item.module.scss'

/* eslint-disable-next-line */
export interface ItemProps {
  className?:string
  book: BookDTO
}

export function Item ({ book, className }: ItemProps) {
  const { title, author, imageUrl } = book
  const { addToCart } = useContext(CartContext)

  return (
    <div className={`${className || ''} flex flex-col flex-shrink-0 w-32`} data-cy={`book-item-${book.id}`}>
      <img alt={title} src={imageUrl} className="w-32 h-48" />
      <div className="py-4 content">
        <div className="h-6 text-sm truncate">{title}</div>
        <div className="h-8 text-xs italic truncate">{author}</div>
        <button
          onClick={() => addToCart(book)}
          className="w-full p-1 text-sm text-white rounded-sm bg-primary-500"
          data-cy="add-to-cart-btn">
            Add to cart
        </button>
      </div>
    </div>
  )
}

export default Item
