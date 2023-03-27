import Header from '../../components/header/header';
import './order.module.scss';

/* eslint-disable-next-line */
export interface OrderProps {}

export function Order(props: OrderProps) {
  return (
    <div>
      <Header />
      <div className="container p-8">Thanks for you order !</div>
    </div>
  );
}

export default Order;
