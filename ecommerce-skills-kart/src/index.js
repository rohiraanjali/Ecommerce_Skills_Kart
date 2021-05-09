import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {ProductProvider} from "./contexts/Product-context";
import {CartProvider} from "./contexts/Cart-context";
import { WishListProvider } from './contexts/WishList-context';
import { BrowserRouter} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
    <CartProvider>
   <WishListProvider>
  <BrowserRouter>
   <App />
   </BrowserRouter>
   </WishListProvider>
    </CartProvider>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
