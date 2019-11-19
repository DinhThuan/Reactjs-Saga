const initialState = [
   {
      id: 1,
      name: "Iphone 11",
      imgae: "",
      description: "",
      price: 1000,
      iventory: 10
   },
   {
      id: 2,
      name: "Samsung A20",
      imgae: "",
      description: "",
      price: 1000,
      iventory: 5
   },
   {
      id: 3,
      name: "Samsung A10",
      imgae: "",
      description: "",
      price: 1000,
      iventory: 15
   }
];

const product = (state = initialState, action) => {
   switch (action.type) {
      case "value":
         return state;
      default:
         return state;
   }
};

export default product;
