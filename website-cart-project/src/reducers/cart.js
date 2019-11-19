import * as types from "../constants/ActionType";
const data = JSON.parse(localStorage.getItem("CART"));
const initialState = data
   ? data
   : [
        {
           product: {
              id: 1,
              name: "Iphone 11",
              image:
                 "https://vinhphatmobile.com/wp-content/uploads/2019/09/iPhone-11.jpg",
              description: "The product was manufactured in 2010",
              price: 1000,
              inventory: 10,
              rating: 4
           },
           quantity: 5
        },
        {
           product: {
              id: 2,
              name: "Samsung A20",
              image:
                 "https://cdn.tgdd.vn/Products/Images/42/198792/samsung-galaxy-a20-red-400x460.png",
              description: "The product was manufactured in 2011",
              price: 1000,
              inventory: 5,
              rating: 3
           },
           quantity: 3
        }
     ];

const cart = (state = initialState, action) => {
   switch (action.type) {
      case types.ADD_TO_CART:
         return [...state];
      default:
         return state;
   }
};

export default cart;
