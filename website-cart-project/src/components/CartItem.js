import React from "react";
import * as Message from "../constants/Message";

class CartItem extends React.Component {
   onIncreaseProduct = product => {
      this.props.onIncreaseCart(product);
   };
   onDecreaseProduct = (product) => {
      console.log("Decrease");
      this.props.onDecreaseCart(product);
   };
   onRemoveCart = cart => {
      this.props.onDeleteCart(cart);
      this.props.onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
   };
   render() {
      let { item } = this.props;
      return (
         <tr>
            <th scope="row">
               <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="img-fluid z-depth-0"
               />
            </th>
            <td>
               <h5>
                  <strong>{item.product.name}</strong>
               </h5>
            </td>
            <td>{item.product.price}$</td>
            <td className="center-on-small-only">
               <span className="qty">{item.quantity} </span>
               <div className="btn-group radio-group" data-toggle="buttons">
                  <label
                     className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                     onClick={() => this.onDecreaseProduct(item)}
                  >
                     <a href=".">—</a>
                  </label>
                  <label
                     className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                     onClick={() => this.onIncreaseProduct(item)}
                  >
                     <a href=".">+</a>
                  </label>
               </div>
            </td>
            <td>{item.product.price * item.quantity}$</td>
            <td>
               <button
                  type="button"
                  className="btn btn-sm btn-primary waves-effect waves-light"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="Remove item"
                  onClick={() => {
                     this.onRemoveCart(item);
                  }}
               >
                  X
               </button>
            </td>
         </tr>
      );
   }
}

export default CartItem;
