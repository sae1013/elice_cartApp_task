import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getAllOrders } from "./api";
import { PageLayout } from "./components/PageLayout";
import { Navigation } from "./components/Navigation";
import { Message } from "./components/Message";
import { Carts } from "./components/Carts";
import { Header } from "./components/Header";

export default function OrderList() {
  const [orders, setOrders] = useState(undefined);

  useEffect(() => {
    getAllOrders().then((res) => setOrders(res));
  }, []);

  return (
    <PageLayout>
      <Navigation />
      <Container>
        <Header>
          <h4>주문 내역</h4>
        </Header>
      </Container>

      {!orders ||
        (orders.length === 0 && <Message>주문내역이 없습니다.</Message>)}
      {orders && (
        <StyledOrderList>
          {orders.map(({ email, address, date, products }) => (
            <OrderItem>
              <div>이메일 - {email}</div>
              <div>주소 - {address}</div>
              <div>주문 시간 - {date}</div>
              <div>주문한 물품</div>
              <Carts carts={products} />
            </OrderItem>
          ))}
        </StyledOrderList>
      )}
    </PageLayout>
  );
}

const Container = styled.div`
  width: 90%;
  max-width: 90%;
`;

const OrderItem = styled.li`
  list-style: none;

  & + & {
    padding-top: 4px;
    margin-top: 4px;
    border-top: 3px solid #f1f3f5;
  }

  > * + * {
    margin-top: 8px;
  }
`;

const StyledOrderList = styled.ul`
  padding: 0 12px;
`;
