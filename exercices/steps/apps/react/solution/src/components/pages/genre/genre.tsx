import Grid from '../../books/grid/grid'
import Panel from '../../cart/panel/panel'
import Header from '../../header/header'
import Menu from '../../menu/menu'
import css from './genre.module.scss'

export interface GenreProps {
  genreId: string
}

export function Genre ({ genreId }: GenreProps) {
  return (
    <>
    <Header />

    <div className="relative flex ">
      <div className={`md:border-r-2 ${css.panel}`}><Menu/></div>
      <div className="w-full md:p-4 md:mx-4 md:w-7/12">
        <Grid genreId={genreId} />
      </div>

      <Panel className={`md:border-l-2 ${css.panel}`} books={[]} total={0}/>
    </div>
    </>
  )
}

export default Genre
