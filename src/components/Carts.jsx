import React from "react";
import styled from "styled-components";

export function Carts({ carts }) {
  return (
    <CartList>
      {carts.map((cart) => (
        <li key={cart.id}>
          {cart.title}
          <div>$ {cart.price}</div>
        </li>
      ))}
    </CartList>
  );
}

const CartList = styled.ul`
  width: 90%;
  padding: 0;
  margin: 0;

  li {
    list-style: none;
  }

  > li + li {
    padding-top: 4px;
    margin-top: 4px;
    border-top: 3px solid #f1f3f5;
  }
`;
