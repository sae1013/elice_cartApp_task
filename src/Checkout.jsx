import React, { useEffect } from "react";
import { useStateContext } from "./StateContext";
import { useRequest } from "./hooks";
import { placeOrder } from "./api";
import { PageLayout } from "./components/PageLayout";
import { Navigation } from "./components/Navigation";
import { Carts } from "./components/Carts";
import { Message } from "./components/Message";
import { Header } from "./components/Header";
import { CheckoutForm } from "./components/CheckoutForm";

export default function Checkout() {
    
  const {carts,resetCart} = useStateContext();
  
  const { request, success, error, loading } = useRequest((payload) => // 뒤에 ()=>{} 를 실행한다.
    placeOrder({ ...payload, products: carts }) // 
  );
  
  const submitHandler = ({email,address}) => {
    request({email,address});
  }
  
  useEffect(() => {
    if (!success) return;
    resetCart(); // 성공시 카트를 비움.
  }, [success, resetCart]);

  return (
    <PageLayout>
      <Navigation />
      <Header>
        <h4>주문할 물품</h4>
      </Header>
      {!carts.length &&  <p>주문할 상품이 없습니다.</p>}
      <Carts carts={carts} />
      {carts.length > 0 && 
      <CheckoutForm onSubmit={submitHandler} loading={loading} success={success} error={error}/>
      }
    </PageLayout>
  );
}
// 카트에 물건이없으면 폼을 보여주지마라.
// onSubmit, loading, success, error