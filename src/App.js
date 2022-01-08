import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import OrderList from "./OrderList";
import Checkout from "./Checkout";
import ShoppingCart from "./ShoppingCart";
import Shopping from "./Shopping";

import { StateContextProvider } from "./StateContext";

export default function App() {
  return (
    <StateContextProvider>
      <Routes />
    </StateContextProvider>
  );
}

function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <OrderList />
      </Route>

      <Route exact path="/checkout">
        <Checkout />
      </Route>

      <Route exact path="/shopping-cart">
        <ShoppingCart />
      </Route>

      <Route exact path="/shopping">
        <Shopping />
      </Route>
    </BrowserRouter>
  );
}
