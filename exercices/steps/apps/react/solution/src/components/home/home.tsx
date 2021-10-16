import './home.module.scss'
import QueryBookList from '../books/query/query'

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home (props: HomeProps) {
  return <QueryBookList data-cy="top-10" name="Top 10" query="top"/>
}

export default Home
