import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GenresContext } from '../../contexts/genre-provider'
import './menu.module.scss'

/* eslint-disable-next-line */
export interface MenuProps {}

export function Menu (props: MenuProps) {
  const genres = useContext(GenresContext)

  return (
    <div data-cy="menu">
      <h3 className="px-4 py-8 text-lg bold">Our books by genre:</h3>
      <div className="flex flex-col px-8 gap-4">
      {
        genres?.map(genre => (
          <Link
            data-cy={`menu-genre-${genre.query}`}
            key={genre.query}
            to={`/genre/${genre.query}`}>
              {genre.label}
          </Link>
        ))
      }
      </div>
    </div>
  )
}

export default Menu
