import React from "react";
import { useStateContext } from "./StateContext";
import { PageLayout } from "./components/PageLayout";
import { Navigation } from "./components/Navigation";
import { Carts } from "./components/Carts";
import { Message } from "./components/Message";
import { Header } from "./components/Header";

export default function ShoppingCart() {
  
  const {carts} = useStateContext();
  return (
    <PageLayout>
      <Navigation />
      <Header>
        <h4>장바구니</h4>
      </Header>
      {!carts.length && <p>담은 상품이 없습니다.</p>}
      <Carts carts={carts} />
    </PageLayout>
  );
}

