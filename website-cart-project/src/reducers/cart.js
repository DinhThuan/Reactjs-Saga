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
   let index = -1;
   switch (action.type) {
      case Types.ADD_TO_CART:
         let { product, quantity } = action;
         index = findProductInCart(state, product);
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
      case Types.DELETE_CART:
         index = findProductInCart(state, action.cart.product);
         state.splice(index, 1);
         localStorage.setItem("CART", JSON.stringify(state));
         return [...state];
      case Types.INCREASE_CART:
         index = findProductInCart(state, action.product.product);
         state[index].quantity++;
         localStorage.setItem("CART", JSON.stringify(state));
         return [...state];
      case Types.DECREASE_CART:
         index = findProductInCart(state, action.product.product);
         if (state[index].quantity > 0) {
            state[index].quantity--;
         }
         if (state[index].quantity === 0) {
            state.splice(index, 1);
         }
         localStorage.setItem("CART", JSON.stringify(state));
         return [...state];
      default:
         return state;
   }
};

export default cart;
