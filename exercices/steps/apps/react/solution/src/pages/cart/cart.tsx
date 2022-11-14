import './cart.module.scss';
import { useCallback, useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts/cart-provider';
import CartList from '../../components/cart/panel/list/list';
import Header from '../../components/header/header';
import { UserPaymentDTO } from '../../api/cart';
import Address, { AddressDTO, DEFAULT_ADDRESS } from '../../components/user/address/address';
import { UserContext } from '../../contexts/user-provider';
import CreditCard from '../../components/user/credit-card/credit-card';
import { useNavigate } from 'react-router';

/* eslint-disable-next-line */
export interface CartProps {}

interface UserForm {
  username: string;
  address: AddressDTO;
}

const DEFAULT_USER: UserForm = {
  username: '',
  address: DEFAULT_ADDRESS,
};

export function Cart(props: CartProps) {
  const { cart, payCart } = useContext(CartContext);
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  const [creditCard, setCreditCard] = useState<string>('');
  const [userForm, setUserForm] = useState<UserForm>(DEFAULT_USER);

  const onChangeAddress = (address: AddressDTO) => {
    setUserForm({
      ...userForm,
      address,
    });
  };

  useEffect(() => {
    const form = user
      ? {
          username: user.username,
          address: user.address,
        }
      : DEFAULT_USER;
    setUserForm(form);
  }, [user]);

  const doPayCart = useCallback(() => {
    payCart({} as UserPaymentDTO).then(() => navigate('/order'));
  }, [payCart, navigate]);

  const canOrder = !!cart?.length && creditCard.length > 0 && userForm.address.address.length > 0;

  return (
    <div>
      <Header />

      <div className="container p-8">
        {cart?.length ? (
          <>
            <CartList items={cart} />
            <div className="flex flex-row justify-between gap-16">
              <Address address={userForm.address} onChange={onChangeAddress} />
              <CreditCard creditCard={creditCard} onChange={setCreditCard} />
            </div>
            <button
              disabled={!canOrder}
              className="p-4 text-white bg-blue-600 border rounded-md hover:bg-blue-500"
              data-cy="pay-button"
              onClick={doPayCart}
            >
              Proceed to checkout
            </button>
          </>
        ) : (
          <div data-cy="cart-panel-empty">Your cart is empty</div>
        )}
      </div>
    </div>
  );
}

export default Cart;
