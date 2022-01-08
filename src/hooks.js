import { useCallback, useReducer } from "react";

const initialState = {
  success: false,
  error: "",
  loading: false,
  data: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "request": {
      return {
        ...state,
        error: "",
        success: false,
        loading: true,
      };
    }

    case "success": {
      return {
        ...state,
        data: action.payload.result,
        success: true,
      };
    }

    case "error": {
      return {
        ...state,
        error: action.payload.error,
        success: false,
      };
    }

    case "done": {
      return {
        ...state,
        loading: false,
      };
    }

    default:
      return state;
  }
};
  
    // () => placeOrder({ ...payload, products: carts }) === apiRequest
export function useRequest(apiRequest) { 
  const [state, dispatch] = useReducer(reducer, initialState);

  const request = useCallback((payload) => { 
    dispatch({ type: "request" });

    return apiRequest(payload) 
      .then((result) => dispatch({ type: "success", payload: { result } }))
      .catch((e) => dispatch({ type: "error", payload: { error: e.message } }))
      .finally(() => dispatch({ type: "done" }));
  }, [apiRequest]);

  return { ...state, request };
}
