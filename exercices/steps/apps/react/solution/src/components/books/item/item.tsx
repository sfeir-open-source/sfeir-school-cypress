import { BookDTO } from '../../../api/book'
import './item.module.scss'

/* eslint-disable-next-line */
export interface ItemProps {
  book: BookDTO
}

export function Item ({ book }: ItemProps) {
  const { title, author, imageUrl } = book
  return (
    <div className="flex flex-col flex-shrink-0 w-48" data-cy={`book-item-${book.id}`}>
      <img alt={title} src={imageUrl} className="w-48 h-64" />
      <div className="py-4 content">
        <div className="h-8 truncate">{title}</div>
        <div className="h-8 italic truncate">{author}</div>
      </div>
    </div>
  )
}

export default Item
