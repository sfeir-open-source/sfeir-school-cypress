import css from './home.module.scss'
import QueryBookList from '../../books/query/query'
import Genre from '../../genre/genre'
import CartPanel from '../../cart/panel/panel'

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home (props: HomeProps) {
  return (
    <div className="relative flex">
      <div className={`border-r-2 ${css.panel}`}></div>
      <div className="w-7/12 p-4 mx-4">
        <QueryBookList data-cy="top-10" name="Top 10" query="top"/>
        <Genre />
      </div>

      <CartPanel className={`border-l-2 ${css.panel}`} books={[]} total={0}/>
    </div>
  )
}

export default Home
