import * as Types from "../constants/ActionType";
const data = JSON.parse(localStorage.getItem("CART"));
const initialState = data ? data : [];
const findProductInCart = (carts, product) => {
   if (carts.length > 0) {
      for (let i = 0; i < carts.length; i++) {
         if (carts[i].product.id === product.id) {
            return i;
         }
      }
   }
   return -1;
};

const cart = (state = initialState, action) => {
   switch (action.type) {
      case Types.ADD_TO_CART:
         let { product, quantity } = action;
         let index = findProductInCart(state, product);
         if (index !== -1) {
            state[index].quantity += quantity;
         } else {
            state.push({
               product,
               quantity
            });
         }
         localStorage.setItem("CART", JSON.stringify(state));
         return [...state];
      default:
         return state;
   }
};

export default cart;
