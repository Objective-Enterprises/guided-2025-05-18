//EXPLAIN THE WHOLE CODE
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  userLoginReducer,
  userLogoutReducer,
} from "./reducers/userReducers";

import {
  listProductsReducer,
  fetchProductDetailsReducer
} from './reducers/productReducers'

const reducer = combineReducers({
  login: userLoginReducer,
  logout: userLogoutReducer,
  product: fetchProductDetailsReducer,
  products: listProductsReducer
});


const userInfoFromLocalStorage = sessionStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const localProducts = localStorage.getItem('products')
const products = JSON.parse(localProducts)

const initialState = {
  login: { userInfo: userInfoFromLocalStorage },
  products: {
    loading: false,
    products
  },
  product: {
    loading: false
  }
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store