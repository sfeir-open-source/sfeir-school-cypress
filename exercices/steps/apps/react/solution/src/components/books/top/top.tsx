import { useState, useEffect } from 'react'
import { BookDTO, findTop10Books } from '../../../api/book'
import BookList from '../list/list'

import './top.module.scss'

/* eslint-disable-next-line */
export interface TopProps {}

export function Top (props: TopProps) {
  const [books, setBooks] = useState<BookDTO[]|null>(null)

  useEffect(() => {
    findTop10Books()
      .then(setBooks)
  }, [])

  return <BookList name="Top 10" items={books} {...props} />
}

export default Top
