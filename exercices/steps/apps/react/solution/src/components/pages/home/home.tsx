import css from './home.module.scss'
import Genre from '../../genre/genre'
import CartPanel from '../../cart/panel/panel'
import Header from '../../header/header'
import Top from '../../books/top/top'

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home (props: HomeProps) {
  return (
    <>
    <Header />
    <div className="relative flex ">
      <div className={`md:border-r-2 ${css.panel}`}></div>
      <div className="w-full md:p-4 md:mx-4 md:w-7/12">
        <Top data-cy="top-10"/>
        <Genre />
      </div>

      <CartPanel className={`md:border-l-2 ${css.panel}`} books={[]} total={0}/>
    </div>
    </>
  )
}

export default Home
