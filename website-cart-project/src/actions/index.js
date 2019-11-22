import * as Types from "../constants/ActionType";

export const actAddToCart = (product, quantity) => {
   return {
      type: Types.ADD_TO_CART,
      product: product,
      quantity: quantity
   };
};

export const actChangeMessage = message => {
   return {
      type: Types.CHANGE_MESSAGE,
      message
   };
};

export const actRemoveCart = cart => {
   return {
      type: Types.DELETE_CART,
      cart: cart
   };
};

export const actIncreaseCart = product => {
   return {
      type: Types.INCREASE_CART,
      product: product
   };
};
export const actDecreaseCart = product => {
   return {
      type: Types.DECREASE_CART,
      product: product
   };
};
