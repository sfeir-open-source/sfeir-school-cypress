import { Route, Switch } from 'react-router-dom'
import Home from './home/home'
import './pages.module.scss'

/* eslint-disable-next-line */
export interface PagesProps {
}

export function Pages (props: PagesProps) {
  return (
    <Switch>
      <Route path="/"><Home /></Route>
    </Switch>
  )
}

export default Pages
