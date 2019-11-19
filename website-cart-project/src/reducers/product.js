const initialState = [
   {
      id: 1,
      name: "Iphone 11",
      image:
         "https://vinhphatmobile.com/wp-content/uploads/2019/09/iPhone-11.jpg",
      description: "The product was manufactured in 2010",
      price: 1000,
      inventory: 10,
      rating: 4
   },
   {
      id: 2,
      name: "Samsung A20",
      image:
         "https://cdn.tgdd.vn/Products/Images/42/198792/samsung-galaxy-a20-red-400x460.png",
      description: "The product was manufactured in 2011",
      price: 1000,
      inventory: 5,
      rating: 2
   },
   {
      id: 3,
      name: "Samsung A10",
      image:
         "https://images.samsung.com/is/image/samsung/vn-galaxy-a10-a105-sm-a105gzkgxxv-frontblack-156410481?$PD_GALLERY_L_JPG$",
      description: "The product was manufactured in 2012",
      price: 1000,
      inventory: 15,
      rating: 3
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
