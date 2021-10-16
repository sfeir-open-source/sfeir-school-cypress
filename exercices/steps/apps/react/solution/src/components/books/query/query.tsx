import { useState, useEffect } from 'react'
import { BookDTO, findBooks } from '../../../api/book'
import BookList from '../list/list'

/* eslint-disable-next-line */
export interface QueryProps {
  name: string
  query: string
}

function useQuery (query: string) {
  const [books, setBooks] = useState<BookDTO[]|null>(null)

  useEffect(() => {
    findBooks(query)
      .then(setBooks)
  }, [query])

  return books
}

export function Query ({ name, query, ...props }: QueryProps) {
  const items = useQuery(query)

  return <BookList name={name} items={items} {...props} />
}

export default Query
