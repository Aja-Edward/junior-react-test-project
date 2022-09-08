import {
    CATEGORY,
    CATEGORY_LOADING,
    CURRENCY,
    ADD_TO_CART,
    INCREMENT_CART_ITEM,
    DECREMENT_CART_ITEM,
  } from "./constants";
  
  export const fetchCategory =
    (data, id = "all") =>
    (dispatch) => {
      if (!data) {
        return dispatch({
          type: CATEGORY_LOADING,
        });
      }
      let selectedData = data?.categories?.find((d) => {
        return d.name === id;
      });
  
      dispatch({
        type: CATEGORY,
        payload: selectedData?.products || data[0]?.products,
      });
    };
  
  export const setCurrency = (currency) => (dispatch) => {
    dispatch({
      type: CURRENCY,
      payload: currency,
    });
    localStorage.setItem("currency", JSON.stringify(currency));
  };
  
  export const addToCart = (product) => (dispatch, getState) => {
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
    saveItems(getState);
  };
  
  export const incrementCartItem = (product) => (dispatch, getState) => {
    dispatch({
      type: INCREMENT_CART_ITEM,
      product,
    });
    saveItems(getState);
  };
  
  export const decrementCartItem = (product) => (dispatch, getState) => {
    dispatch({
      type: DECREMENT_CART_ITEM,
      product,
    });
    saveItems(getState);
  };
  
  const saveItems = (getState) => {
    localStorage.setItem("cart", JSON.stringify(getState().cart));
    localStorage.setItem("totalCartQty", JSON.stringify(getState().totalCartQty));
    localStorage.setItem(
      "totalCartAmount",
      JSON.stringify(getState().totalCartAmount)
    );
  };
  