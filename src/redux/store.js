import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducer from './reducer'

const middleware = [thunk];

const cartFromStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const totalCartQtyFromStorage = localStorage.getItem("totalCartQty")
  ? JSON.parse(localStorage.getItem("totalCartQty"))
  : null

const totalCartAmountFromStorage = localStorage.getItem("totalCartAmount")
  ? JSON.parse(localStorage.getItem("totalCartAmount"))
  : null

const currencyFromStorage = localStorage.getItem("currency")
  ? JSON.parse(localStorage.getItem("currency"))
  : { symbol: "$", label: "USD" }

const initialState = {
  cart: cartFromStorage,
  totalCartAmount: totalCartAmountFromStorage,
  totalCartQty: totalCartQtyFromStorage,
  currency: currencyFromStorage
};

const store = createStore(reducer, initialState, composeWithDevTools
  (applyMiddleware(...middleware)));

export default store