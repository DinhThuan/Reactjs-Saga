import React from "react";

class CartResult extends React.Component {
   showTotalAmount(cart) {
      let amount = 0;
      // amount = cart.reduce((total, item, index, animals) => {
      //    return (total += item.product.price * item.quantity);
      // }, 0);
      for (let i = 0; i < cart.length; i++) {
         amount += cart[i].product.price * cart[i].quantity;
      }
      return amount;
   }
   render() {
      let { cart } = this.props;
      // console.log(cart);
      return (
         <tr>
            <td colSpan="3"></td>
            <td>
               <h4>
                  <strong>Total money</strong>
               </h4>
            </td>
            <td>
               <h4>
                  <strong>{this.showTotalAmount(cart)}$</strong>
               </h4>
            </td>
            <td colSpan="3">
               <button
                  type="button"
                  className="btn btn-primary waves-effect waves-light"
               >
                  Complete purchase
                  <i className="fa fa-angle-right right"></i>
               </button>
            </td>
         </tr>
      );
   }
}

export default CartResult;
