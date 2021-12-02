import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './contexts/cart-provider';

import App from './app/app';
import UserProvider from './contexts/user-provider';
import GenreProvider from './contexts/genre-provider';

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CartProvider>
          <GenreProvider>
            <App />
          </GenreProvider>
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
