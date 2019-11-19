import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Cart from "../components/Cart";
import CartItem from "../components/CartItem";
import * as Message from "../constants/Message";
import CartResult from "../components/CartResult";
class CartContainer extends React.Component {
   showCarts(cart) {
      let result = Message.MSG_CART_EMPTY;
      if (cart.length > 0) {
         result = cart.map((item, index) => {
            return <CartItem item={item} key={index}></CartItem>;
         });
      }
      return result;
   }
   showTotalAmount(cart) {
      let result = null;
      if (cart.length > 0) {
         result = <CartResult cart={cart} />;
      }
      return result;
   }
   render() {
      var { cart } = this.props;
      return (
         <Cart>
            {this.showCarts(cart)}
            {this.showTotalAmount(cart)}
         </Cart>
      );
   }
}

CartContainer.propTypes = {
   cart: PropTypes.arrayOf(
      PropTypes.shape({
         product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
         }),
         quantity: PropTypes.number.isRequired
      })
   ).isRequired
};

const mapStateToProps = state => {
   return {
      cart: state.cart
   };
};

const mapDispatchToProps = dispatch => {
   return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
