import { PropsWithChildren } from 'react'
import Header from '../../components/header/header'
import Menu from '../../components/genre/menu/menu'
import CartPanel from '../../components/cart/panel/panel'

import css from './three-columns.module.scss'

/* eslint-disable-next-line */
export interface ThreeColumnsProps {}

export function ThreeColumns ({ children }: PropsWithChildren<ThreeColumnsProps>) {
  return (
    <>
    <Header />
    <div className="relative flex ">
      <div className={`md:border-r-2 ${css.panel}`}><Menu/></div>
      <div className="w-full md:p-4 md:mx-4 md:w-7/12">
        {children}
      </div>

      <CartPanel className={`md:border-l-2 ${css.panel}`} books={[]} total={0}/>
    </div>
    </>
  )
}

export default ThreeColumns
