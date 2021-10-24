import { Route, Switch } from 'react-router-dom'
import Home from './home/home'
import './pages.module.scss'
import Signin from './signin/signin'

/* eslint-disable-next-line */
export interface PagesProps {
}

export function Pages (props: PagesProps) {
  return (
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route exact path="/signin"><Signin /></Route>
    </Switch>
  )
}

export default Pages
