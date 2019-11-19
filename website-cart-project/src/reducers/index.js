import { combineReducers } from "redux";
import product from "./product";
import cart from "./cart";

const appReducers = combineReducers({
   product: product,
   cart: cart
});

export default appReducers;
