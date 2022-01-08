import React from "react";
import styled from "styled-components";
import { StyledLink } from "./StyledLink";

export function Navigation() {
  // Shopping 페이지를 추가하세요.
  return (
    <Nav>
      <StyledLink id='home' to="/">주문목록</StyledLink>
      <StyledLink id='shopping' to="/shopping">쇼핑하기</StyledLink>
      <StyledLink id='shopping-cart' to="/shopping-cart">장바구니</StyledLink>
      <StyledLink id='checkout' to="/checkout">주문하러가기</StyledLink>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 12px;

  > * + * {
    margin-top: 12px;
  }
  
`;
