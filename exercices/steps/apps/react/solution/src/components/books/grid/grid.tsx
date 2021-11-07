import { useContext, useMemo } from 'react'
import { GenresContext } from '../../../contexts/genre-provider'
import Item from '../item/item'
import './grid.module.scss'
import usePagination from './usePagination'
import useScrollListener from './useScrollListener'

export interface GridProps {
  genreId: string
}

const DEFAULT_TITLE = 'Lets find some books : '

export function Grid ({ genreId, ...passThroughProps }: GridProps) {
  const genres = useContext(GenresContext)
  const page = usePagination(genreId)

  useScrollListener(page?.next || null)

  const genreLabel = useMemo(() => {
    if (!genres) {
      return DEFAULT_TITLE
    }

    return genres.find(g => g.query === genreId)?.label || DEFAULT_TITLE
  }, [genreId, genres])

  return (
    <section data-cy="genre-grid" {...passThroughProps}>
      <h2 className="p-4 text-lg bold">{genreLabel}</h2>
      <div data-cy="genre-grid-content" className="flex flex-wrap p-4 overflow-x-auto gap-12">
        {
          page?.books
            ? page?.books.map(item => <Item key={item.id} book={item} />)
            : <span aria-label="Loading" />
        }
      </div>
  </section>
  )
}

export default Grid
