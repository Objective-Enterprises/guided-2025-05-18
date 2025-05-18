//EXPLAIN THE WHOLE CODE
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  userLoginReducer,
  userLogoutReducer,
} from "./reducers/userReducers";

//WRITE YOUR CODE HERE

const reducer = combineReducers({
  login: userLoginReducer,
  logout: userLogoutReducer
  //WRITE YOUR CODE HERE
});


const userInfoFromLocalStorage = sessionStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

//WRITE YOUR CODE HERE

const initialState = {
  login: { userInfo: userInfoFromLocalStorage }
  //WRITE YOUR CODE HERE
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store