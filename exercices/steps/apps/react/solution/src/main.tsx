import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './contexts/cart-provider';

import App from './app/app';
import UserProvider from './contexts/user-provider';
import GenreProvider from './contexts/genre-provider';
import { Auth0Provider } from "@auth0/auth0-react";

// Create a root.
const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-y3-86mxa.us.auth0.com"
        clientId="rqHzhrH1RrSDSi6X9Pdna2X3e8YgDC9a"
        redirectUri={window.location.origin}
      >
      <UserProvider>
        <CartProvider>
          <GenreProvider>
            <App />
          </GenreProvider>
        </CartProvider>
      </UserProvider>
      </Auth0Provider>
    </BrowserRouter>
  </StrictMode>
);
