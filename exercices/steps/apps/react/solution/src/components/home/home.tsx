import './home.module.scss'
import QueryBookList from '../books/query/query'
import Genre from '../genre/genre'

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home (props: HomeProps) {
  return (
    <div className="lg:container lg:mx-auto">
      <QueryBookList data-cy="top-10" name="Top 10" query="top"/>

      <Genre />
    </div>
  )
}

export default Home
