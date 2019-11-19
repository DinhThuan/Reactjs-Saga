import React from "react";
import { connect } from "react-redux";
import Products from "../components/Products";
import Product from "../components/Product";
import PropTypes from "prop-types";
class ProductsContainer extends React.Component {
   render() {
      let { products } = this.props;
      return <Products>{this.showProducts(products)}</Products>;
   }

   showProducts(products) {
      let result = null;
      if (products.length > 0) {
         result = products.map((product, index) => {
            return <Product product={product} key={index} />;
         });
      }
      return result;
   }
}

ProductsContainer.propTypes = {
   products: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.number.isRequired,
         name: PropTypes.string.isRequired,
         image: PropTypes.string.isRequired,
         description: PropTypes.string.isRequired,
         price: PropTypes.number.isRequired,
         inventory: PropTypes.number.isRequired,
         rating: PropTypes.number.isRequired
      })
   ).isRequired
};

const mapStateToProps = state => {
   return {
      products: state.product
   };
};

const mapDispatchToProps = dispatch => {
   return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
