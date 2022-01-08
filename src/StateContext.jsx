import React, { useContext,useReducer } from "react";

const fakeData = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
  },
];

const StateContext = React.createContext(null);

export function useStateContext() {
  return useContext(StateContext)
}

const defaultCartState = {
    items:[]
};

const cartReducer = (state,action) => {
    if(action.type === 'ADD') {
        const updatedState = {items:[...state.items,action.payload]}
        return updatedState
    }
    
    if(action.type ==='CLEAR'){
        return defaultCartState
    }
    return defaultCartState
}

export function StateContextProvider({ children }) {
  const [cartState, dispatchCartAction] = useReducer(cartReducer,defaultCartState);
  
  const addProductToCartHandler = (product) => {
    dispatchCartAction({type:"ADD",payload:product})
  };
  const resetCartHandler = () => {
    dispatchCartAction({type:"CLEAR"})
  }
  const state = {
      // 가짜 데이터 대신 빈 배열로 설정하세요.
      carts: cartState.items,
      resetCart: resetCartHandler,
      addProduct: addProductToCartHandler
  };
  
  return (
    <StateContext.Provider value={state}>{children}</StateContext.Provider>
  );
}