import { Route, Switch } from 'react-router-dom'
import Home from './home/home'
import './pages.module.scss'
import Signin from './signin/signin'
import Cart from './cart/cart'
import Order from './order/order'
import Genre from './genre/genre'

/* eslint-disable-next-line */
export interface PagesProps {
}

export function Pages (props: PagesProps) {
  return (
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route exact path="/signin"><Signin /></Route>
      <Route exact path="/genre/:genre" render={({ match }) => <Genre genreId={match.params.genre} />}></Route>
      <Route exact path="/cart"><Cart /></Route>
      <Route exact path="/order"><Order /></Route>
    </Switch>
  )
}

export default Pages
