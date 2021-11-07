import { useContext, useEffect, useState } from 'react'
import { BookDTO, findBooks } from '../../api/book'
import { GenresContext } from '../../contexts/genre-provider'
import BookList from '../books/list/list'

import './genre.module.scss'

/* eslint-disable-next-line */
export interface GenreProps {}

interface GenreBook {
  id: string,
  label: string,
  books: BookDTO[]
}

type GenreBooks = GenreBook[] | null;

function useGenres (): GenreBooks {
  const genres = useContext(GenresContext)
  const [genreBooks, setGenreBooks] = useState<GenreBooks>(null)

  useEffect(() => {
    if (!genres) {
      return
    }

    Promise.all(
      genres.map(genre => findBooks(genre.query)
        .then(books => (
          {
            id: genre.query,
            label: genre.label,
            books
          })
        ))
    )
      .then(setGenreBooks)
  }, [genres])

  return genreBooks
}

export function Genre (props: GenreProps) {
  const genres = useGenres()

  return (
    <div>
      {
        genres?.map(genre => <BookList key={genre.id} data-cy={genre.id} name={genre.label} items={genre.books} />)
      }
    </div>
  )
}

export default Genre
