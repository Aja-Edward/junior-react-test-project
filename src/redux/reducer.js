import {
  CATEGORY,
  CATEGORY_LOADING,
  CURRENCY,
  ADD_TO_CART,
  INCREMENT_CART_ITEM,
  DECREMENT_CART_ITEM,
} from "./constants";
import { computeQtyAndAmt } from "../assets/definitions";

const initialState = {
  items: [],
  currency: {
    symbol: "$",
    label: "USD",
  },
  cart: [],
  totalCartQty: 0,
  totalCartAmount: 0,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case CATEGORY:
      return {
        ...state,
        items: action.payload,
        isLoading: false,
      };
    case CURRENCY:
      let { qty: totalCartQtyCurr, amt: totalCartAmountCurr } =
        computeQtyAndAmt(state.cart, state.currency);
      return {
        ...state,
        currency: action.payload,
        totalCartAmount: totalCartAmountCurr,
        totalCartQty: totalCartQtyCurr,
      };
    case ADD_TO_CART:
      let cart = [...state.cart];
      const itemExists = cart.find(
        (item) => item.product.id === action.payload.id
      );

      if (itemExists) {
        cart = state.cart.map((item) => {
          if (item.product.id === action.payload.id) {
            return {
              ...item,
              qty: item.qty + 1,
            };
          }
          return item;
        });
      } else {
        cart = [...state.cart, { product: action.payload, qty: 1 }];
      }

      let { qty: totalCartQty, amt: totalCartAmount } = computeQtyAndAmt(
        cart,
        state.currency
      );

      return {
        ...state,
        cart,
        totalCartAmount,
        totalCartQty,
      };
    case INCREMENT_CART_ITEM:
      let cartItemsForIncrement = state.cart.map((item) => {
        if (item.product.id === action.product.id) {
          return {
            ...item,
            qty: item.qty + 1,
          };
        }
        return item;
      });
      let { qty: totalCartQtyInc, amt: totalCartAmountInc } = computeQtyAndAmt(
        cartItemsForIncrement,
        state.currency
      );
      return {
        ...state,
        cart: cartItemsForIncrement,
        totalCartAmount: totalCartAmountInc,
        totalCartQty: totalCartQtyInc,
      };
    case DECREMENT_CART_ITEM:
      let cartItemsForDecrement = state.cart
        .map((item) => {
          if (item.product.id === action.product.id && item.qty > 0) {
            return {
              ...item,
              qty: item.qty - 1,
            };
          }
          return item;
        })
        .filter((item) => item.qty > 0);

      let { qty: totalCartQtyDec, amt: totalCartAmountDec } = computeQtyAndAmt(
        cartItemsForDecrement,
        state.currency
      );
      return {
        ...state,
        cart: cartItemsForDecrement,
        totalCartAmount: totalCartAmountDec,
        totalCartQty: totalCartQtyDec,
      };

    default:
      return state;
  }
};

export default reducers;
