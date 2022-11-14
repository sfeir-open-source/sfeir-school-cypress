import { Route, Routes } from 'react-router-dom';
import Home from './home/home';
import './pages.module.scss';
import Signin from './signin/signin';
import Cart from './cart/cart';
import Order from './order/order';
import Genre from './genre/genre';

/* eslint-disable-next-line */
export interface PagesProps {}

export function Pages(props: PagesProps) {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
      </Route>
      <Route path="/signin" element={<Signin />}>
      </Route>
      <Route path="/cart" element={ <Cart />}>
      </Route>
      <Route path="/order" element={<Order />}>
      </Route>
    </Routes>
  );
}

export default Pages;
