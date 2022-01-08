import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getAllProducts } from "./api";
import { useStateContext } from "./StateContext";
import { Carts } from "./components/Carts";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import {PageLayout} from './components/PageLayout';

// Shopping 페이지를 만드세요.
// 물건들의 목록은 getAllProducts API로부터 얻습니다.
// 물건들의 목록을 노출하고, 특정 물건을 선택했을 때
// 카트에 물건의 title, price를 추가하도록 구현하세요.

export default function Shopping() {
    
    const [products,setProducts] = useState([])
    const {carts,resetCart,addProduct} = useStateContext();
    
    useEffect(()=>{
        getAllProducts()
          .then(setProducts)
    },[])
    
    const addToCart = (product) => { // 직접 추가하기
        addProduct({...product})    
    }
    
    return (
        <PageLayout>
          <Navigation />
          <Container>
              <h4>쇼핑</h4>
          </Container>
          
            <Container>
              <h4>장바구니</h4>
              <Carts carts={carts} />
            </Container>
          
            <Container>
              <h4>상품목록</h4>
            </Container>
          <ProductList>
            {products.map((product) => (
              <li key={product.id}>
                {product.title}
                <div>$ {product.price}</div>
                <button id={product.title} onClick={addToCart.bind(null,product)}>상품 추가</button>
              </li>
            ))}
          </ProductList>
        </PageLayout>
    )
}

const ProductList = styled.ul`
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

const Container = styled.div`
  width: 90%;
  max-width: 90%;
`;